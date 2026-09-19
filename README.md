# ColabFoocus (SayMaven Edition)

Koleksi notebook Google Colab yang dioptimalkan untuk menjalankan **Fooocus** dengan dukungan arsitektur **SDXL** dan **ANIMA**, dilengkapi lebih dari 600+ LoRA karakter anime, game, pose, pakaian, dan style siap pakai.

---

## 🚀 Akses Cepat (Open in Colab)

Pilih varian notebook sesuai kebutuhan penyimpanan Anda:

| Notebook | Deskripsi | Link Colab |
|---|---|---|
| **Foocus SayMaven** | Versi penyimpanan lokal Colab (`/content/Fooocus/`). Cepat, ringan, dan cocok untuk sesi sementara. | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SayMaven/ColabFoocus/blob/main/Foocus%20SayMaven.ipynb) |
| **Foocus SayMaven (Google Drive Mount)** | Versi penyimpanan Google Drive (`/content/drive/MyDrive/Fooocus/`). Model dan output tersimpan permanen di Drive. | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SayMaven/ColabFoocus/blob/main/Foocus%20SayMaven%20Google%20Drive%20Mount.ipynb) |
| **Dataset Maker** | Tool untuk menyiapkan dan memproses dataset gambar untuk pelatihan LoRA. | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SayMaven/ColabFoocus/blob/main/Dataset_Maker.ipynb) |
| **LoRA Trainer XL** | Notebook pelatihan (*training*) LoRA berbasis SDXL di Google Colab. | [![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/SayMaven/ColabFoocus/blob/main/Lora_Trainer_XL.ipynb) |

---

## ✨ Fitur Utama

- **Dukungan Ganda Arsitektur**:
  - **ANIMA**: Dukungan checkpoint dan LoRA khusus arsitektur ANIMA Turbo.
  - **SDXL**: Checkpoint Illustrious, NoobAI, Prefectious, WAI, VAE terdedikasi, dan Upscaler Anime.
- **Koleksi LoRA Terstruktur (600+ Model)**:
  - **Kluster Musik & Band Anime**: BanG Dream! (15 sel band lengkap), Girls Band Cry (GBC), Bocchi the Rock!, K-ON!.
  - **Kluster HoYoverse**: Honkai: Star Rail (ANIMA & SDXL), Zenless Zone Zero (ANIMA & SDXL), Genshin Impact, Honkai Impact 3rd.
  - **Kluster The Idolm@ster**: Gakuen Idolmaster & Cinderella Girls U149.
  - **Series Berpasangan (ANIMA & SDXL)**: Project Sekai, Watanare, Wataten, Girls und Panzer, Takopi no Genzai, Hoshizora no Memoria.
  - **Anime & Game Standalone**: Blue Archive, Date A Live, Fate/Prisma Illya, Uma Musume, Toaru Railgun, Vocaloid, Yuru Yuri, dll.
  - **Utilitas Generasi**: Slider pose, konsep artistik, pakaian, background, dan filter style visual.
- **Autentikasi Civitai Global**:
  - Konfigurasi token Civitai terpusat di satu sel setup (Cell 2) yang otomatis disuntikkan ke `wget` dan `aria2c`.
  - Mengunduh seluruh model berlisensi Civitai tanpa perlu query parameter token di setiap URL.
- **Jaringan & Tunnels (Port Standar: 7866)**:
  - Tunnel Cloudflare bawaan (`trycloudflare.com`).
  - Integrasi Ngrok cepat dengan port `7866`.
  - Link publik Gradio bawaan.

---

## 🌐 Katalog Web Interaktif & Trigger Words (Civitai Hub)

Jelajahi dan cari seluruh **600+ model (617 model aktif)** dengan antarmuka web modern, lengkap dengan thumbnail preview, filter arsitektur, parameter generasi contoh, tombol salin trigger words 1-klik, dan tautan resmi ke Civitai:

- 🚀 **[Buka Web Hub Interaktif (GitHub Pages)](https://saymaven.github.io/ColabFoocus/)** *(Atau buka langsung file [`catalog/index.html`](catalog/index.html) di browser secara offline)*
- 📚 **[Buka Dokumentasi Markdown (MODELS_CATALOG.md)](MODELS_CATALOG.md)**
- 🗄️ **[Download Database Raw (models_database.json)](models_database.json)**

---

## 📁 Struktur Direktori Repositori

```plaintext
ColabFoocus/
├── Foocus SayMaven.ipynb                    # Notebook utama (penyimpanan lokal /content/)
├── Foocus SayMaven Google Drive Mount.ipynb # Notebook utama (penyimpanan Google Drive)
├── add_model.py                             # Tool CLI otomatis penambah model Civitai & sinkronisasi ganda
├── Dataset_Maker.ipynb                      # Tool pembuat dataset
├── Lora_Trainer_XL.ipynb                    # Tool pelatihan LoRA SDXL
├── catalog/                                 # Web Hub Interaktif (Bisa dibuka offline / GitHub Pages)
│   ├── index.html                           # Tampilan Web App pencarian & preview model
│   ├── style.css                            # Desain glassmorphism dark aesthetic
│   ├── app.js                               # Logika search, filter, modal, copy triggers
│   └── data.js                              # Database offline 600+ model
├── index.html                               # Redirect otomatis ke catalog/
├── models_database.json                     # Database master metadata Civitai (JSON)
├── MODELS_CATALOG.md                        # Dokumentasi tabel lengkap format Markdown
├── NOTEBOOK_GUIDELINES.md                   # Pedoman lengkap struktur dan aturan pemeliharaan
├── GEMINI.md                                # Aturan otomatis workspace Antigravity/AI Agent
├── README.md                                # Dokumentasi utama repositori
├── assets/                                  # Gambar dan aset pendukung
└── archive/                                 # Arsip notebook versi sebelumnya (legacy)
```

---

## 🛠️ Cara Penggunaan

1. Klik tombol **Open In Colab** pada varian notebook yang diinginkan di atas.
2. Jalankan sel **Setup & Environment** (Cell 0 – 11) termasuk konfigurasi **Civitai Token Global** di Cell 2.
3. Jika menggunakan tunnel Ngrok, masukkan token Anda pada cell `NGROK_TOKEN`.
4. Pilih dan jalankan sel model Checkpoint, VAE, dan LoRA yang diinginkan.
5. Jalankan sel **Runner** (Gradio atau Tunnel) pada port `7866`.
6. Buka URL tunnel (Cloudflare, Ngrok, atau Gradio Live Link) untuk mulai menghasilkan gambar.

---

## ⚡ Menambahkan Model Baru Secara Otomatis (`add_model.py`)

Ingin menambahkan LoRA atau Checkpoint baru dari Civitai tanpa harus mengetik manual atau khawatir merusak sinkronisasi notebook? Gunakan script CLI [`add_model.py`](add_model.py):

```bash
# Tambahkan model via URL Civitai
python add_model.py https://civitai.com/models/827184/wai-illustrious-sdxl

# Atau cukup dengan Model ID Civitai
python add_model.py 827184

# Atau jalankan tanpa argumen untuk mode interaktif penuh
python add_model.py
```

### Keunggulan `add_model.py`:
- 🤖 **Auto Fetch Metadata Civitai**: Otomatis menarik judul asli, pembuat, model base, varian rilis, trigger words, dan preview image via Civitai API.
- 🎯 **Pilihan Versi Interaktif**: Jika model memiliki banyak varian/rilis versi (seperti WAI Illustrious dengan 17 versi), Anda dapat memilih versi yang diinginkan.
- 🏷️ **Kustomisasi Nama File Bersih**: Tentukan nama file yang rapi (ekstensi `.safetensors` dan suffix `_ANIMA` ditangani otomatis).
- 🔍 **Pencarian Sel Tanpa Hafal Nomor**: Cukup ketik kata kunci seperti `bangdream`, `poses`, `blue archive`, `style`, dsb.
- ➕ **Dukungan Seri Baru Otomatis**: Jika seri anime belum ada di notebook, pilih opsi `new` dan script akan otomatis membuat sel baru pada posisi alfabetis (A–Z) yang tepat.
- 🔄 **Sinkronisasi 1-to-1 Penuh**: Otomatis memperbarui kedua notebook (`Foocus SayMaven.ipynb` & Google Drive), mengurutkan baris secara alfabetis (A–Z), serta menyinkronkan `models_database.json`, `MODELS_CATALOG.md`, dan Web Hub `catalog/data.js` secara simultan.

---

## 📌 Pedoman Pemeliharaan (Maintenance Guidelines)

Untuk menjaga konsistensi repositori saat menambahkan atau memperbarui model:
- Perubahan pada salah satu notebook wajib **disinkronkan 1-to-1** ke notebook pasangannya.
- Semua perintah unduhan di dalam sel wajib diurutkan secara **alfabetis (A–Z)** berdasarkan nama file target.
- Panduan selengkapnya dapat dilihat di [NOTEBOOK_GUIDELINES.md](NOTEBOOK_GUIDELINES.md).
