import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { getCheckoutUrl, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';

interface NavbarProps {
  onCheckoutClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavCtaClick = () => {
    trackCheckoutClick('nav_cta', 'Navbar - Dapatkan Harga Promo Rp197.000');
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200/80 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 py-3.5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform font-bold text-base">
              ⚡
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl tracking-tight text-gray-900">
                SMART<span className="text-blue-900">Audit</span>
              </span>
              <span className="text-[9px] font-semibold text-gray-500 uppercase tracking-wider -mt-1 hidden sm:block">
                ISO 9001 & ISO 19011
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-4 text-xs font-bold text-gray-600">
            <a href="#cuplikan-video" className="text-blue-900 font-extrabold hover:text-blue-950 transition-colors">Video Contoh</a>
            <a href="#masalah-auditor" className="hover:text-blue-900 transition-colors">Kendala</a>
            <a href="#manfaat-utama" className="hover:text-blue-900 transition-colors">3 Manfaat</a>
            <a href="#isi-produk" className="hover:text-blue-900 transition-colors">Isi Produk</a>
            <a href="#testimoni" className="hover:text-blue-900 transition-colors">Testimoni</a>
            <a href="#perbandingan-chatgpt" className="hover:text-blue-900 transition-colors">vs ChatGPT</a>
            <a href="#penawaran" className="hover:text-blue-900 transition-colors">Penawaran</a>
            <a href="#garansi-dan-faq" className="hover:text-blue-900 transition-colors">FAQ</a>
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-2">
            <a
              id="nav-cta-btn"
              href={getCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavCtaClick}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 text-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full font-black text-xs sm:text-sm transition-all shadow-md shadow-red-600/30 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Promo Rp197.000</span>
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
              aria-label="Buka navigasi"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 pt-3 pb-4 border-t border-gray-200 bg-white rounded-2xl shadow-xl px-4 space-y-2 text-xs font-semibold">
            <a
              href="#cuplikan-video"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-blue-900 font-extrabold hover:text-blue-950"
            >
              🎥 Contoh Video Sistem
            </a>
            <a
              href="#masalah-auditor"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              Kendala Auditor
            </a>
            <a
              href="#manfaat-utama"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              3 Manfaat Utama
            </a>
            <a
              href="#isi-produk"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              Isi Produk Lengkap
            </a>
            <a
              href="#testimoni"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              Testimoni Pengguna
            </a>
            <a
              href="#perbandingan-chatgpt"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              Perbandingan vs ChatGPT
            </a>
            <a
              href="#penawaran"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              Penawaran & Harga
            </a>
            <a
              href="#garansi-dan-faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-gray-700 hover:text-blue-900"
            >
              Garansi & FAQ
            </a>
            <div className="pt-2 space-y-2">
              <a
                href={getCheckoutUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleNavCtaClick();
                }}
                className="w-full text-center flex items-center justify-center gap-1.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 text-white py-2.5 rounded-xl font-black text-xs shadow-md"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>DAPATKAN HARGA PROMO RP197.000</span>
              </a>
              <a
                href={getWhatsAppUrl('nav_mobile_ask')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackWhatsAppClick('nav_mobile_ask', 'Navbar Mobile - Tanya via WA');
                }}
                className="w-full text-center flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-xl font-bold text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Tanya Tim via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
