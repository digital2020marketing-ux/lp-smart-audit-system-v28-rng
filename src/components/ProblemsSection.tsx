import React from 'react';
import { AlertCircle, HelpCircle, FileSearch, Target } from 'lucide-react';

export const ProblemsSection: React.FC = () => {
  const problems = [
    {
      icon: HelpCircle,
      title: 'Bingung menyusun pertanyaan dan checklist audit',
      desc: 'Sering menghabiskan banyak waktu merangkai kata demi kata dari lembar kosong untuk setiap departemen atau klausul.',
    },
    {
      icon: FileSearch,
      title: 'Kesulitan merumuskan temuan berdasarkan bukti objektif',
      desc: 'Catatan observasi lapangan masih acak sehingga sulit merumuskan kalimat temuan PLOR yang objektif dan bebas debat kusir.',
    },
    {
      icon: Target,
      title: 'Kesulitan menganalisis akar masalah dan tindakan perbaikan',
      desc: 'Analisis ketidaksesuaian sering berhenti di gejala permukaan dan bingung memandu auditee menyusun CAPA 5-Why yang tepat sasaran.',
    },
  ];

  return (
    <section id="masalah-auditor" className="py-10 sm:py-14 bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Section Tag */}
        <div className="text-center mb-3">
          <span className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>KENDALA UTAMA AUDITOR</span>
          </span>
        </div>

        {/* Headline */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 leading-snug px-1">
            Apakah Anda Sering Mengalami 3 Masalah Ini Saat Audit?
          </h2>
        </div>

        {/* 3 Main Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 text-left shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center font-bold mb-3.5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
