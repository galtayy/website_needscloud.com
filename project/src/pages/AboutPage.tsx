import React from 'react';
import { Target, Eye, Award, Users, TrendingUp, Globe, Building2, Zap, Shield } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Müşteri Odaklılık',
      description: 'Müşterilerimizin başarısı bizim önceliğimizdir. Her çözümü müşteri ihtiyaçları doğrultusunda geliştiririz.'
    },
    {
      icon: TrendingUp,
      title: 'Sürekli Gelişim',
      description: 'Teknolojideki gelişmeleri yakından takip eder, ürünlerimizi sürekli günceller ve geliştiriz.'
    },
    {
      icon: Award,
      title: 'Kalite ve Güvenilirlik',
      description: 'Yüksek kalite standartları ve güvenilir çözümler sunarak müşteri memnuniyetini garanti ederiz.'
    },
    {
      icon: Users,
      title: 'Ekip Çalışması',
      description: 'Uzman ekibimizle birlikte, müşterilerimize en iyi hizmeti sunmak için işbirliği içinde çalışırız.'
    }
  ];

  const stats = [
    { number: '2015', label: 'Kuruluş Yılı' },
    { number: '500+', label: 'Mutlu Müşteri' },
    { number: '50+', label: 'Uzman Personel' },
    { number: '99.9%', label: 'Sistem Uptime' }
  ];

  const solutions = [
    {
      icon: Building2,
      title: 'Depo Yönetimi',
      description: 'Stok yönetiminden sevkiyata kadar tüm süreçleri optimize eden WMS çözümü'
    },
    {
      icon: Zap,
      title: 'E-Dönüşüm',
      description: 'E-fatura, e-arşiv ve e-irsaliye süreçlerini tek platformda yönetim'
    },
    {
      icon: TrendingUp,
      title: 'Finansal Yönetim',
      description: 'Banka hesapları ve finansal süreçlerin otomatik yönetimi'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Hakkımızda
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            NeedsCloud olarak, modern teknolojiler ile işletmelerin dijital dönüşümünü 
            destekleyen entegre yazılım çözümleri geliştiriyoruz.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Misyonumuz</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                İşletmelerin operasyonel süreçlerini dijitalleştirerek, verimliliği artırmak ve 
                maliyetleri optimize etmek. Kullanıcı dostu, güvenilir ve ölçeklenebilir 
                yazılım çözümleri ile müşterilerimizin rekabet gücünü artırmak.
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Vizyonumuz</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                İş yönetimi ve dijital dönüşümde Türkiye'nin önde gelen teknoloji şirketi olmak. 
                Yapay zeka ve makine öğrenmesi teknolojilerini entegre ederek, 
                geleceğin akıllı iş çözümlerini bugünden sunmak.
              </p>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ekibimiz"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Değerlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Çalışma kültürümüzü şekillendiren ve her projede rehberimiz olan temel değerlerimiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in group hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <value.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6">Rakamlarla NeedsCloud</h2>
            <p className="text-xl text-blue-100">
              Yıllar içinde elde ettiğimiz başarıları ve büyümeyi gösteren rakamlar
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-5xl lg:text-6xl font-bold mb-4">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Çözümlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin farklı ihtiyaçlarına yönelik entegre çalışan yazılım çözümleri
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <solution.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Innovation */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Teknoloji ve İnovasyon"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Teknoloji ve İnovasyon</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                En güncel teknolojileri kullanarak, ölçeklenebilir ve güvenilir yazılım çözümleri 
                geliştiriyoruz. Bulut tabanlı altyapımız ile müşterilerimize kesintisiz hizmet sunuyoruz.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Modern web teknolojileri ile geliştirme',
                  'Bulut tabanlı güvenli altyapı',
                  'Mobil uyumlu ve responsive tasarım',
                  'RESTful API entegrasyonları',
                  'Gerçek zamanlı veri senkronizasyonu',
                  'Yapay zeka destekli optimizasyon'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Neden NeedsCloud?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin dijital dönüşümünde güvenilir ortağınız olmak için sunduğumuz avantajlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Güvenilir Altyapı',
                description: 'ISO 27001 sertifikalı güvenlik standartları ile verilerinizi koruyoruz'
              },
              {
                icon: Zap,
                title: 'Hızlı Implementasyon',
                description: 'Deneyimli ekibimizle hızlı kurulum ve entegrasyon süreçleri'
              },
              {
                icon: Users,
                title: '7/24 Destek',
                description: 'Kesintisiz teknik destek ve müşteri hizmetleri'
              },
              {
                icon: TrendingUp,
                title: 'Ölçeklenebilir Çözümler',
                description: 'İşletmenizin büyümesine uyum sağlayan esnek yapı'
              },
              {
                icon: Award,
                title: 'Kanıtlanmış Başarı',
                description: '500+ başarılı proje ve yüksek müşteri memnuniyeti'
              },
              {
                icon: Globe,
                title: 'Sürekli Güncelleme',
                description: 'Teknolojik gelişmeleri takip eden sürekli ürün geliştirme'
              }
            ].map((advantage, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};