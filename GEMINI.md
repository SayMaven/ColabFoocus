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
- [Cell 0–19]: Setup environment, git clone, mount, tunnels, dan runner gradio/tunnels (tidak boleh diubah).
- [Cell 20]: `# Checkpoint ANIMA`
- [Cell 21–29]: `# Checkpoint SDXL`
- [Cell 30–31]: `# VAE SDXL` & `# Upscale SDXL`
- [Cell 32–33]: `# Color Settings SDXL` & `# Embeddings SDXL`
- [Cell 34–48]: Kluster BanG Dream! (15 sel berdekatan)
- [Cell 49–51]: Kluster Music / Band Anime (GBC, Bocchi, K-ON)
- [Cell 52–57]: Kluster HoYoverse (Selalu 4 sel terpisah: HSR ANIMA & SDXL, ZZZ ANIMA & SDXL, Genshin, HI3)
- [Cell 58–59]: Kluster The Idolm@ster (Gakuen Idolmaster & U149)
- [Cell 60–71]: Series berpasangan ANIMA & SDXL (Project Sekai, Watanare, Wataten, GnP, Takopi, Hoshizora)
- [Cell 72–75]: Series ANIMA mandiri
- [Cell 76–101]: Series Standalone SDXL (Alfabetis A–Z)
- [Cell 102–103]: Random Characters (ANIMA lalu SDXL)
- [Cell 104–111]: General Utilities (Tool, Poses, Clothing, Concept, Background, Style, STYLE, FAVORITE)

## 5. Pengurutan Baris di Dalam Sel
- Baris perintah unduhan (`!test -f ... || wget/aria2c ...`) di dalam setiap sel **wajib diurutkan secara alfabetis (A–Z)** berdasarkan nama file target (`.safetensors` atau `.pt`).
- Komentar header (`# ...`) tetap berada di baris pertama.

## 6. Validasi Ketat
- Jalur pada `!test -f "<path>"` harus **sama persis karakter demi karakter** dengan output `wget -O "<path>"` atau `aria2c -o "<fname>"`.
- Hindari karakter non-ASCII (seperti `ƒ` hook) atau tanda seru `!` dalam nama file.
- Pastikan tidak ada link atau Civitai Model ID yang terduplikasi ke karakter berbeda.

Panduan lengkap dan detail dapat dilihat di [NOTEBOOK_GUIDELINES.md](file:///f:/CODE/Repo/ColabFoocus/NOTEBOOK_GUIDELINES.md).
