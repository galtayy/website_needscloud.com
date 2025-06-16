import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Shield, Zap, Users, TrendingUp, Headphones, Play, Star, FileText, CreditCard, Layers } from 'lucide-react';

export const HomePage: React.FC = () => {
  const handleDemoClick = () => {
    const modal = document.getElementById('demo-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  const features = [
    {
      icon: TrendingUp,
      title: 'Kesintisiz Yönetim',
      description: 'RDP ile terminal sunucu bağlantısı kesilse bile kaldığınız yerden devam edin'
    },
    {
      icon: Shield,
      title: 'Güvenilir Altyapı',
      description: 'Güvenli teknolojik altyapı ile stabilitenizi koruyun'
    },
    {
      icon: Zap,
      title: 'Yüksek Performans',
      description: 'Yüz binlerce ve eş zamanlı stok işlemini gecikmesiz yapın'
    },
    {
      icon: Users,
      title: 'Kolay Kullanım',
      description: 'Kullanım kolaylığını temel alınarak geliştirildi'
    },
    {
      icon: BarChart3,
      title: 'Güçlü Rapor Altyapısı',
      description: 'İşletmenizin stok operasyonlarını anlık olarak izleyin ve detaylı raporlar alın'
    },
    {
      icon: Headphones,
      title: 'Hızlı Destek',
      description: 'Desteğe ihtiyacınız olduğunda anında iletişim kurun'
    }
  ];

  const stats = [
    { number: '500+', label: 'Mutlu Müşteri' },
    { number: '99.9%', label: 'Sistem Uptime' },
    { number: '24/7', label: 'Teknik Destek' },
    { number: '50+', label: 'Entegrasyon' }
  ];

  const products = [
    {
      title: 'Depo Yönetim Sistemi',
      description: 'Stok yönetiminden sevkiyata, mal kabulden envanter sayımına kadar tüm süreçleri entegre bir şekilde yönetin.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/product/wms-depo-yonetim-sistemi',
      icon: BarChart3,
      color: 'blue'
    },
    {
      title: 'E-Dönüşüm Konnektörü',
      description: 'Tüm e-fatura, e-arşiv ve e-irsaliye belgelerinizi tek panelden yönetin. Kontör maliyetlerinizi %40 düşürün.',
      image: 'https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/product/e-donusum-konnektoru',
      icon: FileText,
      color: 'green'
    },
    {
      title: 'TanaBanka Hesap Yönetimi',
      description: 'Tüm banka hesaplarınızı tek platformda toplayın. Otomatik ekstre çekimi ve ERP entegrasyonu.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: '/product/tanabanka-hesap-yonetimi',
      icon: CreditCard,
      color: 'purple'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Modern İş
                <span className="block text-blue-200">Yönetim Çözümleri</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                NeedsCloud ile işletmenizin tüm süreçlerini dijitalleştirin. 
                Depo yönetiminden e-dönüşüme, finansal yönetimden raporlamaya 
                kadar entegre çözümlerle verimliliğinizi artırın.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleDemoClick}
                  className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 inline-flex items-center gap-3 group shadow-lg"
                >
                  <Play className="w-5 h-5" />
                  Ücretsiz Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/about"
                  className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center gap-3 group"
                >
                  Hakkımızda
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="animate-slide-up">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="NeedsCloud İş Yönetim Çözümleri"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ürünlerimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin ihtiyaçlarına özel geliştirilmiş, entegre çalışan 
              modern yazılım çözümleri ile dijital dönüşümünüzü tamamlayın.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <div className={`w-16 h-16 bg-${product.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${product.color}-600 transition-colors`}>
                    <product.icon className={`w-8 h-8 text-${product.color}-600 group-hover:text-white transition-colors`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <Link
                    to={product.link}
                    className={`btn-primary group bg-${product.color}-600 hover:bg-${product.color}-700`}
                  >
                    Detayları İncele
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Neden NeedsCloud?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern teknolojiler ve kullanıcı dostu arayüz ile işletme süreçlerinizi 
              yeni nesil çözümlerle yönetin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Entegre Çözümler
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tüm ürünlerimiz birbirleriyle entegre çalışarak, işletmenizin 
                farklı departmanları arasında kesintisiz veri akışı sağlar.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Tek platform üzerinde tüm süreçler',
                  'Gerçek zamanlı veri senkronizasyonu',
                  'Merkezi raporlama ve analiz',
                  'Kullanıcı dostu tek arayüz',
                  'Güvenli bulut altyapısı'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="btn-primary group"
              >
                Daha Fazla Bilgi
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="animate-slide-up">
              <div className="screen-mockup">
                <div className="screen-header">
                  <div className="screen-dot red"></div>
                  <div className="screen-dot yellow"></div>
                  <div className="screen-dot green"></div>
                </div>
                <div className="screen-content text-center">
                  <h4 className="text-2xl font-bold text-white mb-4">Entegre Dashboard</h4>
                  <p className="text-gray-300 mb-6">Tüm süreçlerinizi tek ekrandan yönetin</p>
                  <div className="chart-bars mx-auto w-fit">
                    <div className="bar" style={{ height: '60%' }}></div>
                    <div className="bar" style={{ height: '80%' }}></div>
                    <div className="bar" style={{ height: '45%' }}></div>
                    <div className="bar" style={{ height: '75%' }}></div>
                    <div className="bar" style={{ height: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Dijital Dönüşümünüzü Başlatmaya Hazır mısınız?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ücretsiz demo ile NeedsCloud çözümlerinin gücünü keşfedin. 
            Uzman ekibimiz size özel sunum hazırlayacak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleDemoClick}
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 inline-flex items-center gap-3 group shadow-lg"
            >
              <Play className="w-5 h-5" />
              Ücretsiz Demo Talep Et
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              to="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center gap-3 group"
            >
              İletişime Geç
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};