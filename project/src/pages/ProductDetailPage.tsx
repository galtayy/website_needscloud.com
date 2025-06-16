import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Home, Monitor, Star, Package, Play, Check, X } from 'lucide-react';
import { products } from '../data/products';
import * as LucideIcons from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === 'wms-depo-yonetim-sistemi'); // WMS ürününü direkt al
  const [currentScreen, setCurrentScreen] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'screens', 'features', 'pricing'];
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

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Ürün bulunamadı</h1>
          <p className="text-gray-600">Aradığınız ürün mevcut değil.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Navigation */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-30 bg-white rounded-r-2xl shadow-lg p-4 hidden lg:block">
        <nav className="space-y-4">
          {[
            { id: 'home', icon: Home, label: 'Ana Sayfa' },
            { id: 'screens', icon: Monitor, label: 'Ekran Görüntüleri' },
            { id: 'features', icon: Star, label: 'Özellikler' },
            { id: 'pricing', icon: Package, label: 'Paketler' }
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
        <section id="home" className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  {product.category}
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {product.name}
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  {product.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={handleDemoClick}
                    className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 inline-flex items-center gap-3 shadow-lg group"
                  >
                    <Play className="w-5 h-5" />
                    Demo İsteyin
                  </button>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 inline-flex items-center gap-3 group"
                  >
                    <Star className="w-5 h-5" />
                    Özellikler
                  </button>
                </div>
              </div>
              <div className="animate-slide-up">
                <img
                  src={product.image}
                  alt={product.name}
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
                  {product.screenshots.map((screen, index) => (
                    <div
                      key={screen.id}
                      onClick={() => setCurrentScreen(index)}
                      className={`p-4 rounded-xl cursor-pointer transition-all ${
                        currentScreen === index
                          ? 'bg-blue-50 border-2 border-blue-200'
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
                      {product.screenshots[currentScreen]?.title}
                    </h4>
                    <p className="text-gray-300 mb-6">
                      {product.screenshots[currentScreen]?.description}
                    </p>
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

        {/* Features Section */}
        <section id="features" className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Özellikler</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features?.map((feature, index) => {
                const IconComponent = (LucideIcons as any)[feature.icon];
                return (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
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

        {/* Pricing Section */}
        <section id="pricing" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Paket Özellikleri ve Karşılaştırma Tablosu
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-6 font-semibold text-gray-900">Özellik</th>
                    <th className="text-left p-6 font-semibold text-gray-900">Açıklama</th>
                    <th className="text-center p-6 font-semibold text-gray-900 bg-blue-50">Basic Paket</th>
                    <th className="text-center p-6 font-semibold text-gray-900 bg-purple-50">Enterprise Paket</th>
                  </tr>
                </thead>
                <tbody>
                  {product.packageFeatures?.map((feature, index) => (
                    <tr key={index} className="border-t border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="p-6 font-medium text-gray-900">{feature.name}</td>
                      <td className="p-6 text-gray-600">{feature.description}</td>
                      <td className="p-6 text-center">
                        {typeof feature.basic === 'boolean' ? (
                          feature.basic ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{feature.basic}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof feature.enterprise === 'boolean' ? (
                          feature.enterprise ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{feature.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-gray-200 bg-gray-50">
                    <td className="p-6 font-bold text-gray-900">Teklif Al</td>
                    <td className="p-6 text-gray-600">Detaylı bilgi ve fiyatlandırma için</td>
                    <td className="p-6 text-center">
                      <button
                        onClick={handleDemoClick}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                      >
                        <Package className="w-4 h-4" />
                        Teklif Al
                      </button>
                    </td>
                    <td className="p-6 text-center">
                      <button
                        onClick={handleDemoClick}
                        className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
                      >
                        <Star className="w-4 h-4" />
                        Teklif Al
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Sık Sorulan Sorular
            </h2>
            <div className="text-center">
              <p className="text-xl text-gray-600 mb-8">
                Kullanıcıların sık sorduğu sorular ve detaylı cevapları için
                bizimle iletişime geçin.
              </p>
              <button
                onClick={handleDemoClick}
                className="btn-primary"
              >
                <Play className="w-5 h-5" />
                Demo Talep Et
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};