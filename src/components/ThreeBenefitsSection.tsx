import React from 'react';
import { Sparkles, ClipboardList, Search, Wrench, ArrowRight } from 'lucide-react';

export const ThreeBenefitsSection: React.FC = () => {
  const benefits = [
    {
      step: '01',
      badge: 'PREPARE',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
      icon: ClipboardList,
      title: 'Menyiapkan Pertanyaan & Bukti Objektif',
      description: 'Membantu Anda menyusun starting point pertanyaan 5W+1H yang relevan per departemen dan klausul. Memberikan panduan dokumen bukti objektif apa saja yang harus diverifikasi di lapangan.',
    },
    {
      step: '02',
      badge: 'FIND',
      badgeColor: 'bg-rose-100 text-rose-900 border-rose-200',
      icon: Search,
      title: 'Merapikan Catatan Jadi Temuan PLOR',
      description: 'Mengubah catatan observasi lapangan yang masih acak menjadi rumusan temuan standar PLOR (Problem, Location, Objective Evidence, Requirement). Hasil rumusan menjadi jelas, objektif, dan tidak menimbulkan perdebatan dengan auditee.',
    },
    {
      step: '03',
      badge: 'FIX',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      icon: Wrench,
      title: 'Analisis 5-Why & Menyusun CAPA',
      description: 'Membantu memandu analisis akar masalah (Root Cause) menggunakan metode 5-Why. Mempermudah perumusan tindakan koreksi dan pencegahan (CAPA) yang terarah agar temuan tidak berulang.',
    },
  ];

  return (
    <section id="manfaat-utama" className="py-8 sm:py-12 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-9">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>ALUR KERJA TERPADU</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug px-1">
            Tiga Manfaat Utama SMART Audit SYSTEM
          </h2>
          <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
            Menggabungkan persiapan, pencatatan temuan, dan tindakan perbaikan dalam satu alur yang praktis.
          </p>
        </div>

        {/* 3 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-slate-500">
                      STEP {item.step}
                    </span>
                  </div>

                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-blue-400 flex items-center justify-center mb-2.5">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
