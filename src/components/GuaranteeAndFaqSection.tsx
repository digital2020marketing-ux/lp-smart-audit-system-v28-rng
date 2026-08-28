import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, HelpCircle, MessageCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/auditContent';
import { getCheckoutUrl, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../constants';

export const GuaranteeAndFaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  const handleFaqBuyClick = () => {
    trackCheckoutClick('faq_buy', 'FAQ Section - Dapatkan SMART Audit System Rp197.000');
  };

  const handleFaqAskClick = () => {
    trackWhatsAppClick('faq_ask', 'FAQ Section - Tanya via WA');
  };

  return (
    <section id="garansi-dan-faq" className="py-8 sm:py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6">
        
        {/* 1. GARANSI (Satu paragraf pendek) */}
        <div className="bg-emerald-50/80 border border-emerald-300 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mb-8 shadow-xs">
          <div className="flex items-start sm:items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black text-emerald-800 uppercase tracking-wider block">Jaminan Kepuasan</span>
              <h3 className="text-sm sm:text-base font-black text-emerald-950">
                100% Garansi Uang Kembali
              </h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed font-medium">
            Gunakan SMART Audit SYSTEM untuk persiapan dan pelaksanaan audit Anda. Jika setelah Anda mencoba seluruh modul dan instrumen kerja ternyata sistem ini tidak memberikan manfaat untuk tugas audit Anda, Anda dapat mengajukan pengembalian dana penuh kepada tim kami tanpa kesulitan.
          </p>
        </div>

        {/* 2. FAQ HEADER */}
        <div className="text-center mb-6 sm:mb-8">
          <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3 py-0.5 rounded-full inline-block">
            Tanya Jawab
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mt-2 tracking-tight leading-snug px-1">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
            Informasi penting seputar akses, format dokumen, dan penggunaan sistem.
          </p>
        </div>

        {/* FAQ ACCORDION (6 Pertanyaan Penting) */}
        <div className="space-y-2.5 mb-8">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-3.5 sm:px-5 py-3.5 font-bold text-gray-900 hover:bg-gray-50/80 focus:outline-none flex justify-between items-center gap-2.5 cursor-pointer"
                >
                  <span className="text-xs sm:text-sm flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3.5 sm:px-5 pb-3.5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Closing Box with Action Buttons */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-gray-200 text-center shadow-xs">
          <h3 className="text-sm sm:text-base font-black text-gray-900 mb-1">
            Siap Mempermudah Audit Internal Anda?
          </h3>
          <p className="text-xs text-gray-600 mb-4 max-w-sm mx-auto leading-relaxed">
            Dapatkan seluruh AI generator, 7 dokumen kerja, dan 9 modul panduan sekarang juga.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-sm sm:max-w-md mx-auto">
            <a
              id="faq-buy-cta"
              href={getCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFaqBuyClick}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white rounded-2xl font-black text-xs sm:text-sm transition-all shadow-md shadow-red-600/30 cursor-pointer text-center min-h-[48px]"
            >
              <ShoppingBag className="w-4 h-4 shrink-0" />
              <span>Dapatkan Promo Rp197.000</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>

            <a
              id="faq-ask-cta"
              href={getWhatsAppUrl('faq_ask')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFaqAskClick}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white rounded-2xl font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-600/20 cursor-pointer text-center min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Tanya via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
