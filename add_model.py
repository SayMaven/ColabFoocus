#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Foocus SayMaven — Automated Model Inserter & Sync Tool (add_model.py)
--------------------------------------------------------------------
Menambahkan model baru dari Civitai secara otomatis:
1. Mengambil info versi, trigger words, dan preview via Civitai API.
2. Mendukung pemilihan varian versi jika link memiliki banyak versi (seperti WAI-Illustrious-SDXL).
3. Memasukkan perintah unduhan ke Foocus SayMaven.ipynb dan Foocus SayMaven Google Drive Mount.ipynb.
4. Mengurutkan baris sel secara alfabetis (A-Z).
5. Memperbarui models_database.json, MODELS_CATALOG.md, dan catalog/data.js secara otomatis.
6. Memvalidasi sinkronisasi 1-to-1 antar kedua notebook.
"""

import sys
import os
import json
import re
import urllib.request
import urllib.parse
from datetime import datetime

# Pastikan output terminal mendukung UTF-8 (mencegah error emoji di Windows)
if sys.stdout.encoding and sys.stdout.encoding.lower() != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except AttributeError:
        pass

# Paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
NB_LOCAL = os.path.join(BASE_DIR, "Foocus SayMaven.ipynb")
NB_DRIVE = os.path.join(BASE_DIR, "Foocus SayMaven Google Drive Mount.ipynb")
DB_FILE = os.path.join(BASE_DIR, "models_database.json")
MD_CATALOG = os.path.join(BASE_DIR, "MODELS_CATALOG.md")
WEB_DATA = os.path.join(BASE_DIR, "catalog", "data.js")

HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

def fetch_json(url):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode('utf-8'))
    except Exception as e:
        # If civitai.com fails, try civitai.red or vice versa
        alt_url = url.replace("civitai.com", "civitai.red") if "civitai.com" in url else url.replace("civitai.red", "civitai.com")
        if alt_url != url:
            try:
                alt_req = urllib.request.Request(alt_url, headers=HEADERS)
                with urllib.request.urlopen(alt_req, timeout=15) as resp:
                    return json.loads(resp.read().decode('utf-8'))
            except:
                pass
        raise e

def parse_civitai_url(url_str):
    """Ekstrak model_id dan model_version_id (jika ada) dari URL."""
    url_str = url_str.strip()
    # Check for ?modelVersionId=12345
    parsed = urllib.parse.urlparse(url_str)
    qs = urllib.parse.parse_qs(parsed.query)
    version_id = qs.get("modelVersionId", [None])[0]

    # If URL is download endpoint /api/download/models/<version_id>
    if '/download/models/' in parsed.path:
        m2 = re.search(r'/download/models/(\d+)', parsed.path)
        if m2:
            return None, m2.group(1)

    # Extract model ID from path: /models/123456/...
    m = re.search(r'/models/(\d+)', parsed.path)
    model_id = m.group(1) if m else None

    return model_id, version_id

def sanitize_filename(name):
    # Remove non-ascii or unsafe characters
    s = re.sub(r'[\\/*?:"<>|!\s]+', '', name)
    return s

def select_version_interactive(versions, preselected_version_id=None):
    if len(versions) == 1:
        return versions[0]

    # Temukan index versi default jika URL memuat ?modelVersionId=...
    default_idx = 0
    if preselected_version_id:
        for idx, v in enumerate(versions):
            if str(v.get('id')) == str(preselected_version_id):
                default_idx = idx
                break

    print(f"\n📦 Model ini memiliki {len(versions)} varian versi:")
    for idx, v in enumerate(versions):
        v_name = v.get('name', 'Unnamed')
        v_base = v.get('baseModel', 'Unknown')
        v_date = (v.get('createdAt') or '')[:10]
        files = [f.get('name') for f in v.get('files', []) if f.get('name', '').endswith(('.safetensors', '.pt'))]
        f_info = f"({files[0]})" if files else ""
        from_link = " ⭐ (Dari Link URL)" if idx == default_idx and preselected_version_id else ""
        print(f"  [{idx+1:2d}] {v_name:<22} | Base: {v_base:<14} | Tgl: {v_date} {f_info}{from_link}")

    default_num = default_idx + 1
    default_name = versions[default_idx].get('name', '')
    prompt_text = f"\nPilih varian versi [1-{len(versions)}, default {default_num} ({default_name})]: "

    while True:
        choice = input(prompt_text).strip()
        if not choice:
            return versions[default_idx]
        if choice.isdigit():
            c_idx = int(choice) - 1
            if 0 <= c_idx < len(versions):
                return versions[c_idx]
        print("Pilihan tidak valid, coba lagi.")


def get_target_dir(model_type, cell_idx):
    # Determine destination folder
    if cell_idx == 21 or (22 <= cell_idx <= 30) or model_type == "Checkpoint":
        return "models/checkpoints"
    elif cell_idx == 31 or model_type == "VAE":
        return "models/vae"
    elif cell_idx == 32 or model_type == "Upscale":
        return "models/upscale_models"
    elif cell_idx == 34 or model_type == "Embeddings":
        return "models/embeddings"
    else:
        return "models/loras"

def export_catalog_files(db):
    # 1. Update models_database.json
    db.sort(key=lambda x: (x.get('cell_index', 999), x.get('filename', '').lower()))
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(db, f, indent=2, ensure_ascii=False)

    # 2. Export catalog/data.js
    web_models = []
    for m in db:
        web_models.append({
            "id": m['version_id'],
            "filename": m['filename'],
            "name": m['name'],
            "type": m['model_type'],
            "arch": m['architecture'],
            "cell": m['cell_index'],
            "header": m['cell_header'],
            "cat": m['category'],
            "target": m['target_path'],
            "c_id": m['model_id'],
            "title": m['civitai_title'],
            "ver": m['version_name'],
            "url": m['civitai_url'],
            "dl": m['download_url'],
            "base": m['base_model'],
            "tw": m['trained_words'],
            "img": m['preview_url'],
            "prompt": m['sample_prompt'],
            "neg": m['sample_negative'],
            "sampler": m['sample_sampler'],
            "cfg": m['sample_cfg'],
            "steps": m['sample_steps']
        })

    js_content = f"// Auto-generated Civitai models dataset for ColabFoocus\nwindow.COLAB_MODELS = {json.dumps(web_models, ensure_ascii=False)};\n"
    with open(WEB_DATA, "w", encoding="utf-8") as f:
        f.write(js_content)

    # 3. Export MODELS_CATALOG.md
    cell_headers = []
    grouped = {}
    for m in db:
        header = m['cell_header']
        if header not in grouped:
            grouped[header] = []
            cell_headers.append(header)
        grouped[header].append(m)

    total_count = len(db)
    lines = []
    lines.append("# 📚 Katalog Model, Trigger Words & Sumber Asli Civitai")
    lines.append("")
    lines.append(f"Dokumen ini memuat seluruh daftar model (**{total_count} model**) yang tersedia di notebook [Foocus SayMaven](Foocus%20SayMaven.ipynb), lengkap dengan nama file kustom, judul asli dari kreator di Civitai, tautan web resmi, arsitektur, dan trigger words untuk prompt.")
    lines.append("")
    lines.append("> 💡 **Tips Penggunaan**:")
    lines.append("> - **Nama File**: Cari nama ini di menu dropdown *Model* atau *LoRA* pada antarmuka Fooocus.")
    lines.append("> - **Trigger Words**: Salin kata-kata pemicu ini ke prompt Fooocus untuk mengaktifkan fitur/karakter spesifik model.")
    lines.append("> - **Tautan Web Sumber**: Klik nama model untuk membuka halaman web resmi di Civitai (melihat deskripsi lengkap, creator, atau showcase gambar pengguna lain).")
    lines.append("")
    lines.append("---")
    lines.append("")
    lines.append("## 📑 Daftar Isi Cepat")
    lines.append("")

    for header in cell_headers:
        anchor = header.lstrip('#').strip().lower().replace(' ', '-').replace('!', '').replace('@', '').replace(':', '').replace('/', '').replace('&', '').replace('(', '').replace(')', '')
        display_name = header.lstrip('#').strip()
        count = len(grouped[header])
        lines.append(f"- [{display_name}](#{anchor}) *({count} model)*")

    lines.append("")
    lines.append("---")
    lines.append("")

    for header in cell_headers:
        items = grouped[header]
        display_name = header.lstrip('#').strip()
        lines.append(f"## {display_name}")
        lines.append("")
        lines.append("| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |")
        lines.append("|---|---|:---:|---|")
        
        for it in sorted(items, key=lambda x: x['filename'].lower()):
            fname = f"`{it['filename']}`"
            civitai_link = f"[{it['civitai_title']}]({it['civitai_url']})" if it['civitai_url'] else it['civitai_title']
            arch = f"`{it['architecture']}`"
            
            tw_list = it.get('trained_words', [])
            if tw_list:
                tw_formatted = "<br>".join([f"`{w}`" for w in tw_list[:6]])
                if len(tw_list) > 6:
                    tw_formatted += f"<br>*+{len(tw_list)-6} trigger lainnya...*"
            else:
                tw_formatted = "*Tidak ada trigger khusus*"
                
            lines.append(f"| {fname} | {civitai_link} | {arch} | {tw_formatted} |")
        
        lines.append("")
        lines.append("---")
        lines.append("")

    with open(MD_CATALOG, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))

def add_model_to_notebooks(target_cell_idx, civitai_url, local_dl_line, drive_dl_line, filename):
    for nb_path, dl_line in [(NB_LOCAL, local_dl_line), (NB_DRIVE, drive_dl_line)]:
        with open(nb_path, "r", encoding="utf-8") as f:
            nb = json.load(f)
            
        cell = nb['cells'][target_cell_idx]
        header = cell['source'][0]
        
        # Parse existing items
        items = []
        cur_comm = None
        for l in cell['source'][1:]:
            if l.strip().startswith("# https://civitai"):
                cur_comm = l
            elif "!test -f" in l:
                m = re.search(r'models/[^/]+/([^\s"\'\\]+)', l)
                fn = m.group(1) if m else ""
                items.append((cur_comm, l, fn))
                cur_comm = None
                
        # Add new item
        comm = f"# {civitai_url}\n"
        dl = dl_line if dl_line.endswith("\n") else dl_line + "\n"
        items.append((comm, dl, filename))
        
        # Sort alphabetically (A-Z)
        items.sort(key=lambda x: x[2].lower())
        
        new_source = [header if header.endswith("\n") else header + "\n"]
        for c, d, fn in items:
            new_source.append(c.strip() + "\n")
            new_source.append(d.strip() + "\n")
            
        cell['source'] = new_source
        
        with open(nb_path, "w", encoding="utf-8") as f:
            json.dump(nb, f, indent=1, ensure_ascii=False)

def clean_category_name(raw_name):
    """Membersihkan simbol '#' dan suffix ANIMA/SDXL dari input pengguna."""
    s = re.sub(r'^[#\s]+', '', raw_name).strip()
    s = re.sub(r'\s*(ANIMA|SDXL)$', '', s, flags=re.IGNORECASE).strip()
    return s

def build_cell_header(raw_name, arch):
    """Menghasilkan header sel resmi yang rapi tanpa duplikasi (misal: '# Concept ANIMA')."""
    clean = clean_category_name(raw_name)
    return f"# {clean} {arch}"

def insert_new_cell(raw_name, arch):
    """
    Membuat dan menyisipkan sel baru pada kedua notebook secara simultan di posisi yang tepat:
    1. Pasangan arsitektur: jika sel kategori yang sama pada arsitektur lawan ada (misal: Concept SDXL saat membuat Concept ANIMA):
       - ANIMA ditempatkan tepat SEBELUM SDXL.
       - SDXL ditempatkan tepat SETELAH ANIMA.
    2. Utilitas umum: jika kategori adalah utilitas (Tool, Poses, Clothing, Concept, Background, Style):
       - Ditempatkan di area General Utilities.
    3. Seri anime:
       - ANIMA mandiri: Ditempatkan alfabetis di rentang Seri ANIMA mandiri.
       - SDXL mandiri: Ditempatkan alfabetis di rentang Seri SDXL mandiri.
    """
    clean = clean_category_name(raw_name)
    new_header = build_cell_header(clean, arch)
    opposite_arch = "SDXL" if arch == "ANIMA" else "ANIMA"
    opposite_header = build_cell_header(clean, opposite_arch)

    with open(NB_LOCAL, "r", encoding="utf-8") as f:
        nb_local = json.load(f)
    with open(NB_DRIVE, "r", encoding="utf-8") as f:
        nb_drive = json.load(f)

    insert_idx = None

    # 1. Cek pasangan arsitektur yang sudah ada
    for i, c in enumerate(nb_local['cells']):
        src = c.get('source', [])
        if src and src[0].strip() == opposite_header:
            if arch == "ANIMA":
                insert_idx = i
            else:
                insert_idx = i + 1
            break

    # 2. Cek apakah utilitas umum
    utility_keywords = ['tool', 'poses', 'pose', 'clothing', 'concept', 'background', 'style']
    if insert_idx is None and any(u in clean.lower() for u in utility_keywords):
        for i, c in enumerate(nb_local['cells']):
            src = c.get('source', [])
            if src:
                h_text = src[0].strip().lower()
                if any(u in h_text for u in utility_keywords):
                    insert_idx = i
                    break
        if insert_idx is None:
            insert_idx = len(nb_local['cells'])

    # 3. Jika seri baru, cari posisi alfabetis di kluster yang tepat
    if insert_idx is None:
        if arch == "ANIMA":
            start_search = 74
            end_search = 80
            for i, c in enumerate(nb_local['cells']):
                src = c.get('source', [])
                if src:
                    if "# Hoshizora no Memoria SDXL" in src[0]:
                        start_search = i + 1
                    if "# Akebi-chan" in src[0]:
                        end_search = i
                        break
        else:
            start_search = 80
            end_search = 106
            for i, c in enumerate(nb_local['cells']):
                src = c.get('source', [])
                if src:
                    if "# Akebi-chan" in src[0]:
                        start_search = i
                    if "# Random Character" in src[0]:
                        end_search = i
                        break


        for i in range(start_search, end_search):
            src = nb_local['cells'][i].get('source', [])
            if not src:
                continue
            h = src[0].strip()
            existing_clean = clean_category_name(h)
            if clean.lower() < existing_clean.lower():
                insert_idx = i
                break

        if insert_idx is None:
            insert_idx = end_search

    # Buat sel baru di kedua notebook
    new_cell_local = {"cell_type": "code", "execution_count": None, "metadata": {}, "outputs": [], "source": [f"{new_header}\n"]}
    new_cell_drive = {"cell_type": "code", "execution_count": None, "metadata": {}, "outputs": [], "source": [f"{new_header}\n"]}

    nb_local['cells'].insert(insert_idx, new_cell_local)
    nb_drive['cells'].insert(insert_idx, new_cell_drive)

    with open(NB_LOCAL, "w", encoding="utf-8") as f:
        json.dump(nb_local, f, indent=1, ensure_ascii=False)
    with open(NB_DRIVE, "w", encoding="utf-8") as f:
        json.dump(nb_drive, f, indent=1, ensure_ascii=False)

    # Geser cell_index di database
    with open(DB_FILE, "r", encoding="utf-8") as f:
        db = json.load(f)
    for m in db:
        if m['cell_index'] >= insert_idx:
            m['cell_index'] += 1
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(db, f, indent=2, ensure_ascii=False)

    print(f"\n✨ Berhasil menyisipkan sel baru '{new_header}' di posisi yang tepat (Cell {insert_idx})!")
    return insert_idx, new_header


def process_single_model(url_input):
    url_input = url_input.strip()
    if not url_input:
        return False

    model_id, version_id = parse_civitai_url(url_input)
    if not model_id and not version_id:
        print("❌ Gagal mengekstrak ID model dari URL tersebut. Pastikan format URL Civitai valid.")
        return False

    # Selalu muat ulang database dan notebook agar sinkron dengan iterasi sebelumnya
    with open(NB_LOCAL, "r", encoding="utf-8") as f:
        nb = json.load(f)
    with open(DB_FILE, "r", encoding="utf-8") as f:
        db = json.load(f)

    print("\n⏳ Mengambil metadata dari Civitai API...")
    model_data = None
    version_data = None


    if version_id and not model_id:
        v_url = f"https://civitai.com/api/v1/model-versions/{version_id}"
        version_data = fetch_json(v_url)
        model_id = version_data.get('modelId')

    m_url = f"https://civitai.com/api/v1/models/{model_id}"
    model_data = fetch_json(m_url)
    model_title = model_data.get('name', 'Unknown')
    model_type = model_data.get('type', 'LoRA')
    versions = model_data.get('modelVersions', [])

    print(f"✅ Model Ditemukan: {model_title} ({model_type})")

    # 2. Select version
    selected_version = select_version_interactive(versions, version_id)
    v_id = selected_version['id']

    # Ambil detail lengkap versi dari endpoint model-versions untuk mendapatkan metadata generasi (CFG, Steps, Sampler, Prompt)
    try:
        v_url = f"https://civitai.com/api/v1/model-versions/{v_id}"
        full_version = fetch_json(v_url)
        if full_version:
            selected_version = full_version
    except Exception as e:
        pass

    v_name = selected_version.get('name', '')
    base_model = selected_version.get('baseModel', 'Unknown')
    download_url = selected_version.get('downloadUrl', '')
    trained_words = selected_version.get('trainedWords', [])

    # Find primary safetensors file
    files = selected_version.get('files', [])
    safetensor_files = [f for f in files if f.get('name', '').endswith('.safetensors')]
    primary_file = None
    for f in safetensor_files:
        if f.get('primary'):
            primary_file = f
            break
    if not primary_file and safetensor_files:
        primary_file = safetensor_files[0]
    elif not primary_file and files:
        primary_file = files[0]

    raw_filename = primary_file.get('name', f"{sanitize_filename(model_title)}.safetensors") if primary_file else f"{sanitize_filename(model_title)}.safetensors"
    
    # Check architecture
    arch = "ANIMA" if "anima" in base_model.lower() else "SDXL"

    print(f"\n📌 Versi Terpilih: {v_name} (ID: {v_id})")
    print(f"   Base Model  : {base_model} ({arch})")
    print(f"   File Asli   : {raw_filename}")
    print(f"   Trigger Wrd : {trained_words[:3]} ({len(trained_words)} kata)")

    # 3. Filename input
    suggested_fn = sanitize_filename(os.path.splitext(raw_filename)[0]) + ".safetensors"
    if arch == "ANIMA" and not suggested_fn.endswith("_ANIMA.safetensors"):
        suggested_fn = suggested_fn.replace(".safetensors", "_ANIMA.safetensors")

    fn_input = input(f"\n💾 Nama File Simpan [Enter untuk '{suggested_fn}']: ").strip()
    target_filename = sanitize_filename(fn_input) if fn_input else suggested_fn
    if not target_filename.endswith(('.safetensors', '.pt')):
        target_filename += ".safetensors"

    # Check if filename already exists
    existing = [m for m in db if m['filename'].lower() == target_filename.lower()]
    if existing:
        print(f"⚠️ Peringatan: Nama file '{target_filename}' sudah ada di Cell {existing[0]['cell_index']} ({existing[0]['cell_header']})!")
        override = input("Ingin tetap memperbarui data model ini? (y/n): ").strip().lower()
        if override != 'y':
            print("Dibatalkan.")
            return False

    # 4. Target Cell Selection
    print("\n📁 Pilih Kategori Sel Tujuan:")
    cells_list = []
    for idx, c in enumerate(nb['cells']):
        src = c.get('source', [])
        if src and src[0].strip().startswith('#'):
            h = src[0].strip()
            cells_list.append((idx, h))

    # Smart recommendation for target cell based on model_type, architecture, and keywords
    rec_cells = []
    if model_type == "Checkpoint":
        if arch == "ANIMA":
            rec_cells.extend([c for c in cells_list if c[0] == 21])
        else:
            rec_cells.extend([c for c in cells_list if 22 <= c[0] <= 30])
    elif model_type == "VAE":
        rec_cells.extend([c for c in cells_list if c[0] == 31])
    elif model_type == "Upscaler":
        rec_cells.extend([c for c in cells_list if c[0] == 32])
    elif model_type == "TextualInversion":
        rec_cells.extend([c for c in cells_list if c[0] == 34])

    kw_search = (model_title + " " + target_filename).lower()
    # Map common franchise keywords
    bandori_map = {
        "poppin": 40, "roselia": 41, "afterglow": 42, "pastel": 43, 
        "hello": 44, "morfonica": 45, "suilen": 46, "ras": 46, 
        "mygo": 47, "mujica": 48, "soutsa": 49
    }
    for b_kw, c_num in bandori_map.items():
        if b_kw in kw_search:
            rec_cells.extend([c for c in cells_list if c[0] == c_num])

    for idx, h in cells_list:
        h_clean = h.replace('#', '').strip().lower()
        words = [w for w in h_clean.split() if len(w) > 3 and w not in ['anima', 'sdxl', 'model', 'group']]
        if any(w in kw_search for w in words):
            rec_cells.append((idx, h))

    # Prioritaskan sel yang arsitekturnya sama dengan model
    rec_cells.sort(key=lambda c: (0 if arch in c[1] else 1))

    # Remove duplicates preserving order
    seen_cells = set()
    unique_rec = []
    for c in rec_cells:
        if c[0] not in seen_cells:
            seen_cells.add(c[0])
            unique_rec.append(c)

    # 4. Target Category Selection
    print("\n📁 Kategori Sel Tujuan:")
    if unique_rec:
        print("⭐ Kategori yang paling cocok:")
        for i, (idx, h) in enumerate(unique_rec[:5], 1):
            arch_tag = f" ({arch} Cocok)" if arch in h else ""
            print(f"   [{i}] {h.replace('#', '').strip()}{arch_tag}")

    while True:
        prompt_msg = f"\nPilih nomor rekomendasi [1-{len(unique_rec[:5])}] atau ketik nama anime/kategori: " if unique_rec else "\nKetik nama anime atau kategori (contoh: 'concept', 'poses', 'style', 'blue archive'): "
        cat_input = input(prompt_msg).strip()
        
        if not cat_input and unique_rec:
            # Default to top recommendation
            target_cell_idx, selected_cell_header = unique_rec[0]
            print(f"✅ Memilih rekomendasi: {selected_cell_header.replace('#', '').strip()}")
            break
            
        if cat_input.isdigit():
            num = int(cat_input)
            if unique_rec and 1 <= num <= len(unique_rec[:5]):
                target_cell_idx, selected_cell_header = unique_rec[num - 1]
                print(f"✅ Terpilih: {selected_cell_header.replace('#', '').strip()}")
                break
            # Or if user actually knew cell number
            matching = [c for c in cells_list if c[0] == num]
            if matching:
                target_cell_idx, selected_cell_header = matching[0]
                print(f"✅ Terpilih: {selected_cell_header.replace('#', '').strip()}")
                break
                
        if cat_input.lower() in ["list", "help", "?"]:
            print("\n📋 Daftar Kategori Tersedia:")
            for idx, h in cells_list:
                print(f"   [{idx:3d}] {h.replace('#', '').strip()}")
            continue
            
        if cat_input.lower() in ["new", "buat", "+"]:
            new_cat = input("\nMasukkan Nama Kategori / Seri baru (contoh: Sousou no Frieren atau Concept): ").strip()
            if new_cat:
                target_cell_idx, selected_cell_header = insert_new_cell(new_cat, arch)
                break
            continue

        # Parse user query and determine architecture
        user_clean = clean_category_name(cat_input)
        if "anima" in cat_input.lower():
            target_arch = "ANIMA"
        elif "sdxl" in cat_input.lower():
            target_arch = "SDXL"
        else:
            target_arch = arch

        intended_header = build_cell_header(user_clean, target_arch)

        # 1. Exact match with intended header
        exact_match = [c for c in cells_list if c[1].strip().lower() == intended_header.lower()]
        if exact_match:
            target_cell_idx, selected_cell_header = exact_match[0]
            print(f"✅ Terpilih otomatis: {selected_cell_header.replace('#', '').strip()}")
            break

        # 2. Check if the same category name exists under the OPPOSITE architecture
        opposite_arch = "SDXL" if target_arch == "ANIMA" else "ANIMA"
        opposite_header = build_cell_header(user_clean, opposite_arch)
        opp_match = [c for c in cells_list if c[1].strip().lower() == opposite_header.lower()]
        if opp_match:
            print(f"\n⚠️ Ditemukan sel '{opp_match[0][1].replace('#', '').strip()}', namun model ini berarsitektur {target_arch}.")
            print(f"   [1] Buat sel baru '{intended_header}' secara otomatis (Disarankan)")
            print(f"   [2] Tetap masukkan ke '{opp_match[0][1].replace('#', '').strip()}'")
            sub_c = input("Pilih [1/2, default 1]: ").strip()
            if sub_c == "2":
                target_cell_idx, selected_cell_header = opp_match[0]
                print(f"✅ Terpilih: {selected_cell_header.replace('#', '').strip()}")
                break
            else:
                target_cell_idx, selected_cell_header = insert_new_cell(user_clean, target_arch)
                break

        # 3. Partial keyword matching
        kw_matches = [c for c in cells_list if user_clean.lower() in clean_category_name(c[1]).lower()]
        if kw_matches:
            # Sort matches so that cells with target_arch come FIRST
            kw_matches.sort(key=lambda x: (0 if target_arch in x[1] else 1, x[0]))

            if len(kw_matches) == 1:
                matched_cell = kw_matches[0]
                matched_header = matched_cell[1].replace('#', '').strip()
                if target_arch in matched_cell[1]:
                    target_cell_idx, selected_cell_header = matched_cell
                    print(f"✅ Terpilih otomatis: {selected_cell_header.replace('#', '').strip()}")
                    break
                else:
                    print(f"\n⚠️ Ditemukan kategori mirip: '{matched_header}', namun arsitekturnya berbeda dengan model ({target_arch}).")
                    print(f"   [1] Buat sel baru '{intended_header}' secara otomatis (Disarankan)")
                    print(f"   [2] Tetap masukkan ke '{matched_header}'")
                    sub_c = input("Pilih [1/2, default 1]: ").strip()
                    if sub_c == "2":
                        target_cell_idx, selected_cell_header = matched_cell
                        print(f"✅ Terpilih: {selected_cell_header.replace('#', '').strip()}")
                        break
                    else:
                        target_cell_idx, selected_cell_header = insert_new_cell(user_clean, target_arch)
                        break
            else:
                print(f"\nDitemukan {len(kw_matches)} kategori yang cocok:")
                for i, (idx, h) in enumerate(kw_matches[:8], 1):
                    arch_tag = f" ({target_arch} Cocok)" if target_arch in h else ""
                    print(f"   [{i}] {h.replace('#', '').strip()}{arch_tag}")
                sub_choice = input(f"Pilih nomor [1-{min(8, len(kw_matches))}], atau ketik 'new' untuk buat baru: ").strip()
                if sub_choice.lower() in ["new", "buat"]:
                    target_cell_idx, selected_cell_header = insert_new_cell(user_clean, target_arch)
                    break
                if sub_choice.isdigit():
                    s_num = int(sub_choice)
                    if 1 <= s_num <= len(kw_matches[:8]):
                        target_cell_idx, selected_cell_header = kw_matches[s_num - 1]
                        print(f"✅ Terpilih: {selected_cell_header.replace('#', '').strip()}")
                        break
        else:
            print(f"❌ Kategori '{cat_input}' belum ada di notebook.")
            make_new = input(f"Ingin membuat sel baru '{intended_header}' secara otomatis? (y/n): ").strip().lower()
            if make_new == 'y':
                target_cell_idx, selected_cell_header = insert_new_cell(user_clean, target_arch)
                break

    # 5. Build Download Commands
    target_dir = get_target_dir(model_type, target_cell_idx)
    local_target = f"/content/Fooocus/{target_dir}/{target_filename}"
    drive_target = f"/content/drive/MyDrive/Fooocus/{target_dir}/{target_filename}"
    
    local_dl = f'!test -f "{local_target}" || wget -O {local_target} "{download_url}"'
    drive_dl = f'!test -f "{drive_target}" || wget -O {drive_target} "{download_url}"'
    official_civitai_url = f"https://civitai.com/models/{model_id}"

    # 6. Preview Image & Metadata
    preview_img = ""
    sample_prompt = ""
    sample_neg = ""
    sample_sampler = ""
    sample_cfg = None
    sample_steps = None

    if selected_version.get('images'):
        images = selected_version['images']
        # Prioritaskan gambar statis yang memiliki metadata generasi (meta)
        imgs_with_meta = [img for img in images if img.get('meta') and not img.get('url', '').endswith(('.mp4', '.webm'))]
        static_imgs = [img for img in images if img.get('type') == 'image' and not img.get('url', '').endswith(('.mp4', '.webm'))]

        chosen_img = imgs_with_meta[0] if imgs_with_meta else (static_imgs[0] if static_imgs else images[0])
        preview_img = chosen_img.get('url', '')
        meta = chosen_img.get('meta') or {}
        sample_prompt = meta.get('prompt', '')
        sample_neg = meta.get('negativePrompt', '')
        sample_sampler = meta.get('sampler', '')
        sample_cfg = meta.get('cfgScale')
        sample_steps = meta.get('steps')

    # Category name
    cat_name = re.sub(r'^#\s*', '', selected_cell_header)
    cat_name = re.sub(r'\s*(ANIMA|SDXL)$', '', cat_name).strip()

    # 7. Apply to notebooks
    print(f"\nWriting to Cell {target_cell_idx} ({selected_cell_header})...")
    add_model_to_notebooks(target_cell_idx, official_civitai_url, local_dl, drive_dl, target_filename)

    # 8. Update DB
    new_record = {
        "filename": target_filename,
        "name": os.path.splitext(target_filename)[0],
        "model_type": model_type,
        "architecture": arch,
        "cell_index": target_cell_idx,
        "cell_header": selected_cell_header,
        "category": cat_name,
        "target_path": local_target,
        "download_url": download_url,
        "version_id": str(v_id),
        "model_id": int(model_id),
        "civitai_title": model_title,
        "version_name": v_name,
        "base_model": base_model,
        "civitai_url": official_civitai_url,
        "trained_words": trained_words,
        "preview_url": preview_img,
        "sample_prompt": sample_prompt,
        "sample_negative": sample_neg,
        "sample_sampler": sample_sampler,
        "sample_cfg": sample_cfg,
        "sample_steps": sample_steps,
        "description": selected_version.get('description', '')
    }

    # Remove existing if overwriting
    db = [m for m in db if m['filename'].lower() != target_filename.lower()]
    db.append(new_record)

    # 9. Update Catalog, data.js, MODELS_CATALOG.md
    print("Updating models_database.json, catalog/data.js, and MODELS_CATALOG.md...")
    export_catalog_files(db)

    print("\n" + "=" * 65)
    print(f"🎉 SUKSES! Model '{target_filename}' berhasil ditambahkan ke:")
    print(f"   📁 Cell {target_cell_idx}: {selected_cell_header}")
    print(f"   📔 Foocus SayMaven.ipynb")
    print(f"   📔 Foocus SayMaven Google Drive Mount.ipynb")
    print(f"   🌐 catalog/data.js & MODELS_CATALOG.md")
    print(f"   🔢 Total Model di Repositori: {len(db)} model")
    print("=" * 65)
    return True


def main():
    if len(sys.argv) > 1 and sys.argv[1] in ["-h", "--help"]:
        print("Penggunaan:")
        print("  python add_model.py                     -> Mode interaktif (looping menambah banyak model)")
        print("  python add_model.py <civitai_url>       -> Proses link Civitai pertama, lalu lanjut looping")
        print("\nContoh:")
        print("  python add_model.py https://civitai.com/models/827184")
        return

    initial_url = sys.argv[1] if (len(sys.argv) > 1 and not sys.argv[1].startswith("-")) else None
    first_run = True

    while True:
        try:
            if first_run and initial_url:
                url_input = initial_url
                initial_url = None
                first_run = False
            else:
                prompt_text = "\n🔗 Masukkan URL Civitai (atau tekan Enter / ketik 'q' untuk selesai): "
                url_input = input(prompt_text).strip()

            # Keluar jika kosong atau ketik q/exit
            if not url_input or url_input.lower() in ["q", "quit", "exit", "selesai", "stop"]:
                print("\n✨ Selesai. Seluruh perubahan model telah tersimpan dan disinkronkan. Sampai jumpa!\n")
                break

            process_single_model(url_input)
            first_run = False

        except KeyboardInterrupt:
            print("\n\n👋 Selesai. Program dihentikan oleh pengguna.\n")
            break
        except Exception as e:
            print(f"\n❌ Terjadi kesalahan saat memproses: {e}")
            retry = input("Ingin mencoba memasukkan URL lain? (y/n): ").strip().lower()
            if retry != 'y':
                break


if __name__ == "__main__":
    main()

