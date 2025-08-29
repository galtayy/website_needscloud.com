import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play, Mail, ChevronDown } from 'lucide-react';
import { contactInfo } from '../data/contact';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleDemoClick = () => {
    const modal = document.getElementById('demo-modal');
    if (modal) {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
  };

  const products = [
    {
      title: 'Depo Yönetim Sistemi',
      description: 'Stok yönetiminden sevkiyata kadar tüm süreçler',
      link: '/product/wms-depo-yonetim-sistemi'
    },
    {
      title: 'E-Dönüşüm Konnektörü',
      description: 'E-fatura, e-arşiv ve e-irsaliye yönetimi',
      link: '/product/e-donusum-konnektoru'
    },
    {
      title: 'TanaBanka Hesap Yönetimi',
      description: 'Banka hesapları ve finansal yönetim',
      link: '/product/tanabanka-hesap-yonetimi'
    }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      {/* Top Bar */}
      <div className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            NeedsCloud
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Anasayfa
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`font-medium transition-colors flex items-center gap-1 py-2 ${
                  location.pathname.startsWith('/product') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Ürünler
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-80 bg-white rounded-xl shadow-lg border border-gray-100 py-4">
                    {products.map((product, index) => (
                      <Link
                        key={index}
                        to={product.link}
                        className="block px-6 py-3 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">{product.title}</h4>
                        <p className="text-sm text-gray-600">{product.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`font-medium transition-colors ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Hakkımızda
            </Link>
            <Link
              to="/contact"
              className={`font-medium transition-colors ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              İletişim
            </Link>
            <button
              onClick={handleDemoClick}
              className="btn-primary"
            >
              <Play className="w-4 h-4" />
              Demo Talebi
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className={`font-medium transition-colors ${
                  isActive('/') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Anasayfa
              </Link>
              
              {/* Mobile Products */}
              <div className="space-y-2">
                <div className="font-medium text-gray-700">Ürünler</div>
                {products.map((product, index) => (
                  <Link
                    key={index}
                    to={product.link}
                    className="block pl-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/about"
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link
                to="/contact"
                className={`font-medium transition-colors ${
                  isActive('/contact') ? 'text-blue-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <button
                onClick={() => {
                  handleDemoClick();
                  setIsMenuOpen(false);
                }}
                className="btn-primary mobile-center mobile-full"
              >
                <Play className="w-4 h-4" />
                Demo Talebi
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};