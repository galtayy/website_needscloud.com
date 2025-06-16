import React, { useState, useEffect } from 'react';
import { Home, Monitor, Star, Package, Play, ArrowRight, FileText, Building2, Zap, Users, BarChart3, Layers, Shield, Headphones } from 'lucide-react';
import { edonusumScreenshots, edonusumFeatures } from '../data/products';
import * as LucideIcons from 'lucide-react';

export const EdonusumDetailPage: React.FC = () => {
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

  const supportedPrograms = [
    'Logo ERP', 'Netsis', 'SAP', 'ETA', 'Zirve', 'Vega', 'Nebim', 'Mikro', 'Microsoft Dynamics', 'Luca'
  ];

  const integrators = [
    'Logo', 'Zirve', 'Netsis', 'Nebim', 'Mikro', 'Vega', 'Diğer Entegratörler'
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
        <section id="home" className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Dijital Dönüşüm
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  E-Dönüşüm Konnektörü
                </h1>
                <p className="text-xl text-green-100 mb-8 leading-relaxed">
                  Farklı muhasebe programlarına eş zamanlı bağlanarak tüm firmalarınıza ait e-fatura, 
                  e-arşiv ve e-irsaliye belgelerini tek panelden alır, gönderir ve yönetir. 
                  İş süreçlerinizde zaman kazandırır, kontör maliyetlerinizi düşürür.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleDemoClick}
                    className="bg-white text-green-600 font-semibold px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-200 inline-flex items-center gap-3 shadow-lg group"
                  >
                    <Play className="w-5 h-5" />
                    Demo İsteyin
                  </button>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-green-600 transition-all duration-200 inline-flex items-center gap-3 group"
                  >
                    <Star className="w-5 h-5" />
                    Özellikler
                  </button>
                </div>
              </div>
              <div className="animate-slide-up">
                <img
                  src="/src/assets/images/nc-edonusum.png"
                  alt="E-Dönüşüm Konnektörü"
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
                  {edonusumScreenshots.map((screen, index) => (
                    <div
                      key={screen.id}
                      onClick={() => setCurrentScreen(index)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${
                        currentScreen === index
                          ? 'bg-green-50 border-2 border-green-200'
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
                      {edonusumScreenshots[currentScreen]?.title}
                    </h4>
                    <p className="text-gray-300 mb-6">
                      {edonusumScreenshots[currentScreen]?.description}
                    </p>
                    <div className="chart-bars mx-auto w-fit">
                      <div className="bar" style={{ height: '70%' }}></div>
                      <div className="bar" style={{ height: '90%' }}></div>
                      <div className="bar" style={{ height: '55%' }}></div>
                      <div className="bar" style={{ height: '85%' }}></div>
                      <div className="bar" style={{ height: '75%' }}></div>
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
              {edonusumFeatures.map((feature, index) => {
                const IconComponent = (LucideIcons as any)[feature.icon];
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                      <IconComponent className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
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

        {/* Supported Programs */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Desteklenen Muhasebe Programları</h2>
              <p className="text-xl text-gray-600">10+ popüler muhasebe programı ile entegre çalışır</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
              {supportedPrograms.map((program, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl text-center hover:bg-gray-100 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{program}</h4>
                </div>
              ))}
            </div>

            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Desteklenen Özel Entegratörler</h3>
              <p className="text-lg text-gray-600">Farklı entegratörler ile çalışma esnekliği</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {integrators.map((integrator, index) => (
                <div
                  key={index}
                  className="bg-green-50 p-6 rounded-xl text-center hover:bg-green-100 transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">{integrator}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="section-padding bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Neden E-Dönüşüm Konnektörü?</h2>
              <p className="text-xl text-green-100">İş süreçlerinizi optimize edin, maliyetlerinizi düşürün</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: 'Tek Panelden Yönetim',
                  description: 'Tüm e-fatura, e-arşiv ve e-irsaliye işlemlerinizi tek ekrandan yönetin'
                },
                {
                  icon: ArrowRight,
                  title: '%40 Maliyet Tasarrufu',
                  description: 'Kontör maliyetlerinizde %40\'a varan tasarruf sağlayın'
                },
                {
                  icon: Building2,
                  title: 'Çoklu Firma Desteği',
                  description: 'Farklı firmalar arasında tek tuşla geçiş yapın'
                },
                {
                  icon: Zap,
                  title: 'Hızlı Entegrasyon',
                  description: '15 dakikada kurulum ve entegrasyon tamamlanır'
                },
                {
                  icon: Shield,
                  title: 'Güvenli Altyapı',
                  description: 'Verileriniz güvenli bulut altyapısında korunur'
                },
                {
                  icon: BarChart3,
                  title: 'Detaylı Raporlama',
                  description: 'Konsolide raporlar ile tüm işlemlerinizi analiz edin'
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 p-8 rounded-2xl backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <benefit.icon className="w-12 h-12 text-green-200 mb-6" />
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-green-100 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              E-Dönüşüm Sürecinizi Hızlandırmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ücretsiz demo ile E-Dönüşüm Konnektörü'nün gücünü keşfedin. 
              15 dakikada kurulum tamamlanır.
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