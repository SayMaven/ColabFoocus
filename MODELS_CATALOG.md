# 📚 Katalog Model, Trigger Words & Sumber Asli Civitai

Dokumen ini memuat seluruh daftar model (**620 model**) yang tersedia di notebook [Foocus SayMaven](Foocus%20SayMaven.ipynb), lengkap dengan nama file kustom, judul asli dari kreator di Civitai, tautan web resmi, arsitektur, dan trigger words untuk prompt.

> 💡 **Tips Penggunaan**:
> - **Nama File**: Cari nama ini di menu dropdown *Model* atau *LoRA* pada antarmuka Fooocus.
> - **Trigger Words**: Salin kata-kata pemicu ini ke prompt Fooocus untuk mengaktifkan fitur/karakter spesifik model.
> - **Tautan Web Sumber**: Klik nama model untuk membuka halaman web resmi di Civitai (melihat deskripsi lengkap, creator, atau showcase gambar pengguna lain).

---

## 📑 Daftar Isi Cepat

- [Checkpoint ANIMA (#checkpoint-anima)](#checkpoint-anima) *(1 model)*
- [Checkpoint SDXL (#checkpoint-sdxl)](#checkpoint-sdxl) *(22 model)*
- [VAE SDXL (#vae-sdxl)](#vae-sdxl) *(2 model)*
- [Upscale SDXL (#upscale-sdxl)](#upscale-sdxl) *(2 model)*
- [Color Settings SDXL (#color-settings-sdxl)](#color-settings-sdxl) *(2 model)*
- [Embeddings SDXL (#embeddings-sdxl)](#embeddings-sdxl) *(5 model)*
- [BangDream Group ANIMA (#bangdream-group-anima)](#bangdream-group-anima) *(6 model)*
- [STYLE ANIMA (#style-anima)](#style-anima) *(2 model)*
- [MewType ANIMA (#mewtype-anima)](#mewtype-anima) *(2 model)*
- [MewType SDXL (#mewtype-sdxl)](#mewtype-sdxl) *(2 model)*
- [All in One SDXL (#all-in-one-sdxl)](#all-in-one-sdxl) *(4 model)*
- [Poppin'Party SDXL (#poppin'party-sdxl)](#poppin'party-sdxl) *(6 model)*
- [Roselia SDXL (#roselia-sdxl)](#roselia-sdxl) *(5 model)*
- [Afterglow SDXL (#afterglow-sdxl)](#afterglow-sdxl) *(4 model)*
- [PastelPalettes SDXL (#pastelpalettes-sdxl)](#pastelpalettes-sdxl) *(7 model)*
- [HelloHappyWorld SDXL (#hellohappyworld-sdxl)](#hellohappyworld-sdxl) *(3 model)*
- [Morfonica SDXL (#morfonica-sdxl)](#morfonica-sdxl) *(3 model)*
- [Raise a Suilen SDXL (#raise-a-suilen-sdxl)](#raise-a-suilen-sdxl) *(5 model)*
- [MyGO!!!! SDXL (#mygo-sdxl)](#mygo-sdxl) *(5 model)*
- [Ave Mujica SDXL (#ave-mujica-sdxl)](#ave-mujica-sdxl) *(8 model)*
- [Soutsa Model SDXL (#soutsa-model-sdxl)](#soutsa-model-sdxl) *(10 model)*
- [GBC SDXL (#gbc-sdxl)](#gbc-sdxl) *(7 model)*
- [Bocchi the Rock SDXL (#bocchi-the-rock-sdxl)](#bocchi-the-rock-sdxl) *(4 model)*
- [K-ON SDXL (#k-on-sdxl)](#k-on-sdxl) *(6 model)*
- [Honkai Star Rail ANIMA (#honkai-star-rail-anima)](#honkai-star-rail-anima) *(4 model)*
- [Honkai Star Rail SDXL (#honkai-star-rail-sdxl)](#honkai-star-rail-sdxl) *(25 model)*
- [Zenless Zone Zero ANIMA (#zenless-zone-zero-anima)](#zenless-zone-zero-anima) *(1 model)*
- [Zenless Zone Zero SDXL (#zenless-zone-zero-sdxl)](#zenless-zone-zero-sdxl) *(4 model)*
- [Genshin SDXL (#genshin-sdxl)](#genshin-sdxl) *(1 model)*
- [Honkai Impact 3rd SDXL (#honkai-impact-3rd-sdxl)](#honkai-impact-3rd-sdxl) *(4 model)*
- [Gakuen Idolmaster SDXL (#gakuen-idolmaster-sdxl)](#gakuen-idolmaster-sdxl) *(16 model)*
- [THE iDOLM@STER Cinderella Girls: U149 SDXL (#the-idolmster-cinderella-girls-u149-sdxl)](#the-idolmster-cinderella-girls-u149-sdxl) *(13 model)*
- [Project Sekai ANIMA (#project-sekai-anima)](#project-sekai-anima) *(1 model)*
- [Project Sekai SDXL (#project-sekai-sdxl)](#project-sekai-sdxl) *(20 model)*
- [Watanare ANIMA (#watanare-anima)](#watanare-anima) *(6 model)*
- [Watanare SDXL (#watanare-sdxl)](#watanare-sdxl) *(7 model)*
- [Watashi ni Tenshi ga Maoirita ANIMA (#watashi-ni-tenshi-ga-maoirita-anima)](#watashi-ni-tenshi-ga-maoirita-anima) *(1 model)*
- [Watashi ni Tenshi ga Maoirita SDXL (#watashi-ni-tenshi-ga-maoirita-sdxl)](#watashi-ni-tenshi-ga-maoirita-sdxl) *(7 model)*
- [GnP ANIMA (#gnp-anima)](#gnp-anima) *(1 model)*
- [GnP SDXL (#gnp-sdxl)](#gnp-sdxl) *(3 model)*
- [Takopi no Genzai ANIMA (#takopi-no-genzai-anima)](#takopi-no-genzai-anima) *(2 model)*
- [Takopi no Genzai SDXL (#takopi-no-genzai-sdxl)](#takopi-no-genzai-sdxl) *(2 model)*
- [Hoshizora no Memoria ANIMA (#hoshizora-no-memoria-anima)](#hoshizora-no-memoria-anima) *(1 model)*
- [Hoshizora no Memoria SDXL (#hoshizora-no-memoria-sdxl)](#hoshizora-no-memoria-sdxl) *(7 model)*
- [Roshidere ANIMA (#roshidere-anima)](#roshidere-anima) *(2 model)*
- [Kamiina Botan Fully Blossom ANIMA (#kamiina-botan-fully-blossom-anima)](#kamiina-botan-fully-blossom-anima) *(6 model)*
- [Adachi to Shimamura ANIMA (#adachi-to-shimamura-anima)](#adachi-to-shimamura-anima) *(1 model)*
- [Chou Kaguya Hime ANIMA (#chou-kaguya-hime-anima)](#chou-kaguya-hime-anima) *(2 model)*
- [Akebi-chan no Sailor Fuku SDXL (#akebi-chan-no-sailor-fuku-sdxl)](#akebi-chan-no-sailor-fuku-sdxl) *(1 model)*
- [Arknights: endfield SDXL (#arknights-endfield-sdxl)](#arknights-endfield-sdxl) *(2 model)*
- [Blue Archive SDXL (#blue-archive-sdxl)](#blue-archive-sdxl) *(5 model)*
- [Citrus SDXL (#citrus-sdxl)](#citrus-sdxl) *(2 model)*
- [Date A Live SDXL (#date-a-live-sdxl)](#date-a-live-sdxl) *(20 model)*
- [Fate/Kalleid Liner Prisma Illya SDXL (#fatekalleid-liner-prisma-illya-sdxl)](#fatekalleid-liner-prisma-illya-sdxl) *(7 model)*
- [Gamers SDXL (#gamers-sdxl)](#gamers-sdxl) *(4 model)*
- [HELLO WORLD SDXL (#hello-world-sdxl)](#hello-world-sdxl) *(1 model)*
- [Hinako Note SDXL (#hinako-note-sdxl)](#hinako-note-sdxl) *(2 model)*
- [Hololive SDXL (#hololive-sdxl)](#hololive-sdxl) *(2 model)*
- [Idoly Pride SDXL (#idoly-pride-sdxl)](#idoly-pride-sdxl) *(2 model)*
- [Koisuru Otome SDXL (#koisuru-otome-sdxl)](#koisuru-otome-sdxl) *(1 model)*
- [Meitantei Precure SDXL (#meitantei-precure-sdxl)](#meitantei-precure-sdxl) *(1 model)*
- [Nukitashi the Animation SDXL (#nukitashi-the-animation-sdxl)](#nukitashi-the-animation-sdxl) *(9 model)*
- [One ROOM SDXL (#one-room-sdxl)](#one-room-sdxl) *(1 model)*
- [Oshi no Ko SDXL (#oshi-no-ko-sdxl)](#oshi-no-ko-sdxl) *(5 model)*
- [Sasayaku You ni Koi wo Utau SDXL (#sasayaku-you-ni-koi-wo-utau-sdxl)](#sasayaku-you-ni-koi-wo-utau-sdxl) *(2 model)*
- [Shoujou Ramune SDXL (#shoujou-ramune-sdxl)](#shoujou-ramune-sdxl) *(2 model)*
- [Summer Pocket SDXL (#summer-pocket-sdxl)](#summer-pocket-sdxl) *(5 model)*
- [Toaru Kagaku no Railgun SDXL (#toaru-kagaku-no-railgun-sdxl)](#toaru-kagaku-no-railgun-sdxl) *(6 model)*
- [Uma Musume SDXL (#uma-musume-sdxl)](#uma-musume-sdxl) *(4 model)*
- [Vocaloid SDXL (#vocaloid-sdxl)](#vocaloid-sdxl) *(3 model)*
- [Wonder Egg Priority SDXL (#wonder-egg-priority-sdxl)](#wonder-egg-priority-sdxl) *(2 model)*
- [WUWA SDXL (#wuwa-sdxl)](#wuwa-sdxl) *(6 model)*
- [Yagate kimi ni naru SDXL (#yagate-kimi-ni-naru-sdxl)](#yagate-kimi-ni-naru-sdxl) *(1 model)*
- [Yuru Yuri SDXL (#yuru-yuri-sdxl)](#yuru-yuri-sdxl) *(9 model)*
- [Random Character ANIMA (#random-character-anima)](#random-character-anima) *(3 model)*
- [Random Character SDXL (#random-character-sdxl)](#random-character-sdxl) *(15 model)*
- [Tool SDXL (#tool-sdxl)](#tool-sdxl) *(12 model)*
- [Poses SDXL (#poses-sdxl)](#poses-sdxl) *(84 model)*
- [Clothing SDXL (#clothing-sdxl)](#clothing-sdxl) *(12 model)*
- [Concept SDXL (#concept-sdxl)](#concept-sdxl) *(68 model)*
- [Background SDXL (#background-sdxl)](#background-sdxl) *(10 model)*
- [Style SDXL (#style-sdxl)](#style-sdxl) *(39 model)*
- [STYLE SDXL (#style-sdxl)](#style-sdxl) *(11 model)*
- [FAVORITE Classical Artstyle SDXL (#favorite-classical-artstyle-sdxl)](#favorite-classical-artstyle-sdxl) *(1 model)*

---

## Checkpoint ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AnimaTurboV1_1_ANIMA.safetensors` | [Anima](https://civitai.com/models/2458426) | **ANIMA** | *Tidak ada trigger khusus* |

## Checkpoint SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `LewDakaExplicitIllustraILV1.safetensors` | [LewDakaExplicitIllustraIL](https://civitai.com/models/2519299) | **SDXL** | *Tidak ada trigger khusus* |
| `NovaAnimeXLILV19.safetensors` | [Nova Anime XL](https://civitai.com/models/376130) | **SDXL** | *Tidak ada trigger khusus* |
| `REED_XXX_illustrious_SDXLV14.safetensors` | [REED_XXX_illustrious_SDXL](https://civitai.com/models/1717562) | **SDXL** | *Tidak ada trigger khusus* |
| `PlantMilk-FLAX.safetensors` | [Plant Milk 🌿 - Model Suite](https://civitai.com/models/1162518) | **SDXL** | *Tidak ada trigger khusus* |
| `PrefectIllustriousXLV1_5.safetensors` | [WAI-illustrious-SDXL](https://civitai.com/models/827184) | **SDXL** | *Tidak ada trigger khusus* |
| `prefectiousXLNSFW.safetensors` | [Prefectious XL NSFW](https://civitai.com/models/992378) | **SDXL** | *Tidak ada trigger khusus* |
| `NoobXLEpsilon1_1.safetensors` | [NoobAI-XL (NAI-XL)](https://civitai.com/models/833294) | **SDXL** | *Tidak ada trigger khusus* |
| `RaehoshiIllustXLV5_1.safetensors` | [Raehoshi illust XL](https://civitai.com/models/846917) | **SDXL** | *Tidak ada trigger khusus* |
| `WAIiLLNSFWSDXLV13.safetensors` | [WAI-illustrious-SDXL](https://civitai.com/models/827184) | **SDXL** | *Tidak ada trigger khusus* |
| `WAIiLLNSFWSDXLV15.safetensors` | [WAI-illustrious-SDXL](https://civitai.com/models/827184) | **SDXL** | *Tidak ada trigger khusus* |
| `WAIiLLNSFWSDXLV16.safetensors` | [WAI-illustrious-SDXL](https://civitai.com/models/827184) | **SDXL** | *Tidak ada trigger khusus* |
| `WAIiLLNSFWSDXLV17.safetensors` | [WAI-illustrious-SDXL](https://civitai.com/models/827184) | **SDXL** | *Tidak ada trigger khusus* |
| `GrayColor.safetensors` | [GrayColor - CustomModel](https://civitai.com/models/1440625) | **SDXL** | *Tidak ada trigger khusus* |
| `IllustriousNXT.safetensors` | [IllustriousNXT_XL by klaabu](https://civitai.com/models/1629360) | **SDXL** | *Tidak ada trigger khusus* |
| `IllusioN-R.safetensors` | [RIN IllusioN-R NSFW Illustrious](https://civitai.com/models/1604942) | **SDXL** | *Tidak ada trigger khusus* |
| `TanemoMix.safetensors` | [TanemoMix](https://civitai.com/models/1297977) | **SDXL** | *Tidak ada trigger khusus* |
| `CatCarrier.safetensors` | [Cat Carrier](https://civitai.com/models/860278) | **SDXL** | *Tidak ada trigger khusus* |
| `IchigoMilk.safetensors` | [IchigoMilk](https://civitai.com/models/1792053) | **SDXL** | *Tidak ada trigger khusus* |
| `SilanceMix.safetensors` | [Silence_Mix](https://civitai.com/models/1106264) | **SDXL** | *Tidak ada trigger khusus* |
| `UnholyDesireMixV5.safetensors` | [Unholy Desire Mix - Sinister Aesthetic (Illustrious)](https://civitai.com/models/1307857) | **SDXL** | *Tidak ada trigger khusus* |
| `UnholyDesireMixV7.safetensors` | [Unholy Desire Mix - Sinister Aesthetic (Illustrious)](https://civitai.com/models/1307857) | **SDXL** | *Tidak ada trigger khusus* |
| `JANKU.safetensors` | [✨ JANKU Trained + Chenkin & NoobAI + RouWei Illustrious XL ✨](https://civitai.com/models/1277670) | **SDXL** | *Tidak ada trigger khusus* |

## VAE SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `SDXLVAE.safetensors` | [SDXL VAE](https://civitai.com/models/296576) | **SDXL** | *Tidak ada trigger khusus* |
| `XL_VAE_C_G9_5.safetensors` | [XL_VAE_C](https://civitai.com/models/152040) | **SDXL** | *Tidak ada trigger khusus* |

## Upscale SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `RealESRGAN_x4Plus_Anime_6B.pt` | [RealESRGAN_x4Plus Anime 6B](https://civitai.com/models/147821) | **SDXL** | *Tidak ada trigger khusus* |
| `Remacri.safetensors` | [Remacri](https://civitai.com/models/147759) | **SDXL** | *Tidak ada trigger khusus* |

## Color Settings SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `ColorTemp.safetensors` | [(IL Slider \| Tweaker) Color Temperature, Saturation, Brightness \| 色温 亮度 饱和度 (IL/Noob调节滑块)](https://civitai.com/models/1093089) | **SDXL** | *Tidak ada trigger khusus* |
| `Sarturasi.safetensors` | [(IL Slider \| Tweaker) Color Temperature, Saturation, Brightness \| 色温 亮度 饱和度 (IL/Noob调节滑块)](https://civitai.com/models/1093089) | **SDXL** | *Tidak ada trigger khusus* |

## Embeddings SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `LazyHand.safetensors` | [✨ Lazy Embeddings for ALL illustrious NoobAI Pony SDXL models LazyPositive LazyNegative (Positive and Negative plus more!)](https://civitai.com/models/1302719) | **SDXL** | `lazyhand` |
| `LazyNegV2.safetensors` | [✨ Lazy Embeddings for ALL illustrious NoobAI Pony SDXL models LazyPositive LazyNegative (Positive and Negative plus more!)](https://civitai.com/models/1302719) | **SDXL** | `lazyneg` |
| `LazyPos.safetensors` | [✨ Lazy Embeddings for ALL illustrious NoobAI Pony SDXL models LazyPositive LazyNegative (Positive and Negative plus more!)](https://civitai.com/models/1302719) | **SDXL** | `lazypos` |
| `SmoothNegativeIllus.safetensors` | [Smooth Embeddings](https://civitai.com/models/1065154) | **SDXL** | `Smooth_Negative` |
| `SmoothPositiveIllus+.safetensors` | [Smooth Embeddings](https://civitai.com/models/1065154) | **SDXL** | `Smooth_Quality` |

## BangDream Group ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AfterglowCharacters_ANIMA.safetensors` | [Afterglow characters (BanG Dream!) \|   アフターグロウ (バンドリ!)](https://civitai.com/models/2718301) | **ANIMA** | `Mitake Ran,  holding instrument, electric guitar,`<br>`Aoba Moca,  holding instrument, electric guitar,`<br>`Uehara Himari, low twintails,  holding instrument, electric guitar,`<br>`Udagawa Tomoe,  holding drumsticks, drum set,`<br>*(+2 trigger lainnya)* |
| `HelloHappyWorldCharacters_ANIMA.safetensors` | [Hello, Happy World! characters (BanG Dream!) \|  ハロー、ハッピーワールド！ (バンドリ!)](https://civitai.com/models/2724976) | **ANIMA** | `Tsurumaki Kokoro, long hair,`<br>`Seta Kaoru, ponytail,  holding guitar, bass guitar,`<br>`Kitazawa Hagumi, short hair, antenna hair,  holding guitar, electric guitar,`<br>`Matsubara Kanon, long hair,  holding drumsticks, drum set,`<br>*(+5 trigger lainnya)* |
| `MorfonicaCharacters_ANIMA.safetensors` | [Morƒonica characters (BanG Dream!) \| モルフォニカ(バンドリ!)](https://civitai.com/models/2737204) | **ANIMA** | `Kurata Mashiro, short hair, hair between eyes,`<br>`Kirigaya Touko, long hair,  holding electric guitar instrument,`<br>`Hiromachi Nanami, long hair,  holding electric guitar instrument,`<br>`Futaba Tsukushi, twintails, long hair,  holding drumsticks, drum set,`<br>*(+2 trigger lainnya)* |
| `PastelPalettesCharacters_ANIMA.safetensors` | [Pastel✽Palettes characters (BanG Dream!) \| パステル パレット(バンドリ!)](https://civitai.com/models/2734456) | **ANIMA** | `Maruyama Aya, twintails,`<br>`Hikawa Hina, short hair, twin braids, side braids,  holding instrument, electric guitar,`<br>`Shirasagi Chisato, long hair,  holding instrument, electric guitar,`<br>`Yamato Maya, short hair, red-framed eyewear,  holding drumsticks, drum set,`<br>*(+3 trigger lainnya)* |
| `PoppinPartyCharacters_ANIMA.safetensors` | [Poppin'Party characters (BanG Dream!) \| ポッピン パーティー (バンドリ!)](https://civitai.com/models/2716089) | **ANIMA** | `Toyama Kasumi, star hair ornament,  holding instrument, electric guitar,`<br>`Ichigaya Arisa, x hair ornament, twintails,  keyboard (instrument),`<br>`Hanazono Tae,  holding instrument, electric guitar,`<br>`Yamabuki Saaya, yellow hair ribbon,  holding drumsticks,`<br>*(+2 trigger lainnya)* |
| `RoseliaCharacters_ANIMA.safetensors` | [Roselia characters (BanG Dream!) \|  ロゼリア (バンドリ!)](https://civitai.com/models/2716910) | **ANIMA** | `Minato Yukina,  holding microphone, microphone stand,`<br>`Hikawa Sayo,  holding instrument, electric guitar,`<br>`Imai Lisa, half updo,  holding instrument, electric guitar,`<br>`Udagawa Ako, twintails,  holding drumsticks, drum set,`<br>*(+3 trigger lainnya)* |

## STYLE ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `BangDreamAnime3DStyle_ANIMA.safetensors` | [Bang dream!  anime 3D Style for WAI](https://civitai.com/models/2482424) | **ANIMA** | `@bangdream` |
| `BangDreamPicoStyle_ANIMA.safetensors` | [bang dream pico style](https://civitai.com/models/1787608) | **ANIMA** | *Tidak ada trigger khusus* |

## MewType ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `8in1BangDreamYumeMita_ANIMA.safetensors` | [8 in 1 梦限大｜バンドリ！ ゆめ∞みた｜BanG Dream! YUMEMITA｜8合一角色日常形态 LoRA｜仲町阿拉蕾 / 仲町あられ / Arale Nakamachi、宫永乃乃香 / 宮永ののか / Nonoka Miyanaga、峰月律 / 峰月律 / Ritsu Minezuki、藤都子 / 藤都子 / Miyako Fuji、千石由乃 / 千石ユノ / Yuno Sengoku、薇欧拉 / ビオラ / Viola、贝尔 / ベル / Bell、波波 / ポポ / Popo](https://civitai.com/models/2925295) | **ANIMA** | `(Yuno Sengoku, ahoge, hairclip, x hair ornament, glasses, black-framed eyewear, red eyes, red hair, pink hair, blunt bangs, long hair, sidelocks),(Arale Nakamachi, hair over one eye, hair ornament, cat hair ornament, bear hair ornament, blonde hair, long hair, pink eyes),(Nonoka Miyanaga, long hair, braid, grey hair, sidelocks, hair between eyes, grey eyes, light blue hair, hair behind ear, pink eyes, french braid, blue hair),(Miyako Fuji, purple eyes, short hair, purple hair, swept bangs),(Ritsu Minetsuki, short hair, blue hair, grey eyes, purple eyes),(viola, hair ornament, hair bun, single side bun, hairclip, x hair ornament, green hair, brown eyes, green eyes, long hair),(Bell, hairband, hair ribbon, green ribbon, yellow eyes, long hair, red hair, low ponytail, multicolored hair, orange hair, ponytail),(Popo, earrings, purple eyes, purple hair, dark skin, dark-skinned female, short hair)` |
| `ViolaBangDream_ANIMA.safetensors` | [[ANIMA/ILXL] Viola ビオラ \| BanG Dream! Yume∞Mita バンドリ！ ゆめ∞みた](https://civitai.com/models/2836349) | **ANIMA** | `<lora:viola-bang_dream!_yume_mita_s1-ana-anime-soralz:1>, viola (bang dream! yume mita), long hair, green hair, single side bun, hairclip, hairpin, green eyes, mole under mouth`<br>`school uniform, high collar, two-tone jacket, cropped jacket, emblem, long sleeves, double breasted, black skirt, black socks, loafers`<br>`ribbed sweater, long sleeves, pink camisole dress, long dress, black heels`<br>`purple dress, pink collar, purple neck ribbon, frills, puffy long sleeves, black mary janes` |

## MewType SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `NakamachiArale.safetensors` | [BanG Dream! YUME∞MITA_NAKAMACHI ARALE丨BanG Dream! ゆめ∞みた_仲町あられ](https://civitai.com/models/2864243) | **SDXL** | `NAKAMACHI ARALE` |
| `ViolaBangDream.safetensors` | [ビオラ \| Viola \| 薇歐拉 from「BanG Dream! YUME∞MITA」](https://civitai.com/models/2792905) | **SDXL** | *Tidak ada trigger khusus* |

## All in One SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AveMujica5in1NoobXL.safetensors` | [five in one \| NoobAI-XL-E11 \| ave mujica (bang dream!)](https://civitai.com/models/1367667) | **SDXL** | `ave mujica \(bang dream!\),`<br>`1gir, togawa sakiko,`<br>`1gir, wakaba mutsumi,`<br>`1gir, yuutenji nyamu,`<br>*(+2 trigger lainnya)* |
| `AveMujicaAllinOne.safetensors` | [[NoobXL] 颂乐人偶 全角色 \| BanG Dream! Ave mujica All in One](https://civitai.com/models/1097124) | **SDXL** | `togawa sakiko`<br>`wakaba mutsumi`<br>`misumi uika`<br>`yahata umiri`<br>*(+1 trigger lainnya)* |
| `MorfonicaALLinOne.safetensors` | [蝶团全角色 \| BanG Dream! Morfonica All in One](https://civitai.com/models/1046541) | **SDXL** | `kurata mashiro`<br>`kirigaya toko`<br>`futaba tsukushi`<br>`yashio rui`<br>*(+1 trigger lainnya)* |
| `MyGO7in1.safetensors` | [[IllustriousXL] MyGO角色合集 \| BanG Dream! It's MyGO!!!!! 7 in 1](https://civitai.com/models/862812) | **SDXL** | `takamatsu tomori`<br>`chihaya anon, grey eyes, pink hair`<br>`nagasaki soyo, blue eyes, brown hair`<br>`shiina taki, mole under eye`<br>*(+3 trigger lainnya)* |

## Poppin'Party SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HanazonoTae.safetensors` | [Hanazono Tae [BanG Dream]](https://civitai.com/models/1472906) | **SDXL** | `tae` |
| `IchigayaArisa_HELPMEEADICE.safetensors` | [[TV/3D]市ヶ谷有咲 市谷有咲 Ichigaya Arisa](https://civitai.com/models/2008884) | **SDXL** | `ichigaya arisa, cel shading,`<br>`ichigaya arisa,`<br>`cel shading,` |
| `PoppinPartyALLMEMBER_HELPMEEADICE.safetensors` | [[TV/3D]ポピパ Poppin`Party 全员/All members](https://civitai.com/models/2013855) | **SDXL** | `toyama kasumi,`<br>`ichigaya arisa,`<br>`yamabuki saaya,blue eyes,ribbon,ponytail,brown hair,`<br>`ushigome rimi,short hair,red eyes,`<br>*(+2 trigger lainnya)* |
| `ToyamaKasumi_PRAELATUS.safetensors` | [Toyama Kasumi [BanG Dream]](https://civitai.com/models/1671055) | **SDXL** | `kasumi` |
| `UshigomeRimi.safetensors` | [Ushigome Rimi [BanG Dream]](https://civitai.com/models/1680261) | **SDXL** | `rimi` |
| `YamabukiSaaya.safetensors` | [Yamabuki Saaya [BanG Dream]](https://civitai.com/models/1696220) | **SDXL** | `saaya` |

## Roselia SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HikawaSayo.safetensors` | [Hikawa Sayo [BanG Dream]](https://civitai.com/models/1734304) | **SDXL** | `hikawasayo` |
| `LisaImai.safetensors` | [Imai Lisa [BanG Dream]](https://civitai.com/models/1572219) | **SDXL** | `lisa_imai` |
| `MinatoYukina.safetensors` | [Minato Yukina [BanG Dream]](https://civitai.com/models/1461075) | **SDXL** | `yukina` |
| `ShirokaneRinko.safetensors` | [Shirokane Rinko [BanG Dream]](https://civitai.com/models/1719079) | **SDXL** | `shirokanerinko` |
| `UdagawaAko.safetensors` | [Udagawa Ako [BanG Dream]](https://civitai.com/models/1713475) | **SDXL** | `udagawaako` |

## Afterglow SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AobaMoca.safetensors` | [Moca Aoba](https://civitai.com/models/120430) | **SDXL** | `mocachan, short hair, grey hair, blue eyes, green eyes, medium breasts` |
| `HimariUehara.safetensors` | [BanG Dream! - Himari Uehara - Illu](https://civitai.com/models/1713023) | **SDXL** | `Uehara_Himari_Ban_Dori, green eyes, pink hair, long hair, breasts, low twintails` |
| `MitakeRan.safetensors` | [2套衣服 Mitake Ran \| BanG Dream！](https://civitai.com/models/1643012) | **SDXL** | `Mitake Ran,black hair,bob cut,multicolored hair,pink eyes,red hair,short hair,streaked hair,` |
| `UdagawaTomoe.safetensors` | [2套衣服 宇田川巴 Tomoe Udagawa \| BanG Dream!](https://civitai.com/models/1626819) | **SDXL** | `tomoe udagawa,blue eyes,long hair,red hair,`<br>`china dress,chinese clothes,chinese clothes,ponytail,elbow gloves,floral print,hair ornament,aqua footwear,asymmetrical clothes,asymmetrical sleeves,black gloves,jewelry,obi,pants,torn clothes,single sleeve,uneven sleeves`<br>`v-shaped eyebrows` |

## PastelPalettes SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HikawaHina.safetensors` | [BanG Dream! - Hina Hikawa - Illu](https://civitai.com/models/1696390) | **SDXL** | `Hikawa_Hina_Ban_Dori, short hair, aqua hair, green eyes, braid, breasts` |
| `MaruyamaAyaNoobAI.safetensors` | [Maruyama Aya (丸山彩) TITLE IDOL \| BanG Dream \| NoobAI](https://civitai.com/models/1457339) | **SDXL** | `Maruyama Aya,`<br>`twintails,sidelocks,pink footwear,white thighhighs,white gloves,puffy sleeves,frills,jewelry,pink bow,long sleeves,earrings,hair ornament,dress,hair ribbon,high heels,bowtie,overskirt,short sleeves,center frills,layered skirt,` |
| `ShirasagiChisato.safetensors` | [BanG Dream! - Chisato Shirasagi - Illu](https://civitai.com/models/1706373) | **SDXL** | `Shirasagi_Chisato_Ban_Dori, long hair, blonde hair, purple eyes` |
| `WakamiyaEve.safetensors` | [Eve Wakamiya (Bang Dream!)](https://civitai.com/models/73956) | **SDXL** | `long hair`<br>`twin braids`<br>`white hair, blue eyes, aqua eyes` |
| `YamatoMaya_Duongve.safetensors` | [Yamato Maya \| BanG Dream! \| バンドリ!](https://civitai.com/models/2230810) | **SDXL** | `yamato maya` |
| `YamatoMaya_HELPMEEADICE.safetensors` | [[TV/3D]大和麻弥 Yamato Maya](https://civitai.com/models/2350893) | **SDXL** | `yamato maya,cel shading,`<br>`yamato maya,`<br>`cel shading,` |
| `YamatoMaya_Skadi.safetensors` | [Maya Yamato (Bang Dream!)](https://civitai.com/models/112341) | **SDXL** | `huhehe, brown hair, short hair, green eyes`<br>`glasses, half-rimmed eyewear, red-framed eyewear, under-rim eyewear` |

## HelloHappyWorld SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `MatsubaraKanon.safetensors` | [IllustriousXL - Matsubara Kanon 松原 花音 BanG Dream!](https://civitai.com/models/914058) | **SDXL** | `kanon matsubara,purple eyes,blue hair,ribbon,long hair,one side up` |
| `OkusawaMisaki.safetensors` | [BanG Dream! Misaki Okusawa](https://civitai.com/models/785121) | **SDXL** | `Misaki Okusawa` |
| `TsurumakiKokoro.safetensors` | [(Pony/IL) Tsurumaki Kokoro Bang Dream! \| バンドリ   (3 outfits)](https://civitai.com/models/642869) | **SDXL** | `tsurumaki kokoro`<br>`hanasakigawa school uniform`<br>`kokorohhw`<br>`kokoroalt` |

## Morfonica SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `KurataMashiroAiden2023.safetensors` | [仓田真白/Kurata Mashiro \| BanG Dream! Morfonication](https://civitai.com/models/1043016) | **SDXL** | `kurata mashiro, white hair` |
| `KurataMashiroAlterb0x.safetensors` | [Kurata Mashiro - Bang Dream!](https://civitai.com/models/576347) | **SDXL** | *Tidak ada trigger khusus* |
| `KurataMashiroKafuuChino.safetensors` | [Kurata Mashiro 倉田真白 BangDream! IllustriousXL](https://civitai.com/models/875410) | **SDXL** | `kurata mashiro`<br>`blue school uniform`<br>`white hair`<br>`blue eyes`<br>*(+2 trigger lainnya)* |

## Raise a Suilen SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AsahiRokka.safetensors` | [Asahi Rokka LOCK [BanG Dream]](https://civitai.com/models/1823520) | **SDXL** | `asahirokka` |
| `NyubaraReona.safetensors` | [Nyubara Reona PAREO [BanG Dream]](https://civitai.com/models/1465369) | **SDXL** | `pareo` |
| `SatoMasukiPony.safetensors` | [BangDream \|\| RAISE A SUILEN \|\| MASKING (Masuki Sato)](https://civitai.com/models/1071150) | **SDXL** | `MASKING` |
| `TamadeChiyuPony.safetensors` | [BangDream \|\| RAISE A SUILEN \|\| CHU² (Chiyu Tamade)](https://civitai.com/models/1077336) | **SDXL** | `Chiyu Tamade`<br>`ahoge`<br>`blue eyes`<br>`very long hair`<br>*(+1 trigger lainnya)* |
| `WakanaReiPony.safetensors` | [BangDream \|\| RAISE A SUILEN \|\| LAYER (Wakana Rei)](https://civitai.com/models/1007571) | **SDXL** | `LAYER`<br>`NORMAL-A-numbers`<br>`SWIM SUIT-A-numbers` |

## MyGO!!!! SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `ChihayaAnon.safetensors` | [BangDream \|\| MyGO!!!!! \|\| 千早 爱音 (Chihaya Anon)](https://civitai.com/models/1495194) | **SDXL** | `<LORA:CHIHAYA ANONV1-NUCLEAR1811-IL:1>,CHIHAYA ANON,GREY EYES,LONG HAIR,BANGS,PINK HAIR` |
| `KanameRaana.safetensors` | [BangDream \|\| MyGO!!!!! \|\| 要 乐奈 (Kaname Rana)](https://civitai.com/models/1808026) | **SDXL** | `<lora:Kaname RanaV1-Nuclear1811-IL:1>,heterochromia,Kaname Rana,yellow eyes,blue eyes,silver hair,short hair,bangs,` |
| `NagasakiSoyo.safetensors` | [BangDream \|\| MyGO!!!!! \|\| 长崎 爽世 (Nagasaki Soyo)](https://civitai.com/models/1552957) | **SDXL** | `<lora:Nagasaki SoyoV1-Nuclear1811-IL>,Nagasaki Soyo,blue eyes,brown hair,long hair,bangs,parted bangs,` |
| `ShiinaTaki.safetensors` | [BangDream \|\| MyGO!!!!! \|\| 椎名 立希 (Shiina Taki)](https://civitai.com/models/1477293) | **SDXL** | `<lora:Shiina TakiV1-Nuclear1811-IL:1>,Shiina Taki,purple eyes,black hair,long hair,bangs,mole,mole under eye,` |
| `TakamatuTomori.safetensors` | [BangDream \|\| MyGO!!!!! \|\| 高松 燈 (Takamatsu Tomori)](https://civitai.com/models/1460118) | **SDXL** | `<lora:Takamatsu TomoriV1-Nuclear1811-IL>,Takamatsu Tomori,red eyes,short hair,grey hair,bangs,` |

## Ave Mujica SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `MisumiUika_Nuclear1811.safetensors` | [BangDream \|\| Ave Mujica \|\| 三角 初華\音 (Misumi Uika \ Hatsune) \|\| Pony & illustrious](https://civitai.com/models/1316113) | **SDXL** | `<lora:Misumi UikaV2-IL>,Misumi Uika,blonde hair,purple eyes,medium hair,hair between eyes,bangs,` |
| `MisumiUika_soralz.safetensors` | [[ILXL] Uika Misumi 三角初華 \| BanG Dream! Ave Mujica](https://civitai.com/models/1423504) | **SDXL** | `<lora:uika_misumi-bang_dream!_ave_mujica_s1-v2-ixl-anime-soralz:1>, uika misumi (bang dream! ave mujica), medium hair, blonde hair, hair between eyes, purple eyes`<br>`hanasakigawa school uniform, sailor collar, brown dress, ribbon, double-breasted, long sleeves, black pantyhose, brown loafers`<br>`alt school uniform, sailor collar, white shirt, neckerchief, short sleeves, pleated skirt, socks, uwabaki`<br>`casual outfit, black cap, white shirt, short sleeves, high-waist skirt, long skirt, socks, black sneakers`<br>*(+2 trigger lainnya)* |
| `SumitaMana.safetensors` | [BangDream \|\| Ave Mujica \|\| 純田 まな (Sumita Mana) \|\| Pony & illustrious](https://civitai.com/models/1360248) | **SDXL** | `Sumita Mana,brown eyes,brown hair,long hair,bangs,` |
| `TogawaSakiko_Nuclear1811.safetensors` | [BangDream \|\| Ave Mujica \|\| 豊川 祥子(Togawa Sakiko)](https://civitai.com/models/1272633) | **SDXL** | `<lora:Togawa SakikoV1-IL>,twintails,braid,Togawa Sakiko,yellow eyes,blue hair,long hair,bangs,blunt bangs,wavy hair,two side up,saki ribbon,saki hair ribbon,saki black ribbon,` |
| `TogawaSakiko_RikuMiyashiro.safetensors` | [Sakiko Togawa \| 豊川祥子 / Oblivionis \| オブリビオニス (BanG Dream! \| バンドリ！)](https://civitai.com/models/1282932) | **SDXL** | `sakikotogawa_bandori, long hair, hair ribbon, yellow eyes` |
| `WakabaMutsumi.safetensors` | [BangDream \|\| Ave Mujica \|\| 若葉 睦 (Wakaba Mutsumi) \|\| Pony & illustrious](https://civitai.com/models/1343978) | **SDXL** | `hairclip,Wakaba Mutsumi,yellow eyes,long hair,green hair,bangs,blunt bangs,hair ornament,` |
| `YahataUmiri.safetensors` | [BangDream \|\| Ave Mujica \|\| 八幡 海铃(Yahata Umiri) \|\| Pony & illustrious](https://civitai.com/models/1326356) | **SDXL** | `Yahata Umiri,green eyes,black hair,medium hair,bangs,` |
| `YutenjiNyamu.safetensors` | [BangDream \|\| Ave Mujica \|\| 祐天寺 若麦(Yuutenji Nyamu) \|\| Pony & illustrious](https://civitai.com/models/1307396) | **SDXL** | `<lora:Yuutenji NyamuV2-IL:1>,Yuutenji Nyamu,pink eyes,purple hair,short hair,` |

## Soutsa Model SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HanazonoTaeSoutsa.safetensors` | [Tae Hanazono - Bang Dream!](https://civitai.com/models/1771700) | **SDXL** | `htae`<br>`brown hair, very long hair, single sidelock, hair between eyes, hair behind ear, green eyes, official style, anime screenshot,`<br>`hanasakigawa school uniform, white sailor collar, serafuku, brown shirt, red ribbon, neck ribbon, brown skirt, kneehighs, dark blue socks, loafers,` |
| `MaruyamaAyaSoutsa.safetensors` | [Maruyama Aya - Bang Dream](https://civitai.com/models/1612283) | **SDXL** | `4ya`<br>`maruyama aya`<br>`pink hair`<br>`pink eyes` |
| `MatsubaraKanonSoutsa.safetensors` | [Matsubara Kanon - Bang Dream - IL](https://civitai.com/models/1637282) | **SDXL** | `k4non`<br>`light blue hair, purple eyes, long hair, one side up, hair ribbon, green hair ribbon,` |
| `MisakiTakasakiSoutsa.safetensors` | [Misaki Takasaki - Oomuro-ke ( Yuru Yuri )](https://civitai.com/models/1684008) | **SDXL** | `Tmisaki`<br>`blonde hair,  long hair, twintails, red eyes`<br>`white shirt, neck ribbon, red ribbon, suspender skirt, red skirt, white kneehighs,  red uwabaki,` |
| `OomuroHanakoSoutsa.safetensors` | [Hanako Oomuro - Oomuro-ke ( Yuru Yuri )](https://civitai.com/models/1681803) | **SDXL** | `Ohanako`<br>`very long hair, brown hair, brown eyes,`<br>`school uniform, short sleeves, suspender skirt, red skirt, neck ribbon, red ribbon, white kneehighs, loafers,`<br>`green pinafore dress, white shirt, long sleeves, white kneehighs,` |
| `OomuroNadeshikoSoutsa.safetensors` | [Nadeshiko Oomuro - Oomuro-ke ( Yuru Yuri )](https://civitai.com/models/1685593) | **SDXL** | `Onadeshiko`<br>`short hair, blonde hair, brown eyes, small breasts,`<br>`school uniform, blue sweater, collared shirt, white shirt, dark blue necktie,  pleated skirt, dark blue skirt,  white kneehighs, loafers,` |
| `TakamatsuTomoriSoutsa.safetensors` | [Takamatsu Tomori - BanG Dream! MyGO!!!!](https://civitai.com/models/1725355) | **SDXL** | `Tomor1`<br>`short hair, purple hair, single sidelock, hair behind ear, pink eyes,`<br>`haneoka school uniform, green necktie, diagonal-striped necktie, collared shirt, white shirt, grey jacket, plaid skirt, pleated skirt, green skirt, dark green socks, kneehighs, green uwabaki,` |
| `ToyamaKasumiSoutsa.safetensors` | [Toyama Kasumi - BanG Dream!](https://civitai.com/models/1777131) | **SDXL** | `Tkasumi`<br>`medium hair, brown hair, double bun, hair bun, hair ears, sidelocks, star hair ornament, star \(symbol\), purple eyes, anime screenshot,`<br>`hanasakigawa school uniform, white sailor collar, serafuku, brown shirt, red ribbon, neck ribbon, brown skirt, kneehighs, dark blue socks, loafers,` |
| `UshigomeRimiSoutsa.safetensors` | [Ushigome Rimi - BanG Dream!](https://civitai.com/models/1784745) | **SDXL** | `r1m1`<br>`short hair,dark blue hair, hair flaps, blunt bangs, red eyes,`<br>`hanasakigawa school uniform, white sailor collar, serafuku, brown shirt, red ribbon, neck ribbon, brown skirt, kneehighs, dark blue socks, loafers,` |
| `YamabukiSaayaSoutsa.safetensors` | [Yamabuki Saaya - Bang Dream](https://civitai.com/models/1613635) | **SDXL** | `s4aya`<br>`Brown Hair, Blue Eyes, Ponytail, yamabuki saya, yellow ribbon, hair ribbon,` |

## GBC SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `GBCstyle.safetensors` | [Girls Band Cry_style 丨闺泣画风](https://civitai.com/models/1283344) | **SDXL** | `3D` |
| `HinaGBC.safetensors` | [【Illustrious&pony】Girls Band Cry_HINA丨闺泣_雏丨ガールズバンドクライ_ヒナ](https://civitai.com/models/779426) | **SDXL** | `GBC_HINA` |
| `MomokaKawaragi.safetensors` | [Girls Band Cry_MOMOKA KAWARAGI丨闺泣_河原木桃香](https://civitai.com/models/1363440) | **SDXL** | `MOMOKAKAWARAGI` |
| `NinaIseri.safetensors` | [Girls Band Cry_NINA ISERI丨闺泣_井芹仁菜](https://civitai.com/models/1301117) | **SDXL** | `NINAISERI` |
| `Rupa.safetensors` | [【Illustrious&pony】Girls Band Cry_RUPA丨闺泣_鲁帕丨ガールズバンドクライ_ルパ](https://civitai.com/models/775711) | **SDXL** | `GBC_RUPA` |
| `SubaruAwa.safetensors` | [Girls Band Cry_AWA Subaru丨闺泣_安和昴](https://civitai.com/models/1301092) | **SDXL** | `SUBARUAWA` |
| `TomoEbizuka.safetensors` | [【Illustrious&pony】Girls Band Cry_TOMO EBIZUKA丨闺泣_海老塚智丨ガールズバンドクライ_えびづか とも](https://civitai.com/models/530838) | **SDXL** | `GBC_TOMO,red eyes,wavy hair,short hair,brown hair,` |

## Bocchi the Rock SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `GotohHitori.safetensors` | [Hitori Gotoh (Bocchi-chan) LoRA Version \|\| Bocchi The Rock](https://civitai.com/models/289860) | **SDXL** | `Bocchi, cube hair ornament, pink hair, long hair, blue eyes, hair between eyes,bangs, sidelocks` |
| `IjichiNijika.safetensors` | [Bocchi the Rock! \|\| 伊地知 虹夏 (Ijichi Nijika) \|\| 13outfits](https://civitai.com/models/1386416) | **SDXL** | `<lora:Ijichi NijikaV1-IL>,ahoge,sidelocks,scrunchie,Ijichi Nijika,red eyes,blonde hair,long hair,very long hair,bangs,side ponytail,hair ornament,hair scrunchie,` |
| `IkuyoKita.safetensors` | [Ikuyo Kita \|\| Bocchi The Rock!](https://civitai.com/models/1363621) | **SDXL** | `kita_btr, long hair, green eyes, red hair, hair between eyes, bangs,`<br>`maid headdress, maid, maid apron, dress, white apron, short sleeves,black dress, puffy sleeves,`<br>`school uniform, sailor collar, red bow, white sailor collar, short sleeves, shirt, bowtie, serafuku, buttons, red bowtie`<br>`black shirt, grey skirt, pleated skirt, t-shirt, short sleeves,`<br>*(+1 trigger lainnya)* |
| `YamadaRyo.safetensors` | [Bocchi the Rock! \|\| 山田 リョウ (Yamada Ryo) \|\| 15outfits](https://civitai.com/models/1246448) | **SDXL** | `stud earrings,earrings,hairclip,mole,Ryo Yamada,blue hair,short hair,bangs,hair ornament,hair over one eye,eyes visible through hair,yellow eyes,mole under eye,` |

## K-ON SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AzusaNakano.safetensors` | [Azusa "Azu-nyan" Nakano (中野 梓) - K-ON! (けいおん!)](https://civitai.com/models/1529337) | **SDXL** | `azusa nakano, nakano azusa, black hair, brown eyes, long hair, twintails, anime screencap`<br>`sakuragaoka high school uniform, school uniform, uniform, blazer, shirt, white shirt, collared shirt, skirt, pleated skirt,` |
| `HirasawaUi.safetensors` | [Ui Hirasawa (平沢 憂) - K-ON! (けいおん!)](https://civitai.com/models/1529339) | **SDXL** | `ui hirasawa, short hair, brown hair, brown eyes, ponytail, anime screencap`<br>`sakuragaoka high school uniform, school uniform, uniform, blazer, shirt, white shirt, collared shirt, skirt, pleated skirt,` |
| `HirasawaYui.safetensors` | [Yui Hirasawa (平沢 唯) - K-ON! (けいおん!)](https://civitai.com/models/1529307) | **SDXL** | `yui hirasawa, hirasawa yui, brown eyes, brown hair, hair ornament, hairclip, medium hair, mature female, small breasts, anime screencap`<br>`black pantyhose, blazer, blue jacket, blue ribbon, blue skirt, buttons, collared shirt, jacket, long sleeves, neck ribbon, pantyhose, pleated skirt, ribbon, sakuragaoka high school uniform, school uniform, shirt, skirt, white shirt, winter uniform,` |
| `MioAKiyama.safetensors` | [Mio Akiyama (秋山 澪) - K-ON! (けいおん!)](https://civitai.com/models/1529309) | **SDXL** | `mio akiyama, akiyama mio, long hair, bangs, black hair, black eyes, hime cut, mature female, medium breasts, anime screencap`<br>`sakuragaoka high school uniform, school uniform, uniform, blazer, shirt, white shirt, collared shirt, skirt, pleated skirt,` |
| `RitsuTainaka.safetensors` | [Ritsu "Ricchan" Tainaka (田井中 律) - K-ON! (けいおん!)](https://civitai.com/models/1529311) | **SDXL** | `ritsu tainaka, tainaka ritsu, short hair, brown hair, brown eyes, hairband, forehead, anime screencap`<br>`sakuragaoka high school uniform, school uniform, uniform, blazer, shirt, white shirt, collared shirt, skirt, pleated skirt,` |
| `TsumugiKotobuki.safetensors` | [Tsumugi "Mugi" Kotobuki (琴吹 紬) - K-ON! (けいおん!)](https://civitai.com/models/1529338) | **SDXL** | `tsumugi kotobuki, kotobuki tsumugi, long hair, blue eyes, blonde hair, thick eyebrows, mature female, medium breasts, anime screencap`<br>`sakuragaoka high school uniform, school uniform, uniform, blazer, shirt, white shirt, collared shirt, skirt, pleated skirt,` |

## Honkai Star Rail ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `Bronya_ANIMA.safetensors` | [Bronya (Honkai: Star Rail) \| 布洛妮娅 (崩坏：星穹铁道)](https://civitai.com/models/2833750) | **ANIMA** | `hsr-br0ny4, grey hair, long hair, grey eyes, drill hair, hair between eyes,`<br>`elbow gloves, thigh boots, earrings, jewelry, black footwear, white dress, bare shoulders, brown gloves, pantyhose, thighhighs, breasts, black gloves, detached sleeves, crossed bangs, sleeveless,`<br>`holding weapon, holding gun,` |
| `Firefly_ANIMA_CL_V1.safetensors` | [firefly 流萤](https://civitai.com/models/2667645) | **ANIMA** | `liuying (honkai: star rail),1girl,` |
| `Robin_ANIMA.safetensors` | [Robin 知更鸟 - Honkai: Star Rail Anima](https://civitai.com/models/2833623) | **ANIMA** | `robin \(hsr\), halo, blue hair,long hair, blue eyes,hair between eyes, head wings, bare shoulders, strapless, white and blue dress, blue footwear,high heels` |
| `RobinSummeretto_ANIMA.safetensors` | [[Anima] robin summeretto  知更鸟 晴歌 ( 崩坏星穹铁道 \| honkai:star rail )](https://civitai.com/models/2783664) | **ANIMA** | `robin \(summeretto\) \(honkai: star rail\)` |

## Honkai Star Rail SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `Acheron.safetensors` | [Acheron - Honkai Star Rail - Illustrious](https://civitai.com/models/1470193) | **SDXL** | `ach-eron, 1girl, purple eyes, hair ornament, hair over one eye, purple hair, long hair`<br>`ach-eron, 1girl, red eyes, hair ornament, hair over one eye, white hair, very long hair, alter`<br>`ach-eron, ach-suit, 1girl, purple eyes, hair ornament, hair over one eye, purple hair, long hair, solo, gloves, single shoulder pad, asymmetrical clothing, midriff, coat, halterneck, cleavage, choker, crop top, wide sleeve, elbow glove, black gloves, black shorts, belt, thigh boot, knee boot, asymmetrical legwear, leg tattoo, fingerless gloves, sleeve train` |
| `Aglaea.safetensors` | [[IL & PONY & SD1.5] Honkai Star Rail - Aglaea \| 阿格莱雅](https://civitai.com/models/1267221) | **SDXL** | `aglaea, laurel crown, necklace, chest tattoo, detached sleeves, bracelet, thigh strap, high heels` |
| `ArtoriaPendragon.safetensors` | [Artoria Pendragon - Honkai StarRail Collab - [Illustrious]](https://civitai.com/models/1611616) | **SDXL** | `saberhsr`<br>`blonde hair, 1girl, solo, ahoge, pantyhose, dress, ribbon, braid, green eyes, blue dress, hair ribbon, long sleeves, bow,single_pauldron` |
| `Castorice.safetensors` | [Castorice - Honkai Star Rail - Illustrious](https://civitai.com/models/1618789) | **SDXL** | `cas-hs, 1girl, purple eyes, white pupils, grey hair, gradient hair, hair flower, tiara, very long hair, low twintails, pointy ears, black hair bow`<br>`cas-hs, cas_suit, 1girl, purple eyes, white pupils, grey hair, gradient hair, hair flower, tiara, very long hair, low twintails, pointy ears, black hair bow, bandage dress, bare shoulders, butterfly, single frilled glove, single elbow glove, arm garter, white thigh boots, torn thigh boots, asymmetrical thigh boots` |
| `Cerydra.safetensors` | [【Honkai Star Rail】Cerydra丨刻律德菈丨ケリュドラ](https://civitai.com/models/1762373) | **SDXL** | `Cerydra \(honkai: star rail\)` |
| `Cyrine.safetensors` | [Honkai Star Rail: cyrene丨崩铁：昔涟](https://civitai.com/models/1601644) | **SDXL** | `cyrene \(honkai: star rail\)` |
| `Firefly.safetensors` | [Firefly \| Honkai: Star Rail (4 outfits)](https://civitai.com/models/1148092) | **SDXL** | `Fireflydef`<br>`AR26710`<br>`Fireflysuit` |
| `HertaDoll.safetensors` | [Herta (doll) - Honkai Star Rail - Illustrious](https://civitai.com/models/1477428) | **SDXL** | `mini-hert, 1girl, grey hair, purple eyes, beret, long hair, hair flower`<br>`mini-hert, mini-outfit, 1girl, joints, doll joints, grey hair, purple eyes, beret, long hair, hair flower, choker, bare shoulders, shoulder cutout, white dress, black coat, long sleeves, ribbon, chain, shoes` |
| `HuoHuo.safetensors` | [HuoHuo - Honkai Star Rail (Pony + IL)](https://civitai.com/models/800725) | **SDXL** | `HuoHuo` |
| `HuoHuoinGame.safetensors` | [Huohuo Honkai Star Rail Ingame](https://civitai.com/models/1654239) | **SDXL** | `huohuo, 1girl, green hair, solo, long hair, hat, long sleeves, ahoge, animal ears, bangs, shorts, tail, 3d,` |
| `Hycine.safetensors` | [[IL & PONY & SD1.5] Honkai Star Rail - Hyacine \| 风堇](https://civitai.com/models/1610791) | **SDXL** | `hyacine, red headwear, detached sleeves, white pantyhose, ankle ribbon, black loafers` |
| `LingshainGame.safetensors` | [Lingsha Honkai Star Rail Ingame](https://civitai.com/models/1654183) | **SDXL** | `lingsha, 1girl, long hair, black hair, solo, china dress, hair ornament, gloves, dress, chinese clothes, bare shoulders, pointy ears, 3d, red gloves, bangs, looking at viewer` |
| `March7.safetensors` | [March 7th / Evernight \| Honkai: Star Rail (2 forms / 4 outfits)](https://civitai.com/models/1140194) | **SDXL** | `March7th`<br>`NascentSpring`<br>`MarchPreserv,`<br>`Marchhunt,` |
| `March7inGame.safetensors` | [March 7th Honkai Star Rail Ingame](https://civitai.com/models/1596899) | **SDXL** | `march 7th, 1girl, solo, skirt, jacket, gloves, sky, blue skirt, pink hair, looking at viewer, 3d, petite,` |
| `Pela.safetensors` | [Pela (Honkai Star Rail) IL](https://civitai.com/models/1277797) | **SDXL** | `pela \(honkai starrail\),beret, black gloves, black headwear, black skirt, blue eyes, dress, glasses, gloves, hat, long hair, looking at viewer, pantyhose, red-framed_eyewear, semi-rimless eyewear,under-rim eyewear,pleated_skirt,` |
| `Qinque.safetensors` | [Qingque - Honkai Star Rail - Illustrious](https://civitai.com/models/1470121) | **SDXL** | `qing-que, 1girl, grey hair, green eyes, low twintails, medium hair, hair ornament, hairclip,`<br>`qing-que, qing-suit, 1girl, grey hair, green eyes, low twintails, medium hair, hair ornament, hairclip, solo, black and green dress, turtleneck, detached sleeves, white skirt, sleeves bow, socks, shoes` |
| `Robin.safetensors` | [Robin 知更鸟 (IL,Pony,XL,1.5)](https://civitai.com/models/477055) | **SDXL** | `robin \(honkai: star rail\)`<br>`sleeveless dress, halo, white gloves, earrings, detached sleeves, detached collar, head wings, blue pumps` |
| `RuanMei.safetensors` | [Ruan Mei - Honkai Star Rail - Illustrious](https://civitai.com/models/1438905) | **SDXL** | `ruan-mei, 1girl, long hair, aqua eyes, black hair, hair bun, hair flower, hair ornament, pink tint in eyes`<br>`ruan-mei, 1girl, long hair, aqua eyes, black hair, hair bun, hair flower, pink tint in eyes, left thigh strap, flower, jewelry, bare shoulders, bracelet, green gloves, covered navel, black corset, elbow gloves, pearl necklace, shoulder cutout, white capelet, detached collar, strapless dress, pelvic curtain, china dress`<br>`ruan-mei, 1girl, long hair, aqua eyes, black hair, hair bun, hair flower, pink tint in eyes, glasses, black glasses, office suit, black suit jacket, jacket, white shirt, collared shirt, black skirt, pencil skirt` |
| `ShushangHSR.safetensors` | [ShushangHSR](https://civitai.com/models/1871697) | **SDXL** | *Tidak ada trigger khusus* |
| `SilverWolf.safetensors` | [Silver Wolf - Honkai Star Rail - Illustrious](https://civitai.com/models/1460272) | **SDXL** | `si-wolf, 1girl, silver hair, silver eyes, eyewear on head, blue and black hair ribbon, drill ponytail, earing`<br>`si-wolf, s-suit, 1girl, silver hair, silver eyes, eyewear on head, blue and black hair ribbon, drill ponytail, earing, solo, jacket, choker, jacket fur trim, cropped jacket, crop top, black shorts, fingerless gloves, thigh strap, single fishnet sock, band-aid,  fold-over boots` |
| `Sparkle.safetensors` | [Sparkle - Honkai Star Rail - Illustrious](https://civitai.com/models/1463936) | **SDXL** | `ha-nabi, s-suit, 1girl, magenta eyes, sparkling eyes, cherry blossom iris, black hair, twintails, red mole under eyes, fox mask, mask on head, red hair ribbons, black choker, neck bell, red kimono, off shoulder kimono, obi, sash, black single glove, detached sleeves, thigh strap, halterneck, cherry blossom tattoo, sandals, cross-laced sandals, sleeves train`<br>`ha-nabi, 1girl, magenta eyes, sparkling eyes, cherry blossom iris, black hair, twintails, red mole under eyes, fox mask, mask on head, red hair ribbons` |
| `Stelle.safetensors` | [Stelle (Trailblazer) - Honkai Star Rail - Illustrious](https://civitai.com/models/1623491) | **SDXL** | `ste-hs, 1girl, yellow eyes, grey hair, long hair`<br>`ste-hs, def, 1girl, yellow eyes, grey hair, long hair, gloves, black coat, sleeves rolled up, open clothes, white sweater, off shoulder sweater, black skirt, yellow trim, thigh strap, boots, black gloves, ribbon` |
| `Topaz.safetensors` | [Topaz 托帕 トパーズ (Pony,IL,XL,1.5)](https://civitai.com/models/287690) | **SDXL** | `topaz \(honkai: star rail\)`<br>`black gloves, thigh strap, knee boots, hair ornament, unitard, detached sleeves, badge, side cape, sleeveless shirt, belt` |
| `Tribbie.safetensors` | [[IL & PONY & SD1.5] Honkai Star Rail - Tribbie \| 缇宝 3+1](https://civitai.com/models/1340805) | **SDXL** | `tribbie, wings, detached collar, puffy long sleeves, black gloves, black and white boots`<br>`trianne, hair over one eye, wings, detached collar, puffy long sleeves, black gloves, black and white boots`<br>`trinnon, covered eyes, flower circlet, wings, detached collar, puffy long sleeves, black gloves, black and white boots`<br>`tribios, golden choker, off shoulder, bracelet, long dress, gold sandals` |
| `Yunli.safetensors` | [Yunli - Honkai Star Rail (Pony + IL)](https://civitai.com/models/791234) | **SDXL** | `Yunli` |

## Zenless Zone Zero ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AngelsOfDelusion_SKinColab_ANIMA.safetensors` | [绝区零 Zenless Zone Zero｜妄想天使 Angels of Delusion｜爱芮 Aria「Cuteness Loading」× 千夏 Sunna「Delusions in Business」× 南宫羽 Nangong Yu「Heartfelt Support」｜新皮肤三合一多人 LoRA](https://civitai.com/models/2927429) | **ANIMA** | `(sunna,green hair,asymmetrical bangs,hair ornament,single hair intake,hairclip,choker,collarbone,halo,multicolored eyes,eyes visible through hair,hair over one eye,asymmetrical hair,flat chest,medium hair,star hair ornament,one side up),(shorts,short shorts,detached sleeves,denim,denim shorts,arm warmers,black choker,nail polish,wings,star (symbol),bare shoulders,orange nails,tank top,blue shorts,camisole,bag,shirt,bow,pink shirt,yellow nails,pink camisole,multicolored nails,sleeves past wrists,glowing,star print,angel wings,energy wings),(aria,blue eyes,symbol-shaped pupils,bow,twintails,long hair,headphones,multicolored hair,pink hair,streaked hair),(shorts,short shorts,camisole,heart,bare shoulders,denim,shirt,pink shirt,denim shorts,tank top,blue shorts,breasts,),(nangong yu,halo,red eyes,black hair,pink hair,multicolored hair,bow,hair bow,twintails,blunt bangs,choker,shorts,two-tone hair,collarbone,short hair,ahoge,short twintails,black choker),(pink shirt,black shorts,camisole,pink camisole,thighhighs,breasts,short shorts,bare shoulders,striped sleeves,)` |

## Zenless Zone Zero SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `Aria.safetensors` | [Aria- Yutane Johiel (Zenless Zone Zero) XL](https://civitai.com/models/1390359) | **SDXL** | `robot girl, humanoid robot, robot joints, metal skin, aqua eyes, black sclera, mechanical hair, robot ears, green bow, armlet, frills`<br>`idol, short dress, white dress, pink hair, aqua eyes, quad tails` |
| `Belle-AllClothes.safetensors` | [Zenless Zone Zero_belle-all clothes丨绝区零_铃妹-全部服饰](https://civitai.com/models/1769144) | **SDXL** | `belle`<br>`belle \(summer_skies\)`<br>`belle \(delicate_daylight\)` |
| `NangongYu.safetensors` | [Nangong Yu (Angels of Delusion) - Zenless Zone Zero - Illustrious](https://civitai.com/models/2334041) | **SDXL** | `zzz style, 1girl, Nangong Yu, solo, multicolored hair, black hair, pink hair highlights, bangs, sideburns, flip out hair, pink hair ribbons, green hair ribbons, ahoge, twin high ponytails, red eyes,`<br>`black choker, white collar, black-cat chest decoration, green ribbon on chest, red striped tie, pink undershirt, polka dot undershirt, white bodysuit, corset bodysuit, diamond belly opening, navel, hip sewing openings, frilled bodysuit skirt, black skirt ribbons, pink underskirt, pink thigh straps, detached sleeves, shoulder cut, black sleeves, green sleeve ribbons, black cuff fluff, red nails, cross back scar, thin wings, white metal wings, black thighhighs, red thigh band, white sandals, black sandal fluff, black platforms, red toenails, green talon ribbons,` |
| `Sunna.safetensors` | [sunna (zenless zone zero) \|\| 千夏 绝区零 \| Ansl Ai](https://civitai.com/models/1878221) | **SDXL** | `sunna \(afternoon tea break\) \(zenless zone zero\), bell, animal ears, fake animal ears, hair ornament, maid, jingle bell, maid headdress, puffy sleeves, apron, frills, bow, earrings, cat ears, puffy short sleeves, short sleeves, black dress, hairclip, dress, neck bell, jewelry, 1girl, virtual youtuber, red bow, white apron`<br>`sunna \(zenless zone zero\), 1girl, necktie, hair ornament, red necktie, shirt, looking at viewer, white shirt, choker, hairclip, green hair, black choker, long hair, long sleeves, green eyes, musical note earrings,` |

## Genshin SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `Venti.safetensors` | [Venti (	ウェンティ / 温迪) - Genshin Impact (Illustrious)](https://civitai.com/models/1384811) | **SDXL** | `venti (genshin impact), short hair with long locks, aqua hair, green eyes, aqua eyes, blue hair, black hair, braid, gradient hair, twin braids, side braids, hair between eyes, androgynous,`<br>`beret, vest, collared cape, green hat, green cape, cecilia flower (genshin impact), green shorts, hat flower, white flower, hair flower, hair ornament, black bow, bow, bowtie, frilled sleeves, frills, long sleeves, striped bow, white pantyhose, pantyhose under shorts, white shirt,`<br>`shoes, loafers,`<br>`bard, lyre, instrument, playing instrument,`<br>*(+2 trigger lainnya)* |

## Honkai Impact 3rd SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `BronyaZaychik.safetensors` | [Bronya Zaychik 4in1 (IL,Pony,XL,1.5)](https://civitai.com/models/130516) | **SDXL** | `bronya zaychik \(silverwing: n-ex\), white single thighhigh, thigh pouch, sleeveless dress, single glove, halterneck, single pauldron, single sleeve, arm strap, ankle boots`<br>`bronya zaychik \(heart of the night\), black single thighhigh, china dress, white shorts, single elbow glove, side cape, single half glove, black single sock, platform heels`<br>`bronya zaychik \(silverwing: n-ex\), black pencil skirt, black blazer, id card, striped shirt, high heels`<br>`bronya zaychik \(outstanding attitude\), high-waist skirt, thighband pantyhose, high heels, suit jacket, id card, ribbed sweater` |
| `BronyaZaychik24in1.safetensors` | [Bronya Zaychik/Haxxor/N-EX - Honkai Impact 3rd (40 Outfits) (Pony + IL)](https://civitai.com/models/548326) | **SDXL** | `Too many. Check Description.` |
| `KianaKaslana.safetensors` | [Kiana Kaslana - Honkai Impact 3rd (37 Outfits) (Pony + IL)](https://civitai.com/models/552132) | **SDXL** | `Too many. Check Description.` |
| `ShushangHI3.safetensors` | [Sushang - Honkai Impact 3rd (6 Outfits) (Pony + IL)](https://civitai.com/models/594591) | **SDXL** | `SusHi3` |

## Gakuen Idolmaster SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AsariNeo.safetensors` | [Asari Neo [ 根緒亜紗里 ] - Gakuen iDOLM@STER](https://civitai.com/models/2025076) | **SDXL** | `asari765pro, brown hair, purple eyes, short hair, medium breasts,` |
| `ChinaKuramoto.safetensors` | [China Kuramoto [ 倉本千奈  ] - Gakuen iDOLM@STER](https://civitai.com/models/1769848) | **SDXL** | `china765pro, long hair, brown hair, brown eyes` |
| `HanamiSaki.safetensors` | [Saki Hanami [	花海咲季 ] - Gakuen iDOLM@STER](https://civitai.com/models/1692436) | **SDXL** | `saki765pro, red hair, blue eyes, long hair, hair bun, double bun, two side up, purple eyes,` |
| `HanamiUme.safetensors` | [Ume Hanami [ 花海佑芽 ] - Gakuen iDOLM@STER](https://civitai.com/models/1782343) | **SDXL** | `ume765pro, brown hair, brown eyes, medium hair, hair bun` |
| `HiroShinosawa.safetensors` | [Hiro Shinosawa [ 篠澤広 ] - Gakuen iDOLM@STER](https://civitai.com/models/1774486) | **SDXL** | `hiro765pro, long hair, hair ornament, blonde hair, light brown hair, orange eyes, hairclip` |
| `KotoneFujita.safetensors` | [Kotone Fujita [ 藤田ことね ] - Gakuen iDOLM@STER](https://civitai.com/models/1700759) | **SDXL** | `kotone765pro, blonde hair, long hair, braid, twin braids, twintails, yellow eyes, brown eyes,` |
| `LiljaKatsuragi.safetensors` | [Lilja Katsuragi [ 葛城リーリヤ ] - Gakuen iDOLM@STER](https://civitai.com/models/1769715) | **SDXL** | `lilja765pro, short hair, blue eyes, grey hair, braid, ribbon braid,` |
| `MadokaHiguchi.safetensors` | [Idolmaster - Shiny Colors Girls - Part 2](https://civitai.com/models/975515) | **SDXL** | `Higuchi Madoka, brown hair, short hair, swept bangs, mole, mole under eye, purple eyes,` |
| `MaoArimura.safetensors` | [Mao Arimura [ 	有村麻央 ] - Gakuen iDOLM@STER](https://civitai.com/models/1769674) | **SDXL** | `mao765pro, short hair, purple eyes, brown hair,` |
| `MisuzuHataya.safetensors` | [Misuzu Hataya [ 秦谷美鈴 ] - Gakuen iDOLM@STER](https://civitai.com/models/1782383) | **SDXL** | `mizusu765pro, mole under mouth, purple eyes, short hair,  single braid, hair ornament, blue hair, hair flower,` |
| `RinamiHimesaki.safetensors` | [Rinami Himesaki [ 姫崎莉波 ] - Gakuen iDOLM@STER](https://civitai.com/models/1774535) | **SDXL** | `rinami765pro, brown hair, long hair, hair bun, purple eyes, blue eyes` |
| `RinhaKaya.safetensors` | [Kaya_Rinha_gakuen_idolmaster_賀陽燐羽_学園アイドルマスター(学マス)[Illustrious]](https://civitai.com/models/1165073) | **SDXL** | `kaya rinha`<br>`purple hair,twintails,braid,hair ornament`<br>`white shirt,black shirt,high-waist skirt` |
| `SenaJuo.safetensors` | [Sena Juo [ 十王星南 ] - Gakuen iDOLM@STER](https://civitai.com/models/1782417) | **SDXL** | `sena765pro, long hair, blonde hair, pink highlights, purple eyes, blue eyes, streaked hair` |
| `SumikaShiun.safetensors` | [Sumika Shiun [ 紫雲清夏 ] - Gakuen iDOLM@STER](https://civitai.com/models/1774431) | **SDXL** | `sumika765pro,long hair, orange hair, green eyes,` |
| `TemariTsukimura.safetensors` | [Temari Tsukimura [ 月村手毬 ] - Gakuen iDOLM@STER](https://civitai.com/models/1694106) | **SDXL** | `temari765pro, long hair, green eyes, yellow eyes, black hair,` |
| `TsubameAmaya.safetensors` | [Tsubame Amaya [ 雨夜燕 ] - Gakuen iDOLM@STER](https://civitai.com/models/2025326) | **SDXL** | `tsubame765pro,  black hair,  long hair, ponytail, small breasts, blue eyes, mole under eye,` |

## THE iDOLM@STER Cinderella Girls: U149 SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `ArisuTachibana.safetensors` | [Arisu Tachibana \| 橘ありす (THE iDOLM@STER Cinderella Girls: U149)](https://civitai.com/models/1268207) | **SDXL** | `arisutachibana_u149, brown hair, long hair, bow, hair bow` |
| `FukuyamaMai.safetensors` | [福山舞 リトルマイシンデレラ fukuyama mai Little My Cinderella](https://civitai.com/models/1732969) | **SDXL** | `mai_lmc`<br>`blue dress,blue bowtie,blue bow,blue hairbow,blue gemstone,white gloves,heart brooch,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple frilled skirt,see-through white long overskirt,black choker,blue heart brooch,` |
| `IchikawaNina.safetensors` | [市川仁奈 リトルマイシンデレラ ichikawa nina Little My Cinderella](https://civitai.com/models/1746325) | **SDXL** | `nina_lmc`<br>`blue dress,blue bowtie,blue bow,blue gemstone,white gloves,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple frilled skirt,see-through white long overskirt,black choker,yellow heart brooch` |
| `KogaKoharu.safetensors` | [古賀小春 リトルマイシンデレラ koga koharu Little My Cinderella](https://civitai.com/models/1734927) | **SDXL** | `koharu_lmc`<br>`blue dress,blue bowtie,blue bow,blue gemstone,white gloves,heart brooch,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple frilled skirt,see-through white long overskirt,black choker,pink heart brooch` |
| `MiriaAkagi.safetensors` | [赤城みりあ リトルマイシンデレラ akagi miria Little My Cinderella](https://civitai.com/models/1728024) | **SDXL** | `miria_lmc`<br>`blue dress,blue bowtie,blue bow,blue hairbow,blue gemstone,white gloves,heart brooch,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple frilled skirt,see-through white long overskirt,black choker,yellow heart brooch` |
| `MomokaSakurai.safetensors` | [Momoka Sakurai \| 櫻井桃華 (THE iDOLM@STER Cinderella Girls: U149)](https://civitai.com/models/1287446) | **SDXL** | `momokasakurai_u149, blonde hair, green eyes` |
| `MotobaRisa.safetensors` | [的場梨沙 リトルマイシンデレラ matoba risa Little My Cinderella](https://civitai.com/models/1767195) | **SDXL** | `risa_lmc`<br>`blue dress,blue bowtie,blue bow,blue gemstone,white gloves,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple frilled skirt,see-through white long overskirt,black choker,yellow heart brooch,smile,dancing,sweat,open mouth` |
| `RyuuzakiKaoru.safetensors` | [龍崎薫 リトルマイシンデレラ ryuzaki kaoru Little My Cinderella](https://civitai.com/models/1744195) | **SDXL** | `kaoru_lmc`<br>`blue dress,blue bowtie,blue bow,blue gemstone,white gloves,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple frilled skirt,see-through white long overskirt,black choker,yellow heart brooch` |
| `SajoYukimi.safetensors` | [佐城雪美 リトルマイシンデレラ sajo yukimi Little My Cinderella](https://civitai.com/models/1767216) | **SDXL** | `yukimi_lmc`<br>`blue dress,blue bowtie,blue bow,blue gemstone,white gloves,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple skirt,see-through white long overskirt,black choker,blue heart brooch` |
| `SasakiChie.safetensors` | [佐々木千枝 リトルマイシンデレラ sasaki chie Little My Cinderella](https://civitai.com/models/1741090) | **SDXL** | `chie_lmc`<br>`blue dress,blue bowtie,blue bow,blue gemstone,white gloves,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple frilled skirt,see-through white long overskirt,black choker,blue heart brooch` |
| `YokoyamaChika.safetensors` | [横山千佳 リトルマイシンデレラ yokoyama chika Little My Cinderella](https://civitai.com/models/1767145) | **SDXL** | `chika_lmc`<br>`blue dress,blue bowtie,blue bow,blue gemstone,white gloves,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple frilled skirt,see-through white long overskirt,black choker,yellow heart brooch` |
| `YusaKozue.safetensors` | [遊佐こずえ リトルマイシンデレラ yusa kozue Little My Cinderella](https://civitai.com/models/1737867) | **SDXL** | `kozue_lmc`<br>`blue dress,blue bowtie,blue bow,blue gemstone,white gloves,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple frilled skirt,see-through white long overskirt,black choker,pink heart brooch` |
| `YuukiHaru.safetensors` | [結城晴 リトルマイシンデレラ yuuki haru Little My Cinderella](https://civitai.com/models/1753319) | **SDXL** | `haru_lmc`<br>`blue dress,blue bowtie,blue gemstone,white gloves,multicolored dress,two-tone dress,frilled gloves,hairband,back bow,sleeveless dress,blue shoes,layered frilled skirt,white frilled skirt,purple frilled skirt,see-through white long overskirt,black choker,blue heart brooch` |

## Project Sekai ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `NightcordAt25Characters_ANIMA.safetensors` | [Nightcord at 25:00 characters (Hatsune Miku: Colorful Stage!) \|  25時、ナイトコードで。(プロジェクトセカイ カラフルステージ！ feat. 初音ミク)](https://civitai.com/models/2719117) | **ANIMA** | `Yoisaki Kanade,`<br>`Shinonome Ena, braid,`<br>`1other, Akiyama Mizuki, sidelocks, bow,`<br>`1other, Akiyama Mizuki, side ponytail,`<br>*(+3 trigger lainnya)* |

## Project Sekai SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AkiyamaMizuki.safetensors` | [Mizuki Akiyama (Release)](https://civitai.com/models/2274922) | **SDXL** | `Mizuki akiyama, solo, androgynous, pink hair, side ponytail, pink eyes, long hair, hair bow` |
| `AkiyamaMizukiNoobAI.safetensors` | [Akiyama Mizuki From Project Sekai](https://civitai.com/models/1582412) | **SDXL** | `mizukiyt`<br>`1other, pink hair, pink eyes, side ponytail,, bow, pantyhose, dress, frills, boots, long sleeves, black footwear, black bow, black belt, ribbon, sidelocks, belt, black dress, hair bow, black ribbon, androgynous, bowtie, frilled dress, bangs, long hair` |
| `AsahinaMafuyu.safetensors` | [Mafuyu Asahina (Release)](https://civitai.com/models/2295586) | **SDXL** | `mafuyu asahina, solo, purple hair, long hair, ponytail, blue eyes, hair ornament, hair scrunchie, hair between eyes, wavy hair, high ponytail` |
| `AzusawaKohane.safetensors` | [Kohane Azusawa (Release) [Repost]](https://civitai.com/models/2339413) | **SDXL** | `kohane azusawa, solo, twintails, bangs, light brown eyes, light brown hair`<br>`school uniform, skirt, pleated skirt, neckerchief, grey skirt, red neckerchief, shirt, serafuku, sailor collar, white sailor collar, long sleeves, grey shirt, collarbone`<br>`jacket, skirt, shirt, blue skirt, long sleeves, belt, grey shirt, pink jacket, thighhighs, black thighhighs, denim skirt, white headwear, black headwear, clothes writing, white long sleeves, zettai ryouiki, open jacket, baseball cap, strapback` |
| `HanasatoMinori.safetensors` | [Minori Hanasato (Release)](https://civitai.com/models/2256786) | **SDXL** | `Minori hanasato, solo, brown hair, grey eyes, hair bow, medium hair, orange bow` |
| `HatsuneMikuDarkMovie.safetensors` | [Hatsune Miku From A Miku Who Can't Sing](https://civitai.com/models/1550272) | **SDXL** | `mikuyt` |
| `HatsuneMikuWhiteMovie.safetensors` | [Hatsune Miku (Hiramado Hiku) From Project Sekai And Miku Movie](https://civitai.com/models/1626744) | **SDXL** | `hiramikuyt`<br>`thighhighs, very long hair, twintails, long hair, skirt, white thighhighs, gradient hair, blue hair bow, pleated skirt, aqua eyes, bare shoulders, white bow, dress, white footwear, aqua hair, blue skirt, hair ornament, zettai ryouiki, aqua skirt, multicolored hair ,hair bow, blue eyes, star (symbol),` |
| `HinomoriShiho.safetensors` | [Shiho Hinomori (Release)](https://civitai.com/models/2390993) | **SDXL** | `shiho hinomori, green eyes, solo, short hair, grey hair`<br>`School uniform, skirt, hood, serafuku, pleated skirt, neckerchief, red neckerchief, jacket, long sleeves, sailor collar, grey shirt, hood down, grey skirt, hooded jacket, shirt, open clothes, black jacket, white sailor collar`<br>`Hoodie, hood, green hoodie, clothes writing, long sleeves, drawstring, hood down`<br>`Black skirt, gloves, skirt, instrument, fingerless gloves, shirt, black gloves, white shirt, jacket, bass, electric guitar, green jacket, pleated skirt, holding instruments, open clothes, open jacket, collared shirt, cropped jacket, long sleeves, striped bow, collarbone, striped bowtie, red bowtie, left single glove, left single glove, bowtie, miniskirt` |
| `HinomoriShizuku.safetensors` | [Shizuku Hinomori (Release)](https://civitai.com/models/1548472) | **SDXL** | `shizuku hinomori, long hair, solo, hair over one eye, mole under mouth` |
| `HoshinoIchika.safetensors` | [Ichika Hoshino (Release)](https://civitai.com/models/2411282) | **SDXL** | `Ichika hoshino, solo, Icy-blue eyes, navy blue-black hair, long hair, tsurime`<br>`red neckerchief, grey skirt, skirt, school uniform, neckerchief, pleated skirt, white sailor collar, sailor collar, grey shirt, shirt, serafuku, long sleeves`<br>`plaid, shirt, jacket, red shirt, wing collar, hood, pants, grey jacket, buttons, plaid shirt`<br>`shirt, gloves, fingerless gloves, black gloves, white shirt, sleeveless, blue clothes around waist, belt, suspenders, collared shirt, striped, sleeveless shirt, bare arms, collarbone, skirt, plaid, single glove, plaid skirt, bow, dress shirt, pleated skirt` |
| `KagamineRinRelease.safetensors` | [Rin Kagamine (Release)](https://civitai.com/models/2449215) | **SDXL** | `Rin Kagamine, solo, navel, blonde hair, shorts, hair bow, sailor collar, grey shorts, shirt, short hair, detached sleeves, hair ornament, midriff, sleeveless, hairclip, leg warmers, grey sleeves, white shirt, crop top, short shorts, headset, sleeveless shirt, neckerchief, white bow, yellow neckerchief, grey sailor collar, yellow belt, blue eyes, yellow nails`<br>`Rin Kagamine, solo, bonde hair, hair ornament, dress, short hair, bow, hairclip, white dress, frills, hairband, hair bow, white bow, star (symbol), bangs, blue eyes, short sleeves, mini skirt, cleavage, bow hairband, frilled dress, idol, left white thigh strap, yellow nails`<br>`Rin Kagamine, solo, blonde hair, hair ornament, shirt, white shirt, skirt, hairclip, orange bow, short hair, hair bow, black jacket, choker, long jacket, bowtie, hairband, collarbone, blue eyes, plaid, pleated skirt, orange skirt, black skirt, multicolored skirt, polka dot orange hair bow, pink bowtie, school uniform, yellow nails`<br>`Rin Kagamine, solo, blonde hair, hair ornament, hairclip, bare shoulder, bow, hair bow, short hair, mini midriff, gray croptop, black croptop, mini croptop, chocker, collarbone, pants, belt, black pants, navel, blue eyes, black bow, hairband, white headphones, long sleeves, yellow nails`<br>*(+2 trigger lainnya)* |
| `KiritaniHaruka.safetensors` | [Haruka Kiritani (Release)](https://civitai.com/models/2255428) | **SDXL** | `haruka kiritani, solo, blue hair, blue eyes, short hair, hair ornament, bangs` |
| `KusanagiNene.safetensors` | [Nene Kusanagi (Release)](https://civitai.com/models/2354872) | **SDXL** | `nene kusanagi, solo, long hair, purple eyes, green hair, hair between eyes, grey hair, wavy hair`<br>`jacket, skirt, shirt, school uniform, bow, pleated skirt, plaid skirt, long sleeves, white shirt, striped, bowtie, blue skirt, striped bow, blazer, red bow, striped bowtie, collared shirt, mini skirt, blue jacket`<br>`dress, pantyhose, green dress, black pantyhose, carsigan, long sleeves`<br>`skirt, bow, hairband, shirt, sleeveless, yellow skirt, pink bow, bare shoulders, bare arms, knee boots, frilled skirt, yellow skirt, green hairband, layered skirt, vest, frills, sleeveless shirt, pom pom (clothes)` |
| `MochizukiHonami.safetensors` | [Honami Mochizuki (Release)](https://civitai.com/models/2392741) | **SDXL** | `Honami Mochizuki, solo, blue eyes, brown hair, scrunchie, bangs, hair ornament, side ponytail, hair scrunchie`<br>`School uniform, skirt, grey skirt, serafuku, cardigan, pleated skirt, red neckerchief, neckerchief, long sleeves, open cardigan, white sailor collar`<br>`Skirt, brown skirt, shirt, long sleeves, open clothes, jacket, long skirt, white jacket, open jacket, black shirt, pleated skirt, dark blue shirt, collarbone`<br>`Gloves, skirt, fingerless gloves, shirt, black gloves, pleated skirt, red short sleeves, red puffy short sleeves, red puffy sleeves, black skirt, buttons, bow, collared shirt, belt, white shirt, open jacket, striped bow, mini skirt, jacket, wing collar, black belt, plaid, partially unzipped` |
| `MomoiAiri.safetensors` | [Airi Momoi (Release)](https://civitai.com/models/2238400) | **SDXL** | `airi momoi, solo, pink hair, pink eyes, long hair, two side up, open mouth, fang` |
| `OotoriEmu.safetensors` | [Emu Otori (Release)](https://civitai.com/models/2372078) | **SDXL** | `emu otori, solo, pink hair, pink eyes, short hair, medium hair, bangs`<br>`school uniform, skirt, cardigan, sailor collar, pleated skirt, neckerchief, grey skirt, red neckerchief, white sailor collar, pink cardigan, shirt, open clothes, open cardigan, long sleeves, serafuku, grey shirt, buttons, badge, collarbone`<br>`overalls, denim, yellow shirt, open clothes, jacket, cardigan, pink jacket, long sleeves, shorts`<br>`white thighhighs, short sleeves, puffy short sleeves, puffy sleeves, polka dot, striped thighhighs, frills, frilled sleeves, bubble skirt, bracelet, skirt, ribbon, zettai ryouiki, white elbow gloves, pink dress, uneven legwear, multicolored clothes, asymmetrical sleeves, bare shoulders, white collar, striped skirt, clenched hands` |
| `ShinonomeEna.safetensors` | [Ena Shinonome (Release)](https://civitai.com/models/2277729) | **SDXL** | `ena shinonome, solo, brown eyes, bangs, brown hair, black hair, short hair, braid` |
| `ShiraishiAn.safetensors` | [An Shiraishi (Release)](https://civitai.com/models/2333341) | **SDXL** | `an shiraishi, solo, black hair, long hair, hair ornament, blue hair, orange eyes, earrings, hairclip, multicolored hair, star hair ornament, gradient hair`<br>`skirt, school uniforms, necktie, jacket, plaid skirt, shirt, white shirt, blazer, plaid, pleated skirt`<br>`jacket, shorts, white shorts, headphones around neck, shirt, green headphones, black shirt, long sleeves, open clothes, short shorts, open jacket, black belt buckle, sleeves past green wrists, white jacket, emerald jacket, side gradient jacket` |
| `TenmaSaki.safetensors` | [Saki Tenma (Release)](https://civitai.com/models/2409156) | **SDXL** | `saki tenma, solo, blonde hair, twintails, pink hair, multicolored hair, pink eyes, gradient hair, long hair`<br>`skirt, grey skirt, school uniform, pleated skirt, neckerchief, red neckerchief, long sleeves, sailor collar, serafuku, yellow cardigan`<br>`Sweater, pink sweater, shorts, long sleeves, collarbone, collared shirt, sleeves past wrists, white shirt`<br>`Necktie, shirt, white shirt, jacket, school uniform, yellow jacket, skirt, striped necktie, black skirt, black thighhighs, zettai ryouiki` |
| `YoisakiKanade.safetensors` | [Kanade Yoisaki (Release)](https://civitai.com/models/2297973) | **SDXL** | `kanade yoisaki, long hair, solo, blue eyes, very long hair, straight hair, hair between eyes, light blue hair, grey hair`<br>`grey shorts, jacket, short shorts, blue jacket, shirt, collarbone, black shirt, long sleeves, track jacket, sleeves past wrists, partially unzipped, zipper`<br>`hoodie, hood, sleeves past wrists, jacket, red neckerchief, long sleeves, hood down, puffy long sleeves, puffy sleeves, grey hoodie, black socks, socks` |

## Watanare ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HarunaAmaori_ANIMA.safetensors` | [Haruna Amaori - There's No Freaking Way I'll Be Your Lover! Unless… ~Next Shine~ / Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?): Next Shine! / わたしが恋人になれるわけないじゃん、ムリムリ! (※ムリじゃなかった!?)〜ネクストシャイン！〜 - 2 Outfits - Anima](https://civitai.com/models/2715585) | **ANIMA** | `watharuna, pink hair, purple eyes, short hair, hair between eyes, colored inner hair,`<br>`harunahoodie, hood, hoodie, ponytail, hood down, drawstring, black hoodie, sidelocks, short sleeves, crossed bangs,`<br>`harunaschoolc, school uniform, sailor collar, serafuku, white shirt, shirt, ponytail, neckerchief, yellow neckerchief, red sailor collar, short sleeves, socks, black socks, kneehighs, skirt, pleated skirt, red skirt, medium hair, crossed bangs, high ponytail,` |
| `KahoKoyanagi_ANIMA.safetensors` | [Kaho Koyanagi - There's No Freaking Way I'll Be Your Lover! Unless… ~Next Shine~ / Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?): Next Shine! / わたしが恋人になれるわけないじゃん、ムリムリ! (※ムリじゃなかった!?)〜ネクストシャイン！〜 - Anima](https://civitai.com/models/2715570) | **ANIMA** | `watkaho, hair ribbon, long hair, hair bun, single side bun, sidelocks, blue hair, yellow eyes, swept bangs, fang,`<br>`kahoschool, shirt, white shirt, collared shirt, ribbon, school uniform, yellow ribbon, long sleeves, dress shirt, skirt, black undershirt, plaid skirt, plaid clothes, grey skirt, pleated skirt, wrist scrunchie, buttons, scrunchie, shirt under shirt, shirt tucked in, yellow scrunchie, sleeves rolled up, thighhighs, black thighhighs, hair ornament, green scrunchie, zettai ryouiki,` |
| `MaiOuzuka_ANIMA.safetensors` | [Mai Ouzuka - There's No Freaking Way I'll Be Your Lover! Unless… ~Next Shine~ / Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?): Next Shine! / わたしが恋人になれるわけないじゃん、ムリムリ! (※ムリじゃなかった!?)〜ネクストシャイン！〜 - 11 Outfits - Anima](https://civitai.com/models/2715562) | **ANIMA** | `watmai, long hair, blonde hair, braid, hair intakes, hair between eyes, sidelocks, blue eyes, very long hair,`<br>`maiskirt, black jacket, jacket, shirt, brown skirt, skirt, white shirt, long sleeves, open jacket, half up braid, open clothes, leather jacket, long skirt, french braid, high-waist skirt, cropped jacket, pleated skirt,`<br>`maidressa, sleeveless, ponytail, bare arms, dress, black dress, high ponytail, sleeveless dress, bare shoulders, turtleneck,`<br>`maidressb, belt, plaid clothes, dress, long sleeves, plaid dress, brown dress, checkered clothes, buckle, red belt, high heels, red footwear, striped clothes, belt buckle, collared dress, crown braid, pumps, buttons, checkered dress, sleeves past elbows, unmoving pattern, vertical-striped clothes,`<br>*(+8 trigger lainnya)* |
| `RenakoAmaori_ANIMA.safetensors` | [Renako Amaori - There's No Freaking Way I'll Be Your Lover! Unless… ~Next Shine~ / Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?): Next Shine! / わたしが恋人になれるわけないじゃん、ムリムリ! (※ムリじゃなかった!?)〜ネクストシャイン！〜 - 9 Outfits - Anima](https://civitai.com/models/2715542) | **ANIMA** | `watrenako, pink hair, purple eyes, short hair, hair between eyes, colored inner hair,`<br>`renakoshirta, black shirt, shirt, hair ornament, hairclip, t-shirt, x hair ornament, short sleeves, pants, blue pants, jeans, denim, casual, sandals, hair intakes, bob cut, black footwear,`<br>`renakosweater, hair ornament, x hair ornament, hairclip, black sweater, sweater, skirt, grey skirt, long sleeves, bob cut, ribbed sweater, sweater tucked in, bare legs, high-waist skirt,`<br>`renakokimono, hair ornament, hairclip, x hair ornament, kimono, japanese clothes, yukata, long sleeves, sash, obi, striped kimono, vertical-striped kimono, red kimono, wide sleeves, striped clothes, vertical-striped clothes, red sash,`<br>*(+6 trigger lainnya)* |
| `SatsukiKoto_ANIMA.safetensors` | [Satsuki Koto - There's No Freaking Way I'll Be Your Lover! Unless… ~Next Shine~ / Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?): Next Shine! / わたしが恋人になれるわけないじゃん、ムリムリ! (※ムリじゃなかった!?)〜ネクストシャイン！〜 - 5 Outfits - Anima](https://civitai.com/models/2712900) | **ANIMA** | `watsatsuki, long hair, black hair, sidelocks, braid, hair between eyes, colored inner hair, crossed bangs, red eyes, very long hair,`<br>`satsukishirta, grey shirt, single braid, hair over shoulder, braided ponytail, shirt, collared shirt, sleeveless, sleeveless shirt, wing collar, buttons, dress shirt,`<br>`satsukischoola, shirt, white shirt, school uniform, collared shirt, bow, bowtie, red bow, red bowtie, half up braid, short sleeves, french braid, skirt, plaid skirt, pleated skirt, plaid clothes, grey skirt, dress shirt, half updo, straight hair, shirt tucked in, hair intakes, socks, kneehighs, black socks, frilled skirt, frills,`<br>`satsukischoolb, shirt, white shirt, school uniform, sweater vest, bow, bowtie, collared shirt, red bow, grey sweater vest, red bowtie, long sleeves, half up braid, cardigan vest, french braid, skirt, pleated skirt, plaid skirt, plaid clothes, grey skirt, dress shirt, socks, black socks, kneehighs, half updo, shoes, miniskirt, loafers, frilled skirt, frills,`<br>*(+2 trigger lainnya)* |
| `SenaAjisai_ANIMA.safetensors` | [Ajisai Sena - There's No Freaking Way I'll Be Your Lover! Unless… ~Next Shine~ / Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?): Next Shine! / わたしが恋人になれるわけないじゃん、ムリムリ! (※ムリじゃなかった!?)〜ネクストシャイン！〜 - 9 Outfits - Anima](https://civitai.com/models/2715587) | **ANIMA** | `watajisai, long hair, brown eyes, hair between eyes, light brown hair, colored inner hair, multicolored hair, pink hair,`<br>`ajisaidress, black dress, dress, sleeveless, hair ornament, sleeveless dress, bare arms, short sleeves, pointy ears, hairclip, long dress, shoes, black footwear, hair flower,`<br>`ajisaipants, sleeveless, hair ornament, sleeveless sweater, sweater, wavy hair, hair flower, flower, bare arms, blue sweater, sidelocks, blue flower, ribbed sweater, pants, buttons, bare shoulders, white pants, purple flower, hairclip, turtleneck, plaid clothes, turtleneck sweater, casual,`<br>`ajisaikimonoa, kimono, japanese clothes, yukata, floral print, print kimono, hair bun, single hair bun, purple kimono, floral print kimono, obi, hair ornament, sidelocks, sash, hair up, wide sleeves, long sleeves, hair stick, pink sash, back bow, pink bow,`<br>*(+6 trigger lainnya)* |

## Watanare SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AjisaiandRenakoandMayuwatanare.safetensors` | [Ajisai and Renako and Mayu（watanare）](https://civitai.com/models/1097899) | **SDXL** | `watakoi` |
| `AjisaiSena.safetensors` | [Sena Ajisai \| 瀬名 紫陽花 - わたしが恋人になれるわけないじゃん、ムリムリ！ \|  濑名紫阳花 - 我怎么可能成为你的恋人，不行不行！](https://civitai.com/models/1792407) | **SDXL** | `xaijisax, brown hair,long hair,brown eyes,` |
| `KahoKoyanagi.safetensors` | [[ILXL] Kaho Koyanagi 小柳香穂 \| Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?) わたしが恋人になれるわけないじゃん、ムリムリ! (※ムリじゃなかった!?) (There's No Freaking Way I'll be Your Lover! Unless...)](https://civitai.com/models/1841738) | **SDXL** | `<lora:kaho_koyanagi-watanare_s1-v3-ixl-anime-soralz:1>, kaho koyanagi (watanare), medium hair, light blue hair, single side bun, hair ribbon, yellow eyes`<br>`school uniform, white collared shirt, black turtleneck, sleeves rolled up, (wrist scrunchie:0.8), plaid skirt, pleated skirt, frilled skirt, black thighhighs, black loafers` |
| `MaiOuzuka.safetensors` | [There's No Freaking Way I'll be Your Lover! Unless..._Mai Ouzuka丨わたしが恋人になれるわけないじゃん、ムリムリ！_王塚真唯丨我怎么可能成为你的恋人，不行不行！_王冢真唯](https://civitai.com/models/1807237) | **SDXL** | `Mai Ouzuka` |
| `Renako_Mayu.safetensors` | [Amaori Renako & Ozuka Mayu \| 甘織 れな子 & 王塚 真唯 - わたしが恋人になれるわけないじゃん、ムリムリ！ \|  甘织玲奈子 与 王冢真唯 - 我怎么可能成为你的恋人，不行不行！](https://civitai.com/models/1679554) | **SDXL** | `mayu,school uniform, black pantyhose,jacket,blazer,grey skirt,pleated skirt,plaid skirt,`<br>`renako,school uniform, clothes around waist,plaid skirt,black socks,shoes` |
| `RenakoAmaori.safetensors` | [Renako Amaori \| Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! \| Illustrious](https://civitai.com/models/1839860) | **SDXL** | `RenakoAmaori, pink hair, short hair, hair between eyes, hairclip, purple eyes, medium breasts,` |
| `SatsukiKoto.safetensors` | [[ILXL] Satsuki Koto 琴紗月 \| Watashi ga Koibito ni Nareru Wake Nai jan, Muri Muri! (※Muri ja Nakatta!?) わたしが恋人になれるわけないじゃん、ムリムリ! (※ムリじゃなかった!?) (There's No Freaking Way I'll be Your Lover! Unless...)](https://civitai.com/models/1835796) | **SDXL** | `<lora:satsuki_koto-watanare_s1-ixl-anime-soralz:1>, satsuki koto (watanare), long hair, black hair, multicolored hair, colored inner hair, (purple inner hair:0.8), crossed bangs, braid, hair between eyes, red eyes`<br>`school uniform, white collared shirt, red bowtie, grey sweater vest, long sleeves, plaid skirt, pleated skirt, frilled skirt, black kneehighs, black loafers` |

## Watashi ni Tenshi ga Maoirita ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HoshinoMiyako_ANIMA.safetensors` | [Hoshino Miyako 星野都古 星野みやこ  4Outfits Wataten 天使降临到我身边 私に天使が舞い降りた!](https://civitai.com/models/2924700) | **ANIMA** | `hoshino miyako, 1girl, solo, short brown hair, bangs, hair over one eye, red eyes, breasts, large breasts, thick thighs, shirt, white shirt, short sleeves, school uniform, serafuku, sailor collar, blue sailor collar, neckerchief, red neckerchief, skirt, pleated skirt, miniskirt, blue skirt`<br>`hoshino miyako, 1girl, solo, short brown hair, bangs, hair over one eye, messy hair, red eyes, breasts, large breasts, collarbone, jacket, track jacket, red jacket, zipper, pants, track suit, track pants, red pants`<br>`hoshino miyako, 1girl, solo, short brown hair, bangs, hair over one eye, red eyes, breasts, large breasts, shirt, dress, pink dress, skirt, frilled skirt, pink skirt, short sleeves, puffy sleeves, puffy short sleeves, bow, pink bow, bowtie, jewelry, brooch, thighhighs, white thighhighs, pink thighhighs, zettai ryouiki, magical girl, frills, shiny hair, cosplay`<br>`hoshino miyako, 1girl, solo, short brown hair, hair over one eye, red eyes, breasts, large breasts, long sleeves, dress, alternate costume, maid, apron, white apron, maid apron, enmaided` |

## Watashi ni Tenshi ga Maoirita SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HimesakaNoa.safetensors` | [Himesaka Noa \| Wataten!: An Angel Flew Down to Me \| 私に天使が舞い降りた!](https://civitai.com/models/1548785) | **SDXL** | `himesaka noa` |
| `HoshinoHinata.safetensors` | [Hoshino Hinata \| Wataten!: An Angel Flew Down to Me \| 私に天使が舞い降りた!](https://civitai.com/models/1545422) | **SDXL** | `hoshino hinata` |
| `HoshinoMiyako.safetensors` | [Hoshino Miyako \| Wataten!: An Angel Flew Down to Me \| 私に天使が舞い降りた!](https://civitai.com/models/1545485) | **SDXL** | `hoshino miyako` |
| `KonomoriKanon.safetensors` | [Konomori Kanon \| Wataten!: An Angel Flew Down to Me \| 私に天使が舞い降りた!](https://civitai.com/models/1549099) | **SDXL** | `konomori kanon` |
| `MatsumotoKouko.safetensors` | [Matsumoto Kouko \| Wataten!: An Angel Flew Down to Me \| 私に天使が舞い降りた!](https://civitai.com/models/1541394) | **SDXL** | `matsumoto kouko` |
| `ShirosakiHana.safetensors` | [Shirosaki Hana \| Wataten!: An Angel Flew Down to Me \| 私に天使が舞い降りた!](https://civitai.com/models/1541504) | **SDXL** | `shirosaki hana` |
| `TanemuraKoyori.safetensors` | [Tanemura Koyori \| Wataten!: An Angel Flew Down to Me \| 私に天使が舞い降りた!](https://civitai.com/models/1549158) | **SDXL** | `tanemura koyori` |

## GnP ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `NishizumiMaho_ANIMA.safetensors` | [Nishizumi Maho \| Girls und Panzer \| ガールズ&パンツァ](https://civitai.com/models/2900423) | **ANIMA** | `nishizumi maho` |

## GnP SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AkiyamaYukariGnP.safetensors` | [Akiyama Yukari \| Girls und Panzer \| ガールズ&パンツァ](https://civitai.com/models/2033533) | **SDXL** | `akiyama yukari` |
| `MikaGnP.safetensors` | [Mika \| Girls und Panzer](https://civitai.com/models/1431067) | **SDXL** | `mikaillu, tulip hat, grey skirt, vertical-striped shirt, wing collar, keizoku school uniform, white shirt, long sleeves, loafers, grey socks`<br>`mikaillu, tulip hat, grey skirt, track jacket, keizoku military uniform, raglan sleeves, boots, grey socks` |
| `NishizumiMiho.safetensors` | [LoRA_SDXL_forPony_girls_und_panzer_NishizumiMiho_v2_pagedAdamW8bit_d32a16](https://civitai.com/models/330568) | **SDXL** | `nishizumi miho` |

## Takopi no Genzai ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `MarinaKirazaka_ANIMA.safetensors` | [Kirarazaka Marina - Takopi's Original Sin](https://civitai.com/models/2878772) | **ANIMA** | `marina, blonde hair, long hair, yellow eyes, black hairband, scar on face, school uniform, white shirt, red neck ribbon, blue open jacket, long sleeves, grey pleated skirt, black knee highs, brown shoes`<br>`marina, aged down, blonde hair, long hair, yellow eyes, black shirt, long sleeves, untucked shirt, white layered skirt, black knee socks, brown shoes` |
| `ShizukaKuze_ANIMA.safetensors` | [Kuze Shizuka - Takopi's Original Sin](https://civitai.com/models/2874013) | **ANIMA** | `shizuka, black hair, medium hair, bob cut, hair between eyes, brown eyes, school uniform, brown open jacket, white collared shirt, yellow cardigan, red bowtie, black pleated skirt`<br>`shizuka, aged down, black short hair, brown eyes, white shirt, short sleeves, jaggy lines, aqua shorts, white shoes` |

## Takopi no Genzai SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `MarinaKirazaka.safetensors` | [Marina Kirarazaka (雲母坂 まりな) - Takopi's Original Sin (Takopii no Genzai) (タコピーの原罪)](https://civitai.com/models/1730082) | **SDXL** | `marina kirarazaka, long hair, blonde hair, yellow eyes, hairband, wavy hair, black hairband, anime screencap`<br>`shirt, skirt, long sleeves, black shirt, white skirt,` |
| `ShizukaKuze.safetensors` | [Shizuka Kuze (久世 しずか) - Takopi's Original Sin (Takopii no Genzai) (タコピーの原罪)](https://civitai.com/models/1730083) | **SDXL** | `shizuka kuze, short hair, black hair, brown eyes, anime screencap`<br>`shirt, white shirt, pants, blue pants` |

## Hoshizora no Memoria ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `MareSEphemeral_ANIMA.safetensors` | [Mare S. Ephemeral (梅娅·S·艾菲梅拉尔) \| Hoshizora no Memoria (星空的记忆) \| Anima](https://civitai.com/models/2760877) | **ANIMA** | `Mare \(Hoshizora\),`<br>`hair ribbon, red ribbon, hair bow, red bow, detached sleeves, black dress, purple dress, long sleeves, white bowtie, cross brooch, layered dress, frilled dress, short dress,`<br>`twintails, one-piece swimsuit, school swimsuit,`<br>`twintails, maid headdress, maid, hair ribbon, red ribbon, white apron, frilled apron, purple dress, frilled dress, white frills, puffy short sleeves, orange bowtie, frilled collar, purple wrist cuffs, frilled wrist cuffs, back bow, white bow, star ornament, white thighhighs, frilled thighhighs, thigh ribbon, orange ribbon, white thighhighs,` |

## Hoshizora no Memoria SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AoiIsuzu.safetensors` | [蒼 衣鈴 (星空のメモリア) illustrious Lora - aoi isuzu(Hoshizora no memoria) illustrious Lora](https://civitai.com/models/1418970) | **SDXL** | `memoriaaoiisuzu,isuzu aoi,hoshizora no memoria,1girl, solo, blue hair, short hair,yellow hairband`<br>`kirt, school uniform, zettai ryouiki, black thighhighs`<br>`game cg` |
| `HisakakiKomomo.safetensors` | [姫榊 こもも (星空のメモリア) illustrious Lora - Hisakaki Komomo(Hoshizora no memoria) illustrious Lora](https://civitai.com/models/1422481) | **SDXL** | `memoriakomomo, hisakaki_komomo,hoshizora no memoria, 1girl, solo, twintails, long hair, blue eyes, blonde hair`<br>`school uniform, thighhighs, white thighhighs, zettai ryouiki`<br>`game cg` |
| `HisakakiKosame.safetensors` | [姫榊 こさめ (星空のメモリア) illustrious Lora - Hisakaki Kosame(Hoshizora no memoria) illustrious Lora](https://civitai.com/models/1425998) | **SDXL** | `memoriakosame, hisakaki_kosame,hoshizora no memoria, 1girl, solo, long hair, very long hair, blonde hair, blue eyes, hairband`<br>`school uniform, skirt, socks`<br>`game cg` |
| `KogasakaChinami.safetensors` | [小河坂 千波 (星空のメモリア) illustrious Lora - kogasaka chinami (Hoshizora no memoria) illustrious Lora](https://civitai.com/models/1415445) | **SDXL** | `memoriaimouto,kogasaka chinami,hoshizora no memoria, 1girl, solo,pink hair, rabbit hair ornament, twintails, hair ornament, green eyes,yellow hairclip, short hair`<br>`school uniform, skirt,white socks`<br>`game cg` |
| `MareSEphemeral.safetensors` | [梅娅 Mare=S=Ephemeral (メア=S=エフェメラル) \| 星空的记忆 Hoshizora no memoria (星空のメモリア)](https://civitai.com/models/1476121) | **SDXL** | `Mare S. Ephemeral, yellow eyes, white hair, gradient hair, multicolored hair, very long hair, hair between eyes,` |
| `MinahoshiAsuho.safetensors` | [南星 明日歩 (星空のメモリア) illustrious Lora - Minahoshi Asuho(Hoshizora no memoria) illustrious Lora](https://civitai.com/models/1426345) | **SDXL** | `memorialmiyahoshi,minahoshi asuho,hoshizora no memoria,1girl,solo,red hair,short hair,red eyes,ahoge,hair ornament,star ornament,ribbon`<br>`school uniform,skirt`<br>`game cg` |
| `OtotsuYumeYDDLJW.safetensors` | [Ototsu Yume (乙津梦) \| Hoshizora no Memoria (星空的记忆) \| NoobAI](https://civitai.com/models/1436062) | **SDXL** | `Ototsu Yume \(Hoshizora\),hair ribbon,brown ribbon,`<br>`blouse,black pantyhose,long sleeves,juliet sleeves,white sleeve cuffs,frilled sleeves,center frills,white shirt,frilled shirt,neck ribbon,white buttons,layered skirt,red skirt,red ribbon,long shirt,miniskirt,skirt under shirt,`<br>`purple dress,vertical-striped pantyhose,black pantyhose,frilled dress,collared dress,long sleeves,frilled sleeves,white frills,jewelry,`<br>`sundress,white dress,jewelry,necklace,frilled dress,grey frills,waist bow,white bow,frilled straps,white straps,sleeveless dress,`<br>*(+5 trigger lainnya)* |

## Roshidere ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AlisaMikhailovnaKujou_ANIMA.safetensors` | [Alisa Mikhailovna Kujou (Ayra-san) \| Alya Sometimes Hides Her Feelings in Russian \| 時々ボソッとロシア語でデレる隣のアーリャさん](https://civitai.com/models/2706792) | **ANIMA** | `alisa mikhailovna kujou` |
| `MariaMikhailovnaKujou_ANIMA.safetensors` | [Maria Mikhailovna Kujou (Masha) \| Alya Sometimes Hides Her Feelings in Russian \| 時々ボソッとロシア語でデレる隣のアーリャさん](https://civitai.com/models/2803601) | **ANIMA** | `maria mikhailovna kujou` |

## Kamiina Botan Fully Blossom ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `ChangChin-Lan_ANIMA.safetensors` | [Chang Chin-Lan \| Botan Kamiina Fully Blossoms When Drunk \| 上伊那ぼたん、酔へる姿は百合の花](https://civitai.com/models/2833493) | **ANIMA** | `chang chin-lan` |
| `GujyoKanade_ANIMA.safetensors` | [Gujyo Kanade \| Botan Kamiina Fully Blossoms When Drunk \| 上伊那ぼたん、酔へる姿は百合の花](https://civitai.com/models/2833519) | **ANIMA** | `gujyo kanade` |
| `KamiinaBotan_ANIMA.safetensors` | [Kamiina Botan \| Botan Kamiina Fully Blossoms When Drunk \| 上伊那ぼたん、酔へる姿は百合の花](https://civitai.com/models/2835614) | **ANIMA** | `kamiina botan` |
| `KitamoriYaeka_ANIMA.safetensors` | [Kitamori Yaeka \| Botan Kamiina Fully Blossoms When Drunk \| 上伊那ぼたん、酔へる姿は百合の花](https://civitai.com/models/2835636) | **ANIMA** | `kitamori yaeka` |
| `TonamiIbuki_ANIMA.safetensors` | [Tonami Ibuki \| Botan Kamiina Fully Blossoms When Drunk \| 上伊那ぼたん、酔へる姿は百合の花](https://civitai.com/models/2838389) | **ANIMA** | `tonami ibuki` |
| `YusaAkane_ANIMA.safetensors` | [Yusa Akane \| Botan Kamiina Fully Blossoms When Drunk \| 上伊那ぼたん、酔へる姿は百合の花](https://civitai.com/models/2838419) | **ANIMA** | `yusa akane` |

## Adachi to Shimamura ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AdachiAndShimamura2in1_ANIMA.safetensors` | [Adachi and Shimamura -2-in-1 Character Pack / 安达与岛村 2合1角色合集 / 安達としまむら 2in1 キャラクター LoRA](https://civitai.com/models/2930678) | **ANIMA** | `Adachi Sakura,with dark blue hair and green eyes,wearing a school uniform consisting of a navy blue blazer with a light blue vest underneath,paired with a plaid skirt and a pink bow.,`<br>`Shimamura Hougetsu,with blonde hair and purple eyes,wearing a navy blue blazer over a peach-colored top,paired with a plaid skirt and a pink bow.` |

## Chou Kaguya Hime ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `IrohaSakayoriAndKaguya_ANIMA.safetensors` | [超时空辉耀姬！｜超かぐや姫！｜Cosmic Princess Kaguya! — 酒寄彩叶 & 辉耀 / 酒寄彩葉 & かぐや / Iroha Sakayori & Kaguya](https://civitai.com/models/2873865) | **ANIMA** | `(Sakayori Iroha,mole under eye,black hair,mole,green eyes,sidelocks)`<br>`(kaguya,blonde hair,long hair,ahoge,red eyes,sidelocks),` |
| `KaguyaAndIrohaAndYachiyo5Versions_ANIMA.safetensors` | [5-in-1 LoRA 超かぐや姫！/Cosmic Princess Kaguya!/超时空辉夜姬 - Kaguya & Sakayori Iroha & Yachiyo Runami (5 Versions) 多合一 LoRA](https://civitai.com/models/2718543) | **ANIMA** | `(Sakayori Iroha,mole under eye,black hair,mole,green eyes,sidelocks)`<br>`(kaguya,blonde hair,long hair,ahoge,red eyes,sidelocks)`<br>`(kaguya liver,  long hair, low-tied long hair,  crescent hair ornament,very long hair, animal ears, hair ornament, crescent, rabbit ears, blonde hair, yellow eyes, )`<br>`(Sakayori Iroha liver,cat ears,animal ears,green eyes,forehead mark,animal ear fluff,brown hair,short hair,multicolored hair)`<br>*(+1 trigger lainnya)* |

## Akebi-chan no Sailor Fuku SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `KomichiAkebi.safetensors` | [Komichi Akebi \| 明日小路 (Akebi-chan no Sailor Fuku \| Akebi’s Sailor Uniform \| 明日ちゃんのセーラー服)](https://civitai.com/models/1252152) | **SDXL** | `komichi_akebi`<br>`black hair`<br>`blue eyes` |

## Arknights: endfield SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `ChenQianyu.safetensors` | [Chen Qianyu - Arknights: Endfield - Illustrious](https://civitai.com/models/2329750) | **SDXL** | `endfield style, 1girl, Chen Qianyu, horns, multicolored horns, black horns, black hair, ahoge, bangs, sideburns, twin ponytails, multicolored eyes, blue green eyes,`<br>`white qipao collar, blue jacket, red string, jacket ornaments, bue dress, dress silver pattern, white skirt, thighs, long sleeves, black gloves, knee guards, high boots, blue dragon tail, hairy tail end,` |
| `Endministrator.safetensors` | [Girl Endministrator - Arknights: Endfield - Illustrious](https://civitai.com/models/2329327) | **SDXL** | `endfield style, 1girl, female endministrator, black hair, short hair, hair clip, metal face mask,`<br>`black collar, long white sweater, high collar, metal pendant, gray jacket, open jacket, hooded jacket, yellow jacket details, jacket ornaments, double jacket, tassels,  sweater pocket,  gray shorts,  black leggings, black shoes` |

## Blue Archive SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AjitaniHifumi.safetensors` | [Ajitani Hifumi (Blue archive)](https://civitai.com/models/1335769) | **SDXL** | *Tidak ada trigger khusus* |
| `AronaPony.safetensors` | [Arona (アロナ) - Blue Archive (ブルーアーカイブ) (蔚蓝档案) (블루 아카이브)](https://civitai.com/models/389716) | **SDXL** | `<lora:bluearchive-arona-s1-ponyxl-lora-nochekaiser:1>, arona, blue eyes, blue hair, hair over one eye, bangs, halo, mechanical halo,`<br>`long sleeves, ribbon, school uniform, serafuku, skirt, white skirt,` |
| `MisonoMika.safetensors` | [[Illustrious] Misono Mika 聖園ミカ / Blue Archive](https://civitai.com/models/1791534) | **SDXL** | `aamika, long hair, pink hair, single side bun, halo, hair flower, hair ornament, yellow eyes, white wings, white capelet, blue bowtie, white dress, wrist scrunchie, white pantyhose`<br>`aamika, pink hair, double bun, halo, hair flower, hair scrunchie, yellow eyes, white wings, track jacket, black jacket, long sleeves, black shorts`<br>`aamika, long hair, pink hair, ponytail, halo, hair scrunchie, yellow eyes, white wings, competition swimsuit, black one-piece swimsuit`<br>`aamika, long hair, pink hair, ponytail, halo, hair scrunchie, yellow eyes, white wings, cheerleader, detached collar, cleavage, crop top, sleeveless, pom pom (cheerleading), miniskirt, pleated skirt, white skirt` |
| `TangaIbukiOnePieceDress.safetensors` | [IllustriousXL - Tanga Ibuki  丹花 イブキ - blue archive](https://civitai.com/models/1058938) | **SDXL** | `ibuki-dress,ibuki \(blue archive\),yellow eyes,blonde hair,long hair,one side up,pointy ears,halo,black hair ribbon,horns,tail,low wings,black dress,bare shoulders,elbow gloves,grey pantyhose,mary janes`<br>`ibuki-dress,ibuki \(blue archive\), closed eyes,blonde hair,white ribbon,twintails,pointy ears,halo,low wings,tail,white dress, frilled dress,sleeveless,straw hat` |
| `TangaIbukiSwimsuit.safetensors` | [IllustriousXL - Tanga Ibuki  丹花 イブキ - blue archive](https://civitai.com/models/1058938) | **SDXL** | `ibuki-swimsuit,(ibuki \(blue archive\):0.7), yellow eyes,blonde hair,single hair bun,hairbow,halo,pointy ears,low wings,tail,halo,horns,one-piece swimsuit, polka dot` |

## Citrus SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `MeiAihara.safetensors` | [Mei Aihara \| 藍原芽衣 (Citrus)](https://civitai.com/models/1274858) | **SDXL** | `meiaihara_citrus, black hair, long hair, purple eyes, hair between eyes` |
| `YuzuAihara.safetensors` | [Yuzu Aihara \| 藍原柚子 (Citrus)](https://civitai.com/models/1274738) | **SDXL** | `yuzuaihara_citrus, green eyes, long hair, blonde hair` |

## Date A Live SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HimekawaYoshino.safetensors` | [Himekawa Yoshino/氷芽川 四糸乃  \| Date A Live/デート・ア・ライブ (2 outfits)](https://civitai.com/models/1191189) | **SDXL** | `Yoshino`<br>`yoshinohermit`<br>`yoshinoshiryon` |
| `HoshimiyaMukuro.safetensors` | [Pony/IL Hoshimiya Mukuro/ 	星宮 六喰 \| Date a Live/デート・ア・ライブ (2 outfit)](https://civitai.com/models/598302) | **SDXL** | `Mukuro`<br>`MukuroZodiac`<br>`MukuroCasual` |
| `ItsukaKotori.safetensors` | [Itsuka Kotori/五河 琴里 \|  Date A Live/デート・ア・ライブ (5 outfits)](https://civitai.com/models/1168945) | **SDXL** | `Kotori`<br>`Kotorifrx`<br>`Kotoriscl`<br>`KotoriIfrit`<br>*(+2 trigger lainnya)* |
| `ItsukaShidou.safetensors` | [Shidou Itsuka / Date A Live (IL)](https://civitai.com/models/1154090) | **SDXL** | `shidou itsuka,blue hair,brown eyes` |
| `ItsukaShiori.safetensors` | [Itsuka Shiori Date A Live\|デート・ア・ライブ (2 outfits) [COMMISION]](https://civitai.com/models/1711380) | **SDXL** | `Itsuka Shiori` |
| `IzayoiMiku.safetensors` | [Izayoi Miku/誘宵 美九  \| Date A Live/デート・ア・ライブ (2 outfits)](https://civitai.com/models/1188235) | **SDXL** | `Miku Izayoi`<br>`Mikudiva` |
| `MariaArusu.safetensors` | [Maria Arusu/  	或守 鞠亜 \| Date a Live/デート・ア・ライブ (3 outfits)](https://civitai.com/models/1258948) | **SDXL** | `Maria Arusu` |
| `Mayuri.safetensors` | [Mayuri/ 万由里  \| Date a Live/デート・ア・ライブ (2 outfits)](https://civitai.com/models/1256489) | **SDXL** | `Mayuri` |
| `NatsumiKyouno.safetensors` | [Natsumi Kyouno/鏡野 七罪  \| Date A Live/デート・ア・ライブ (2 form/ 3 outfits)](https://civitai.com/models/1195246) | **SDXL** | `Natsumismall`<br>`Natsumibig` |
| `NiaHonjou.safetensors` | [Nia Honjou/本条 二亜 \| Date A Live/デート・ア・ライブ (2 outfits)](https://civitai.com/models/1198297) | **SDXL** | `Nia Honjou`<br>`NiaSister` |
| `SonogamiRinne.safetensors` | [Sonogami Rinne/園神 凜祢  \| Date a Live/デート・ア・ライブ (3 outfit/ 2 hairstyle)](https://civitai.com/models/1211761) | **SDXL** | `Sonogami Rinne`<br>`RinneRuler` |
| `TakamiyaMana.safetensors` | [Takamiya Mana/ 崇宮 真那  \| Date a Live/デート・ア・ライブ (3 outfits) [COMMISION]](https://civitai.com/models/1661650) | **SDXL** | `Takamiya Mana` |
| `TakamiyaMio.safetensors` | [Takamiya Mio/崇宮 澪  \| Date a Live/デート・ア・ライブ (3 outfit/ 3 hairstyle)](https://civitai.com/models/1208250) | **SDXL** | `takamiya mio` |
| `TobiichiOrigamiAngleAstral.safetensors` | [(IL/Pony) Tobiichi Origami Date A Live\|デート・ア・ライブ  (Angel astral dress + 2 outfit)](https://civitai.com/models/590014) | **SDXL** | `AngelOrigami`<br>`tobiichi origami`<br>`SchoolOrigami`<br>`maidOrigami` |
| `TobiichiOrigamiDevilAstral.safetensors` | [(Pony/IL) Tobiichi Origami Inverse Date A Live\|デート・ア・ライブ (Devil/Inverse astral dress + 3 outfit)](https://civitai.com/models/592036) | **SDXL** | `moegami`<br>`devilorigami`<br>`s3origami`<br>`s4origami`<br>*(+1 trigger lainnya)* |
| `TokisakiKurumiC2P.safetensors` | [Tokisaki Kurumi/ 時崎 狂三 \| Date a Live/デート・ア・ライブ (6 outfit/ 4 hairstyle)](https://civitai.com/models/1204607) | **SDXL** | `Kurumi` |
| `TokisakiKurumiUnholyDesire.safetensors` | [Kurumi Tokisaki - Date A Live  [Character/Clothes/Outfit] (Illustrious)](https://civitai.com/models/1423320) | **SDXL** | `kurumitokisaki` |
| `YamaiKaguya.safetensors` | [Yamai Kaguya/八舞 耶倶矢  \| Date A Live/デート・ア・ライブ (3 outfits)](https://civitai.com/models/1181057) | **SDXL** | `Kaguya`<br>`Kaguyaberserk` |
| `YamaiYuzuru.safetensors` | [Yamai Yuzuru/八舞 耶倶矢  \| Date A Live/デート・ア・ライブ (4 outfits)](https://civitai.com/models/1186951) | **SDXL** | `yuzuru`<br>`yuzuruberserk` |
| `YatogamiTohka.safetensors` | [Yatogami Tohka/夜刀神 十香  \| Date A Live/デート・ア・ライブ (4 outfits)](https://civitai.com/models/1173118) | **SDXL** | `Tohka`<br>`TohkaPrincess`<br>`Tohkahyb`<br>`Tohkascl` |

## Fate/Kalleid Liner Prisma Illya SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `ChloeVonEinzbern_C2P.safetensors` | [Chloe Von Einzbern \| Fate/Kalleid Liner Prisma Illya (4 outfits) [COMMISION]](https://civitai.com/models/1762845) | **SDXL** | `Chloe` |
| `ChloeVonEinzbern_XViviochanX.safetensors` | [Chloe von Einzbern (Fate/kaleid liner Prisma Illya)](https://civitai.com/models/1868616) | **SDXL** | `Chloe von Einzbern (Fate/kaleid liner Prisma Illya), long hair, hair between eyes, yellow eyes, pink hair, dark skin, dark-skinned female, hair ornament, half updo, breasts, small breasts, thighs`<br>`Chloe von Einzbern (Fate/kaleid liner Prisma Illya), long hair, hair between eyes, yellow eyes, pink hair, dark skin, dark-skinned female, hair ornament, half updo, stomach tattoo, breasts, small breasts, thighs`<br>`Chloe von Einzbern (Fate/kaleid liner Prisma Illya), long hair, single hair bun, topknot, hair between eyes, yellow eyes, pink hair, dark skin, dark-skinned female, hair ornament, half updo, breasts, small breasts, thighs`<br>`Chloe von Einzbern (Fate/kaleid liner Prisma Illya), long hair, braid, hair between eyes, yellow eyes, pink hair, dark skin, dark-skinned female, hair ornament, stomach tattoo, breasts, small breasts, thighs`<br>*(+20 trigger lainnya)* |
| `IllyasvielVonEinzbern_C2P.safetensors` | [Illyasviel Von Einzbern \| Fate/Kalleid Liner Prisma Illya (3 outfits) [COMMISION]](https://civitai.com/models/1707826) | **SDXL** | `Illya` |
| `IllyasvielVonEinzbern_h_madoka.safetensors` | [[Illustrious] Illyasviel von Einzbern イリヤスフィール・フォン・アインツベルン / Fate/kaleid liner Prisma☆Illya](https://civitai.com/models/941181) | **SDXL** | `aaillya, long hair, blonde hair, two side up, hair ornament, red eyes, bare shoulders, magical girl, cape, orange ascot, pink shirt, sleeveless, detached sleeves, white gloves, white skirt, pink thighhighs`<br>`aaillya, long hair, blonde hair, beret, white headwear, red eyes, school uniform, collarbone, neck ribbon, white shirt, puffy short sleeves, pleated skirt, black skirt`<br>`aaillya, long hair, blonde hair, mask on head, skull mask, hood up, torn scarf, black scarf, red eyes, bare shoulders, short jumpsuit, sleeveless, arm wrap, asymmetrical legwear, single thighhigh, black thighhighs`<br>`aaillya, long hair, blonde hair, ponytail, hair bow, red eyes, detached collar, bare shoulders, strapless, pink dress, armor, detached sleeves, gauntlets`<br>*(+1 trigger lainnya)* |
| `MeMaXLFlatAnimeStyleV3C.safetensors` | [MeMaXL Flat Anime Style - Noob/Illustrious/Pony/XL](https://civitai.com/models/269772) | **SDXL** | *Tidak ada trigger khusus* |
| `MiyuEdelfelt_C2P.safetensors` | [Miyu Edelfelt \| Fate/Kalleid Liner Prisma Illya (6 outfits) [COMMISION]](https://civitai.com/models/1759947) | **SDXL** | `Miyu` |
| `PrismaIllyaStyle.safetensors` | [Prisma Illya Style (Fate/Kaleid liner Prisma) [Illustrious & Pony & SD1.5]](https://civitai.com/models/248048) | **SDXL** | `2girls,   illyasviel von einzbern, red eyes, white hair, long hair, red eyes, chloe von einzbern, yellow eyes, pink hair, long hair, one side up, dark skin,`<br>`illyasviel von einzbern, red eyes, white hair, long hair, red eyes,`<br>`chloe von einzbern, yellow eyes, pink hair, long hair, one side up, dark skin,`<br>`miyu edelfelt, brown eyes, black hair, hair ornament,` |

## Gamers SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HoshinomoriChiaki.safetensors` | [Hoshinomori Chiaki \| GAMERS!](https://civitai.com/models/1166188) | **SDXL** | `hoshinomori chiaki` |
| `HoshinomoriKonoha.safetensors` | [Konoha Hoshinomori (星ノ守 心春) - Gamers! (ゲーマーズ！) - COMMISSION](https://civitai.com/models/1513389) | **SDXL** | `konoha hoshinomori, long hair, blue eyes, black hair, ribbon, twintails, hair ribbon, hair clip, mature female, small breasts, anime screencap`<br>`shorts, off-shoulder, long sleeves, strap, blue shirt,`<br>`long sleeves, hood, hoodie, grey hoodie,` |
| `SakuranoAguri.safetensors` | [Sakurano Aguri \| GAMERS!](https://civitai.com/models/1166097) | **SDXL** | `sakurano aguri` |
| `TendouKaren.safetensors` | [Tendou Karen \| GAMERS!](https://civitai.com/models/1166050) | **SDXL** | `tendou karen` |

## HELLO WORLD SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `RuriIchigyou.safetensors` | [Ruri Ichigyou \| 一行瑠璃 (HELLO WORLD)](https://civitai.com/models/1268100) | **SDXL** | `ruriichigyou_helloworld, long hair, black hair, brown eyes, mole` |

## Hinako Note SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HinakoSakuragi.safetensors` | [Hinako Sakuragi \| 桜木ひな子 (Hinako Note \| ひなこのーと)](https://civitai.com/models/1271175) | **SDXL** | `hinakosakuragi_hinakonote, pink hair, twintails, hair ornament, long hair, low twintails, scrunchie, pink eyes` |
| `KuinaNatsukawa.safetensors` | [Kuina Natsukawa \| 夏川くいな (Hinako Note \| ひなこのーと)](https://civitai.com/models/1270876) | **SDXL** | `kuinanatsukawa_hinakonote, long hair, hairclip, blue hair, yellow eyes, ahoge, hair flaps` |

## Hololive SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `OozoraSubaru.safetensors` | [[Illustrious] Oozora Subaru 大空スバル / Hololive](https://civitai.com/models/1791441) | **SDXL** | `aasubaru, short hair, black hair, baseball cap, backwards hat, stopwatch around neck, tied shirt, striped shirt, short sleeves, wristband, short shorts, white shorts, mismatched legwear, red thighhighs, white thighhighs`<br>`bbsubaru, short hair, black hair, french braid, grey headwear, beret, hair ornament, sailor collar, black bowtie, suspenders, crop top, cropped jacket, blue jacket, long sleeves, midriff, blue shorts, hip vent, grey thighhighs`<br>`ccsubaru, short hair, black hair, mini top hat, yellow headwear, idol, yellow bowtie, sleeveless shirt, arm strap, wrist cuffs, white gloves, navel cutout, white bow, layered skirt, white skirt, mismatched legwear, black thighhighs, yellow thighhighs`<br>`ddsubaru, short hair, black hair, hair bow, kanzashi, tassel hair ornament, print kimono, multicolored kimono, long sleeves, wide sleeves, sash, hakama skirt, blue skirt`<br>*(+5 trigger lainnya)* |
| `ShigureUi.safetensors` | [时雨羽衣-虚拟主播（Shigure Ui-Vtuber）](https://civitai.com/models/178641) | **SDXL** | `aged down`<br>`child`<br>`Shigure Ui`<br>`short hair,light brown hair,twintails,pom pom hair ornament,hair intakes,bangs,green eyes`<br>*(+4 trigger lainnya)* |

## Idoly Pride SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `NagaseKotono.safetensors` | [Nagase Kotono \| Idoly Pride \| アイドリープライド](https://civitai.com/models/2658421) | **SDXL** | `nagase kotono` |
| `NagaseMana.safetensors` | [Nagase Mana \| Idoly Pride \| アイドリープライド](https://civitai.com/models/2664100) | **SDXL** | `nagase mana` |

## Koisuru Otome SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HiuraMihate.safetensors` | [Hiura Mihate \| I Turned My Childhood Friend (♂) Into A Girl \| 幼馴染（♂）を女の子にしてしまった話](https://civitai.com/models/1613774) | **SDXL** | `hiura` |

## Meitantei Precure SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `MoriaLuluka.safetensors` | [[Anima LoRA] 森亜るるか / moria luluka [名探偵プリキュア！/ Meitantei Precure!]](https://civitai.com/models/2406391) | **SDXL** | `moria luluka, meitantei precure!,`<br>`grey hair, long hair, antenna hair, hair intakes, hair bow, hair between eyes, purple eyes, black dress, black skirt, capelet, buttons, frills, three-quarter sleeves, puffy sleeves, purple pantyhose, black shoes, necklace, pendant,` |

## Nukitashi the Animation SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AsaneTachibana.safetensors` | [Nukitashi The Animation \| Asane Tachibana](https://civitai.com/models/1793000) | **SDXL** | `Asane Tachibana` |
| `HinamiWatarai.safetensors` | [Nukitashi The Animation \| Hinami Watarai](https://civitai.com/models/1838124) | **SDXL** | `Hinami Watarai` |
| `JunnosukeTachibana.safetensors` | [Nukitashi the Animation \| Junnosuke Tachibana](https://civitai.com/models/1792959) | **SDXL** | `Junnosuke Tachibana` |
| `KoukiSenba.safetensors` | [Nukitashi the Animation \| Kouki Senba](https://civitai.com/models/1792965) | **SDXL** | `Kouki Senba` |
| `MozumeSan.safetensors` | [Nukitashi The Animation \| Mozume San](https://civitai.com/models/1792969) | **SDXL** | `Mozume San` |
| `NanaseKatagiri.safetensors` | [Nukitashi The Animation \| Nanase Katagiri](https://civitai.com/models/1792995) | **SDXL** | `Nanase Katagiri` |
| `OtomeTanahashi.safetensors` | [Nukitashi The Animation \| Otome Tanahashi](https://civitai.com/models/1792991) | **SDXL** | `Otome Tanahashi`<br>`monocle` |
| `RanHanamaru.safetensors` | [Nukitashi The Animation \| Ran Hanamaru](https://civitai.com/models/1792981) | **SDXL** | `Ran Hanamaru, glasses` |
| `ReiTadasugawa.safetensors` | [Nukitashi The Animation \| Rei Tadasugawa](https://civitai.com/models/1792975) | **SDXL** | `Rei Tadasugawa` |

## One ROOM SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `MokaAoshima.safetensors` | [Moka Aoshima \| 青島萌香 (One Room \| ワンルーム)](https://civitai.com/models/1262953) | **SDXL** | `mokaaoshima_oneroom`<br>`brown hair`<br>`blue eyes`<br>`twintails`<br>*(+1 trigger lainnya)* |

## Oshi no Ko SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `ArimaKana.safetensors` | [Arima Kana \| Oshi no Ko \| 推しの子](https://civitai.com/models/1042202) | **SDXL** | `arima kana` |
| `HoshinoAi.safetensors` | [Hoshino Ai \| Oshi no Ko \| 推しの子](https://civitai.com/models/955927) | **SDXL** | `hoshino ai` |
| `HoshinoRuby.safetensors` | [Hoshino Ruby \| Oshi no Ko \| 推しの子](https://civitai.com/models/955545) | **SDXL** | `hoshino ruby` |
| `KurokawaAkane.safetensors` | [Kurokawa Akane \| Oshi no Ko \| 推しの子](https://civitai.com/models/962780) | **SDXL** | `kurokawa akane` |
| `Memcho.safetensors` | [Memcho \| Oshi no Ko \| 推しの子](https://civitai.com/models/1065008) | **SDXL** | `memcho` |

## Sasayaku You ni Koi wo Utau SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HimariKino.safetensors` | [Himari Kino \| 木野ひまり (Sasayaku You ni Koi wo Utau \| Whisper Me a Love Song \| ささやくように恋を唄う)](https://civitai.com/models/1253100) | **SDXL** | `himari_kino`<br>`red hair`<br>`red eyes`<br>`bangs`<br>*(+2 trigger lainnya)* |
| `YoriAsanagi.safetensors` | [Yori Asanagi \| 朝凪依 (Sasayaku You ni Koi wo Utau \| Whisper Me a Love Song \| ささやくように恋を唄う)](https://civitai.com/models/1279912) | **SDXL** | `yori_asanagi, blue eyes, black hair, sidelocks` |

## Shoujou Ramune SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `ChieSayama.safetensors` | [Chie Sayama (狭山 千恵) - Shoujo Ramune (小女ラムネ)](https://civitai.com/models/1478649) | **SDXL** | `chie sayama, brown hair, yellow eyes, hair ornament, hairclip, anime screencap`<br>`camisole, blue camisole, bare shoulders, collarbone, skirt, yellow skirt,` |
| `KomakoSemenovich.safetensors` | [Komako Semenovich (コマコ・セメノビッチ) - Shoujo Ramune (小女ラムネ)](https://civitai.com/models/1478651) | **SDXL** | `komako semenovich, blue eyes, ribbon, twintails, hair ribbon, white hair, anime screencap`<br>`dress, white dress,` |

## Summer Pocket SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `KushimaKamome.safetensors` | [Summer Pockets_Kushima Kamome丨夏日口袋_久島鴎](https://civitai.com/models/1393211) | **SDXL** | `Kushima Kamome` |
| `NaruseShiroha.safetensors` | [Summer Pockets_Naruse Shiroha丨夏日口袋_鳴瀬しろは](https://civitai.com/models/1393092) | **SDXL** | `Naruse Shiroha` |
| `SorakadoAo.safetensors` | [Summer Pockets_Sorakado Ao丨夏日口袋_空門蒼](https://civitai.com/models/1393198) | **SDXL** | `Sorakado Ao` |
| `TsumugiWenders.safetensors` | [Summer Pockets_Tsumugi Wenders丨夏日口袋_紬ヴェンダース](https://civitai.com/models/1393125) | **SDXL** | `Tsumugi Wenders` |
| `UmiKatou.safetensors` | [Umi Katou (加藤 うみ) - Summer Pockets - COMMISSION](https://civitai.com/models/1616844) | **SDXL** | `umi katou, long hair, bangs, purple hair, black eyes, two side up, anime screencap`<br>`hat, dress, ribbon, sleeveless, sailor collar, white dress, sleeveless dress, beret, white headwear, sailor dress, yellow ribbon` |

## Toaru Kagaku no Railgun SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `MisakaMikotoKing_Dong.safetensors` | [御坂美琴-科学超电磁炮（Misaka mikoto-Toaru Kagaku no Railgun）](https://civitai.com/models/1198152) | **SDXL** | `Misaka mikoto`<br>`casual clothes`<br>`baseball cap,alternate hairstyle,short hair,short ponytail,brown hair,hair between eyes,bangs,brown eyes`<br>`collarbone,bra strap,t-shirt,black shirt,heart print,electricity,electrokinesis,green shorts,short shorts,sneakers` |
| `MisakaMikotoNochekaiser881.safetensors` | [Mikoto Misaka (御坂 美琴) - A Certain Scientific Railgun (とある科学の超電磁砲)](https://civitai.com/models/1354309) | **SDXL** | `mikoto misaka, short hair, brown hair, hair ornament, hair flower, brown eyes, mature female, small breasts, anime screencap`<br>`skirt, shirt, school uniform, white shirt, short sleeves, pleated skirt, grey skirt, sweater vest, tokiwadai school uniform,` |
| `SatenRuiko.safetensors` | [佐天泪子-科学超电磁炮（Saten Ruiko-Toaru Kagaku no Railgun）](https://civitai.com/models/1198106) | **SDXL** | `Saten Ruiko`<br>`casual clothes no.1`<br>`long hair,black hair,hair ornament,hair flower,sidelocks,bangs,black eyes`<br>`bare shoulders,camisole,white shirt,frilled shirt,medium breasts,dark blue pants,capri pants,pants rolled up,sandals,red footwear` |
| `ShiraiKuroko.safetensors` | [白井黑子-科学超电磁炮（Shirai Kuroko-Toaru Kagaku no Railgun）](https://civitai.com/models/1199573) | **SDXL** | `Shirai Kuroko`<br>`long hair,pink hair,wavy hair,twintails,hair bow,red bow,hair ribbon,red ribbon,parted bangs,pink eyes`<br>`tokiwadai school uniform,brown sweater vest,white shirt,collared shirt,armband,short sleeves,small breasts,miniskirt,grey skirt,pleated skirt,ankle socks,loafers` |
| `ShokuhoMisaki.safetensors` | [食蜂操祈-科学超电磁炮（Shokuho Misaki-Toaru Kagaku no Railgun）](https://civitai.com/models/1199773) | **SDXL** | `Shokuho Misaki`<br>`long hair,blonde hair,sidelocks,hair between eyes,parted bangs,brown eyes,sparkling eyes`<br>`tokiwadai school uniform,brown sweater vest,white shirt,collared shirt,short sleeves,elbow gloves,white gloves,large breasts,miniskirt,grey skirt,pleated skirt,zettai ryouiki,white thighhighs,loafers` |
| `UiharuKazari.safetensors` | [初春饰利-科学超电磁炮（Uiharu Kazari-Toaru Kagaku no Railgun）](https://civitai.com/models/1199848) | **SDXL** | `Uiharu Kazari`<br>`black hair,short hair,hair ornament,hair flower,head wreath,blunt bangs,brown eyes`<br>`collarbone,sakugawa school uniform,blue sailor collar,white shirt,red neckerchief,short sleeves,blue skirt,long skirt,pleated skirt,ankle socks,loafers` |

## Uma Musume SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HaruUrara3D.safetensors` | [Haru Urara (Umamusume) in game style 3D ILL-v2](https://civitai.com/models/1689092) | **SDXL** | `ummsmingame, 3d, haru urara \(umamusume\),` |
| `MejiroArdanNocheKaiser.safetensors` | [Mejiro Ardan (メジロアルダン) - Uma Musume (ウマ娘)](https://civitai.com/models/1727421) | **SDXL** | `mejiro ardan, mejiro ardan (umamusume), long hair, animal ears, blue hair, purple eyes, braid, horse ears, horse girl, crown braid, mature female, breasts, anime screencap`<br>`long sleeves, gloves, dress, bare shoulders, short sleeves, frills, white gloves, off shoulder, black dress, off-shoulder dress, center frills, asymmetrical sleeves`<br>`shirt, skirt, thighhighs, bow, short sleeves, pleated skirt, puffy sleeves, bowtie, sailor collar, white thighhighs, puffy short sleeves, white skirt, purple shirt,` |
| `OguriCapNocheKaiser.safetensors` | [Oguri Cap (オグリキャップ) - Uma Musume (ウマ娘)](https://civitai.com/models/1727436) | **SDXL** | `oguri cap, oguri cap (umamusume), hair ornament, long hair, blue eyes, animal ears, hair between eyes, tail, white hair, grey hair, ahoge, multicolored hair, horse ears, horse girl, horse tail, mature female, medium breasts, anime screencap`<br>`shirt, collarbone, white shirt, short sleeves, shorts, gym uniform, gym shirt, gym shorts, race bib`<br>`shirt, skirt, long sleeves, white shirt, pantyhose, pleated skirt, sailor collar, blue skirt, black pantyhose, neckerchief, blue sailor collar, red neckerchief,` |
| `SymboliRudolfNocheKaiser.safetensors` | [Symboli Rudolf (シンボリルドルフ) - Uma Musume (ウマ娘)](https://civitai.com/models/1727444) | **SDXL** | `symboli rudolf, symboli rudolf (umamusume), long hair, brown hair, animal ears, hair between eyes, purple eyes, white hair, multicolored hair, streaked hair, horse ears, horse girl, mature female, medium breasts, anime screencap`<br>`shirt, skirt, thighhighs, bow, short sleeves, pleated skirt, puffy sleeves, bowtie, sailor collar, white thighhighs, puffy short sleeves, white skirt, purple shirt,` |

## Vocaloid SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `HatsuneMikuRemake.safetensors` | [初音未来-博歌乐（Hatsune Miku-Vocaloid）](https://civitai.com/models/232864) | **SDXL** | `hatsune miku`<br>`absurdly long hair,aqua hair,twintails,hair ornament,sidelocks,hair between eyes,parted bangs,aqua eyes`<br>`white shirt,collared shirt,bare shoulders,sleeveless shirt,aqua necktie,detached sleeves,black sleeves,shoulder tattoo,fringe,black thighhighs,miniskirt,pleated skirt,zettai ryouiki,thigh boots` |
| `KagamineRinRemake.safetensors` | [镜音铃-博歌乐（Kagamine Rin-Vocaloid）](https://civitai.com/models/232867) | **SDXL** | `kagamine rin`<br>`short hair,blonde hair,floating hair,white hairband,hair bow,white bow,hairclip,swept bangs,blue eyes`<br>`collarbone,bare shoulders,black sailor collar,white shirt,sleeveless shirt,crop top,midriff,yellow neckerchief,black sleeves,detached sleeves,medium breasts,navel,stomach,orange belt,fringe,short shorts,black shorts,leg warmers,white footwear` |
| `KasaneTeto.safetensors` | [Kasane Teto - LoRA IllustriousXL](https://civitai.com/models/1228590) | **SDXL** | `kteto, girl, short hair, drill hair, parade uniform, long sleeves, skirt`<br>`kteto, girl, drill hair, short hair, yellow gloves, necktie, striped shirt, suspenders, red hat, pants`<br>`(aged up:1.3)` |

## Wonder Egg Priority SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AiOhto.safetensors` | [Ai Ohto \| 大戸アイ (Wonder Egg Priority \| ワンダーエッグ・プライオリティ)](https://civitai.com/models/1257881) | **SDXL** | `ai_ohto__wep`<br>`short hair`<br>`blue hair`<br>`ahoge`<br>*(+3 trigger lainnya)* |
| `NeiruAonuma.safetensors` | [Neiru Aonuma \| 青沼ねいる (Wonder Egg Priority \| ワンダーエッグ・プライオリティ)](https://civitai.com/models/1295404) | **SDXL** | `NeiruAonuma_WEP`<br>`brown hair, neirudefault, dark skin, dark-skinned female, green eyes` |

## WUWA SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `Camellya.safetensors` | [Camellya - Wuthering Waves](https://civitai.com/models/1614638) | **SDXL** | `camellya \(wuwa\)` |
| `Carlotta.safetensors` | [Carlotta - Wuthering Waves](https://civitai.com/models/1657633) | **SDXL** | `carlotta \(wuwa\)` |
| `CartethyiaFleurdelys.safetensors` | [cartethyia&fleurdelys (wuthering waves) \|\| 卡提希娅&芙露德莉斯 鸣潮 \| Ansl Ai](https://civitai.com/models/1419171) | **SDXL** | `cartethyia \(wuthering waves\), 1girl, blue eyes, blonde hair, pointy ears, hair ornament, solo, long hair, jewelry, dress, elf, white dress, sandals, bare shoulders, blue earrings, earrings, tacet mark \(wuthering waves\),crown of thorns`<br>`fleurdelys \(wuthering waves\), 1girl, blue eyes, blonde hair, solo, yellow single horn, pointy ears, long hair, halo, bare shoulders, jewelry, dress, earrings, glowing tacet mark \(wuthering waves\)` |
| `Phoebe.safetensors` | [Phoebe - Wuthering Waves](https://civitai.com/models/1657671) | **SDXL** | `phoebe \(wuwa\)` |
| `Shorekeeper.safetensors` | [[CharacterXL Illustrious] Shorekeeper (Wuthering Waves)](https://civitai.com/models/896599) | **SDXL** | `purple eyes, colored eyelashes, blue hair, hair intakes, medium hair`<br>`purple eyes, colored eyelashes, blue hair, hair intakes, medium hair, two-tone veil, blue butterfly on veil, silver choker, frills, sleveless dress cutout, halterneck, transparent leotard under dress, blue crest between breasts, armlet, high-low skirt, back bow, patterned leg, strappy heels` |
| `Zhezhi.safetensors` | [Zhezhi - Wuthering Waves](https://civitai.com/models/1724286) | **SDXL** | `zhezhi \(wuwa\)` |

## Yagate kimi ni naru SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `YuuKoito.safetensors` | [Yuu Koito \| 小糸侑 (Yagate Kimi ni Naru \| Bloom Into You \| やがて君になる)](https://civitai.com/models/1262779) | **SDXL** | `yuukoito_yagakimi`<br>`twintails`<br>`low twintails`<br>`orange hair`<br>*(+2 trigger lainnya)* |

## Yuru Yuri SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AkazaAkari.safetensors` | [赤座灯里-摇曳百合（Akaza Akari-Yuru Yuri）](https://civitai.com/models/1156982) | **SDXL** | `Akaza Akari`<br>`ahoge,short hair,red hair,double bun,hair intakes,hair between eyes,bangs,purple eyes`<br>`collarbone,nanamori school uniform,black sailor collar,sailor dress,layered sleeves,short over long sleeves,red long sleeves,small breasts,black socks,loafers` |
| `FunamiYui.safetensors` | [船见结衣-摇曳百合（Funami Yui-Yuru Yuri）](https://civitai.com/models/1157194) | **SDXL** | `Funami Yui`<br>`black hair,short hair,hair between eyes,parted bangs,brown eyes`<br>`collarbone,nanamori school uniform,black sailor collar,sailor dress,layered sleeves,short over long sleeves,red long sleeves,armband,small breasts,black socks,loafers` |
| `FurutaniHimawari.safetensors` | [Furutani Himawari \| Yuru Yuri!](https://civitai.com/models/60753) | **SDXL** | `furutani himawari, brown eyes, blue hair, hairband, low twin braids`<br>`, nanamori school uniform` |
| `IkedaChitose.safetensors` | [池田千岁-摇曳百合（Ikeda Chitose-Yuru Yuri）](https://civitai.com/models/1157133) | **SDXL** | `Ikeda Chitose`<br>`grey hair,short hair,messy hair,hair between eyes,parted bangs,blue eyes,glasses`<br>`collarbone,nanamori school uniform,black sailor collar,sailor dress,layered sleeves,short over long sleeves,red long sleeves,small breasts,black socks,uwabaki` |
| `MatsumotoRise.safetensors` | [松本理世-摇曳百合（Matsumoto Rise-Yuru Yuri）](https://civitai.com/models/1157161) | **SDXL** | `Matsumoto Rise`<br>`long hair,black hair,hime cut,sidelocks,blunt bangs,red eyes`<br>`collarbone,nanamori school uniform,black sailor collar,sailor dress,layered sleeves,short over long sleeves,red long sleeves,armband,small breasts,black socks,uwabaki` |
| `OomuroSakurako.safetensors` | [[IL v0.1] Sakurako Oomuro - Yuru Yuri \| 大室櫻子 ゆるゆり (~3 costumes) [Port Request]](https://civitai.com/models/1149769) | **SDXL** | `oosaku, light brown hair, medium hair, brown eyes, hairclip, fang, nanamori school uniform, serafuku, sailor collar, white shirt, layered sleeves, short over long sleeves, red dress, pleated dress, thighs, white socks, shoes,`<br>`oosaku, light brown hair, medium hair, brown eyes, hairclip, fang, pink tank top, star print, sleeveless, white skirt, frilled skirt, black leggings,`<br>`oosaku, light brown hair, medium hair, brown eyes, hairclip, fang, gym uniform, gym shirt, name tag, bike shorts, sneakers,`<br>`oosaku, light brown hair, medium hair, brown eyes, hairclip, fang, animal costume, white pajamas,`<br>*(+1 trigger lainnya)* |
| `SugiuraAyano.safetensors` | [杉浦绫乃-摇曳百合（Sugiura Ayano-Yuru Yuri）](https://civitai.com/models/1157069) | **SDXL** | `Sugiura Ayano`<br>`ahoge,long hair,ponytail,hair intakes,sidelocks,hair between eyes,bangs,brown eyes`<br>`collarbone,nanamori school uniform,black sailor collar,sailor dress,layered sleeves,short over long sleeves,red long sleeves,small breasts,black socks,loafers` |
| `ToshinoKyouko.safetensors` | [岁纳京子-摇曳百合（Toshino Kyouko-Yuru Yuri）](https://civitai.com/models/1157216) | **SDXL** | `Toshino Kyouko`<br>`long hair,blonde hair,hair bow,red bow,sidelocks,hair between eyes,bangs,v-shaped eyebrows,blue eyes`<br>`collarbone,nanamori school uniform,black sailor collar,sailor dress,layered sleeves,short over long sleeves,red long sleeves,small breasts,black socks,loafers` |
| `YoshikawaChinatsu.safetensors` | [吉川千夏-摇曳百合（Yoshikawa Chinatsu-Yuru Yuri）](https://civitai.com/models/1157107) | **SDXL** | `Yoshikawa Chinatsu`<br>`short hair,pink hair,twintails,hair ornament,hair bobbles,blunt bangs,aqua eyes`<br>`collarbone,nanamori school uniform,black sailor collar,sailor dress,layered sleeves,short over long sleeves,red long sleeves,small breasts,black socks,loafers` |

## Random Character ANIMA

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AmanoHina_ANIMA.safetensors` | [Amano Hina \| Weathering with You \| 天気の子](https://civitai.com/models/2727181) | **ANIMA** | `amano hina` |
| `KinosakiMei_ANIMA.safetensors` | [Kinosaki Mei \| Marriagetoxin \| マリッジトキシン](https://civitai.com/models/2809452) | **ANIMA** | `kinosaki mei` |
| `ShiinaMahiru_ANIMA.safetensors` | [Shiina Mahiru \| The Angel Next Door Spoils Me Rotten \| お隣の天使様にいつの間にか駄目人間にされていた件](https://civitai.com/models/2734307) | **ANIMA** | `shiina mahiru (otonari no tenshi-sama)` |

## Random Character SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `ArisaSoutherncross.safetensors` | [[REQUEST] Alisa Southerncross - Keroro](https://civitai.com/models/1848081) | **SDXL** | `wintails, orange hair,purple eyes, hair bobbles, hair hair ornament, tsurime  collared shirt, school uniform, grey shirt,black ribbon,long hair,hair between eyes, long long sleeves, black pantyhose, hairband, low twintails, puffy sleeves, pleated skirt, frills,` |
| `ChitandaEru.safetensors` | [Eru Chitanda (千反田 える) - Hyouka (氷菓)](https://civitai.com/models/1676483) | **SDXL** | `eru chitanda, chitanda eru, long hair, black hair, bangs, blunt bangs, purple eyes, sidelocks, mature female, medium breasts, anime screencap`<br>`skirt, serafuku, black skirt, long sleeves, black sailor collar,` |
| `FutabaSana.safetensors` | [Futaba Sana \| Magia Record \| マギアレコード](https://civitai.com/models/1537619) | **SDXL** | `futaba sana` |
| `IrisKonosuba.safetensors` | [Iris Stylish-Sword Belzerg (ベルゼルグ･スタイリッシュ・ソード・アイリス) - KonoSuba: God's Blessing on This Wonderful World! (この素晴らしい世界に祝福を！)](https://civitai.com/models/1538608) | **SDXL** | `iris stylish sword belzerg, long hair, blonde hair, hair ornament, blue eyes, braid, fruit, grapes, anime screencap`<br>`dress, white dress, long sleeves,` |
| `KaorukoWaguri.safetensors` | [Kaoruko Waguri (和栗 薫子) - The Fragrant Flower Blooms with Dignity (Kaoru Hana wa Rin to Saku) (薫る花は凛と咲く)](https://civitai.com/models/1781295) | **SDXL** | `kaoruko waguri, long hair, blue eyes, black hair, very long hair, sidelocks, hairband, wavy hair, hair intakes, black hairband, mature female, medium breasts, anime screencap`<br>`shirt, skirt, long sleeves, ribbon, pantyhose, pleated skirt, serafuku, puffy sleeves, sailor collar, black pantyhose, neck ribbon, black ribbon, pink skirt, white sailor collar, pink shirt,` |
| `KotegawaChisa.safetensors` | [Chisa Kotegawa (古手川 千紗) - Grand Blue Dreaming (ぐらんぶる)](https://civitai.com/models/1392576) | **SDXL** | `chisa kotegawa, short hair, bangs, brown hair, brown eyes, mature female, medium breasts, anime screencap`<br>`shirt, long sleeves, collarbone, white shirt, open clothes, cardigan, open cardigan,`<br>`navel, cleavage, collarbone, swimsuit, bikini, white bikini, sarong,` |
| `MadokaKaname.safetensors` | [Madoka Kaname (鹿目まどか) \| Puella Magi Madoka ☆ Magica anime \| Anime / Manga Character](https://civitai.com/models/1179622) | **SDXL** | *Tidak ada trigger khusus* |
| `MahiroKyoubashi.safetensors` | [Mahiro Kyoubashi](https://civitai.com/models/1063095) | **SDXL** | `mhrll, red_hair, blue_eyes, cleavage, smile, navel, looking_at_viewer, thighhighs, open_mouth, blush, armor, bikini_armor, mecha_musume, fang, black_thighhighs, short_hair` |
| `MahiroOyama.safetensors` | [Mahiro Oyama (緒山 まひろ) - Onimai: I'm Now Your Sister! (Oniichan wa Oshimai!) (お兄ちゃんはおしまい！)](https://civitai.com/models/1767788) | **SDXL** | `mahiro oyama, oyama mahiro, long hair, hair between eyes, brown eyes, pink hair, ahoge, multicolored hair, anime screencap`<br>`shirt, skirt, long sleeves, ribbon, jacket, white shirt, black skirt, black jacket, red ribbon, neck ribbon, long skirt`<br>`shirt, skirt, long sleeves, ribbon, white shirt, pleated skirt, collared shirt, red ribbon, neck ribbon, suspenders, wing collar, suspender skirt,` |
| `NagisaFurukawa.safetensors` | [Nagisa Furukawa (古河 渚) - Clannad](https://civitai.com/models/1679220) | **SDXL** | `nagisa furukawa, furukawa nagisa, short hair, brown hair, brown eyes, antenna hair, medium breasts, mature female, medium breasts, anime screencap`<br>`serafuku, pinafore dress, ribbon, pink ribbon,` |
| `SatoneChillwithyou.safetensors` | [聪音（放松时光：与你共享Lo-Fi故事）/satone_(chill_with_you) /](https://civitai.com/models/2251157) | **SDXL** | `satone\(chill with you\), 1girl, black hair, short hair, swept bangs, black eyes, headphones, red-framed eyewear, white shirt, hooded jacket, open jacket, hood down, two-tone jacket, black pants` |
| `SayuOgiwara.safetensors` | [Sayu Ogiwara (荻原 沙優) - Higehiro: After Being Rejected, I Shaved and Took in a High School Runaway (ひげを剃る。そして女子高生を拾う。)](https://civitai.com/models/1751913) | **SDXL** | `sayu ogiwara, long hair, bangs, brown hair, yellow eyes, mature female, medium breasts, anime screencap`<br>`skirt, shirt, long sleeves, bow, white shirt, pleated skirt, socks, collared shirt, bowtie, red bow, sweater, plaid, plaid skirt, cardigan, black socks, red bowtie,` |
| `SayuOgiwaraMadaFada.safetensors` | [Sayu Ogiwara / 荻原 沙優 - Higehiro / ひげを剃る。そして女子高生を拾う - IllustriousXL](https://civitai.com/models/1238668) | **SDXL** | `sayuogiwara, 1girl, skirt, school uniform, brown eyes, brown hair, jacket, shoes, red bow, socks, bow, brown footwear, pleated skirt, blazer, white shirt, loafers, collared shirt, shirt, red bowtie,`<br>`medium breasts`<br>`large breasts` |
| `TamakiIroha.safetensors` | [Tamaki Iroha \| Magia Record \| マギアレコード](https://civitai.com/models/1530590) | **SDXL** | `tamaki iroha` |
| `VioletEvergarden.safetensors` | [Violet Evergarden (ヴァイオレット・エヴァーガーデン) - Violet Evergarden (ヴァイオレット・エヴァーガーデン) - COMMISSION](https://civitai.com/models/1716401) | **SDXL** | `violet evergarden, blonde hair, blue eyes, hair ribbon, ribbon, short hair, braids, hair braids, red ribbon, mature female, medium breasts, anime screencap`<br>`blue jacket, brown gloves, cropped jacket, dress, gloves, green brooch, jacket, juliet sleeves, long sleeves, puffy sleeves, white dress,` |

## Tool SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `Above_BelowAngleSlider.safetensors` | [Above / Below angle slider](https://civitai.com/models/909487) | **SDXL** | *Tidak ada trigger khusus* |
| `AddMicroDetailsV5.safetensors` | [Add Micro Details - Concept (Illustrious \| Pony \| NoobAI)](https://civitai.com/models/1377820) | **SDXL** | `addmicrodetails` |
| `BangDream!Anime3DStyleforWAI.safetensors` | [Bang dream!  anime 3D Style for WAI](https://civitai.com/models/2482424) | **SDXL** | `bangdream_anime` |
| `BangDreamStyles_KINGDONG.safetensors` | [BanG Dream! 迷途之子 [动漫画风]（BanG Dream! It's MyGO [Anime style]）](https://civitai.com/models/1278946) | **SDXL** | `Bang Dream! It's Mygo anime style-Remake` |
| `BangDreamStyles_RIKUMIYASHIRO.safetensors` | [BanG Dream! \| Bandori \| バンドリ Illustration Style](https://civitai.com/models/1667570) | **SDXL** | `bandori_5starscard` |
| `DetailedEyesV3.safetensors` | [DetailedEyes_XL](https://civitai.com/models/120723) | **SDXL** | *Tidak ada trigger khusus* |
| `DramaticLightingSliderStyles.safetensors` | [DramaticLightingSliderStyles](https://civitai.com/models/1268294) | **SDXL** | *Tidak ada trigger khusus* |
| `DynamicPosesSlider.safetensors` | [Dynamic Poses slider PONYXL](https://civitai.com/models/438059) | **SDXL** | `dynamic pose, foreshortening, extreme perspective` |
| `GakumasIdolMasterStyles.safetensors` | [[Anima V1.0 / WAI] Gakuen Idolmaster Game Style / Gakumas (学マス)  Game Style](https://civitai.com/models/1858848) | **SDXL** | `gakumas, 3d`<br>`shaded face, sweat, messy hair`<br>`hanami saki, hanami ume, shinosawa hiro, hataya misuzu, arimura mao, fujita kotone, juo sena, himesaki rinami, katsuragi lilja, shiun sumika, kuramoto china, tsukimura temari,` |
| `GenesisStyles.safetensors` | [GENESIS](https://civitai.com/models/846953) | **SDXL** | *Tidak ada trigger khusus* |
| `HandXLILLUV1.1.safetensors` | [Hands XL + SD 1.5 + F1D + Pony + Illustrious + zit + ZIB](https://civitai.com/models/200255) | **SDXL** | *Tidak ada trigger khusus* |
| `LowLightDarkChiaroscuro.safetensors` | [Low Light, Dark, Chiaroscuro for Illustrious 0.1 & NoobAI](https://civitai.com/models/915440) | **SDXL** | `chiaroscuro`<br>`dark` |

## Poses SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `Akanbe.safetensors` | [akanbe / あっかんべー](https://civitai.com/models/845654) | **SDXL** | `akanbe` |
| `BandagedArm.safetensors` | [[Illust&XL] arm sling / bandaged arm / 骨折 / ギプス / 包帯](https://civitai.com/models/586588) | **SDXL** | `arm sling` |
| `BandagedLeg.safetensors` | [leg cast / bandaged leg / 骨折 / ギプス / 包帯](https://civitai.com/models/1646725) | **SDXL** | `leg cast` |
| `BattoujutsuStance.safetensors` | [Battoujutsu Stance (抜刀術) - Poses](https://civitai.com/models/1168316) | **SDXL** | `<lora:battoujutsu-stance-ponyxl-lora-nochekaiser:1>, battoujutsu stance, looking at viewer, holding, weapon, sword, holding weapon, holding sword, standing, katana, sheath, sheathed, fighting stance, ready to draw` |
| `BetterYuriKiss.safetensors` | [BetterYuriKiss](https://civitai.com/models/1188399) | **SDXL** | *Tidak ada trigger khusus* |
| `Biting_KissingStomach.safetensors` | [Biting/Kissing stomach (Yuri) -SDXL](https://civitai.com/models/1803782) | **SDXL** | `stomach biting` |
| `BreakDance.safetensors` | [breakdance / breaking / ブレイクダンス / ブレイキン](https://civitai.com/models/851015) | **SDXL** | `breakdance` |
| `BunnyRabbitPiece.safetensors` | [[Illust&XL] bunny rabbit piece / うさちゃんピース / うさピース](https://civitai.com/models/394500) | **SDXL** | `usa piece,double v` |
| `CenterAxisRelockStancePoses.safetensors` | [Center Axis Relock Stance - Poses](https://civitai.com/models/1208241) | **SDXL** | `<lora:center-axis-relock-stance-illustriousxl-lora-nochekaiser:1>, center axis relock stance, looking at viewer, holding, closed mouth, weapon, holding weapon, gun, holding gun, handgun, aiming, finger on trigger, aiming at viewer, m1911,` |
| `ConvenientCensoringInnertube.safetensors` | [[Illust&XL&Pony] convenient censoring innertube / 浮き輪で局部を隠す](https://civitai.com/models/624812) | **SDXL** | `convenient censoring, innertube` |
| `CrawlAwayPose.safetensors` | [Crawl Away Pose\| 给我 爬](https://civitai.com/models/1187202) | **SDXL** | `crawlaway` |
| `Crouching.safetensors` | [蹲る/crouching(ILL,pony)](https://civitai.com/models/651558) | **SDXL** | `crouching,rounding the back` |
| `CunnilingusGesture.safetensors` | [Cunnilingus Gesture - Concept](https://civitai.com/models/1467509) | **SDXL** | `<lora:cunnilingus-gesture-illustriousxl-lora-nochekaiser:1>, cunnilingus gesture, v over mouth, tongue out, tongue, v, saliva, blush, from side, looking at viewer, torogao, half-closed eyes, upper body` |
| `Disgust.safetensors` | [[Illust&XL&Pony] disgust / ドン引き / 養豚場の豚を見るような目](https://civitai.com/models/759232) | **SDXL** | `donbiki` |
| `土下座DogezaLyCoris.safetensors` | [土下座](https://civitai.com/models/774493) | **SDXL** | `dogeza`<br>`sitting`<br>`seiza` |
| `DoorChain.safetensors` | [[Illust&XL&Pony] door chain / ドアチェーン](https://civitai.com/models/674800) | **SDXL** | `door chain` |
| `DressingSocks.safetensors` | [[Illust&XL&Pony] dressing socks / adjusting legwear / sock pull / 靴下履き / 靴下直し](https://civitai.com/models/459073) | **SDXL** | `dressing socks, adjusting legwear` |
| `DrinkingBottle.safetensors` | [水分補給/drinking bottle(XL,ILL,pony)](https://civitai.com/models/621820) | **SDXL** | `drinking, holding bottle` |
| `DrinkingFaucet.safetensors` | [drinking faucet / 水飲み場 / 蛇口 / 水道](https://civitai.com/models/1774065) | **SDXL** | `drinking faucet` |
| `DrinkingFountain.safetensors` | [drinking fountain / 水飲み場 / 蛇口 / 水道](https://civitai.com/models/1762720) | **SDXL** | `drinking fountain` |
| `DryingHair.safetensors` | [[Illust&XL&Pony] hair dryer / drying hair / ヘアドライヤー](https://civitai.com/models/569209) | **SDXL** | `hair dryer` |
| `EmptyPool.safetensors` | [[Illust&XL&Pony] empty pool / プール掃除](https://civitai.com/models/586162) | **SDXL** | `empty pool` |
| `FanningSelf.safetensors` | [[Illust&XL&Pony] fanning self / fanning face / 手うちわ](https://civitai.com/models/440806) | **SDXL** | `fanning self` |
| `FanSpeaking.safetensors` | [fan speaking / electric fan / 扇風機あ～ / ワレワレハウチュウジンダ](https://civitai.com/models/1710182) | **SDXL** | `fan speaking` |
| `Feeding.safetensors` | [[Illust&XL&Pony] feeding / incoming food / あーん / 餌付け](https://civitai.com/models/492642) | **SDXL** | `feeding` |
| `FromAboveHeadTopView.safetensors` | [(IL Pose) From Above (head top view)](https://civitai.com/models/1424057) | **SDXL** | `from above, perspective` |
| `GatotsuStancePoses.safetensors` | [Gatotsu Stance (牙突) - Poses](https://civitai.com/models/1162004) | **SDXL** | `<lora:gatotsu-stance-illustriousxl-lora-nochekaiser:1>, gatotsu stance, weapon, sword, katana, holding weapon, holding, holding sword, foreshortening,` |
| `GoldfishScooping.safetensors` | [goldfish scooping / 金魚すくい](https://civitai.com/models/604894) | **SDXL** | `goldfish scooping` |
| `Graduation.safetensors` | [graduation / 卒業式 / 卒園式 / 証書筒](https://civitai.com/models/1322929) | **SDXL** | `graduation` |
| `GrapeStomping.safetensors` | [grape stomping / ぶどう踏み / 葡萄酒](https://civitai.com/models/933961) | **SDXL** | `grape stomping` |
| `GroupSex.safetensors` | [Group Sex / Orgy Scene LoRA - High-Quality Group Scene](https://civitai.com/models/1755980) | **SDXL** | `archgroupsex, 1girl, multiple boys, upright missionary, blowjob, breast grab`<br>`archgroupsex, 1girl, multiple boys, double penetration, layback reverse cowgirl, upright missionary, blowjob, breast grab` |
| `HeadLockSex.safetensors` | [Choke/Head Lock Sex](https://civitai.com/models/1639196) | **SDXL** | `choke, headlock,sex,lying down`<br>`standing`<br>`kneeling`<br>`sitting`<br>*(+1 trigger lainnya)* |
| `HeartArms.safetensors` | [heart arms / 腕ハート / 頭ハート / サランヘポーズ](https://civitai.com/models/1419416) | **SDXL** | `heart arms` |
| `HeartHands_HandsOnOwnStomach.safetensors` | [heart hands / hands on own stomach / 手ハート / 子宮ポーズ / キュアウインク](https://civitai.com/models/1214929) | **SDXL** | `heart hands` |
| `HeartHandsDuo&FingerFrame.safetensors` | [Heart hands duo & finger frame / Pose LoRA / NoobAIXL Illustrious-XL](https://civitai.com/models/1695363) | **SDXL** | `heart hands duo`<br>`finger frame` |
| `HeartHandsDuoPoses.safetensors` | [Heart Hands Duo - Concept - COMMISSION](https://civitai.com/models/1310748) | **SDXL** | `<lora:heart-hands-duo-illustriousxl-lora-nochekaiser:1> heart hands duo, heart hands, heart, heads together, cheek-to-cheek, open mouth, smile, hetero` |
| `HikoboshiTanabata.safetensors` | [hikoboshi / tanabata / 彦星 / 七夕 / 牽牛](https://civitai.com/models/1751138) | **SDXL** | `hikoboshi` |
| `HoshinoAiPose.safetensors` | [Hoshino_Ai's_Pose](https://civitai.com/models/1252321) | **SDXL** | `hoshino_ai's_pose` |
| `IaidouPose.safetensors` | [[Illust&XL&Pony] iaidou / ready to draw / 居合い / 抜刀術 / シン・陰流簡易領域](https://civitai.com/models/363398) | **SDXL** | `iaidou,weapon, katana, holding sword, ready to draw, sheathed, unsheathing, scabbard,` |
| `JapaneseSquatToiletType1.safetensors` | [Japanese Squat Toilet Type1 和式トイレ1](https://civitai.com/models/1385233) | **SDXL** | `squat toilet`<br>`squatting, white wall,tile floor,legs,thighs,out of frame,from side`<br>`upskirt,lift skirt, underless, panties pull,panties aside around thighs, socks,shoes`<br>`pee,peeing` |
| `Kabedon.safetensors` | [Kabedon \| LoRA](https://civitai.com/models/1672440) | **SDXL** | `kabedon` |
| `Kissonlips.safetensors` | [Kiss on lips](https://civitai.com/models/879530) | **SDXL** | `kiss on lips` |
| `LiftingDress.safetensors` | [lifting dress](https://civitai.com/models/1426367) | **SDXL** | `lifting open chest dress to expose pussy, massive breast, mature,` |
| `MarriageProposal.safetensors` | [[Illust&XL] marriage proposal / wedding band / プロポーズ / ウェディングリング](https://civitai.com/models/347586) | **SDXL** | `marriage proposal` |
| `MaruchanAkaiKitsuneUdon.safetensors` | [maruchan akai kitsune udon / マルちゃん 赤いきつね / カップうどん](https://civitai.com/models/1267516) | **SDXL** | `maruchan akai kitsune udon` |
| `Megaphone.safetensors` | [メガホン/megaphone](https://civitai.com/models/622047) | **SDXL** | `holding megaphone`<br>`open mouth` |
| `Mesugaki.safetensors` | [mesugaki / メスガキ](https://civitai.com/models/455382) | **SDXL** | `mesugaki` |
| `MoonlightGreatsword.safetensors` | [[Illust&XL] moonlight greatsword(DARK SOULS) / ムーンライトソード(キングスフィールド)  / 月明かりの大剣(デモンズソウル) / 月光の大剣(ダークソウル) / 月光の聖剣(Bloodborne) / 暗月の大剣(ELDEN RING)](https://civitai.com/models/325086) | **SDXL** | `moonlight sword` |
| `MutualBreastSucking.safetensors` | [[PonyXL/Illustrious] - Mutual breast sucking](https://civitai.com/models/346826) | **SDXL** | `mutual breast sucking`<br>`unaligned breasts`<br>`rotational symmetry` |
| `NowKiss.safetensors` | [Now Kiss](https://civitai.com/models/1325160) | **SDXL** | `now kiss`<br>`hand on another's head`<br>`forced kiss` |
| `OneFootinTheWater.safetensors` | [One Foot in The Water (Onsen) 温泉に入る](https://civitai.com/models/1308380) | **SDXL** | `one feet in the water`<br>`sitting,one feet partially submerged,one foot on rocks`<br>`(squatting:0.7)` |
| `OverflowVomitCum.safetensors` | [Overflow/Vomit Cum](https://civitai.com/models/1621790) | **SDXL** | `afterfella01, cum in nose, cum in mouth, vomit, cum, overflow, penis, crying`<br>`grab head` |
| `PantyPullStandingOnTheOneLegLyCoris.safetensors` | [panty pull(standing  on the one leg)](https://civitai.com/models/768223) | **SDXL** | `panty pull, holding panties, standing on one leg, panties, undressing, panties around one leg` |
| `PovCowgirlLookingDown.safetensors` | [Pov Cowgirl (Looking Down) [Updated]](https://civitai.com/models/438394) | **SDXL** | `CG_LD, 1girl, 1boy, pov,  girl on top, straddling,`<br>`leaning forward, cleavage,`<br>`leaning back, underboob,`<br>`directly above viewer, (underboob:0.74), cleavage, from below,`<br>*(+25 trigger lainnya)* |
| `POVFellatio+Glansjob.safetensors` | [POV 斜め鈴口責めフェラチオハンドジョブ　目隠れ仕様　/ POV fellatio+glansjob / handjob+licking penis　two eyes visible ver.](https://civitai.com/models/1489434) | **SDXL** | `szgljob`<br>`fellatio`<br>`hand job`<br>`cum in mouth`<br>*(+1 trigger lainnya)* |
| `Push-ups.safetensors` | [[Illust&XL&Pony] push-ups / 腕立て伏せ](https://civitai.com/models/415851) | **SDXL** | `push-ups` |
| `RabbitPose.safetensors` | [Rabbit Pose - Poses](https://civitai.com/models/1571961) | **SDXL** | `<lora:rabbit-pose-illustriousxl-lora-nochekaiser:1>, rabbit pose, hands up, looking at viewer, smile, cowboy shot,`<br>`<lora:rabbit-pose-illustriousxl-lora-nochekaiser:1>, rabbit pose, hands up, looking at viewer, smile, upper body` |
| `RamenJiro.safetensors` | [[Illust&XL] Ramen Jiro / 二郎系ラーメン](https://civitai.com/models/299641) | **SDXL** | `jirou,ramen` |
| `LookingBack,ReachingTowardsViewerPoses.safetensors` | [Looking Back, Reaching Towards Viewer - Poses](https://civitai.com/models/1187054) | **SDXL** | `<lora:looking-back-reaching-towards-viewer-ponyxl-lora-nochekaiser:1>, looking back reaching towards viewer, looking at viewer, solo focus, smile, looking back, open mouth, reaching towards viewer,` |
| `RiderKickKamenRider.safetensors` | [rider kick (kamen rider) / ライダーキック (仮面ライダー) / 必殺技](https://civitai.com/models/1532640) | **SDXL** | `rider kick` |
| `Ruler_PenisMeasuring.safetensors` | [ruler / penis measuring / 定規 / ちん長測定 / 文房具](https://civitai.com/models/1127263) | **SDXL** | `ruler` |
| `Seesaw.safetensors` | [[Illust&XL&Pony] seesaw / シーソー](https://civitai.com/models/329645) | **SDXL** | `seesaw` |
| `Selfie-Poses.safetensors` | [Selfie - Poses](https://civitai.com/models/1467607) | **SDXL** | `<lora:selfie-illustriousxl-lora-nochekaiser:1>, selfie, arm up, foreshortening, looking at viewer, outstretched arm, v, hand up, reaching, reaching towards viewer, smile, one eye closed, open mouth,` |
| `ShoulderToCheek.safetensors` | [shoulder to cheek (1st test)](https://civitai.com/models/1648490) | **SDXL** | `shoulder to cheek` |
| `SkirtTug.safetensors` | [スカートを抑える/skirt tug(SD,XL,pony)](https://civitai.com/models/721847) | **SDXL** | `skirt tug, skirt, wind lift` |
| `Slide.safetensors` | [[Illust&XL&Pony] slide / 滑り台](https://civitai.com/models/334395) | **SDXL** | `slide` |
| `SmallBreastsClevageHandjob_Naizuri.safetensors` | [POV/Side 小胸専用 胸の谷間ハンドジョブ / POV/Side Small breasts clevage handjob / naizuri](https://civitai.com/models/1491446) | **SDXL** | `nzcenter`<br>`small breast`<br>`nude`<br>`nipples`<br>*(+5 trigger lainnya)* |
| `SmellingPanties.safetensors` | [smelling panties / クンカクンカ / パンツ嗅ぎ](https://civitai.com/models/1049240) | **SDXL** | `kunka` |
| `Soba_ShrimpTempura.safetensors` | [soba / shrimp tempura / 年越しそば / 天ぷらそば / 大晦日 / 蕎麦](https://civitai.com/models/1068321) | **SDXL** | `soba` |
| `SpittingDomination.safetensors` | [SpittingDomination](https://civitai.com/models/1969737) | **SDXL** | *Tidak ada trigger khusus* |
| `SpringRider.safetensors` | [[Illust&XL&Pony] spring rider / ロッキング遊具 / スプリング遊具](https://civitai.com/models/329581) | **SDXL** | `spring rider` |
| `StompingandSex.safetensors` | [Stomping and Sex](https://civitai.com/models/1661478) | **SDXL** | `stomp01, stomping, head, stomped by hand, sex, doggystyle`<br>`by foot` |
| `SwordGuardStancePoses.safetensors` | [Sword Guard Stance - Poses](https://civitai.com/models/1187524) | **SDXL** | `<lora:sword-guard-stance-illustriousxl-lora-nochekaiser:1>, sword guard stance, sword, weapon, solo, katana, holding, holding weapon, holding sword, looking at viewer, cowboy shot,` |
| `TransparentRaincoat.safetensors` | [[Illust&XL] transparent raincoat / 透明レインコート / 透明カッパ](https://civitai.com/models/384264) | **SDXL** | `transparent raincoat` |
| `TuckingHair.safetensors` | [Tucking Hair - Poses](https://civitai.com/models/1571960) | **SDXL** | `<lora:tucking-hair-illustriousxl-lora-nochekaiser:1>, tucking hair, adjusting hair, hand on own hair, hair behind ear, smile, bent over, leaning forward, blush, hand up,` |
| `Two-HandedChoke.safetensors` | [Two-Handed Choke LoRa \| PonyXL & Illustrious](https://civitai.com/models/633611) | **SDXL** | `two-handed choke` |
| `TyingHairTwintails.safetensors` | [[Illust&XL&Pony] tying hair (twintails) / ツインテールを結う](https://civitai.com/models/563723) | **SDXL** | `tying hair,twintails` |
| `WaterFight.safetensors` | [water fight / 水かけ / 水遊び](https://civitai.com/models/1690308) | **SDXL** | `water fight` |
| `WaterKicking.safetensors` | [water kicking / 水蹴り](https://civitai.com/models/1693599) | **SDXL** | `water kicking` |
| `WaterMasturbation.safetensors` | [showering / water masturbation / シャワーオナニー](https://civitai.com/models/1783165) | **SDXL** | `showering` |
| `WaterSlide.safetensors` | [[Illust&XL] water slide / ウォータースライダー](https://civitai.com/models/406297) | **SDXL** | `water slide` |
| `WeCanDoIt.safetensors` | [[IL] "We can do it!" / Bras d'honneur / ガッツポーズ](https://civitai.com/models/1531413) | **SDXL** | `br_d_h, clenched hand, hand on own arm` |
| `WrapTowel.safetensors` | [[Illust&XL&Pony] wrap towel / pool towel / ラップタオル / プールタオル](https://civitai.com/models/328680) | **SDXL** | `wrap towel` |
| `WringingSkirt.safetensors` | [[Illust&XL&Pony] wringing skirt / wringing clothes / 裾絞り / スカート絞り](https://civitai.com/models/522768) | **SDXL** | `wringing skirt` |

## Clothing SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `GlitteringIdolOutfit.safetensors` | [Glittering Idol Outfit](https://civitai.com/models/1268071) | **SDXL** | `glittering-idol-outfit` |
| `GymUniform.safetensors` | [Gym Uniform Illustrious](https://civitai.com/models/1073616) | **SDXL** | `gym-uniform` |
| `HospitalGown.safetensors` | [Hospital Gown - Clothing](https://civitai.com/models/1596589) | **SDXL** | `<lora:hospital-gown-illustriousxl-lora-nochekaiser:1>, hospital gown, intravenous drip, iv stand, bandages,` |
| `IdolOutfit.safetensors` | [Idol Outfit](https://civitai.com/models/1102771) | **SDXL** | `japanese-idol-outfit` |
| `KindergartenClothing.safetensors` | [Kindergarten Uniform - Clothing](https://civitai.com/models/1651266) | **SDXL** | `<lora:garten-uniform-illustriousxl-lora-nochekaiser:1>, garten uniform, tulip hat, yellow hat, randoseru, backpack, red bag, blue shirt, name tag, skirt, pleated skirt,` |
| `MicroBikini.safetensors` | [MicroBikini](https://civitai.com/models/1687553) | **SDXL** | *Tidak ada trigger khusus* |
| `NurseryTeacherApron.safetensors` | [Nursery Teacher Apron](https://civitai.com/models/1275100) | **SDXL** | `nursery-teacher-apron` |
| `PlayboyBunnySuit.safetensors` | [Playboy Bunny Suit](https://civitai.com/models/253223) | **SDXL** | `pantyhose, bowtie, playboy_bunny, rabbit_ears, detached_collar, highleg_leotard, wrist_cuffs, playboy bunny, rabbit ears` |
| `RuffleBikini.safetensors` | [【COSTUME】Ruffle Bikini (Illustrious)](https://civitai.com/models/1450883) | **SDXL** | `ruffle bikini, (color) bikini` |
| `SailorBikiniUniform.safetensors` | [Sailor Bikini Uniform](https://civitai.com/models/1743932) | **SDXL** | `sailor collar, string bikini, detached sleeves, see-through sleeves, microskirt, layered skirt, see-through skirt, sailor hat,` |
| `SiriusRabbitofParadise.safetensors` | [[cosplay]Sirius rabbit of paradise (azur lane)  costume / 天狼星 兔女郎装 Pony & Illustrious](https://civitai.com/models/1000863) | **SDXL** | `translucent_bunnysuit, slingshot swimsuit, see-through,sideless outfit,`<br>`glass slipper,` |
| `SportsBraandPanties.safetensors` | [ライン入りスポーツブラ・パンツ／sports bra and panties with lines on the elastic band](https://civitai.com/models/1642054) | **SDXL** | `linespobra, sports bra`<br>`linespopan, panties, striped waistband` |

## Concept SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AestheticQualityModifiers-BestQuality.safetensors` | [Aesthetic Quality Modifiers - Best Quality](https://civitai.com/models/977115) | **SDXL** | `masterpiece, best quality, very aesthetic, absurdres` |
| `AestheticQualityModifiers-Masterpiece.safetensors` | [Aesthetic Quality Modifiers - Masterpiece](https://civitai.com/models/929497) | **SDXL** | `masterpiece, very aesthetic, absurdres` |
| `AfterFellatiowithMizumizuniStyle.safetensors` | [AfterFellatiowithMizumizuniStyle](https://civitai.com/models/1765969) | **SDXL** | *Tidak ada trigger khusus* |
| `AnalRose.safetensors` | [アナルローズ/anal rose(pony)](https://civitai.com/models/476502) | **SDXL** | `spread anus`<br>`anal prolapse` |
| `AnimeFeet.safetensors` | [Anime Feet - Detailed Soles](https://civitai.com/models/773126) | **SDXL** | `feet`<br>`soles`<br>`detailed feet`<br>`detailed soles` |
| `AssAgainstGlass.safetensors` | [Ass Against Glass - Concept](https://civitai.com/models/1777002) | **SDXL** | `<lora:ass-against-glass-illustriousxl-lora-nochekaiser:1>, ass against glass, against glass, solo, looking at viewer, blush, smile, closed mouth, standing, nipples, ass, thighs, cowboy shot, completely nude, pussy, indoors, looking back, from behind, wet, anus, back, thigh gap, from below, hand on own chest, steam, breast press, water drop, cleft of venus, tiles, tile wall, showering, ceiling, shower head, shower (place),` |
| `BackLighting.safetensors` | [Vixon's Illustrious Styles - Back Lighting](https://civitai.com/models/1026983) | **SDXL** | `backlit, backlighting,`<br>`sunset` |
| `BedInvitation.safetensors` | [Bed Invitation - Concept](https://civitai.com/models/1572034) | **SDXL** | `<lora:bed-invitation-illustriousxl-lora-nochekaiser:1>, bed invitation, on bed, on side, pillow, under covers, lingerie, panties, navel, torogao, blush, parted lips hand up, looking at viewer,` |
| `BetterDetailedPussyandAnus.safetensors` | [BetterDetailedPussyandAnus](https://civitai.com/models/1785482) | **SDXL** | *Tidak ada trigger khusus* |
| `BreastDrop.safetensors` | [Breast Drop - Concept](https://civitai.com/models/1324556) | **SDXL** | `<lora:breast-drop-illustriousxl-lora-nochekaiser:1>, breast drop, bra, underboob, bra lift, lifting own clothes, bed room, navel, nipples, smug,, cowboy shot, looking at viewer, dutch angle` |
| `CheekonGlass.safetensors` | [Cheek on Glass - Concept](https://civitai.com/models/1266532) | **SDXL** | `<lora:cheek-on-glass-illustriousxl-lora-nochekaiser:1>, cheek on glass, against glass, glass, completely nude, nipples, navel, hetero, one eye closed, tongue, open mouth, looking back, sex, tongue out, bent over, sex from behind, doggystyle, standing sex, mixed bathing, wet, water, motion, motion lines, motion blur, bathroom, tiles, tile wall,` |
| `ClothesPull.safetensors` | [脱ぎかけ/clothes pull(ill,pony)](https://civitai.com/models/596740) | **SDXL** | `clothes pull` |
| `CondominMouth.safetensors` | [Condom In Mouth - Concept](https://civitai.com/models/1439933) | **SDXL** | `<lora:condom-in-mouth-illustriousxl-lora-nochekaiser:1>, condom in mouth, condom, condom wrapper, mouth hold, blush, looking at viewer,` |
| `CoveringPrivates.safetensors` | [covering privates(XL,ill,pony)](https://civitai.com/models/720206) | **SDXL** | `covering privates, covering breasts,covering crotch` |
| `CrotchonPussyLyCorisNoobAI.safetensors` | [クロッチの張り付き/crotch on pussy](https://civitai.com/models/1748644) | **SDXL** | `crotch on pussy,panty pull,undressing,pussy juice stain` |
| `CunnilingusFromSide.safetensors` | [Cunnilingus From Side - Concept](https://civitai.com/models/1375937) | **SDXL** | `<lora:cunnilingus-from-side-illustriousxl-lora-nochekaiser:1>, cunnilingus from side, cunnilingus, from side, oral, completely nude, nipples, blush, hetero, torogao, lying, on back, on bed,` |
| `Deepthroat.safetensors` | [Deepthroat - Concept](https://civitai.com/models/1439937) | **SDXL** | `<lora:deepthroat-illustriousxl-lora-nochekaiser:1>, deepthroat, hands on another's head, blush, cum, cum in nose, fellatio, oral, pov, pov crotch, pov hands, completely nude, rolling eyes,`<br>`<lora:deepthroat-illustriousxl-lora-nochekaiser:1>, deepthroat, hands on another's head, blush, cum, cum in nose, fellatio, oral, from side, complete nude, rolling eyes` |
| `Defloration.safetensors` | [処女喪失/defloration(ill,pony)](https://civitai.com/models/913320) | **SDXL** | `defloration, cum, blood` |
| `DoggystyleAsphyxiation.safetensors` | [Doggystyle Asphyxiation - Concept](https://civitai.com/models/1257097) | **SDXL** | `<lora:doggystyle-asphyxiation-illustriosxl-lora-nochekaiser:1>, doggystyle asphyxiation, strangling, asphyxiation, hetero, sex, nipples, sex from behind, completely nude, tears, open mouth, blush, doggystyle, saliva, sweat, nose blush, drooling, heart, spoken heart,` |
| `DoubleInsertion.safetensors` | [二穴責め/double insertion(ILL,pony)](https://civitai.com/models/557544) | **SDXL** | `double insertion,vaginal,anal,anus`<br>`dildo`<br>`double penisertion`<br>`2boys` |
| `EnchantingEyesDetailedEyes.safetensors` | [Enchanting Eyes (Anima, Illustrious, and Pony) (Detailed Eyes)](https://civitai.com/models/974076) | **SDXL** | `Enchanting Eyes` |
| `FemaleMasturbation.safetensors` | [female masturbation (illustrious, pony) - top down bottom up-](https://civitai.com/models/1231891) | **SDXL** | `1girl, female masturbation, lying, spread legs, on back, bottom up,arched back`<br>`1girl, female masturbation, girl lying on floor, on stomach, all fours, top down bottom up,` |
| `FrenchKiss.safetensors` | [フレンチキス/french kiss](https://civitai.com/models/1374288) | **SDXL** | `french kiss`<br>`tongue out, saliva, saliva trail` |
| `GlossySkin.safetensors` | [Glossy Skin (Illustrious+Pony)](https://civitai.com/models/1032320) | **SDXL** | `gl0ssy, shiny skin` |
| `GrabbingAnothersHair.safetensors` | [Grabbing Another's Hair - Concept](https://civitai.com/models/1429465) | **SDXL** | `<lora:grabbing-anothers-hair-illustriousxl-lora-nochekaiser:1>, grabbing another's hair, messy hair, looking at viewer, open mouth, open mouth, pov, pov hands, forehead, disgust, tearing up` |
| `GuyTiredAfterSex.safetensors` | [Guy Tired After Sex - Concept](https://civitai.com/models/1343949) | **SDXL** | `<lora:guy-tired-after-sex-illustriousxl-lora-nochekaiser:1> guy tired after sex, guy tired after sex (meme), v, sunken cheeks, faceless male, male, bald, faceless, implied after sex, exhausted, selfie, after sex, on bed, 1boy, blush, nude, navel, nipples, bed room, smile, open mouth, looking at viewer,` |
| `HandsUpPaizuri.safetensors` | [Hands Up Paizuri - Concept](https://civitai.com/models/1467537) | **SDXL** | `<lora:hands-up-paizuri-illustriousxl-lora-nochekaiser:1>, hands up paizuri, paizuri, hands up, on back, on bed, penis, nipples, completely nude, motion lines, motion blur, struggling, trembling, looking down,` |
| `HandsUpSittingSex.safetensors` | [Hands Up Sitting Sex - Concept](https://civitai.com/models/1723930) | **SDXL** | `<lora:hands-up-sitting-sex-illustriousxl-lora-nochekaiser:1>, hands up sitting sex, blush, 1boy, navel, closed mouth, nipples, collarbone, hetero, sweat, completely nude, penis, pussy, sex, spread legs, armpits, looking at another, vaginal, arms up, m legs, sitting, standing,` |
| `HomelessPerson_AbandonedGirl_PoorPerson.safetensors` | [Homeless Person / Abandoned Girl / Poor Person \| Anime Style \| Concept \| IllustriousXL](https://civitai.com/models/1187047) | **SDXL** | *Tidak ada trigger khusus* |
| `HugeCumOnFace.safetensors` | [huge cum on face](https://civitai.com/models/1582652) | **SDXL** | `huge_cum_ill2,excessive cum, cum on face, cum on hair, cum in mouth, open mouth,penis, cumshot,projectile cum,massive cumshot,`<br>`realistic cum` |
| `Humping_GrindingMasturbation.safetensors` | [Humping / Grinding Masturbation (Illustrious)](https://civitai.com/models/1469509) | **SDXL** | `humpingILL, humping (object), grinding on (object)` |
| `HusbandAndWifePregnant.safetensors` | [Husband And Wife Pregnant - Concept](https://civitai.com/models/1501134) | **SDXL** | `<lora:husband-and-wife-pregnant-illustriousxl-lora-nochekaiser:1>, husband and wife pregnant, hetero, couple, husband and wife, hug, from behind, pregnant, bedroom, sitting, blush, smile, hearts, looking down, holding another's stomach, straight-on,` |
| `IDCard.safetensors` | [IDカード/ID card](https://civitai.com/models/1748698) | **SDXL** | `id card` |
| `IDCardAfterSex.safetensors` | [ID Card After Sex - Concept](https://civitai.com/models/1341759) | **SDXL** | `<lora:id-card-after-sex-illustriousxl-lora-nochekaiser:1>, id card after sex, id card, aftersex, bed sheet, blush, condom, cum, cum on body, cum on upper body, drooling, female pubic hair, lying, navel, nipples, pubic hair, pussy, sheet grab, sweat, used condom, wet spot, holding id card, pov, cowboy shot,` |
| `IL_hymenVagina.safetensors` | [拝跪せよ処女厨共 / IL_hymen](https://civitai.com/models/1632252) | **SDXL** | `vgn_p,hymen,spread pussy,`<br>`urethra,`<br>`clitoral hood,` |
| `IncomingPockyKiss.safetensors` | [Incoming Pocky Kiss - Concept](https://civitai.com/models/1557182) | **SDXL** | `<lora:incoming-pocky-kiss-illustriousxl-lora-nochekaiser:1>, incoming pocky kiss, looking at viewer, blush, food, mouth hold, flying sweatdrops, pocky, closed eyes, foreshortening` |
| `LapPillow.safetensors` | [Lap Pillow - Concept](https://civitai.com/models/1373524) | **SDXL** | `<lora:lap-pillow-illustriousxl-lora-nochekaiser:1>, lap pillow, sitting, closed eyes, hetero, lying, on back, looking at another, sleeping, hand on another's head, blush, smile, knees, on couch` |
| `LeaningOnPersonSide-By-Side.safetensors` | [Leaning On Person Side-By-Side - Concept](https://civitai.com/models/1370133) | **SDXL** | `<lora:leaning-on-person-side-by-side-illustriousxl-lora-nochekaiser:1>, leaning on person side-by-side, sitting, hetero, sleeping, couple, train interior, leaning on person` |
| `LegLockIrrumatio.safetensors` | [Leg Lock Irrumatio POV - Concept](https://civitai.com/models/1731564) | **SDXL** | `<lora:leg-lock-irrumatio-pov-illustriousxl-lora-nochekaiser:1>, leg lock irrumatio pov, looking at viewer, blush, hetero, completely nude, penis, barefoot, solo focus, tears, feet, toes, saliva, pov, oral, crying, fellatio, crying with eyes open, irrumatio, deepthroat, hands on another's thighs, cheek bulge, floor, from above, dark-skinned male,` |
| `LegUpPantyPull.safetensors` | [Leg Up Panty Pull - Concept](https://civitai.com/models/1449705) | **SDXL** | `<lora:leg-up-panty-pull-illustriousxl-lora-nochekaiser:1>, panty pull, leg up, legs up, panties, panty pull, pussy, pussy juice, presenting, lying, on back, on bed, looking at viewer, completely nude, nipples, smile, smug, blush,` |
| `LickingPenisFromSide.safetensors` | [Licking Penis From Side - Concept](https://civitai.com/models/1446551) | **SDXL** | `<lora:licking-penis-from-side-illustriousxl-lora-nochekaiser:1> licking penis, from side, licking, oral, penis, tongue, tongue out, hetero, erection, testicles, saliva, penis grab, completely nude, looking up` |
| `LightingCigarette.safetensors` | [Lighting Cigarette - Poses](https://civitai.com/models/1655951) | **SDXL** | `<lora:lighting-cigarette-illustriousxl-lora-nochekaiser:1>, lighting cigarette, lighter, holding lighter, cigarette, smoking, fire, smoke, holding,`<br>`<lora:lighting-cigarette-illustriousxl-lora-nochekaiser:1>, lighting cigarette, lighter, holding lighter, cigarette, smoking, fire, smoke, holding, upper body`<br>`<lora:lighting-cigarette-illustriousxl-lora-nochekaiser:1>, lighting cigarette, lighter, holding lighter, cigarette, smoking, fire, smoke, holding, cowboy shot`<br>`<lora:lighting-cigarette-illustriousxl-lora-nochekaiser:1>, lighting cigarette, lighter, holding lighter, cigarette, smoking, fire, smoke, holding, upper body, from side,`<br>*(+3 trigger lainnya)* |
| `MissionaryAsphyxiation.safetensors` | [Missionary Asphyxiation - Concept](https://civitai.com/models/1262711) | **SDXL** | `<lora:missionary-asphyxiation-illustriousxl-lora-nochekaiser:1>, missionary asphyxiation, hetero, sex, asphyxiation, penis, vaginal, tongue, nipples, tongue out, pussy, strangling, missionary, rolling eyes, spread legs, cum, cum in pussy, ejaculation, bed room, on bed, cowboy shot,` |
| `MoeMoeKyun.safetensors` | [Moe Moe Kyun! (萌え萌えキューン!) - Concept](https://civitai.com/models/1009035) | **SDXL** | `<lora:moe-moe-kyun-ponyxl-lora-nochekaiser:1> heart-shaped boob challenge, moe moe kyun! heart hands, enmaided, maid, maid headdress, apron, maid apron,` |
| `MtuVirus.safetensors` | [Mtu Virus](https://civitai.com/models/57573) | **SDXL** | `mtu virus`<br>`multiple views` |
| `MultiplePussy.safetensors` | [multiple pussy](https://civitai.com/models/932140) | **SDXL** | `multiple pussy, multiple girls,6girl+` |
| `NetorareTalkingOnPhoneV2.safetensors` | [Netorare Talking On Phone - Concept](https://civitai.com/models/1403040) | **SDXL** | `<lora:netorare-talking-on-phone-v2-illustriousxl-lora-nochekaiser:1>, netorare talking on phone, blush, open mouth, 1boy, holding, nipples, hetero, sweat, nude, sex, completely nude, phone, sex from behind, holding phone, doggystyle, netorare, talking on phone, corded phone` |
| `PantyPullLyCoris.safetensors` | [panty pull(ILL,pony)](https://civitai.com/models/752237) | **SDXL** | `pulling another's clothes, panty pull, panties,1boy` |
| `PantyPullPOV.safetensors` | [Panty Pull POV - Concept](https://civitai.com/models/1727437) | **SDXL** | `<lora:panty-pull-pov-illustriousxl-lora-nochekaiser:1>, panty pull pov, looking at viewer, blush, shirt, closed mouth, bare shoulders, underwear, white shirt, panties, ass, short sleeves, thighs, lying, solo focus, indoors, looking back, off shoulder, striped clothes, from behind, pillow, pov, bed, on bed, bed sheet, on stomach, panty pull, striped panties, bedroom, tablet pc, stylus, pulling another's clothes, backlighting, night, moonlight,` |
| `PantyPullUndressingFromBehind.safetensors` | [Panty Pull Undressing From Behind - Concept](https://civitai.com/models/1746848) | **SDXL** | `<lora:panty-pull-undressing-from-behind-illustriousxl-lora-nochekaiser:1>, panty pull undressing from behind, solo, looking at viewer, blush, open mouth, bare shoulders, standing, underwear, full body, panties, ass, barefoot, pussy, indoors, looking back, from behind, feet, legs, pillow, window, anus, bed, soles, curtains, bent over, undressing, panty pull, camisole, kneepits, presenting, bedroom, white camisole,` |
| `PenisOverOneEye.safetensors` | [Penis Over One Eye - Concept](https://civitai.com/models/1266484) | **SDXL** | `<lora:penis-over-one-eye-illustriousxl-lora-nochekaiser:1> penis over one eye, hetero, penis on face, penis, testicles, from above, pov, huge penis, completely nude, nipples, heart, bed room, open mouth, tongue, saliva, blush,` |
| `PenisShadow.safetensors` | [Penis Shadow - Concept](https://civitai.com/models/1319110) | **SDXL** | `<lora:penis-shadow-illustriousxl-lora-nochekaiser:1>, penis shadow, hetero, looking at penis, penis, penis awe, penis peek, shadow, bed room, nude, navel, nipples, from above, embarrassed, open mouth, blush, sweat, sweatdrop, cowboy shot, looking at viewer, dutch angle` |
| `PregnancyTest.safetensors` | [妊娠検査薬/ pregnancy test(ILL,pony)](https://civitai.com/models/633227) | **SDXL** | `pregnancy test, holding` |
| `PresentPanties.safetensors` | [present panties(XL,ill,pony)](https://civitai.com/models/532475) | **SDXL** | `holding panties, unworn panties` |
| `PussyJuice.safetensors` | [マン汁/pussy juice](https://civitai.com/models/540855) | **SDXL** | `pussy juice` |
| `PussySandwitch.safetensors` | [Pussy sandwich](https://civitai.com/models/57836) | **SDXL** | `lying`<br>`ass`<br>`tribadism` |
| `ReverseNursingHandjob.safetensors` | [Reverse Nursing Handjob - Concept](https://civitai.com/models/1266705) | **SDXL** | `<lora:reverse-nursing-handjob-illustriousxl-lora-nochekaiser:1>, reverse nursing handjob, nipples, hetero, nude, lying, penis, tongue, tongue out, pov, licking, handjob, nipple tweak, licking nipple, completely nude, bed room,` |
| `SmellingMasturbationLyCoris.safetensors` | [smelling masturbation](https://civitai.com/models/782699) | **SDXL** | `smelling masturbation, female masturbation, smelling clothes,` |
| `SmokingLyCoris.safetensors` | [喫煙/smoking](https://civitai.com/models/852273) | **SDXL** | `smoking, cigarette`<br>`holding` |
| `StarryHair.safetensors` | [StarryHair](https://civitai.com/models/1455059) | **SDXL** | *Tidak ada trigger khusus* |
| `StraddlingPaizuri.safetensors` | [Straddling Paizuri - Concept](https://civitai.com/models/1350711) | **SDXL** | `<lora:straddling-paizuri-illustriousxl-lora-nochekaiser:1>, straddling paizuri, paizuri, boy on top, penis, breasts squeezed together, pov, cum, cum on face, ejaculation, facial, nipples, nude, open mouth, one eye closed, bed, bed room, on back, on bed, blush,` |
| `SuspendedCongressBolero537.safetensors` | [駅弁/suspended congress](https://civitai.com/models/708540) | **SDXL** | `ekiben, suspended congress, 1boy, sex` |
| `SuspendedCongressNochekaiser881.safetensors` | [Suspended Congress - Concept](https://civitai.com/models/1358265) | **SDXL** | `<lora:suspended-congress-v2-illustriousxl-lora-nochekaiser:1>, suspended congress, blush, 1boy, standing, nipples, closed eyes, ass, hetero, heart, sweat, completely nude, penis, sex, cum, from side, vaginal, hug, kiss, breast press, standing sex, arms around neck` |
| `TalkingonPhone.safetensors` | [電話/talking on phone](https://civitai.com/models/916405) | **SDXL** | `talking on phone, smartphon` |
| `TawawaonMondaySmugBentOverBikiniTowel.safetensors` | [Tawawa on Monday (Getsuyoubi no Tawawa) (月曜日のたわわ) Vol 7 / Smug Bent Over Bikini Towel - Concept](https://civitai.com/models/1734533) | **SDXL** | `<lora:getsuyoubi-no-tawawa-vol7-illustriousxl-lora-nochekaiser:1>, getsuyoubinotawawa vol7, solo, looking at viewer, blush, smile, cleavage, collarbone, swimsuit, bikini, teeth, striped clothes, grin, leaning forward, side-tie bikini bottom, towel, striped bikini, hanging breasts, half-closed eyes, beach, blue sky, clouds` |
| `TawawaonMondayWaterSplashing.safetensors` | [Tawawa on Monday (Getsuyoubi no Tawawa) (月曜日のたわわ) #541 / Water Splashing - Concept](https://civitai.com/models/1734532) | **SDXL** | `<lora:getsuyoubi-no-tawawa-541-illustriousxl-lora-nochekaiser:1>, getsuyoubinotawawa 541, solo, looking to the side, half-closed eyes, one eye closed, blush, smile, open mouth, navel, cleavage, collarbone, swimsuit, :d, outdoors, cowboy shot, bikini, teeth, sky, day, cloud, water, arm up, blue sky, sparkle, underboob, halterneck, sarong, backlighting, beach, water splash, splashing, hands up,` |
| `UnderWater.safetensors` | [水中/underwater(XL,ill,pony)](https://civitai.com/models/729146) | **SDXL** | `underwater,water` |
| `X-rayGlasses.safetensors` | [X-ray glasses](https://civitai.com/models/177451) | **SDXL** | `x-ray glasses` |

## Background SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `Backstage.safetensors` | [Backstage](https://civitai.com/models/1317518) | **SDXL** | `b4ckst4g3`<br>`backstage, curtains, scaffolding, indoors, ,crowd behind curtains, glowsticks, , instruments, microphone stand` |
| `CloudCollection.safetensors` | [CloudCollection](https://civitai.com/models/1502308) | **SDXL** | *Tidak ada trigger khusus* |
| `SaltFlatsMirror.safetensors` | [Salt Flats Mirror - Illustrious](https://civitai.com/models/628917) | **SDXL** | `s4ltflats`<br>`Reflection, outdoors, day, scenery, blue sky, water, cloudy sky, horizon` |
| `SchoolPoolV2.safetensors` | [School Pool V2 (学校のプール)](https://civitai.com/models/1604582) | **SDXL** | `school pool` |
| `SchoolRooftop.safetensors` | [School Rooftop (学校の屋上) ｜IL・SDXL](https://civitai.com/models/1361758) | **SDXL** | `school rooftop`<br>`white concrete floor, blue sky, white railing` |
| `Schoolyard.safetensors` | [Schoolyard (学校の校庭) ｜IL・SDXL](https://civitai.com/models/1377762) | **SDXL** | `schoolyard`<br>`white school building, soil ground, (tree:0.8)` |
| `TraininBackground.safetensors` | [(IL Background) Train in Background \| 列车背景](https://civitai.com/models/1608961) | **SDXL** | `train` |
| `TrainInteriorViewType1.safetensors` | [Train Interior View Type1](https://civitai.com/models/1231741) | **SDXL** | `train interior` |
| `TrainInteriorViewType2.safetensors` | [Train Interior View Type2](https://civitai.com/models/1240740) | **SDXL** | `train interior,window`<br>`seat` |
| `WashingBodySceneinthemirror.safetensors` | [Washing Body Scene (in the mirror)](https://civitai.com/models/1308509) | **SDXL** | `reflection mirror, sitting on bath stool, ass,bare feet,from behind` |

## Style SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `AnimeFigureNendroidStyles.safetensors` | [Anime Figurines - Style](https://civitai.com/models/902323) | **SDXL** | `<lora:nendoroid-figurines-ponyxl-lora-nochekaiser:1>, nendoroid, 1girl, solo, chibi, 3d,` |
| `AnimePosterStyles.safetensors` | [[Illustrious v0.1]Anime Poster Style LoRA/アニメピンナップLoRA](https://civitai.com/models/868840) | **SDXL** | *Tidak ada trigger khusus* |
| `Aosiai123ShiiroStyles.safetensors` | [Aosiai123 \| Shiiro's Styles](https://civitai.com/models/1346615) | **SDXL** | `traditional media,  aosiai123_illu` |
| `ArimonStyles.safetensors` | [Arimon Style](https://civitai.com/models/822349) | **SDXL** | `arimon` |
| `BrightShiiroStyles.safetensors` | [Bright \| Shiiro's Styles](https://civitai.com/models/1389337) | **SDXL** | `Bright_illu,sparkle,too many light particles` |
| `BubukkaStyles.safetensors` | [Bubukka (ぶぶっか) - Artist Style // Illustrious](https://civitai.com/models/1810892) | **SDXL** | `Bubukstyle`<br>`thin lineart, flat cel shading, minimal shadows, pastel palette, low contrast lighting, minimal highlights` |
| `CunnyStyleV7.safetensors` | [CunnyStyleV7](https://civitai.com/models/1920055) | **SDXL** | *Tidak ada trigger khusus* |
| `CustomUdonStyles.safetensors` | [CustomUdonStyles](https://civitai.com/models/1727866) | **SDXL** | *Tidak ada trigger khusus* |
| `DateALiveAnimeStyles.safetensors` | [约会大作战 第四 & 第五季 [动漫画风]（Date A Live Iv & V [Anime style]）](https://civitai.com/models/1255017) | **SDXL** | `Date A Live Iv & V anime style` |
| `DateALiveTsunakoNovelStyles.safetensors` | [Tsunako-画师风格（Tsunako-Artist style）](https://civitai.com/models/1218608) | **SDXL** | `Tsunako style` |
| `EdanomaMeuShiiroStyles.safetensors` | [Edanoma Meu \| Shiiro's Styles](https://civitai.com/models/1336154) | **SDXL** | `edanoma_meu_illu` |
| `EromangaSenseiStyles.safetensors` | [神崎广 {我的妹妹哪有这么可爱 / 埃罗芒阿老师}（Kanzaki Hiro {Ore no Imoto ga Konna ni Kawaii Wake ga Nai / Eromanga-Sensei}）](https://civitai.com/models/1262382) | **SDXL** | `Eromanga sensei style` |
| `EufoniuzStyles.safetensors` | [Eufoniuz Artist Style [Illustrious]](https://civitai.com/models/1395579) | **SDXL** | `EufoniuzArt` |
| `FuyuichiMonmeStyles.safetensors` | [冬壱もんめ-画师风格（Fuyuichi Monme-Artist style）](https://civitai.com/models/1240168) | **SDXL** | `Fuyuichi Monme style` |
| `GabrielDropOutStyles.safetensors` | [珈百璃的堕落 [动漫画风]（Gabriel Dropout [Anime style]）](https://civitai.com/models/1240294) | **SDXL** | `Gabriel Dropout Anime style` |
| `Haraid21ShiiroStyles.safetensors` | [Hara id 21 \| Shiiro's Styles](https://civitai.com/models/1272988) | **SDXL** | `h4ra_illu` |
| `HLStyleWSSKXAestheticBloomStyles.safetensors` | [HL's Styles - WAI \| ILLUSTRIOUS](https://civitai.com/models/1116233) | **SDXL** | *Tidak ada trigger khusus* |
| `IdolyPrideStyles.safetensors` | [Idoly Pride Illustration Style](https://civitai.com/models/1239754) | **SDXL** | *Tidak ada trigger khusus* |
| `JimaShiiroStyles.safetensors` | [Jima \| Shiiro's Styles](https://civitai.com/models/1331441) | **SDXL** | `jima_illu` |
| `KuraChi151Styles.safetensors` | [[Artist Style] KuraChi151 \| くらっち](https://civitai.com/models/1559040) | **SDXL** | `kuchi` |
| `LineArtStyles.safetensors` | [Lineart style illustriousXL](https://civitai.com/models/1090623) | **SDXL** | `lineart, monochrome, greyscale` |
| `LycorisRecoilStyles.safetensors` | [莉可丽丝 [动漫画风]（Lycoris Recoil [Anime style]）](https://civitai.com/models/1339579) | **SDXL** | `Lycoris Recoil style` |
| `MangamasterStyles.safetensors` | [MangamasterStyles](https://civitai.com/models/1168742) | **SDXL** | *Tidak ada trigger khusus* |
| `MizumizuniStyles.safetensors` | [MizumizuniStyles](https://civitai.com/models/960410) | **SDXL** | *Tidak ada trigger khusus* |
| `NukitashiStyles.safetensors` | [《Nukitashi 》STYLE](https://civitai.com/models/1789782) | **SDXL** | `Nukitashi STYLE` |
| `OdayakaStyles.safetensors` | [Odayaka artist style](https://civitai.com/models/1481390) | **SDXL** | `odayaka-ill` |
| `OpenVlStyles.safetensors` | [artist:openvl](https://civitai.com/models/1657386) | **SDXL** | `artist:openvl` |
| `Shikishi_TraditionalMediaStyles.safetensors` | [Shikishi, traditional media / 色紙 (Illustrious)](https://civitai.com/models/1073185) | **SDXL** | `shikishi, traditional media, signature, artist name, twitter username,  upper body, (lineart:1.3), (sketch:1.7), (monochrome:1.7)` |
| `SincosStyles.safetensors` | [[sincos] Artist Style Illustrious](https://civitai.com/models/1119661) | **SDXL** | `sincos_style` |
| `THEIDOLM@STERCINDERELLAGIRLSU149Styles.safetensors` | [Style/THE IDOLM@STER CINDERELLA GIRLS U149](https://civitai.com/models/1638928) | **SDXL** | `tachibana arisu`<br>`sakurai momoka`<br>`sasaki chie`<br>`akagi miria`<br>*(+10 trigger lainnya)* |
| `STYLESGENillust0_2v.safetensors` | [STYLES \| Illustrious/Noob](https://civitai.com/models/825880) | **SDXL** | *Tidak ada trigger khusus* |
| `T-RexStyles.safetensors` | [T-Rex Studio V2 NEW!!- Hentai +18 - \| STYLE \| PONY XL \| Illustrious XL \| - COMMISSION - by YeiyeiArt](https://civitai.com/models/960593) | **SDXL** | `TRexStyle,,`<br>`(anime coloring, anime screencap), shiny skin,,` |
| `T1kosewadStyles.safetensors` | [t1kosewad style](https://civitai.com/models/1587732) | **SDXL** | *Tidak ada trigger khusus* |
| `ToaruStyles.safetensors` | [魔法禁书目录 & 某科学的超电磁炮 [动漫画风]（Toaru Majutsu no Index & Toaru Kagaku No Railgun [Anime style]）](https://civitai.com/models/1269870) | **SDXL** | `Toaru Kagaku No Railgun & Index anime style` |
| `TokidokiBosottoRussiagoDeDereruTonariNoAlyasanStyles.safetensors` | [不时轻声地以俄语遮羞的邻座艾莉同学 [动漫画风]（Tokidoki Bosotto Russia go De Dereru Tonari No Alya san [Anime style]）](https://civitai.com/models/1302238) | **SDXL** | `Tokidoki Bosotto Russia-go De Dereru Tonari No Alya-san anime style` |
| `Himouto!Umaru-chanStyles.safetensors` | [干物妹小埋 [动漫画风]（Himouto! Umaru-chan [Anime style]）](https://civitai.com/models/1251507) | **SDXL** | `Himouto! Umaru-chan anime style` |
| `USNRStyles.safetensors` | [薄塗り / USNR STYLE](https://civitai.com/models/176554) | **SDXL** | `usnr` |
| `VicinekoStyles.safetensors` | [VicinekoStyles](https://civitai.com/models/1731487) | **SDXL** | *Tidak ada trigger khusus* |
| `ZenlessZoneZeroShiiroStyles.safetensors` | [Zenless Zone Zero \| Shiiro's Styles](https://civitai.com/models/1397679) | **SDXL** | `3d` |

## STYLE SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `Anime_In_real.safetensors` | [Anime in real](https://civitai.com/models/1979448) | **SDXL** | `Ani2rel` |
| `AnimeOriginalArtStyle.safetensors` | [Anime Original Art Style - Color Trace \| Pony ＆ illustrious ＆ SDXL](https://civitai.com/models/298341) | **SDXL** | `color trace, simple background, white background,` |
| `AnimeXReality.safetensors` | [Anime X Reality \| Shiiro's Styles](https://civitai.com/models/1163407) | **SDXL** | `re4lity_sync_illu` |
| `BackgroundLinearttest.safetensors` | [Background lineart test](https://civitai.com/models/1188729) | **SDXL** | *Tidak ada trigger khusus* |
| `BlueArchiveCutsceneStyle.safetensors` | [Blue Archive Cutscene Style - illustrious](https://civitai.com/models/1884029) | **SDXL** | *Tidak ada trigger khusus* |
| `ComicKawaii2Hentai.safetensors` | [Comic Kawaii2 Hentai [style]](https://civitai.com/models/1699901) | **SDXL** | `comic, speech bubble, text, japanese text,` |
| `FineAnimeScreencapXL.safetensors` | [Fine Anime Screencap XL \| Anime Screencap Style LoRa Illustrious and PonyXL](https://civitai.com/models/345962) | **SDXL** | `anime screencap, anime coloring` |
| `HandLineart.safetensors` | [Hand Line art](https://civitai.com/models/1441329) | **SDXL** | `SketchByHand` |
| `HonkaiStarRailOfficialArtStyle.safetensors` | [Honkai : Star Rail Official Art Style](https://civitai.com/models/1636274) | **SDXL** | *Tidak ada trigger khusus* |
| `Hoyo-Anime.safetensors` | [Hoyo-Anime (style)](https://civitai.com/models/1580731) | **SDXL** | `hoa1.0, anime style` |
| `UmamusumeStyle.safetensors` | [umamusume style(BEGINNING OF A NEW ERA)\|『ウマ娘 プリティーダービー 新時代の扉』｜ILL](https://civitai.com/models/1117188) | **SDXL** | `anime screenshot`<br>`anime screencap` |

## FAVORITE Classical Artstyle SDXL

| Nama File Fooocus | Judul Asli di Civitai | Arsitektur | Trigger Words / Trained Words |
|---|---|:---:|---|
| `FAVORITEClassicalArtstyle.safetensors` | [FAVORITE Classical Artstyle/司田カズヒロ style](https://civitai.com/models/1635862) | **SDXL** | `shiraha yuki`<br>`yukiyuki`<br>`Mare S. Ephemeral`<br>`nikaidou shinku` |
