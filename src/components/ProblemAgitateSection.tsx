import React from 'react';
import { AlertCircle, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProblemAgitateSection: React.FC = () => {
  const auditTasks = [
    { title: 'Mencari checklist & format dokumen audit lama', desc: 'File lama tersebar di berbagai folder dan versinya sering tidak seragam.' },
    { title: 'Menyusun pertanyaan audit satu per satu dari nol', desc: 'Menghabiskan waktu merangkai kata demi kata untuk tiap proses.' },
    { title: 'Menentukan evidence yang harus diverifikasi', desc: 'Ragu dokumen atau rekaman spesifik apa yang perlu diminta ke auditee.' },
    { title: 'Merapikan catatan lapangan yang masih acak', desc: 'Catatan kasar saat observasi butuh waktu lama untuk dirapikan.' },
    { title: 'Memformulasikan temuan agar sesuai standar baku', desc: 'Sulit menyusun narasi temuan yang objektif dan bebas multitafsir.' },
    { title: 'Menyusun root cause & analisis CAPA', desc: 'Analisis sering kali berhenti di gejala permukaan tanpa menyentuh akar masalah.' }
  ];

  return (
    <section id="problem-agitate" className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Badge */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-1.5 bg-red-950/80 border border-red-800 text-red-300 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <AlertCircle className="w-3.5 h-3.5 text-red-400" />
            <span>REALITA PEKERJAAN AUDITOR</span>
          </span>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight mb-4">
            Audit Seharusnya Fokus Mencari Bukti & Peluang Perbaikan — Bukan Sibuk Menyiapkan Administrasi dari Nol
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Namun di setiap siklus audit, sebagian besar energi dan waktu sering kali habis tersedot untuk rentetan persiapan yang sama:
          </p>
        </div>

        {/* 6 Focused Pain Points */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-5 sm:p-7 mb-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {auditTasks.map((task, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800/80">
                <span className="w-6 h-6 rounded-full bg-red-950 text-red-400 border border-red-800/60 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✕
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-snug">
                    {task.title}
                  </h3>
                  <p className="text-[11.5px] sm:text-xs text-slate-400 mt-0.5 leading-relaxed">
                    {task.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auditor Time Statement */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-800/80 rounded-3xl p-6 sm:p-8 text-center shadow-lg">
          <span className="text-xs font-black tracking-wider uppercase text-blue-400 block mb-2">
            ESENSI UTAMA SEORANG AUDITOR
          </span>
          <p className="text-base sm:text-lg md:text-xl font-black text-white leading-relaxed mb-4">
            Waktu auditor seharusnya lebih banyak digunakan untuk:
          </p>
          
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-slate-950/80 border border-blue-900/70 p-3 sm:p-4 rounded-2xl text-xs sm:text-sm font-extrabold text-blue-200 shadow-inner">
            <span className="text-emerald-400">Wawancara</span>
            <span className="text-slate-500">→</span>
            <span className="text-emerald-400">Observasi</span>
            <span className="text-slate-500">→</span>
            <span className="text-emerald-400">Verifikasi Evidence</span>
            <span className="text-slate-500">→</span>
            <span className="text-amber-300">Audit Judgement</span>
            <span className="text-slate-500">→</span>
            <span className="text-teal-300">Improvement</span>
          </div>
        </div>

      </div>
    </section>
  );
};

