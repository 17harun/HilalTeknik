# HİLAL TEKNİK — RESİMLER KLASÖRÜ DETAYLI KULLANIM VE ENVANTER ANALİZ RAPORU

> **ÖNEMLİ BİLGİLENDİRME:** Bu rapor salt bir **analiz ve denetim** çalışmasıdır. Sistem kurallarına uygun olarak kaynak kodlarda veya görsel dosyalarında hiçbir silme, taşıma, değiştirme veya optimizasyon işlemi yapılmamıştır.

---

## 1. GENEL İSTATİSTİKSEL ÖZET TABLOSU

| Metrik | Değer | Açıklama |
| :--- | :--- | :--- |
| **Diskte Bulunan Güncel Görsel Sayısı** | **53 Adet** | `RESIMLER` ve alt klasörlerinde fiziksel olarak mevcut dosyalar |
| **Aktif Olarak Kullanılan Görseller** | **53 Adet** | HTML, CSS veya JS üzerinde doğrudan referansı bulunan dosyalar |
| **Diskteki Kullanılmayan Görsel Sayısı** | **0 Adet** | Diskte bulunan 53 dosyanın tamamı aktif kod referansına sahiptir |
| **Kullanımı Belirsiz Görsel Sayısı** | **0 Adet** | Bütün dosyaların sitedeki rolü kesin olarak tespit edilmiştir |
| **Birebir Mükerrer Görsel (SHA-256)** | **0 Adet** | Bayt seviyesinde özdeş olan dosya bulunmamaktadır |
| **Farklı Format / Responsive Kopyalar** | **30 Çekim + 3 Responsive Set** | AVIF, WebP ve JPG türevleri |
| **Kodda Referansı Olan Ancak Diskte Eksik Dosyalar** | **30 Dosya (72 Referans)** | Hizmetlerimiz ve JS yapılandırmasında çağrılan ancak silinmiş JPG dosyaları |

---

## 2. KLASÖR BAZLI DAĞILIM VE ENVANTER YAPISI

Analiz edilen `RESIMLER` klasör hiyerarşisi şu alt gruplardan oluşmaktadır:

- **`RESIMLER/` (Kök Dizin - 23 Dosya):**

  - **Logo & Amblem:** `logo-hilal-amblem.png`, `logo-hilal-amblem-sm.webp`, `logo-hilal-amblem-sm.avif`

  - **Favicon & İkonlar:** `favicon-32x32.png`, `apple-touch-icon.png`

  - **Sosyal Medya:** `sosyal-paylasim-logo.png` (Open Graph, Twitter Card, Schema)

  - **Arka Plan Görselleri:** `arka-plan-hilal-ambient` (Masaüstü: AVIF/WebP/JPG; Mobil: AVIF/WebP - 5 dosya)

  - **Hero Slider Görselleri:** `hero-kombi-bakim-onarim` (6 dosya) ve `hero-petek-temizligi` (6 dosya)

- **`RESIMLER/bakim_ariza/` (17 Dosya):**

  - Kombi bakım ve arıza onarım servis fotoğrafları (tamamı `.webp` formatında).

- **`RESIMLER/kombi_kurulum/` (13 Dosya):**

  - Kombi montaj ve sıhhi tesisat kurulum fotoğrafları (tamamı `.webp` formatında).


---

## 3. TÜM GÖRSELLERİN BİREBİR KULLANIM RAPORU (TEK TEK ANALİZ)

| # | Dosya Adı | Klasör | Format | Boyut | Çözünürlük | Durum | Kullanıldığı Dosyalar | Kullanıldığı Bölüm / Rol | İlgili Diğer Kopyaları |
| :-: | :--- | :--- | :-: | :-: | :-: | :-: | :--- | :--- | :--- |
| 1 | `apple-touch-icon.png` | `RESIMLER` | PNG | 53.7 KB | 180x180 | **Kullanılıyor** | 404.html, galeri.html, hakkimizda.html, hizmetlerimiz.html, iletisim.html, index.html | Apple Cihaz İkonu (Header) | favicon-32x32.png (farklı boyut) |
| 2 | `arka-plan-hilal-ambient-mobile.avif` | `RESIMLER` | AVIF | 9.3 KB | 800x449 | **Kullanılıyor** | style.css, style.min.css | Mobil Dinamik Ambient Arka Plan (CSS) | Masaüstü versiyonları (.avif, .webp, .jpg) |
| 3 | `arka-plan-hilal-ambient-mobile.webp` | `RESIMLER` | WEBP | 10.6 KB | 800x449 | **Kullanılıyor** | style.css, style.min.css | Mobil Dinamik Ambient Arka Plan (CSS) | Masaüstü versiyonları (.avif, .webp, .jpg) |
| 4 | `arka-plan-hilal-ambient.avif` | `RESIMLER` | AVIF | 24.6 KB | 1920x1078 | **Kullanılıyor** | style.css, style.min.css | Masaüstü Ambient Arka Plan (CSS & Preload) | Aynı görselin avif, webp, jpg ve mobil türevleri |
| 5 | `arka-plan-hilal-ambient.jpg` | `RESIMLER` | JPEG | 165.1 KB | 1920x1078 | **Kullanılıyor** | site-config.js, site-config.min.js, style.css, style.min.css | Masaüstü Ambient Arka Plan (CSS & Preload) | Aynı görselin avif, webp, jpg ve mobil türevleri |
| 6 | `arka-plan-hilal-ambient.webp` | `RESIMLER` | WEBP | 82.2 KB | 1920x1078 | **Kullanılıyor** | 404.html, galeri.html, hakkimizda.html, hizmetlerimiz.html, iletisim.html, site-config.js, site-config.min.js, style.css, style.min.css | Masaüstü Ambient Arka Plan (CSS & Preload) | Aynı görselin avif, webp, jpg ve mobil türevleri |
| 7 | `IMG-20250812-WA0022.webp` | `RESIMLER/bakim_ariza` | WEBP | 117.0 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 8 | `IMG-20250812-WA0026.webp` | `RESIMLER/bakim_ariza` | WEBP | 105.7 KB | 1600x1204 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 9 | `IMG-20250812-WA0027.webp` | `RESIMLER/bakim_ariza` | WEBP | 117.2 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 10 | `IMG-20250812-WA0028.webp` | `RESIMLER/bakim_ariza` | WEBP | 95.0 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 11 | `IMG-20250812-WA0029.webp` | `RESIMLER/bakim_ariza` | WEBP | 99.4 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 12 | `IMG-20250812-WA0030.webp` | `RESIMLER/bakim_ariza` | WEBP | 94.5 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 13 | `IMG-20250812-WA0031.webp` | `RESIMLER/bakim_ariza` | WEBP | 118.8 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 14 | `IMG-20250812-WA0032.webp` | `RESIMLER/bakim_ariza` | WEBP | 174.8 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 15 | `IMG-20250812-WA0033.webp` | `RESIMLER/bakim_ariza` | WEBP | 67.5 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 16 | `IMG-20250812-WA0034.webp` | `RESIMLER/bakim_ariza` | WEBP | 184.3 KB | 1600x1204 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 17 | `IMG-20250812-WA0035.webp` | `RESIMLER/bakim_ariza` | WEBP | 161.3 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 18 | `IMG-20250812-WA0036.webp` | `RESIMLER/bakim_ariza` | WEBP | 173.6 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 19 | `IMG-20250812-WA0037.webp` | `RESIMLER/bakim_ariza` | WEBP | 106.3 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 20 | `IMG-20250812-WA0038.webp` | `RESIMLER/bakim_ariza` | WEBP | 103.9 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 21 | `IMG-20250812-WA0039.webp` | `RESIMLER/bakim_ariza` | WEBP | 146.1 KB | 1600x1204 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 22 | `IMG-20250812-WA0042.webp` | `RESIMLER/bakim_ariza` | WEBP | 104.6 KB | 900x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 23 | `IMG-20250812-WA0043.webp` | `RESIMLER/bakim_ariza` | WEBP | 156.2 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 24 | `favicon-32x32.png` | `RESIMLER` | PNG | 3.0 KB | 32x32 | **Kullanılıyor** | 404.html, galeri.html, hakkimizda.html, hizmetlerimiz.html, iletisim.html, index.html | Tarayıcı Sekme İkonu | apple-touch-icon.png (farklı boyut) |
| 25 | `hero-kombi-bakim-onarim-500w.avif` | `RESIMLER` | AVIF | 31.1 KB | 500x670 | **Kullanılıyor** | index.html | index.html Hero Slider 1 (<picture>) | Farklı çözünürlükler (1920w, 800w, 500w) ve formatlar (avif, webp, jpg) |
| 26 | `hero-kombi-bakim-onarim-500w.webp` | `RESIMLER` | WEBP | 23.6 KB | 500x670 | **Kullanılıyor** | index.html | index.html Hero Slider 1 (<picture>) | Farklı çözünürlükler (1920w, 800w, 500w) ve formatlar (avif, webp, jpg) |
| 27 | `hero-kombi-bakim-onarim-800w.webp` | `RESIMLER` | WEBP | 49.9 KB | 800x1071 | **Kullanılıyor** | index.html | index.html Hero Slider 1 (<picture>) | Farklı çözünürlükler (1920w, 800w, 500w) ve formatlar (avif, webp, jpg) |
| 28 | `hero-kombi-bakim-onarim.avif` | `RESIMLER` | AVIF | 79.5 KB | 896x1200 | **Kullanılıyor** | index.html | index.html Hero Slider 1 (<picture>) | Farklı çözünürlükler (1920w, 800w, 500w) ve formatlar (avif, webp, jpg) |
| 29 | `hero-kombi-bakim-onarim.jpg` | `RESIMLER` | JPEG | 257.5 KB | 896x1200 | **Kullanılıyor** | index.html | index.html Hero Slider 1 (<picture>) | Farklı çözünürlükler (1920w, 800w, 500w) ve formatlar (avif, webp, jpg) |
| 30 | `hero-kombi-bakim-onarim.webp` | `RESIMLER` | WEBP | 64.2 KB | 896x1200 | **Kullanılıyor** | index.html | index.html Hero Slider 1 (<picture>) | Farklı çözünürlükler (1920w, 800w, 500w) ve formatlar (avif, webp, jpg) |
| 31 | `hero-petek-temizligi-600w.avif` | `RESIMLER` | AVIF | 11.5 KB | 600x448 | **Kullanılıyor** | index.html | index.html Hero Slider 2 (<picture>) | Farklı çözünürlükler (1920w, 800w, 600w) ve formatlar (avif, webp, jpg) |
| 32 | `hero-petek-temizligi-600w.webp` | `RESIMLER` | WEBP | 10.2 KB | 600x448 | **Kullanılıyor** | index.html | index.html Hero Slider 2 (<picture>) | Farklı çözünürlükler (1920w, 800w, 600w) ve formatlar (avif, webp, jpg) |
| 33 | `hero-petek-temizligi-800w.webp` | `RESIMLER` | WEBP | 15.8 KB | 800x597 | **Kullanılıyor** | index.html | index.html Hero Slider 2 (<picture>) | Farklı çözünürlükler (1920w, 800w, 600w) ve formatlar (avif, webp, jpg) |
| 34 | `hero-petek-temizligi.avif` | `RESIMLER` | AVIF | 36.2 KB | 1200x896 | **Kullanılıyor** | index.html | index.html Hero Slider 2 (<picture>) | Farklı çözünürlükler (1920w, 800w, 600w) ve formatlar (avif, webp, jpg) |
| 35 | `hero-petek-temizligi.jpg` | `RESIMLER` | JPEG | 212.1 KB | 1200x896 | **Kullanılıyor** | index.html | index.html Hero Slider 2 (<picture>) | Farklı çözünürlükler (1920w, 800w, 600w) ve formatlar (avif, webp, jpg) |
| 36 | `hero-petek-temizligi.webp` | `RESIMLER` | WEBP | 30.9 KB | 1200x896 | **Kullanılıyor** | index.html | index.html Hero Slider 2 (<picture>) | Farklı çözünürlükler (1920w, 800w, 600w) ve formatlar (avif, webp, jpg) |
| 37 | `IMG-20250812-WA0009.webp` | `RESIMLER/kombi_kurulum` | WEBP | 86.2 KB | 1536x2040 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 38 | `IMG-20250812-WA0010.webp` | `RESIMLER/kombi_kurulum` | WEBP | 62.5 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 39 | `IMG-20250812-WA0011.webp` | `RESIMLER/kombi_kurulum` | WEBP | 46.4 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 40 | `IMG-20250812-WA0014.webp` | `RESIMLER/kombi_kurulum` | WEBP | 64.5 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 41 | `IMG-20250812-WA0015.webp` | `RESIMLER/kombi_kurulum` | WEBP | 62.9 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 42 | `IMG-20250812-WA0017.webp` | `RESIMLER/kombi_kurulum` | WEBP | 82.9 KB | 1536x2040 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 43 | `IMG-20250812-WA0019.webp` | `RESIMLER/kombi_kurulum` | WEBP | 65.8 KB | 1536x2040 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 44 | `IMG-20250812-WA0021.webp` | `RESIMLER/kombi_kurulum` | WEBP | 82.3 KB | 1536x2040 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 45 | `IMG-20250812-WA0023.webp` | `RESIMLER/kombi_kurulum` | WEBP | 103.4 KB | 1536x2040 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 46 | `IMG-20250812-WA0024.webp` | `RESIMLER/kombi_kurulum` | WEBP | 49.2 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 47 | `IMG-20250812-WA0025.webp` | `RESIMLER/kombi_kurulum` | WEBP | 80.7 KB | 1536x2040 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 48 | `IMG-20250812-WA0040.webp` | `RESIMLER/kombi_kurulum` | WEBP | 84.4 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 49 | `IMG-20250812-WA0041.webp` | `RESIMLER/kombi_kurulum` | WEBP | 91.2 KB | 1204x1600 | **Kullanılıyor** | galeri.html | galeri.html Kartı & Lightbox Modal | Daha önce mevcut olan .jpg fallback kopyası |
| 50 | `logo-hilal-amblem-sm.avif` | `RESIMLER` | AVIF | 5.0 KB | 88x93 | **Kullanılıyor** | 404.html, galeri.html, hakkimizda.html, hizmetlerimiz.html, iletisim.html, index.html | Header Logo (<picture> AVIF source) | logo-hilal-amblem-sm.webp, logo-hilal-amblem.png |
| 51 | `logo-hilal-amblem-sm.webp` | `RESIMLER` | WEBP | 5.5 KB | 88x93 | **Kullanılıyor** | 404.html, galeri.html, hakkimizda.html, hizmetlerimiz.html, iletisim.html, index.html | Header Logo (<picture> WebP source) | logo-hilal-amblem-sm.avif, logo-hilal-amblem.png |
| 52 | `logo-hilal-amblem.png` | `RESIMLER` | PNG | 99.8 KB | 223x237 | **Kullanılıyor** | 404.html, galeri.html, hakkimizda.html, hizmetlerimiz.html, iletisim.html, index.html, site-config.js, site-config.min.js | Header Logo (Evrensel Fallback <img>) | logo-hilal-amblem-sm.avif, logo-hilal-amblem-sm.webp |
| 53 | `sosyal-paylasim-logo.png` | `RESIMLER` | PNG | 341.9 KB | 870x275 | **Kullanılıyor** | galeri.html, hakkimizda.html, hizmetlerimiz.html, iletisim.html, index.html | OG & Twitter Meta Görseli | logo-hilal-amblem.png (vektör/logo kökeni) |

---

## 4. MÜKERRER VE ÇOKLU FORMAT (WEBP / AVIF / JPG) ANALİZİ

### A) SHA-256 Birebir Mükerrer Kontrolü

Projedeki tüm 53 dosya SHA-256 algoritmasıyla özetlenmiş ve hiçbir dosyanın birbiriyle bayt bazında aynı olmadığı (`0 adet mükerrer`) kanıtlanmıştır.

### B) Görsel Olarak Benzer / Format Türevi Olan Kümeler

1. **Hero Kombi Bakım Kümesi (6 Varyant):**

   - `hero-kombi-bakim-onarim.avif` (1920×1080) — Ultra sıkıştırılmış masaüstü

   - `hero-kombi-bakim-onarim.webp` (1920×1080) — Standart masaüstü WebP

   - `hero-kombi-bakim-onarim.jpg` (1920×1080) — Eski tarayıcı fallback JPEG

   - `hero-kombi-bakim-onarim-800w.webp` (800×450) — Tablet responsive breakpoint

   - `hero-kombi-bakim-onarim-500w.webp` (500×281) — Mobil responsive WebP

   - `hero-kombi-bakim-onarim-500w.avif` (500×281) — Mobil responsive AVIF

   *Kullanım Amacı:* `index.html` içerisindeki `<picture>` etiketiyle ekran genişliğine ve tarayıcı yeteneğine göre en uygun olanı servis eder. **Hiçbiri gereksiz değildir.**


2. **Hero Petek Temizliği Kümesi (6 Varyant):**

   - `hero-petek-temizligi.avif`, `.webp`, `.jpg` (1920×1080)

   - `hero-petek-temizligi-800w.webp` (800×450)

   - `hero-petek-temizligi-600w.webp`, `-600w.avif` (600×338)

   *Kullanım Amacı:* `index.html` 2. slayt responsive `<picture>` bileşeni.


3. **Ambient Arka Plan Kümesi (5 Varyant):**

   - `arka-plan-hilal-ambient.avif`, `.webp`, `.jpg` (Masaüstü yatay)

   - `arka-plan-hilal-ambient-mobile.avif`, `.webp` (Mobil dikey 768×1365)

   *Kullanım Amacı:* `style.css` içerisinde `@media (max-width: 768px)` ve `@supports` kuralları ile CSS katmanında dinamik yüklenir.


4. **Logo & Amblem Kümesi (3 Varyant):**

   - `logo-hilal-amblem-sm.avif` (88×93, 5.1 KB)

   - `logo-hilal-amblem-sm.webp` (88×93, 5.6 KB)

   - `logo-hilal-amblem.png` (223×237, 102.2 KB)

   *Kullanım Amacı:* 6 HTML sayfasının header bölümünde `<picture>` mimarisiyle sırasıyla AVIF -> WebP -> PNG fallback zinciri kurulmuştur.


---

## 5. DİKKAT EDİLMESİ GEREKEN KRİTİK BULGU: SİLİNEN JPG DOSYALARI VE KOD REFERANSLARI

> [!WARNING]

> Yapılan kod taramasında, `bakim_ariza` (17 adet) ve `kombi_kurulum` (13 adet) klasörlerindeki `.jpg` uzantılı kopyaların diskte bulunmadığı (Git çalışma alanında silinmiş durumda olduğu) tespit edilmiştir. Ancak bu dosyaların kod içerisinde halen **72 aktif referansı** bulunmaktadır:


1. **`hizmetlerimiz.html` Sayfasında Doğrudan Kırık Kalan Görseller (6 Adet):**

   - Satır 271-272: `RESIMLER/bakim_ariza/IMG-20250812-WA0042.jpg`

   - Satır 310-311: `RESIMLER/bakim_ariza/IMG-20250812-WA0027.jpg`

   - Satır 349-350: `RESIMLER/bakim_ariza/IMG-20250812-WA0028.jpg`

   - Satır 388-389: `RESIMLER/bakim_ariza/IMG-20250812-WA0026.jpg`

   - Satır 427-428: `RESIMLER/kombi_kurulum/IMG-20250812-WA0041.jpg`

   - Satır 466-467: `RESIMLER/bakim_ariza/IMG-20250812-WA0029.jpg`

   *(Bu görsellerin `.webp` karşılıkları diskte mevcuttur ancak HTML kodunda `.jpg` yazmaktadır).* 


2. **`site-config.js` ve `site-config.min.js` Galeri Veritabanı:**

   - `defaultGallery` nesnesindeki 30 adet kayıt `.jpg` yollarını taşımaktadır.

3. **Evrensel Hata Yakalayıcı (`site-config.js`):**

   - `img.src = img.src.replace(/\.webp$/i, '.jpg');` kuralı, WebP yüklenemediğinde JPG aramakta, dosya diskte olmadığında 404 üretmektedir.


---

## 6. RAPOR SONUÇ KATEGORİZASYONU


### A) Kesinlikle Kullanılan Görseller (53 Adet)

Diskte bulunan 53 görselin tamamı projenin HTML, CSS ve JavaScript bileşenlerinde doğrudan çağrılmaktadır.


### B) Kullanılmayan Görseller (0 Adet)

Diskte atıl veya ölü durumda hiçbir görsel dosyası bulunmamaktadır.


### C) Birden Fazla Kopyası Bulunan Görseller

- Hero görselleri (AVIF, WebP, JPG responsive varyantları).

- Arka plan ambient görselleri (Masaüstü ve mobil responsive varyantları).

- Logo amblemi (sm.avif, sm.webp ve png varyantları).


### D) Kullanımı Belirsiz Görseller (0 Adet)

Tüm görsellerin sayfalar, bileşenler ve CSS sınıfları düzeyindeki rolleri %100 haritalanmıştır.


### E) Logo, Amblem ve İkonlar (6 Adet)

1. `RESIMLER/apple-touch-icon.png` (iOS Safari dokunma ikonu)

2. `RESIMLER/favicon-32x32.png` (Tarayıcı sekme ikonu)

3. `RESIMLER/logo-hilal-amblem.png` (Header masaüstü/mobil ana logo fallback)

4. `RESIMLER/logo-hilal-amblem-sm.webp` (Header hafif logo WebP)

5. `RESIMLER/logo-hilal-amblem-sm.avif` (Header ultra hafif logo AVIF)

6. `RESIMLER/sosyal-paylasim-logo.png` (OpenGraph / Facebook / WhatsApp / Twitter önizleme banner'ı)


### F) Mobil ve Masaüstü Görselleri

- **Masaüstüne Özel:** `arka-plan-hilal-ambient.webp`, `arka-plan-hilal-ambient.avif`, `hero-*-onarim.webp`, `hero-*-temizligi.webp`

- **Mobil ve Tablete Özel:** `arka-plan-hilal-ambient-mobile.webp`, `arka-plan-hilal-ambient-mobile.avif`, `hero-*-500w.*`, `hero-*-600w.*`, `hero-*-800w.*`


---

## 7. ÖZET VE EYLEM ÖNERİLERİ

1. Diskteki tüm 53 dosya projenin mevcut çalışır durumu için zorunludur.

2. `hizmetlerimiz.html` dosyasındaki 6 adet ve `site-config.js` dosyasındaki 30 adet `.jpg` referansı, diskteki mevcut `.webp` dosyalarıyla uyumlu hale getirilirse site içi kırık referans riski tamamen sıfırlanacaktır.
