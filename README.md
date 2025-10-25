# Dr. Elif Aydın - Estetik Cerrahi Web Sitesi

Modern ve profesyonel estetik cerrahi web sitesi. React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Responsive ve kullanıcı dostu arayüz
- **Animasyonlar**: Framer Motion ile smooth animasyonlar
- **SEO Optimized**: Arama motoru optimizasyonu
- **Hızlı Yükleme**: Vite ile optimize edilmiş build
- **Mobil Uyumlu**: Tüm cihazlarda mükemmel görünüm
- **GitHub Pages**: Otomatik deploy sistemi

## 📋 Sayfalar

- **Ana Sayfa**: Hero bölümü, uzmanlık alanları, blog yazıları
- **Hakkımda**: Doktor profili ve deneyim bilgileri
- **Uzmanlık Alanları**: Detaylı cerrahi işlem açıklamaları
- **Çalışmalarım**: Vaka çalışmaları ve fotoğraf galerisi
- **Akademik**: Yayınlar ve akademik çalışmalar
- **Blog**: Estetik cerrahi hakkında bilgilendirici yazılar
- **İletişim**: Randevu formu ve iletişim bilgileri

## 🛠️ Teknolojiler

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animasyonlar**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deploy**: GitHub Pages

## 📦 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın**
```bash
git clone https://github.com/kullaniciadi/doktor_web_2.git
cd doktor_web_2
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Development server'ı başlatın**
```bash
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:5173/doktor_web_2/
```

## 🚀 Production Build

```bash
# Build alın
npm run build

# Preview için
npm run preview
```

## 📁 Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── animations/     # Animasyon bileşenleri
│   ├── Header.tsx      # Navigasyon header
│   ├── Footer.tsx      # Site footer
│   └── BackToTop.tsx   # Yukarı çık butonu
├── pages/              # Sayfa bileşenleri
│   ├── Home.tsx        # Ana sayfa
│   ├── About.tsx       # Hakkımda
│   ├── Contact.tsx     # İletişim
│   ├── Blog.tsx        # Blog listesi
│   ├── Works.tsx       # Çalışmalarım
│   ├── Academic.tsx    # Akademik
│   └── SpecializationPage.tsx # Uzmanlık detayları
├── hooks/              # Custom React hooks
└── main.tsx           # Uygulama giriş noktası

public/
├── images/            # Statik resimler
│   ├── doktor_1.webp
│   ├── doktor_2.webp
│   ├── doktor_logo.webp
│   └── hizmetlerimiz_image/
└── index.html        # HTML template
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Primary**: #2E8B57 (Sea Green)
- **Background**: White, Gray-50
- **Text**: Gray-900, Gray-600
- **Footer**: Gray-900

### Typography
- **Headings**: Bold, responsive font sizes
- **Body**: Regular weight, readable line heights
- **Font Family**: System fonts (Inter, sans-serif)

### Animasyonlar
- **Page Transitions**: Smooth geçişler
- **Hover Effects**: Interactive elementler
- **Scroll Animations**: Görünürlük tabanlı animasyonlar

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

## 🚀 Deployment

### GitHub Pages

Proje otomatik olarak GitHub Pages'e deploy edilir:

1. **Repository Settings** → **Pages**
2. **Source**: GitHub Actions
3. **Branch**: main

### Manuel Deploy

```bash
# Build alın
npm run build

# dist/ klasörünü web sunucunuza yükleyin
```

## 🔧 Konfigürasyon

### Vite Config
```typescript
// vite.config.ts
export default defineConfig({
  base: '/doktor_web_2/',  // GitHub Pages için
  // Development: base: '/'
  // Production: base: '/doktor_web_2/'
})
```

### Environment Variables
```bash
# .env.local (opsiyonel)
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=info@demo.com
```

## 📞 İletişim Bilgileri

- **Telefon**: 0535 308 44 66
- **Email**: info@demo.com
- **Adres**: Ataşehir/İstanbul
- **Çalışma Saatleri**: 
  - Pazartesi-Cuma: 08:30-22:00
  - Cumartesi-Pazar: 10:00-18:00

## 🏥 Uzmanlık Alanları

- Burun Estetiği (Rinoplasti)
- Meme Estetiği (Büyütme/Küçültme)
- Liposuction (Yağ Aldırma)
- Karın Germe (Abdominoplasti)
- Yüz Germe
- Göz Kapağı Estetiği
- Botoks Uygulaması
- Dolgu Uygulaması
- Saç Ekimi

## 📄 Lisans

Bu proje özel kullanım için geliştirilmiştir. Tüm hakları saklıdır.

## 🤝 Katkıda Bulunma

Bu proje özel bir web sitesidir. Katkıda bulunmak için lütfen iletişime geçin.

## 📝 Changelog

### v1.0.0 (2024)
- İlk sürüm yayınlandı
- Tüm temel sayfalar eklendi
- Responsive tasarım tamamlandı
- GitHub Pages deploy sistemi kuruldu
- SEO optimizasyonları yapıldı

---

**Dr. Elif Aydın** - Plastik ve Rekonstrüktif Cerrahi Uzmanı
