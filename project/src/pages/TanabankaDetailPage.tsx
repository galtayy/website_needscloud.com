import React, { useState, useEffect } from 'react';
import { Home, Monitor, Star, Package, Play, ArrowRight, CreditCard, Download, RefreshCw, CheckCircle, TrendingUp, FileText, Building2, DollarSign, Clock, Shield } from 'lucide-react';
import { tanabankaScreenshots, tanabankaFeatures } from '../data/products';
import * as LucideIcons from 'lucide-react';

export const TanabankaDetailPage: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'screens', 'features', 'benefits'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = () => {
    const modal = document.getElementById('demo-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const supportedBanks = [
    'Türkiye İş Bankası', 'Garanti BBVA', 'Yapı Kredi', 'Akbank', 'Ziraat Bankası',
    'Halkbank', 'VakıfBank', 'QNB Finansbank', 'DenizBank', 'İNG Bank',
    'TEB', 'Şekerbank', 'HSBC', 'Odeabank', 'Fibabanka'
  ];

  const supportedErp = [
    'Logo ERP', 'Netsis', 'SAP', 'ETA', 'Zirve', 'Vega', 'Nebim', 'Mikro'
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-30 bg-white rounded-r-2xl shadow-lg p-4 hidden lg:block">
        <nav className="space-y-4">
          {[
            { id: 'home', icon: Home, label: 'Ana Sayfa' },
            { id: 'screens', icon: Monitor, label: 'Ekran Görüntüleri' },
            { id: 'features', icon: Star, label: 'Özellikler' },
            { id: 'benefits', icon: Package, label: 'Avantajlar' }
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group relative ${
                activeSection === id 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
              }`}
              title={label}
            >
              <Icon className="w-5 h-5" />
              <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </div>
            </button>
          ))}
        </nav>
        
        <button
          onClick={handleDemoClick}
          className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center mt-6 hover:bg-orange-600 transition-colors group relative"
          title="Demo Talep Et"
        >
          <Play className="w-5 h-5" />
          <div className="absolute left-full ml-3 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Demo Talep Et
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Finansal Yönetim
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  TanaBanka
                  <span className="block text-purple-200">Hesap Yönetimi</span>
                </h1>
                <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                  Tüm banka hesaplarınızı tek bir platformda toplayarak, otomatik ekstre çekimi, 
                  ERP entegrasyonu ve detaylı finansal analizler sunan kapsamlı banka hesap yönetim sistemi.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleDemoClick}
                    className="bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:bg-purple-50 transition-all duration-200 inline-flex items-center gap-3 shadow-lg group"
                  >
                    <Play className="w-5 h-5" />
                    Demo İsteyin
                  </button>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-200 inline-flex items-center gap-3 group"
                  >
                    <Star className="w-5 h-5" />
                    Özellikler
                  </button>
                </div>
              </div>
              <div className="animate-slide-up">
                <img
                  src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="TanaBanka Hesap Yönetimi"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <section id="screens" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Ekran Görüntüleri</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Screenshot List */}
              <div className="lg:col-span-1">
                <div className="space-y-3 max-h-96 overflow-y-auto scrollable pr-4">
                  {tanabankaScreenshots.map((screen, index) => (
                    <div
                      key={screen.id}
                      onClick={() => setCurrentScreen(index)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${
                        currentScreen === index
                          ? 'bg-purple-50 border-2 border-purple-200'
                          : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                      }`}
                    >
                      <h6 className="font-semibold text-gray-900 mb-1">{screen.title}</h6>
                      <p className="text-sm text-gray-600">{screen.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Screen Display */}
              <div className="lg:col-span-2">
                <div className="screen-mockup">
                  <div className="screen-header">
                    <div className="screen-dot red"></div>
                    <div className="screen-dot yellow"></div>
                    <div className="screen-dot green"></div>
                  </div>
                  <div className="screen-content text-center">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {tanabankaScreenshots[currentScreen]?.title}
                    </h4>
                    <p className="text-gray-300 mb-6">
                      {tanabankaScreenshots[currentScreen]?.description}
                    </p>
                    <div className="chart-bars mx-auto w-fit">
                      <div className="bar" style={{ height: '65%' }}></div>
                      <div className="bar" style={{ height: '85%' }}></div>
                      <div className="bar" style={{ height: '50%' }}></div>
                      <div className="bar" style={{ height: '90%' }}></div>
                      <div className="bar" style={{ height: '70%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Özellikler</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tanabankaFeatures.map((feature, index) => {
                const IconComponent = (LucideIcons as any)[feature.icon];
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                      <IconComponent className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Supported Banks */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Desteklenen Bankalar</h2>
              <p className="text-xl text-gray-600">Türkiye'nin önde gelen bankaları ile entegre çalışır</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
              {supportedBanks.map((bank, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm">{bank}</h4>
                </div>
              ))}
            </div>

            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">ERP Entegrasyonları</h3>
              <p className="text-lg text-gray-600">Popüler muhasebe programları ile otomatik senkronizasyon</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {supportedErp.map((erp, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-6 rounded-xl text-center hover:bg-blue-100 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{erp}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="section-padding bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Neden TanaBanka?</h2>
              <p className="text-xl text-purple-100">Finansal süreçlerinizi otomatikleştirin, kontrolü elinizde tutun</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: 'Zaman Tasarrufu',
                  description: 'Manuel ekstre çekimi ve veri girişi işlemlerinden kurtulun'
                },
                {
                  icon: DollarSign,
                  title: 'Maliyet Azaltma',
                  description: 'İnsan kaynağı maliyetlerini düşürün, hata oranını minimize edin'
                },
                {
                  icon: CheckCircle,
                  title: 'Otomatik Mutabakat',
                  description: 'Banka ve muhasebe kayıtlarını otomatik olarak karşılaştırın'
                },
                {
                  icon: TrendingUp,
                  title: 'Finansal Analiz',
                  description: 'Nakit akış analizleri ve gelecek projeksiyonları'
                },
                {
                  icon: Shield,
                  title: 'Güvenli Bağlantı',
                  description: 'Bankalarla güvenli API bağlantıları ile veri koruması'
                },
                {
                  icon: FileText,
                  title: 'Detaylı Raporlama',
                  description: 'Kapsamlı finansal raporlar ve özelleştirilebilir analizler'
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <benefit.icon className="w-12 h-12 text-purple-200 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-purple-100 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Finansal Süreçlerinizi Otomatikleştirmeye Hazır mısınız?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ücretsiz demo ile TanaBanka'nın gücünü keşfedin. 
              Tüm banka hesaplarınızı tek platformda yönetin.
            </p>
            <button
              onClick={handleDemoClick}
              className="btn-primary text-lg px-8 py-4"
            >
              <Play className="w-6 h-6" />
              Ücretsiz Demo Talep Et
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};