import React from 'react';
import { Bot, FileSpreadsheet, BookOpen, Check, Sparkles } from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import imgAiSuiteWebp from '../assets/images/5-AI-TOOLS-dan-SIMULASI.webp';
import imgAiSuiteJpg from '../assets/images/5-AI-TOOLS-dan-SIMULASI.jpg';
import imgWorksheetWebp from '../assets/images/worksheet-dan-formulir-AMI.webp';
import imgWorksheetJpg from '../assets/images/worksheet-dan-formulir-AMI.jpg';
import imgModulWebp from '../assets/images/9-modul-dan-audio.webp';
import imgModulJpg from '../assets/images/9-modul-dan-audio.jpg';

export const ProductContentsSection: React.FC = () => {
  return (
    <section id="isi-produk" className="py-8 sm:py-12 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-9">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-900 px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>SEMUA YANG ANDA DAPATKAN</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-snug px-1">
            Apa Saja yang Ada di Dalam SMART Audit SYSTEM?
          </h2>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Dikelompokkan menjadi 3 bagian lengkap dan siap pakai:
          </p>
        </div>

        {/* 3 Main Product Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">

          {/* Group A: Aplikasi Berbasis AI */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-blue-900 uppercase tracking-wider block">Kategori A</span>
                  <h3 className="text-sm font-black text-gray-900 leading-snug">
                    Aplikasi Berbasis AI
                  </h3>
                </div>
              </div>

              {/* Preview image */}
              <div className="mb-3 rounded-xl overflow-hidden border border-gray-200 bg-slate-900 aspect-16/10">
                <picture>
                  <source srcSet={imgAiSuiteWebp} type="image/webp" />
                  <img
                    src={imgAiSuiteJpg}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.aiToolsSuite.webpLocal, SMARTBOOK_IMAGES.aiToolsSuite.local, SMARTBOOK_IMAGES.aiToolsSuite.url)}
                    alt="5 AI Tools Audit"
                    width={600}
                    height={375}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>

              <ul className="space-y-1.5 text-xs text-gray-700 leading-normal">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Generator pertanyaan audit 5W+1H</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Rekomendasi bukti objektif</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Formulator temuan PLOR</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Analisis 5-Why dan CAPA</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Asisten panduan ISO 19011</span>
                </li>
              </ul>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200 text-[10px] sm:text-[11px] text-blue-950 font-bold text-center">
              ⚡ Akses web mudah dari HP & laptop
            </div>
          </div>

          {/* Group B: Dokumen Kerja */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-bold">
                  <FileSpreadsheet className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-emerald-700 uppercase tracking-wider block">Kategori B</span>
                  <h3 className="text-sm font-black text-gray-900 leading-snug">
                    Dokumen Kerja
                  </h3>
                </div>
              </div>

              {/* Preview image */}
              <div className="mb-3 rounded-xl overflow-hidden border border-gray-200 bg-slate-900 aspect-16/10">
                <picture>
                  <source srcSet={imgWorksheetWebp} type="image/webp" />
                  <img
                    src={imgWorksheetJpg}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.worksheet.webpLocal, SMARTBOOK_IMAGES.worksheet.local, SMARTBOOK_IMAGES.worksheet.url)}
                    alt="7 Worksheet Dokumen Kerja"
                    width={600}
                    height={375}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>

              <ul className="space-y-1.5 text-xs text-gray-700 leading-normal">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>7 worksheet format Word (.docx) & Excel (.xlsx)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% dapat diedit dan bebas proteksi</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Siap disesuaikan dengan kebutuhan & logo perusahaan</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Program, Plan, Jadwal, Checklist, PTKP, CAPA & Laporan</span>
                </li>
              </ul>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200 text-[10px] sm:text-[11px] text-emerald-950 font-bold text-center">
              📄 Tinggal download dan langsung pakai
            </div>
          </div>

          {/* Group C: Materi Pembelajaran */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-700 text-white flex items-center justify-center font-bold">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-black text-indigo-700 uppercase tracking-wider block">Kategori C</span>
                  <h3 className="text-sm font-black text-gray-900 leading-snug">
                    Materi Pembelajaran
                  </h3>
                </div>
              </div>

              {/* Preview image */}
              <div className="mb-3 rounded-xl overflow-hidden border border-gray-200 bg-slate-900 aspect-16/10">
                <picture>
                  <source srcSet={imgModulWebp} type="image/webp" />
                  <img
                    src={imgModulJpg}
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.modul9.webpLocal, SMARTBOOK_IMAGES.modul9.local, SMARTBOOK_IMAGES.modul9.url)}
                    alt="9 Modul Panduan Praktis Audit"
                    width={600}
                    height={375}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
              </div>

              <ul className="space-y-1.5 text-xs text-gray-700 leading-normal">
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>9 modul panduan audit internal lengkap</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Slide presentasi sosialisasi audit</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Mind map alur proses audit</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Evaluasi pre-test dan post-test</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Materi audio ulasan mendalam</span>
                </li>
              </ul>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-200 text-[10px] sm:text-[11px] text-indigo-950 font-bold text-center">
              🎧 Belajar audit kapan saja & di mana saja
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
