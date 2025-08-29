import React, { useState } from 'react';
import { Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { contactInfo } from '../data/contact';
import { useNotification } from '../hooks/useNotification';

export const ContactPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { showNotification } = useNotification();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      showNotification('Lütfen tüm alanları doldurun.', 'error');
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showNotification(data.message, 'success');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        showNotification(data.message || 'Bir hata oluştu.', 'error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      showNotification('Bağlantı hatası oluştu. Lütfen tekrar deneyin.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero text-white section-padding">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            İletişim
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Sorularınız için bizimle iletişime geçin. Uzman ekibimiz size yardımcı olmaktan mutluluk duyacak.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-posta</h3>
              <p className="text-gray-600">{contactInfo.email}</p>
            </div>


            <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Adres</h3>
              <p className="text-gray-600">{contactInfo.address}</p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-600">Pazartesi - Cuma<br />09:00 - 18:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Bizimle İletişime Geçin
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Ürünlerimiz hakkında detaylı bilgi almak, demo talep etmek veya 
                  herhangi bir sorunuz için formu doldurun. En kısa sürede size dönüş yapacağız.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Hızlı Yanıt</h4>
                      <p className="text-gray-600">Mesajlarınızı en geç 24 saat içinde yanıtlıyoruz</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Uzman Destek</h4>
                      <p className="text-gray-600">Deneyimli ekibimiz tüm sorularınızı yanıtlar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Özel Çözümler</h4>
                      <p className="text-gray-600">İhtiyaçlarınıza özel çözümler geliştiririz</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="animate-slide-up">
                <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl shadow-lg">
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="ornek@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Konu *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Konu seçin</option>
                        <option value="demo">Demo Talebi</option>
                        <option value="pricing">Fiyatlandırma</option>
                        <option value="support">Teknik Destek</option>
                        <option value="partnership">İş Ortaklığı</option>
                        <option value="other">Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mesaj *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full btn-primary justify-center"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Mesajı Gönder
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};