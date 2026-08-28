import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import imgDashboardWebp from '../assets/images/gambar-dashbord-SAS.webp';
import imgDashboardJpg from '../assets/images/gambar-dashbord-SAS.jpg';

interface HeroProps {
  onCheckoutClick?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const handleHeroBuyClick = () => {
    trackCheckoutClick('hero_buy', 'Hero - Dapatkan Harga Promo Rp197.000');
  };

  return (
    <header className="relative pt-24 pb-10 sm:pt-32 sm:pb-16 hero-pattern border-b border-gray-200/80 overflow-hidden">
      {/* Subtle ambient background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 bg-blue-100/50 rounded-full -z-10 pointer-events-none blur-2xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-xs text-left">
          <span>⚡ Workflow Terpadu Auditor Internal ISO 9001 & ISO 19011 • Auditor Pemula Pun Bisa</span>
        </div>

        {/* 1. HEADLINE (Perbesar huruf) */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tight text-gray-900 mb-4 sm:mb-6 leading-snug px-1">
          Audit Internal Sudah Dekat, Tapi Checklist dan Dokumennya Belum Siap?
        </h1>

        {/* 2. SUBHEADLINE (Perbesar huruf) */}
        <div className="max-w-2xl mx-auto mb-6 sm:mb-8 space-y-3">
          <p className="text-base sm:text-xl font-extrabold text-blue-950 leading-relaxed px-1">
            SMART Audit SYSTEM membantu Anda menyiapkan pertanyaan audit, memeriksa bukti objektif, merumuskan temuan PLOR, dan menganalisis akar masalah—tanpa harus memulai semuanya dari file kosong.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-950 font-bold px-3.5 py-1.5 rounded-xl text-xs sm:text-sm shadow-xs">
            <span className="text-sm">✅</span>
            <span>Dirancang Sangat Praktis: <strong>Auditor Pemula Pun Bisa Langsung Praktik</strong></span>
          </div>
          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            Dilengkapi aplikasi berbasis AI, 7 dokumen Word dan Excel yang dapat diedit, serta 9 modul panduan audit internal.
          </p>
        </div>

        {/* 3. SCREENSHOT DASHBOARD ASLI */}
        <div className="mb-6 sm:mb-8 relative max-w-2xl mx-auto">
          <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 border border-slate-300 shadow-xl overflow-hidden">
            <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
              
              {/* Browser Address Bar */}
              <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800 text-left">
                <div className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-[11px] sm:text-xs text-slate-400 font-mono tracking-tight truncate max-w-[170px] sm:max-w-none">
                  app.smartauditsystem.com
                </span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded-full">
                  DASHBOARD ASLI
                </span>
              </div>

              {/* Dashboard image */}
              <div className="relative bg-slate-950 aspect-16/9 overflow-hidden">
                <picture>
                  <source srcSet={imgDashboardWebp} type="image/webp" />
                  <img 
                    src={imgDashboardJpg} 
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.dashboard.webpLocal, SMARTBOOK_IMAGES.dashboard.local, SMARTBOOK_IMAGES.dashboard.url)}
                    alt="Dashboard SMART Audit SYSTEM" 
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover block"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>

        {/* 4. PRICING & PRIMARY CTA BUTTON */}
        <div className="space-y-3 max-w-sm sm:max-w-md mx-auto">
          {/* Urgency & Price Box Header */}
          <div className="bg-amber-50 border border-amber-300 text-amber-950 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 shadow-xs">
            <span className="text-amber-600 font-extrabold animate-pulse">⏰</span>
            <span className="font-bold leading-tight">Harga Rp197.000 Hanya 3 Hari (Akan Naik ke Rp249.000)</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
            <span className="text-gray-500 line-through font-semibold">Harga normal: Rp249.000</span>
            <span className="bg-red-100 text-red-700 font-black px-2.5 py-0.5 rounded-full">
              Promo Tahap 1: Rp197.000
            </span>
          </div>

          <a
            id="hero-buy-cta"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleHeroBuyClick}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 hover:to-rose-800 active:scale-[0.98] text-white rounded-2xl font-black text-base sm:text-lg transition-all shadow-xl shadow-red-600/30 border border-red-500/40 cursor-pointer min-h-[50px]"
          >
            <ShoppingBag className="w-5 h-5 shrink-0" />
            <span>Dapatkan Promo Rp197.000</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </a>

          {/* Microcopy exactly as requested */}
          <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-normal">
            Auditor pemula pun bisa langsung pakai • Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan
          </p>
        </div>

      </div>
    </header>
  );
};
