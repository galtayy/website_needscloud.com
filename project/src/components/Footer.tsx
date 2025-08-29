import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { contactInfo } from '../data/contact';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-blue-400">
              NeedsCloud
            </div>
            <p className="text-gray-300 leading-relaxed">
              Modern iş yönetim çözümleri ile işletmenizin dijital dönüşümünü 
              tamamlayın. Depo yönetiminden e-dönüşüme, entegre çözümler.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ürünler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/product/wms-depo-yonetim-sistemi" className="text-gray-300 hover:text-white transition-colors">
                  Depo Yönetim Sistemi
                </Link>
              </li>
              <li>
                <Link to="/product/e-donusum-konnektoru" className="text-gray-300 hover:text-white transition-colors">
                  E-Dönüşüm Konnektörü
                </Link>
              </li>
              <li>
                <Link to="/product/tanabanka-hesap-yonetimi" className="text-gray-300 hover:text-white transition-colors">
                  TanaBanka Hesap Yönetimi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2024 NeedsCloud. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};