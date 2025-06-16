# NeedsCloud - Modern İş Yönetim Çözümleri

Modern, responsive ve kullanıcı dostu iş yönetim sistemleri web sitesi. React, TypeScript ve Tailwind CSS ile geliştirilmiştir.

## 🚀 Özellikler

- **Modern Tasarım**: Apple düzeyinde tasarım estetiği
- **Responsive**: Tüm cihazlarda mükemmel görünüm
- **Multi-page**: Anasayfa, ürün detay, hakkımızda ve iletişim sayfaları
- **Email Entegrasyonu**: SMTP ile demo talep ve iletişim formları
- **Animasyonlar**: Smooth geçişler ve micro-interactions
- **SEO Optimized**: Arama motorları için optimize edilmiş

## 📦 Ürünler

### 1. WMS Depo Yönetim Sistemi
- Kapsamlı depo ve stok yönetimi
- Gerçek zamanlı takip
- ERP entegrasyonları
- Mobil uyumluluk

### 2. E-Dönüşüm Konnektörü
- E-fatura, e-arşiv, e-irsaliye yönetimi
- 10+ muhasebe programı entegrasyonu
- %40 kontör tasarrufu
- Çoklu firma desteği

### 3. TanaBanka Hesap Yönetimi
- Çoklu banka hesap yönetimi
- Otomatik ekstre çekimi
- ERP senkronizasyonu
- Finansal analiz ve raporlama

## 🛠 Teknolojiler

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express
- **Email**: Nodemailer (SMTP)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM

## 📦 Kurulum

1. **Projeyi klonlayın**
```bash
git clone https://github.com/caglayanfaruk/website_needscloud.com.git
cd needscloud
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Environment dosyasını oluşturun**
```bash
cp .env.example .env
```

4. **SMTP ayarlarını yapılandırın**
`.env` dosyasını düzenleyin ve SMTP bilgilerinizi girin:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM="NeedsCloud <your-email@gmail.com>"
RECIPIENT_EMAIL=your-email@gmail.com
```

## 🚀 Geliştirme

1. **Frontend'i başlatın**
```bash
npm run dev
```

2. **Backend API sunucusunu başlatın**
```bash
cd server
node index.js
```

Web sitesi `http://localhost:5173` adresinde çalışacaktır.
API sunucusu `http://localhost:3001` adresinde çalışacaktır.

## 📧 SMTP Konfigürasyonu

### Gmail için Ayarlar
1. Gmail hesabınızda 2-Factor Authentication aktif olmalı
2. App Password oluşturun:
   - Google Account Settings > Security > 2-Step Verification > App passwords
   - "Mail" seçin ve password oluşturun
   - Bu password'ü `SMTP_PASS` olarak kullanın

### Diğer SMTP Sağlayıcılar
- **Outlook/Hotmail**: `smtp-mail.outlook.com:587`
- **Yahoo**: `smtp.mail.yahoo.com:587`
- **Custom SMTP**: Kendi sunucunuzun ayarları

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: Blue (#3B82F6)
- **Secondary**: Green (#10B981)
- **Accent**: Purple (#8B5CF6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Font Family**: Inter
- **Weights**: 300, 400, 500, 600, 700
- **Line Heights**: 150% (body), 120% (headings)

### Spacing
- **System**: 8px grid system
- **Breakpoints**: 
  - Mobile: <768px
  - Tablet: 768-1024px
  - Desktop: >1024px

## 📱 Sayfalar

### 1. Anasayfa (`/`)
- Hero section
- Ürünler showcase
- Özellikler
- İstatistikler
- CTA sections

### 2. Ürün Detay Sayfaları
- **WMS**: `/product/wms-depo-yonetim-sistemi`
- **E-Dönüşüm**: `/product/e-donusum-konnektoru`
- **TanaBanka**: `/product/tanabanka-hesap-yonetimi`

### 3. Hakkımızda (`/about`)
- Şirket hikayesi
- Misyon & Vizyon
- Değerler
- Çözümler
- İstatistikler

### 4. İletişim (`/contact`)
- İletişim bilgileri
- İletişim formu
- Harita (placeholder)

## 🔧 API Endpoints

### Demo Talebi
```
POST /api/demo-request
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "company": "string (optional)",
  "message": "string (optional)"
}
```

### İletişim Formu
```
POST /api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

## 🚀 Production Build

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşturulacaktır.

## 🌐 Deployment

### Netlify
1. GitHub repository'yi Netlify'a bağlayın
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. GitHub repository'yi Vercel'a bağlayın
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

### Linux Sunucu
Detaylı kurulum rehberi için [Linux Kurulum Rehberi](docs/linux-setup.md) dosyasına bakın.

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 Destek

Herhangi bir sorunuz için:
- Email: info@needscloud.com
- Telefon: +90 000 000 00 00

## 🔄 Güncellemeler

### v1.0.0 (2024-01-15)
- İlk sürüm yayınlandı
- WMS, E-Dönüşüm ve TanaBanka ürünleri eklendi
- Responsive tasarım tamamlandı
- Email entegrasyonu eklendi

---

**NeedsCloud** - Modern İş Yönetim Çözümleri
