import React from 'react';
import { HelpCircle, Check, X, Sparkles } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="perbandingan-chatgpt" className="py-10 sm:py-14 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5">
            <HelpCircle className="w-4 h-4" />
            <span>PERBANDINGAN JELAS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-snug px-1">
            Perbedaan dengan ChatGPT Biasa
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mt-2 leading-relaxed">
            Kenapa Anda butuh sistem yang memang dirancang khusus untuk audit:
          </p>
        </div>

        {/* 2-Column Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          
          {/* Kolom 1: ChatGPT Biasa */}
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
            <div className="flex items-center gap-2.5 mb-3.5 pb-3 border-b border-slate-200">
              <span className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-sm">
                🤖
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-800">
                  ChatGPT Biasa
                </h3>
                <span className="text-xs text-slate-500">Alat AI Umum</span>
              </div>
            </div>

            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Harus menyusun prompt sendiri dari awal.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Format hasil harus dirapikan sendiri.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Dokumen kerja dibuat manual dari nol.</span>
              </li>
            </ul>
          </div>

          {/* Kolom 2: SMART Audit SYSTEM */}
          <div className="bg-blue-50/80 rounded-2xl p-5 border-2 border-blue-600 shadow-xs">
            <div className="flex items-center gap-2.5 mb-3.5 pb-3 border-b border-blue-200">
              <span className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
                ⚡
              </span>
              <div>
                <h3 className="text-base font-bold text-blue-950">
                  SMART Audit SYSTEM
                </h3>
                <span className="text-xs text-blue-800 font-semibold">Workflow Spesifik Audit</span>
              </div>
            </div>

            <ul className="space-y-2.5 text-sm text-blue-950 font-medium">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Instruksi audit sudah disiapkan matang.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Alur pertanyaan, PLOR, dan CAPA terstruktur.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Dilengkapi dokumen Word dan Excel siap pakai.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
