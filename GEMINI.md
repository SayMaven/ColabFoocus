# Petunjuk Khusus Proyek ColabFoocus (Antigravity & AI Agent Guidelines)

Ketika mengedit, memodifikasi, menganalisa, atau memperbarui notebook di repositori ini, patuhi aturan berikut:

## 1. Dua File Notebook Utama (Wajib Sinkron 1-to-1)
- `Foocus SayMaven.ipynb`: Versi penyimpanan lokal Colab (`/content/Fooocus/`).
- `Foocus SayMaven Google Drive Mount.ipynb`: Versi Google Drive (`/content/drive/MyDrive/Fooocus/`).
- Setiap ada penambahan, penghapusan, atau perubahan urutan sel pada salah satu file, file yang satunya **WAJIB disinkronkan 1-to-1** (jumlah sel, urutan sel, dan isi model harus identik, hanya berbeda pada prefix path `/content/Fooocus` vs `/content/drive/MyDrive/Fooocus`).

## 2. Port & Jaringan
- Port standar adalah **`7866`** (pada Cloudflared, `fuser -k 7866/tcp`, `ngrok.connect(7866)`, dan python entry `entry_with_update.py ... --port 7866`). Jangan gunakan 7865 atau 7867.

## 3. Penamaan Komentar Header Sel
- Model **ANIMA**: Komentar header **wajib** mengandung kata `ANIMA` (contoh: `# BangDream Group ANIMA`, `# Project Sekai ANIMA`).
- Model **SDXL**: Semua model non-ANIMA adalah SDXL dan komentar header **wajib** diakhiri dengan `SDXL` (contoh: `# Blue Archive SDXL`, `# Roselia SDXL`, `# Honkai Star Rail SDXL`, `# Poses SDXL`).

## 4. Urutan Sel (Cell Ordering)
- [Cell 0–20]: Setup environment, Civitai token global, git clone, mount, tunnels, dan runner gradio/tunnels (tidak boleh diubah).
- [Cell 21]: `# Checkpoint ANIMA`
- [Cell 22–30]: `# Checkpoint SDXL`
- [Cell 31–32]: `# VAE SDXL` & `# Upscale SDXL`
- [Cell 33–34]: `# Color Settings SDXL` & `# Embeddings SDXL`
- [Cell 35–49]: Kluster BanG Dream! (15 sel berdekatan)
- [Cell 50–52]: Kluster Music / Band Anime (GBC, Bocchi, K-ON)
- [Cell 53–58]: Kluster HoYoverse (Selalu 4 sel terpisah: HSR ANIMA & SDXL, ZZZ ANIMA & SDXL, Genshin, HI3)
- [Cell 59–60]: Kluster The Idolm@ster (Gakuen Idolmaster & U149)
- [Cell 61–72]: Series berpasangan ANIMA & SDXL (Project Sekai, Watanare, Wataten, GnP, Takopi, Hoshizora)
- [Cell 73–76]: Series ANIMA mandiri
- [Cell 77–102]: Series Standalone SDXL (Alfabetis A–Z)
- [Cell 103–104]: Random Characters (ANIMA lalu SDXL)
- [Cell 105–112]: General Utilities (Tool, Poses, Clothing, Concept, Background, Style, STYLE, FAVORITE)

## 5. Konfigurasi Civitai Token Global
- Token Civitai dikonfigurasi terpusat pada **Cell 2** via `~/.wgetrc` dan `~/.aria2/aria2.conf` menggunakan header `Authorization: Bearer $CIVITAI_TOKEN`.
- Seluruh URL download model individual **TIDAK PERLU** ditambahkan parameter query `&token=...`.

## 6. Pengurutan Baris di Dalam Sel
- Baris perintah unduhan (`!test -f ... || wget/aria2c ...`) di dalam setiap sel **wajib diurutkan secara alfabetis (A–Z)** berdasarkan nama file target (`.safetensors` atau `.pt`).
- Komentar header (`# ...`) tetap berada di baris pertama.
- Setiap baris unduhan model disertai komentar tautan web resmi Civitai (`# https://civitai.com/models/<model_id>`) tepat satu baris di atasnya.

## 7. Validasi Ketat
- Jalur pada `!test -f "<path>"` harus **sama persis karakter demi karakter** dengan output `wget -O "<path>"` atau `aria2c -o "<fname>"`.
- Hindari karakter non-ASCII (seperti `ƒ` hook) atau tanda seru `!` dalam nama file.
- Pastikan tidak ada link atau Civitai Model ID yang terduplikasi ke karakter berbeda.

## 8. Sistem Katalog Model & Hub
- Repositori ini memiliki sistem katalog metadata untuk seluruh model:
  - `models_database.json`: Database master JSON yang memuat seluruh metadata (nama file, judul asli Civitai, tautan web Civitai, trigger words, base model, dan preview image).
  - `MODELS_CATALOG.md`: Dokumentasi Markdown lengkap yang dikelompokkan sesuai kluster sel notebook.
  - `catalog/` (`index.html`, `style.css`, `app.js`, `data.js`): Web Hub Interaktif yang dapat dibuka secara offline atau via GitHub Pages.
- Setiap kali ada penambahan, penghapusan, atau perubahan model pada kedua notebook utama, database dan katalog harus selalu diperbarui agar tetap sinkron.

Panduan lengkap dan detail dapat dilihat di [NOTEBOOK_GUIDELINES.md](file:///f:/CODE/Repo/ColabFoocus/NOTEBOOK_GUIDELINES.md).
