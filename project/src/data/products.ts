import { Feature, PackageFeature, Product, Screenshot } from '../types';

// WMS Screenshots
export const wmsScreenshots: Screenshot[] = [
  { id: 0, title: 'Dashboard', description: 'Ana kontrol paneli' },
  { id: 1, title: 'Stok Yönetimi', description: 'Gelişmiş stok yönetimi' },
  { id: 2, title: 'Sevkiyat Yönetimi', description: 'Sevkiyat operasyonları' },
  { id: 3, title: 'Mal Kabul', description: 'Gelen mal kayıtları' },
  { id: 4, title: 'Transfer Yönetimi', description: 'Stok transferleri' },
  { id: 5, title: 'Yetkilendirme', description: 'Güvenlik yönetimi' },
  { id: 6, title: 'Sayım ve Envanter', description: 'Envanter işlemleri' },
  { id: 7, title: 'Üretim Entegrasyonu', description: 'Üretim süreçleri' },
  { id: 8, title: 'Hücre İşlemleri', description: 'Depo hücre yönetimi' },
  { id: 9, title: 'Etiket ve Barkod', description: 'Etiket tasarımı' },
  { id: 10, title: 'ERP Entegrasyonu', description: 'Dış sistem bağlantıları' },
  { id: 11, title: 'Yapay Zeka', description: 'Otomasyon çözümleri' },
  { id: 12, title: 'Gelişmiş Raporlama', description: 'Analitik ve grafikler' },
  { id: 13, title: 'Ayarlar', description: 'Sistem konfigürasyonu' }
];

// E-Dönüşüm Screenshots
export const edonusumScreenshots: Screenshot[] = [
  { id: 0, title: 'Tüm Belgeler Tek Panelde', description: 'Gelen ve Giden E-Belgeleri Kolayca Organize Edin' },
  { id: 1, title: 'Kontör Maliyetleri', description: 'NeedsCloud ile Kontör Maliyetlerinizden %40 tasarruf edin' },
  { id: 2, title: '10+ Muhasebe Programı ile Entegre', description: 'Tüm popüler muhasebe programları ile çift yönlü entegre çalışır' },
  { id: 3, title: 'Tek Tuşla Firmalar Arası Geçiş', description: 'Firmadan Firmaya geçiş yapmak gerektiğinde ekranlarınızın kapanmasına gerek yok' },
  { id: 4, title: 'Entegratör Tercihi', description: 'Fatura ve irsaliye gönderimlerinizi farklı özel entegratörler ile yapabilirsiniz' }
];

// TanaBanka Screenshots
export const tanabankaScreenshots: Screenshot[] = [
  { id: 0, title: 'Hesap Özeti', description: 'Tüm banka hesaplarınızı tek ekranda görüntüleyin' },
  { id: 1, title: 'Ekstre Yönetimi', description: 'Otomatik ekstre çekimi ve kategorilendirme' },
  { id: 2, title: 'ERP Entegrasyonu', description: 'Muhasebe programınıza otomatik kayıt aktarımı' },
  { id: 3, title: 'Hesap Mutabakatı', description: 'Banka ve muhasebe kayıtlarını karşılaştırın' },
  { id: 4, title: 'Nakit Akış Analizi', description: 'Gelir-gider analizleri ve projeksiyonlar' },
  { id: 5, title: 'Raporlama', description: 'Detaylı finansal raporlar ve analizler' }
];

export const wmsFeatures: Feature[] = [
  {
    icon: 'TrendingUp',
    title: 'Kesintisiz Yönetim',
    description: 'RDP ile terminal sunucu bağlantısı kesilse bile kaldığınız yerden devam edin'
  },
  {
    icon: 'Shield',
    title: 'Güvenilir Altyapı',
    description: 'Güvenli teknolojik altyapı ile stabilitenizi koruyun'
  },
  {
    icon: 'Zap',
    title: 'Yüksek Performans',
    description: 'Yüz binlerce ve eş zamanlı stok işlemini gecikmesiz yapın'
  },
  {
    icon: 'Users',
    title: 'Kolay Kullanım',
    description: 'Kullanım kolaylığını temel alınarak geliştirildi'
  },
  {
    icon: 'BarChart3',
    title: 'Güçlü Rapor Altyapısı',
    description: 'İşletmenizin stok operasyonlarını anlık olarak izleyin ve detaylı raporlar alın'
  },
  {
    icon: 'Headphones',
    title: 'Hızlı Destek',
    description: 'Desteğe ihtiyacınız olduğunda anında iletişim kurun'
  }
];

export const edonusumFeatures: Feature[] = [
  {
    icon: 'Layers',
    title: 'Konsolidasyon',
    description: 'Tüm fatura hareketlerinizi tek ekrandan yönetin'
  },
  {
    icon: 'Shield',
    title: 'Güvenilir Altyapı',
    description: 'Standartların ötesinde yedekleme ve geriye dönüş senaryoları ile verilerinizi özenle koruyoruz'
  },
  {
    icon: 'Zap',
    title: '20x Yüksek Performans',
    description: 'Güçlü teknoloji altyapısı ile E-Belgeleriniz ışık hızında gönderiliyor'
  },
  {
    icon: 'Users',
    title: 'Kolay Kullanım',
    description: 'Kullanım kolaylığını temel alınarak geliştirilen tasarımı ile konfor alanınızda kalın'
  },
  {
    icon: 'BarChart3',
    title: 'Güçlü Rapor Altyapısı',
    description: 'Tüm fatura ve irsaliyeleriniz için konsolide edilebilir detaylı raporlar alın'
  },
  {
    icon: 'Headphones',
    title: 'Hızlı Destek',
    description: 'Desteğe ihtiyacınız olduğunda anında iletişim kurun'
  }
];

export const tanabankaFeatures: Feature[] = [
  {
    icon: 'CreditCard',
    title: 'Çoklu Banka Desteği',
    description: 'Tüm bankalarınızın hesaplarını tek platformda yönetin'
  },
  {
    icon: 'Download',
    title: 'Otomatik Ekstre Çekimi',
    description: 'Banka ekstrelerinizi otomatik olarak çekin ve kategorilendirin'
  },
  {
    icon: 'RefreshCw',
    title: 'ERP Senkronizasyonu',
    description: 'Muhasebe programınızla otomatik veri senkronizasyonu'
  },
  {
    icon: 'CheckCircle',
    title: 'Otomatik Mutabakat',
    description: 'Banka ve muhasebe kayıtlarını otomatik olarak karşılaştırın'
  },
  {
    icon: 'TrendingUp',
    title: 'Nakit Akış Analizi',
    description: 'Gelir-gider analizleri ve gelecek projeksiyonları'
  },
  {
    icon: 'FileText',
    title: 'Detaylı Raporlama',
    description: 'Kapsamlı finansal raporlar ve analizler'
  }
];

export const packageFeatures: PackageFeature[] = [
  {
    name: 'Çoklu Firma / Şube / Depo Desteği',
    description: 'Tek sistemle birden fazla firma, şube ve depo yönetimi yapabilme imkânı.',
    basic: true,
    enterprise: true
  },
  {
    name: 'Dinamik Raf (Lokasyon Takibi)',
    description: 'Ürünlerin bulunduğu raf lokasyonlarını anlık olarak izleyebilir ve yönetebilirsiniz.',
    basic: true,
    enterprise: true
  },
  {
    name: 'Gerçek Zamanlı Stok Seviyesi Takibi',
    description: 'Stok seviye bilgisi sayesinde minimum/maksimum stok kontrolleri sağlanır.',
    basic: true,
    enterprise: true
  },
  {
    name: 'Gelişmiş Seri / Lot Takibi',
    description: 'Ürünlerin lot ve seri numaraları ile izlenebilmesini mümkün kılar.',
    basic: true,
    enterprise: true
  },
  {
    name: 'FIFO, FEFO, LIFO gibi Stok Yönetim Stratejileri',
    description: 'Stokların çıkış sırasını belirlemek için çeşitli yöntemlerle ürün rotasyonu sağlanır.',
    basic: true,
    enterprise: true
  },
  {
    name: 'Ambar Bazında Parametrik Lot Takibi',
    description: 'İstenirse belirli ambarlarda lot takibi kapatılabilir.',
    basic: false,
    enterprise: true
  },
  {
    name: 'Otomatik Sevkiyat Planlama',
    description: 'Kurallar çerçevesinde sistem otomatik sevkiyat planlaması yapar.',
    basic: false,
    enterprise: true
  },
  {
    name: 'Sevkiyat Kontrol (Toplama Sonrası 2.Kez Kontrol)',
    description: 'Toplama sonrası ikinci kez kontrol ile sevkiyat doğruluğu sağlanır.',
    basic: false,
    enterprise: true
  },
  {
    name: 'E-Belge Basımı (E-İrsaliye/E-Fatura)',
    description: 'Sevkiyat sonunda e-belge otomatik olarak hazırlanır.',
    basic: false,
    enterprise: true
  },
  {
    name: 'Soğuk Satış (Müşteri Siparişi Kaydı)',
    description: 'Müşteri siparişi bazlı sevkiyat senaryoları uygulanabilir.',
    basic: false,
    enterprise: true
  },
  {
    name: 'Fatura Kontrol (ERP Entegrasyonu)',
    description: 'Faturalanmış ürünler barkod okutularak ERP üzerindeki kayıtla karşılaştırılır.',
    basic: false,
    enterprise: true
  },
  {
    name: 'Stok Rezervasyonu ve Blokaj',
    description: 'Bekleyen belirli siparişler için rezerve edilebilir veya blokaj uygulanabilir.',
    basic: false,
    enterprise: true
  },
  {
    name: 'Araç Sayım',
    description: 'Araçtaki ürünler için sayım yapılarak gelen ürünler kontrol edilir.',
    basic: false,
    enterprise: true
  },
  {
    name: 'Depolar Arası Transfer Onayı',
    description: 'Transfer işlemleri, ilgili onay süreçlerinden geçerek resmileştirilir.',
    basic: false,
    enterprise: true
  },
  {
    name: 'Yerinde Eğitim Hizmeti',
    description: 'Online eğitim standarttır. Enterprise pakette Yerinde Eğitim Hizmeti mevcuttur.',
    basic: false,
    enterprise: true
  },
  {
    name: 'Telefon Desteği',
    description: 'Destek hattı aranmak suretiyle telefon ile destek alınabilir.',
    basic: false,
    enterprise: true
  }
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'wms-depo-yonetim-sistemi',
    name: 'Depo Yönetim Sistemi',
    category: 'Operasyon Yönetimi',
    description: 'NeedsCloud WMS, işletmenizin depo ve antrepo operasyonlarını optimize eden, stok yönetiminden sevkiyata, mal kabulden envanter sayımına kadar tüm süreçleri entegre bir şekilde yöneten kapsamlı bir depo yönetim sistemidir.',
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: wmsFeatures,
    screenshots: wmsScreenshots,
    packageFeatures: packageFeatures,
    packages: [
      {
        name: 'Basic',
        features: packageFeatures
      },
      {
        name: 'Enterprise',
        features: packageFeatures
      }
    ]
  },
  {
    id: '2',
    slug: 'e-donusum-konnektoru',
    name: 'E-Dönüşüm Konnektörü',
    category: 'Dijital Dönüşüm',
    description: 'Farklı muhasebe programlarına eş zamanlı bağlanarak tüm firmalarınıza ait e-fatura, e-arşiv ve e-irsaliye belgelerini tek panelden alır, gönderir ve yönetir. İş süreçlerinizde zaman kazandırır, kontör maliyetlerinizi düşürür.',
    image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: edonusumFeatures,
    screenshots: edonusumScreenshots,
    packages: []
  },
  {
    id: '3',
    slug: 'tanabanka-hesap-yonetimi',
    name: 'TanaBanka Hesap Yönetimi',
    category: 'Finansal Yönetim',
    description: 'Tüm banka hesaplarınızı tek bir platformda toplayarak, otomatik ekstre çekimi, ERP entegrasyonu ve detaylı finansal analizler sunan kapsamlı banka hesap yönetim sistemi.',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: tanabankaFeatures,
    screenshots: tanabankaScreenshots,
    packages: []
  }
];