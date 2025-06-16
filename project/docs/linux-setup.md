# Linux Sunucuya Kurulum Rehberi

Bu dokümanda NeedsCloud projesinin Linux sunucuya nasıl kurulacağı detaylı olarak anlatılmaktadır.

## Sistem Gereksinimleri

- Ubuntu 20.04+ / CentOS 8+ / Debian 11+
- 2GB RAM (4GB önerilen)
- 20GB disk alanı
- Node.js 18+ desteği

## Adım Adım Kurulum

### 1. Gerekli Yazılımları Yükleyin

#### Node.js ve npm
```bash
# Ubuntu/Debian için
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL için
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
```

#### Git
```bash
# Ubuntu/Debian
sudo apt update && sudo apt install git

# CentOS/RHEL
sudo yum install git
```

#### PM2
```bash
sudo npm install -g pm2
```

### 2. Proje Dosyalarını Aktarın

```bash
# Proje dizini oluşturun
sudo mkdir -p /var/www/needscloud
sudo chown $USER:$USER /var/www/needscloud
cd /var/www/needscloud

# Projeyi klonlayın
git clone https://github.com/kullaniciadi/needscloud.git .
```

### 3. Bağımlılıkları Yükleyin

```bash
# Frontend bağımlılıkları
npm install

# Backend bağımlılıkları
cd server && npm install && cd ..
```

### 4. Environment Ayarları

```bash
cp .env.example .env
nano .env
```

### 5. Build ve Deploy

```bash
# Frontend build
npm run build

# PM2 ile backend başlatma
pm2 start ecosystem.config.js
pm2 startup
pm2 save
```

### 6. Nginx Konfigürasyonu

```bash
sudo nano /etc/nginx/sites-available/needscloud
```

Detaylı konfigürasyon için ana README dosyasına bakın.

### 7. SSL Sertifikası

```bash
sudo certbot --nginx -d your-domain.com
```

## Bakım ve Güncelleme

### Proje Güncellemesi
```bash
cd /var/www/needscloud
git pull origin main
npm install
npm run build
pm2 restart needscloud-api
```

### Backup
```bash
tar -czf backup_$(date +%Y%m%d).tar.gz /var/www/needscloud
```

## Sorun Giderme

### Log Kontrolü
```bash
# Nginx logları
sudo tail -f /var/log/nginx/error.log

# PM2 logları
pm2 logs needscloud-api
```

### Servis Durumu
```bash
sudo systemctl status nginx
pm2 status
```