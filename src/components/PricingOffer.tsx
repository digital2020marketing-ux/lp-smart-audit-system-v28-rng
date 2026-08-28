import React from 'react';
import { CheckCircle2, ShoppingBag, ArrowRight, Sparkles, MessageCircle, QrCode, CreditCard, Wallet } from 'lucide-react';
import { getCheckoutUrl, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';

interface PricingOfferProps {
  onCheckoutClick?: () => void;
}

export const PricingOffer: React.FC<PricingOfferProps> = () => {
  const handleOfferBuyClick = () => {
    trackCheckoutClick('offer_buy', 'Pricing Box - Dapatkan SMART Audit SYSTEM Rp197.000');
  };

  const handleOfferAskClick = () => {
    trackWhatsAppClick('offer_ask', 'Pricing Box - Tanya Tim via WA');
  };

  return (
    <section id="penawaran" className="py-8 sm:py-14 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-2xl h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-3.5 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-800 text-emerald-400 px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PENAWARAN LENGKAP SEKALI BAYAR</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center leading-snug tracking-tight text-white px-1">
            Dapatkan Akses SMART Audit SYSTEM
          </h2>
          <p className="text-slate-300 mt-1.5 text-xs sm:text-sm leading-relaxed">
            Investasi praktis untuk mendukung tugas audit Anda di setiap siklus penugasan.
          </p>
        </div>

        {/* MAIN PRICING & OFFER BOX */}
        <div className="bg-white text-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl max-w-md mx-auto border border-gray-100 mb-6">
          
          {/* Card Top Banner */}
          <div className="bg-gradient-to-r from-amber-500 via-rose-600 to-red-600 text-white py-2 px-3 text-center text-[11px] sm:text-xs font-black flex items-center justify-center gap-1.5 shadow-xs leading-tight">
            <span>⏰</span>
            <span>PROMO RP197.000 HANYA 3 HARI — AKAN NAIK KE RP249.000</span>
          </div>

          <div className="p-4 sm:p-6">
            
            {/* Price display */}
            <div className="text-center mb-4 pb-3.5 border-b border-gray-100">
              <div className="text-xs text-gray-500 font-semibold mb-0.5">
                Harga normal: <span className="line-through">Rp249.000</span>
              </div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-600 tracking-tight">
                Rp197.000
              </div>
              <div className="mt-1.5 inline-flex items-center gap-1 bg-amber-50 text-amber-950 border border-amber-300 font-bold text-[10px] sm:text-[11px] py-0.5 px-2.5 rounded-full">
                <span>⚠️</span>
                <span>Hanya berlaku 3 hari sebelum naik ke Rp249.000</span>
              </div>
            </div>

            {/* What Buyer Gets (Exact requested checklist) */}
            <div className="space-y-2 mb-5 text-xs sm:text-sm text-gray-800 text-left">
              <span className="font-black text-xs text-gray-900 uppercase tracking-wider block mb-1.5">
                Yang Anda Peroleh:
              </span>
              
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Auditor pemula pun bisa:</strong> Panduan langkah demi langkah langsung siap pakai.</span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Akses aplikasi berbasis AI (Checklist 5W+1H, PLOR, CAPA 5-Why, ISO 19011).</span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>7 dokumen Word dan Excel (100% dapat diedit).</span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>9 modul panduan audit internal lengkap.</span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Slide presentasi, mind map, evaluasi pre/post test, dan audio materi.</span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Akses seumur hidup.</span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Tanpa biaya bulanan.</span>
              </div>
            </div>

            {/* Direct Buy Button */}
            <div className="space-y-2">
              <a
                id="pricing-box-buy-cta"
                href={getCheckoutUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleOfferBuyClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base py-3.5 px-4 text-center transition-all shadow-xl shadow-red-600/30 border border-red-500/40 cursor-pointer min-h-[48px]"
              >
                <ShoppingBag className="w-4 h-4 shrink-0" />
                <span>Dapatkan Promo Rp197.000</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <p className="text-center text-[10px] sm:text-[11px] text-gray-500 font-semibold leading-normal">
                Sekali bayar • Akses seumur hidup • Tanpa biaya bulanan
              </p>

              {/* WhatsApp manual payment option */}
              <div className="pt-1">
                <a
                  href={getWhatsAppUrl('offer_wa_order')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleOfferAskClick}
                  className="w-full inline-flex items-center justify-center gap-1.5 p-2.5 bg-emerald-50 hover:bg-emerald-100 active:scale-[0.98] border border-emerald-300 rounded-xl text-emerald-950 font-bold text-xs transition-all text-center min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Transfer Manual / Bantuan? Hubungi Tim via WA</span>
                </a>
              </div>
            </div>

            {/* Payment Method Badges */}
            <div className="mt-4 pt-3.5 border-t border-gray-100 text-center">
              <span className="text-[9px] sm:text-[10px] text-gray-500 font-bold block mb-1.5 uppercase tracking-wider">
                Metode Pembayaran Instan:
              </span>
              <div className="flex flex-wrap items-center justify-center gap-1 text-[10px] sm:text-[11px] font-semibold text-gray-600">
                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded-md flex items-center gap-1">
                  <QrCode className="w-3 h-3 text-blue-900" /> QRIS (Semua Bank & e-Wallet)
                </span>
                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded-md flex items-center gap-1">
                  <CreditCard className="w-3 h-3 text-blue-900" /> Virtual Account
                </span>
                <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded-md flex items-center gap-1">
                  <Wallet className="w-3 h-3 text-blue-900" /> E-Wallet
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
