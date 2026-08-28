import React from 'react';
import { CheckCircle2, ShoppingBag, ArrowRight, Sparkles, QrCode, CreditCard, Wallet } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

interface PricingOfferProps {
  onCheckoutClick?: () => void;
}

export const PricingOffer: React.FC<PricingOfferProps> = () => {
  const handleOfferBuyClick = () => {
    trackCheckoutClick('offer_buy', 'Pricing Box - Dapatkan SMART Audit SYSTEM Rp197.000');
  };

  return (
    <section id="penawaran" className="py-10 sm:py-16 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-2xl h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-4 h-4" />
            <span>PENAWARAN LENGKAP SEKALI BAYAR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center leading-snug tracking-tight text-white px-1">
            Dapatkan Akses SMART Audit SYSTEM
          </h2>
          <p className="text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
            Investasi praktis untuk mendukung tugas audit Anda di setiap siklus penugasan.
          </p>
        </div>

        {/* MAIN PRICING & OFFER BOX */}
        <div className="bg-white text-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-lg mx-auto border border-gray-100 mb-6">
          
          {/* Card Top Banner */}
          <div className="bg-gradient-to-r from-amber-500 via-rose-600 to-red-600 text-white py-2.5 px-3.5 text-center text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-xs leading-tight">
            <span>⏰</span>
            <span>PROMO RP197.000 HANYA 3 HARI — AKAN NAIK KE RP249.000</span>
          </div>

          <div className="p-5 sm:p-7">
            
            {/* Price display */}
            <div className="text-center mb-5 pb-4 border-b border-gray-100">
              <div className="text-sm text-gray-500 font-semibold mb-1">
                Harga normal: <span className="line-through">Rp249.000</span>
              </div>
              <div className="text-4xl sm:text-5xl font-black text-emerald-600 tracking-tight">
                Rp197.000
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 bg-amber-50 text-amber-950 border border-amber-300 font-bold text-xs sm:text-sm py-1 px-3.5 rounded-full">
                <span>⚠️</span>
                <span>Hanya berlaku 3 hari sebelum naik ke Rp249.000</span>
              </div>
            </div>

            {/* What Buyer Gets (Exact requested checklist) */}
            <div className="space-y-3 mb-6 text-sm sm:text-base text-gray-800 text-left">
              <span className="font-black text-xs sm:text-sm text-gray-900 uppercase tracking-wider block mb-2">
                Yang Anda Peroleh:
              </span>
              
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Auditor pemula pun bisa:</strong> Panduan langkah demi langkah langsung siap pakai.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Akses aplikasi berbasis AI (Checklist 5W+1H, PLOR, CAPA 5-Why, ISO 19011).</span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>7 dokumen Word dan Excel (100% dapat diedit).</span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>9 modul panduan audit internal lengkap.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Slide presentasi, mind map, evaluasi pre/post test, dan audio materi.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Akses seumur hidup.</span>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Tanpa biaya bulanan.</span>
              </div>
            </div>

            {/* Direct Buy Button */}
            <div className="space-y-3">
              <a
                id="pricing-box-buy-cta"
                href={getCheckoutUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOfferBuyClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white rounded-2xl font-black text-base sm:text-lg py-4 px-5 text-center transition-all shadow-xl shadow-red-600/30 border border-red-500/40 cursor-pointer min-h-[50px]"
              >
                <ShoppingBag className="w-5 h-5 shrink-0" />
                <span>Dapatkan Promo Rp197.000</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>

              <p className="text-center text-xs sm:text-sm text-gray-600 font-semibold leading-normal">
                Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan
              </p>
            </div>

            {/* Payment Method Badges */}
            <div className="mt-5 pt-4 border-t border-gray-100 text-center">
              <span className="text-xs text-gray-500 font-bold block mb-2 uppercase tracking-wider">
                Metode Pembayaran Instan:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-semibold text-gray-700">
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg flex items-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-blue-900" /> QRIS (Semua Bank & e-Wallet)
                </span>
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-blue-900" /> Virtual Account
                </span>
                <span className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-blue-900" /> E-Wallet
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
