import React from 'react';
import { HelpCircle, FileSearch, Scale, RefreshCw, FileSpreadsheet, CheckCircle2, ArrowDown, Sparkles } from 'lucide-react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import imgChecklist from '../assets/images/Cek-List-Audit-dan-Simulasi.jpg';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: HelpCircle,
      title: 'Pertanyaan Audit Lebih Terarah',
      description: 'Starting point pertanyaan open-ended (5W+1H) tersusun otomatis berdasarkan proses operasional atau klausul ISO 9001.',
      badge: 'Starting Point 5W+1H'
    },
    {
      icon: FileSearch,
      title: 'Lebih Jelas Evidence yang Harus Dicari',
      description: 'Rekomendasi dokumen, rekaman mutu, dan bukti objektif siap menjadi titik awal verifikasi dan observasi lapangan.',
      badge: 'Rekomendasi Bukti'
    },
    {
      icon: Scale,
      title: 'Temuan Lebih Terstruktur',
      description: 'Bantu merapikan catatan lapangan yang berantakan menjadi struktur temuan formal PLOR (Problem, Location, Objective Evidence, Requirement).',
      badge: 'Format Standar PLOR'
    },
    {
      icon: RefreshCw,
      title: 'Root Cause Lebih Mudah Dieksplorasi',
      description: 'Gunakan panduan 5-Why Analysis untuk membantu menggali akar penyebab riil sebelum menyusun tindakan korektif (CAPA).',
      badge: 'Analisis 5-Why'
    },
    {
      icon: FileSpreadsheet,
      title: 'Dokumentasi Audit Lebih Terorganisasi',
      description: 'Gunakan 7 worksheet Word & Excel sepanjang siklus audit, dari program tahunan hingga laporan akhir manajemen.',
      badge: 'Dokumen Kerja Rapi'
    }
  ];

  return (
    <section id="manfaat" className="py-14 sm:py-20 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* SECTION 3 — FUTURE BENEFITS */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            TRANSFORMASI WORKFLOW AUDITOR
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-3.5 mb-3 leading-tight">
            Bayangkan Jika Pada Audit Berikutnya Anda Tidak Lagi Memulai dari Halaman Kosong
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-medium max-w-2xl mx-auto">
            Ketika alur persiapan sudah terstruktur rapi, Anda bisa langsung bergerak fokus pada substansi audit:
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="space-y-3.5 sm:space-y-4 mb-14">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-slate-100/90 border border-slate-200 hover:border-blue-300 rounded-2xl p-4 sm:p-5 transition-all flex items-start gap-4 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-sm sm:text-base font-extrabold text-gray-900 leading-snug">
                      ✓ {b.title}
                    </h3>
                    <span className="text-[10px] sm:text-[11px] font-bold text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-full">
                      {b.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* SECTION 4 — VISUAL PRODUCT PROOF #2 */}
        <div className="pt-8 border-t border-gray-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] sm:text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              TAMPILAN ASLI SISTEM KERJA
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 mt-3 mb-2 leading-tight">
              AI Checklist & 5W+1H Generator + Evidence Recommendation
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Lihat bagaimana sistem langsung merumuskan pertanyaan dan bukti objektif sesuai standar ISO:
            </p>
          </div>

          {/* 3-Step Flow Annotation Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6 max-w-3xl mx-auto">
            <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-center">
              <span className="text-[10px] font-black uppercase text-blue-800 block">Langkah 1</span>
              <p className="text-xs font-bold text-blue-950 mt-0.5">1. Masukkan proses / klausul</p>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-center">
              <span className="text-[10px] font-black uppercase text-amber-800 block">Langkah 2</span>
              <p className="text-xs font-bold text-amber-950 mt-0.5">2. Dapatkan starting point pertanyaan</p>
            </div>
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <span className="text-[10px] font-black uppercase text-emerald-800 block">Langkah 3</span>
              <p className="text-xs font-bold text-emerald-950 mt-0.5">3. Lihat evidence yang diverifikasi</p>
            </div>
          </div>

          {/* Real Screenshot #2 Display */}
          <div className="relative rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 bg-slate-900 border border-slate-800 shadow-xl overflow-hidden max-w-3xl mx-auto">
            <div className="px-3 sm:px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-[10px] sm:text-xs text-slate-400 font-mono">
                Generator Pertanyaan & Evidence Checklist
              </span>
              <span className="text-[9px] font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded-full">
                MODUL NYATA
              </span>
            </div>

            <img
              src={imgChecklist}
              referrerPolicy="no-referrer"
              onError={(e) => handleImageFallback(e, SMARTBOOK_IMAGES.checklist.local, SMARTBOOK_IMAGES.checklist.url)}
              alt="Screenshot Asli AI Checklist dan Simulasi Pertanyaan Audit"
              className="w-full h-auto object-cover block rounded-b-xl"
              loading="lazy"
            />
          </div>

          <p className="text-center text-xs text-gray-600 font-bold mt-4">
            💡 “Oh, jadi begini cara kerjanya: Masukkan konteks audit, sistem langsung menyiapkan fondasi pertanyaan dan daftar bukti yang relevan.”
          </p>
        </div>

      </div>
    </section>
  );
};

