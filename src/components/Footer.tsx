import React from 'react';
import { TrendingUp, Lock, ShieldCheck, MessageCircle, Headphones } from 'lucide-react';
import { getWhatsAppUrl, trackWhatsAppClick } from '../constants';

export const Footer: React.FC = () => {
  const handleCsClick = () => {
    trackWhatsAppClick('footer_cs', 'Footer - Kontak CS');
  };

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 sm:py-16 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* SINGLE OFFICIAL CUSTOMER SERVICE (KONTAK CS) AT THE VERY BOTTOM */}
        <div className="mb-10 max-w-md mx-auto bg-slate-900/90 border border-slate-800 rounded-2xl sm:rounded-3xl p-6 shadow-xl text-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-3">
            <Headphones className="w-6 h-6" />
          </div>
          <h3 className="text-base sm:text-lg font-black text-white mb-1.5">
            Butuh Bantuan atau Informasi Lebih Lanjut?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
            Tim Customer Service kami siap melayani pertanyaan seputar sistem, pemesanan, maupun aktivasi akses.
          </p>
          
          <a
            id="footer-cs-cta-btn"
            href={getWhatsAppUrl('footer_cs')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCsClick}
            className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white rounded-2xl font-black text-base sm:text-lg transition-all shadow-lg shadow-emerald-600/25 border border-emerald-500/40 cursor-pointer min-h-[50px]"
          >
            <MessageCircle className="w-5 h-5 shrink-0" />
            <span>Kontak CS</span>
          </a>

          <span className="text-[11px] sm:text-xs text-slate-400 block mt-2.5 font-medium">
            Respon Cepat via WhatsApp • 0822-2777-1941
          </span>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-xl bg-blue-900 flex items-center justify-center text-white shadow-sm">
            <TrendingUp className="w-4 h-4 text-blue-200" />
          </div>
          <span className="font-black text-2xl tracking-tight text-white">
            SMART<span className="text-blue-400">Audit</span> <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/80">SYSTEM</span>
          </span>
        </div>

        <p className="text-gray-300 text-sm font-semibold mb-1">
          Satu Sistem Kerja Auditor Internal ISO 9001 & ISO 19011
        </p>
        <p className="text-xs text-gray-500 max-w-lg mx-auto mb-8">
          Membantu persiapan checklist, pertanyaan audit, formulasi temuan PLOR, CAPA hingga laporan ringkasan dalam satu alur terstruktur.
        </p>

        <div className="border-t border-gray-800/80 pt-6 text-xs flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
          <p>© 2026 SMART Audit SYSTEM. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gray-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Transaksi Digital Terverifikasi
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-gray-400">
              <Lock className="w-3.5 h-3.5 text-blue-400" /> 100% Akses Terproteksi
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
