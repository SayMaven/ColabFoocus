# Panduan & Standar Pemeliharaan Notebook Foocus SayMaven

Dokumen ini adalah pedoman permanen untuk pemeliharaan, penambahan, dan sinkronisasi dua file notebook:
1. `Foocus SayMaven.ipynb` (Penyimpanan lokal Colab: `/content/Fooocus/`)
2. `Foocus SayMaven Google Drive Mount.ipynb` (Penyimpanan Google Drive: `/content/drive/MyDrive/Fooocus/`)

Dokumen ini dirancang agar setiap agen AI dan pengembang selalu mengingat arsitektur, aturan urutan sel, penamaan header, dan pencegahan bug yang telah ditetapkan.

---

## 1. Aturan Sinkronisasi Ganda (Dual-Notebook Sync)
Setiap kali ada penambahan model baru, penghapusan model, atau perubahan urutan sel pada salah satu notebook, **kedua notebook WAJIB disinkronkan 1-to-1**:
- Jumlah sel dan urutan nomor sel harus selalu persis sama.
- Baris perintah download di dalam sel harus selalu persis sama.
- **Satu-satunya perbedaan**:
  - `Foocus SayMaven.ipynb` menggunakan root direktori `/content/Fooocus/` dan badge GitHub mengarah ke `Foocus%20SayMaven.ipynb`.
  - `Foocus SayMaven Google Drive Mount.ipynb` menggunakan root direktori `/content/drive/MyDrive/Fooocus/`, perintah runner/clone dijalankan di `%cd /content/drive/MyDrive/...`, dan badge GitHub mengarah ke `Foocus%20SayMaven%20Google%20Drive%20Mount.ipynb`.

---

## 2. Standar Port & Jaringan
Semua konfigurasi jaringan dan tunnel harus konsisten menggunakan port **`7866`**:
- **Cloudflared**: `http://127.0.0.1:7866` (atau `http://localhost:7866`)
- **Process Killer**: `!fuser -k 7866/tcp` dan `!lsof -ti:7866 | xargs -r kill -9`
- **Ngrok Tunnel**: `public_url = ngrok.connect(7866)`
- **Runner Fooocus**: `!python entry_with_update.py ... --port 7866`
- *Peringatan*: Jangan gunakan port 7865 atau 7867 untuk menghindari error *Connection Refused* / *502 Bad Gateway*.

---

## 3. Pembeda Arsitektur Model (ANIMA vs SDXL)
Terdapat dua arsitektur base model yang digunakan:
1. **Model ANIMA**:
   - Komentar header sel **WAJIB** mengandung kata `ANIMA`.
   - Contoh: `# BangDream Group ANIMA`, `# MewType ANIMA`, `# Project Sekai ANIMA`, `# STYLE ANIMA`.
2. **Model SDXL**:
   - Seluruh sel model yang bukan ANIMA adalah model SDXL.
   - Komentar header sel **WAJIB** diakhiri dengan teks `SDXL`.
   - Contoh: `# Blue Archive SDXL`, `# Roselia SDXL`, `# Ave Mujica SDXL`, `# Poses SDXL`, `# Tool SDXL`.
   - *Peringatan*: Hindari duplikasi imbuhan seperti `SDXL SDXL`.

---

## 4. Struktur Hirarki Urutan Sel (Cell Ordering)

Seluruh notebook harus selalu mengikuti urutan kelompok berikut:

```
[Cell 0 – 20]  : Setup, Civitai Token Global, Environment, Tunnels, Git Clone, Launchers (JANGAN DIUBAH)
[Cell 21]      : Checkpoint ANIMA
[Cell 22 – 30] : Checkpoint SDXL
[Cell 31 – 32] : VAE SDXL & Upscale SDXL
[Cell 33 – 34] : Color Settings SDXL & Embeddings SDXL
[Cell 35 – 49] : Kluster BanG Dream! (15 Sel Berdekatan: ANIMA & SDXL)
[Cell 50 – 52] : Kluster Music / Band Anime (GBC, Bocchi, K-ON)
[Cell 53 – 58] : Kluster HoYoverse (Sel Terpisah: HSR ANIMA & SDXL, ZZZ ANIMA & SDXL, Genshin, HI3)
[Cell 59 – 60] : Kluster The Idolm@ster (Gakuen Idolmaster & U149)
[Cell 61 – 73] : Series Berpasangan ANIMA & SDXL (Project Sekai, Watanare, Wataten, GnP, Takopi, Hoshizora)
[Cell 74 – 78] : Series ANIMA Mandiri (Amagi Brilliant Park, Roshidere, Kamiina Botan, Adachi to Shimamura, Chou Kaguya Hime)
[Cell 79 – 104]: Series Standalone SDXL (Diurutkan alfabetis A–Z berdasarkan nama series)
[Cell 105 – 106]: Random Characters (Random Character ANIMA lalu SDXL)
[Cell 107 – 114]: General Utilities (Tool, Poses, Clothing, Concept ANIMA & SDXL, Background, Style, STYLE)
```

### Detail Kluster Penting:
- **BanG Dream (15 Sel)**: Kumpulkan semua band (*Poppin'Party, Roselia, Afterglow, Pastel*Palettes, HelloHappyWorld, Morfonica, Raise a Suilen, MyGO, Ave Mujica, Soutsa*) dan style ANIMA/SDXL di dalam satu area.
- **HoYoverse (Sel Selalu Terpisah)**:
  - `# Honkai Star Rail ANIMA`
  - `# Honkai Star Rail SDXL` (25 model)
  - `# Zenless Zone Zero ANIMA`
  - `# Zenless Zone Zero SDXL` (4 model)
  - `# Genshin SDXL` (1 model)
  - `# Honkai Impact 3rd SDXL` (4 model)
- **Series Berpasangan (ANIMA & SDXL)**: Ditempatkan berdampingan langsung agar pengguna mudah memilih varian arsitektur yang diinginkan.

---

## 5. Aturan Pengurutan Baris di Dalam Sel (In-Cell Line Sorting)
- **Baris 1**: Komentar header sel (`# ...`) selalu dipertahankan di posisi paling atas.
- **Tautan Sumber Web Civitai**: Setiap baris unduhan model disertai komentar URL resmi (`# https://civitai.com/models/<model_id>`) tepat satu baris di atasnya.
- **Baris Unduhan**: Seluruh baris perintah download (`!test -f ... || wget/aria2c ...`) diurutkan secara **alfabetis (A–Z)** berdasarkan nama file target (`.safetensors` atau `.pt`).

---

## 6. Checklist Validasi & Pencegahan Bug (Common Gotchas)

Sebelum menyimpan atau menjalankan notebook, selalu pastikan:

1. **Kesesuaian Path (`!test -f` vs Output Unduhan)**:
   Path file yang dicek pada `!test -f "<path>"` harus **sama persis karakter demi karakter** dengan target simpan pada `wget -O "<path>"` atau `aria2c -d <dir> -o <fname>`.
   - *Peringatan Kasus Nyata*: Jangan ada salah ketik seperti `Morfonica` vs `Morƒonica`, atau kelebihan kurung tutup `_ANIMA).safetensors`. Jika tidak cocok, file akan terus diunduh ulang setiap kali cell dijalankan!
2. **Keunikan Link & ID Civitai**:
   - 1 Civitai Model ID hanya boleh digunakan untuk 1 karakter yang sesuai.
   - Jangan pernah menyalin link dari karakter lain (misal: link Unholy Desire Mix tertempel ke Ragnarok, atau link Lisa Imai tertempel ke Tanga Ibuki).
3. **Karakter Khusus pada Nama File**:
   - Gunakan huruf ASCII standar (gunakan `f` biasa, jangan karakter hook `ƒ` seperti `Morƒonica`).
   - Hindari tanda seru `!` dalam nama file (gunakan `WeCanDoIt` bukan `WeCanDoIt!`) untuk mencegah error history expansion pada bash.
4. **Keamanan Kredensial**:
   - Gunakan placeholder `NGROK_TOKEN = "INPUT_NGROK_TOKEN"`. Jangan menaruh token pribadi secara terbuka di repositori publik.
5. **Autentikasi Civitai Global**:
   - Token Civitai dikonfigurasi terpusat pada **Cell 2** via `~/.wgetrc` dan `~/.aria2/aria2.conf` (`Authorization: Bearer $CIVITAI_TOKEN`).
   - Jangan menambahkan parameter `&token=...` pada link unduhan individual agar URL tetap bersih, rapi, dan mudah dipelihara.
6. **Sinkronisasi Katalog Model & Hub**:
   - Repositori ini memiliki master database `models_database.json`, dokumentasi Markdown `MODELS_CATALOG.md`, serta Web Hub Interaktif `catalog/`.
   - Pastikan database dan katalog selalu diperbarui ketika ada model baru yang ditambahkan ke notebook.

---

## 7. Tool Otomatis Penambahan Model (`add_model.py`)

Untuk menghindari kesalahan manual dan menjaga konsistensi repositori, telah disediakan script CLI otomatis [`add_model.py`](file:///f:/CODE/Repo/ColabFoocus/add_model.py). Tool ini mengotomatiskan seluruh alur kerja penambahan model baru dari Civitai:

### Fitur Utama `add_model.py`:
1. **Otomatis Fetch Civitai API**: Mengambil judul asli, creator, base model, varian versi, file download URL, trigger words, dan preview image secara otomatis.
2. **Dukungan Multi-Versi Interaktif**: Jika suatu model memiliki banyak varian/versi rilis di Civitai (misal: model dengan puluhan versi), script menampilkan daftar versi lengkap dengan nomor versi, nama versi, dan base model, lalu meminta pengguna memilih versi yang diinginkan.
3. **Kustomisasi Nama File**: Pengguna dapat menentukan nama file `.safetensors` yang rapi dan bersih. Script otomatis menambahkan ekstensi `.safetensors` jika terlewat, membersihkan karakter ilegal, serta otomatis mendeteksi dan menyarankan suffix `_ANIMA` jika model berbasis ANIMA.
4. **Pemilihan Sel / Kategori Ramah Pengguna**:
   - Pengguna **tidak perlu menghafal nomor sel notebook**.
   - Cukup ketik kata kunci (misal: `bangdream`, `poses`, `blue archive`, `yuru yuri`, `style`, dsb.) untuk mencari kategori yang cocok.
   - Ketik `list` untuk melihat seluruh kategori sel yang tersedia.
   - Ketik `new` untuk membuat sel seri anime baru secara otomatis.
5. **Pembuatan Sel Seri Baru Otomatis**: Jika seri anime belum ada di notebook, script akan meminta nama seri, lalu menyisipkan sel baru pada kedua notebook secara simultan di posisi urutan alfabetis (A–Z) yang tepat di antara seri standalone lainnya.
6. **Sinkronisasi Ganda 1-to-1 Terjamin**: Perintah unduhan ditulis langsung ke kedua notebook (`Foocus SayMaven.ipynb` dengan `/content/Fooocus/` dan `Foocus SayMaven Google Drive Mount.ipynb` dengan `/content/drive/MyDrive/Fooocus/`).
7. **Pengurutan Alfabetis Otomatis**: Baris unduhan di dalam sel tujuan langsung diurutkan kembali secara alfabetis (A–Z) bersama komentar tautan URL Civitai-nya.
8. **Sinkronisasi Katalog Otomatis**: Master database `models_database.json`, katalog web `catalog/data.js`, dan dokumentasi `MODELS_CATALOG.md` langsung diperbarui secara instan dalam sekali jalan.

### Cara Penggunaan:
```bash
# Menambahkan model dengan memasukkan URL Civitai
python add_model.py https://civitai.com/models/827184/wai-illustrious-sdxl

# Atau hanya dengan Model ID
python add_model.py 827184

# Atau jalankan secara interaktif tanpa argumen (akan diminta URL/ID)
python add_model.py
```
