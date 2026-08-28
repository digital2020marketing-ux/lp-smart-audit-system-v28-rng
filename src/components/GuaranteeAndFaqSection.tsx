import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, HelpCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import { FAQS } from '../data/auditContent';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';

export const GuaranteeAndFaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(prev => (prev === idx ? null : idx));
  };

  const handleFaqBuyClick = () => {
    trackCheckoutClick('faq_buy', 'FAQ Section - Dapatkan SMART Audit System Rp197.000');
  };

  return (
    <section id="garansi-dan-faq" className="py-10 sm:py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* 1. GARANSI (Satu paragraf pendek) */}
        <div className="bg-emerald-50/80 border border-emerald-300 rounded-2xl sm:rounded-3xl p-5 sm:p-7 mb-10 shadow-xs">
          <div className="flex items-start sm:items-center gap-3.5 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-black text-emerald-800 uppercase tracking-wider block">Jaminan Kepuasan</span>
              <h3 className="text-base sm:text-lg font-black text-emerald-950">
                100% Garansi Uang Kembali
              </h3>
            </div>
          </div>
          <p className="text-sm sm:text-base text-emerald-950 leading-relaxed font-medium">
            Gunakan SMART Audit SYSTEM untuk persiapan dan pelaksanaan audit Anda. Jika setelah Anda mencoba seluruh modul dan instrumen kerja ternyata sistem ini tidak memberikan manfaat untuk tugas audit Anda, Anda dapat mengajukan pengembalian dana penuh kepada tim kami tanpa kesulitan.
          </p>
        </div>

        {/* 2. FAQ HEADER */}
        <div className="text-center mb-8 sm:mb-10">
          <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-blue-900 bg-blue-100 px-3.5 py-1 rounded-full inline-block">
            Tanya Jawab
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight leading-snug px-1">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mt-2 leading-relaxed">
            Informasi penting seputar akses, format dokumen, dan penggunaan sistem.
          </p>
        </div>

        {/* FAQ ACCORDION (6 Pertanyaan Penting) */}
        <div className="space-y-3 mb-10">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-4 sm:px-6 py-4 font-bold text-gray-900 hover:bg-gray-50/80 focus:outline-none flex justify-between items-center gap-3 cursor-pointer min-h-[52px]"
                >
                  <span className="text-sm sm:text-base flex items-start gap-2.5">
                    <HelpCircle className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 pt-1 text-sm sm:text-base text-gray-700 border-t border-gray-100 leading-relaxed font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Closing Box with Action Button */}
        <div className="bg-white p-5 sm:p-7 rounded-2xl sm:rounded-3xl border border-gray-200 text-center shadow-xs">
          <h3 className="text-base sm:text-lg font-black text-gray-900 mb-1.5">
            Siap Mempermudah Audit Internal Anda?
          </h3>
          <p className="text-sm sm:text-base text-gray-700 mb-5 max-w-md mx-auto leading-relaxed">
            Dapatkan seluruh AI generator, 7 dokumen kerja, dan 9 modul panduan sekarang juga.
          </p>

          <div className="max-w-sm sm:max-w-md mx-auto">
            <a
              id="faq-buy-cta"
              href={getCheckoutUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleFaqBuyClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-4 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 active:scale-[0.98] text-white rounded-2xl font-black text-sm sm:text-base transition-all shadow-md shadow-red-600/30 cursor-pointer text-center min-h-[50px]"
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>Dapatkan Promo Rp197.000</span>
              <ArrowRight className="w-5 h-5 shrink-0" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
