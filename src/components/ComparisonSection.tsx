import React from 'react';
import { HelpCircle, Check, X, Sparkles } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="perbandingan-chatgpt" className="py-8 sm:py-12 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>PERBANDINGAN JELAS</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-snug px-1">
            Perbedaan dengan ChatGPT Biasa
          </h2>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Kenapa Anda butuh sistem yang memang dirancang khusus untuk audit:
          </p>
        </div>

        {/* 2-Column Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-5">
          
          {/* Kolom 1: ChatGPT Biasa */}
          <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200">
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-slate-200">
              <span className="w-7 h-7 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                🤖
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-800">
                  ChatGPT Biasa
                </h3>
                <span className="text-[10px] text-slate-500">Alat AI Umum</span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Harus menyusun prompt sendiri dari awal.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Format hasil harus dirapikan sendiri.</span>
              </li>
              <li className="flex items-start gap-2">
                <X className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                <span>Dokumen kerja dibuat manual dari nol.</span>
              </li>
            </ul>
          </div>

          {/* Kolom 2: SMART Audit SYSTEM */}
          <div className="bg-blue-50/80 rounded-2xl p-4 sm:p-5 border-2 border-blue-600 shadow-xs">
            <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-blue-200">
              <span className="w-7 h-7 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold text-xs">
                ⚡
              </span>
              <div>
                <h3 className="text-sm font-bold text-blue-950">
                  SMART Audit SYSTEM
                </h3>
                <span className="text-[10px] text-blue-800 font-semibold">Workflow Spesifik Audit</span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-blue-950 font-medium">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Instruksi audit sudah disiapkan matang.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Alur pertanyaan, PLOR, dan CAPA terstruktur.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>Dilengkapi dokumen Word dan Excel siap pakai.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
