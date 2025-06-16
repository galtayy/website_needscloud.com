import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { EdonusumDetailPage } from './pages/EdonusumDetailPage';
import { TanabankaDetailPage } from './pages/TanabankaDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { DemoModal } from './components/DemoModal';
import { NotificationContainer } from './components/NotificationContainer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/wms-depo-yonetim-sistemi" element={<ProductDetailPage />} />
            <Route path="/product/e-donusum-konnektoru" element={<EdonusumDetailPage />} />
            <Route path="/product/tanabanka-hesap-yonetimi" element={<TanabankaDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <DemoModal />
        <NotificationContainer />
      </div>
    </Router>
  );
}

export default App;