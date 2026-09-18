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
[Cell 61 – 72] : Series Berpasangan ANIMA & SDXL (Project Sekai, Watanare, Wataten, GnP, Takopi, Hoshizora)
[Cell 73 – 76] : Series ANIMA Mandiri (Roshidere, Kamiina Botan, Adachi to Shimamura, Chou Kaguya Hime)
[Cell 77 – 102]: Series Standalone SDXL (Diurutkan alfabetis A–Z berdasarkan nama series)
[Cell 103 – 104]: Random Characters (Random Character ANIMA lalu SDXL)
[Cell 105 – 112]: General Utilities (Tool, Poses, Clothing, Concept, Background, Style, STYLE, FAVORITE)
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
