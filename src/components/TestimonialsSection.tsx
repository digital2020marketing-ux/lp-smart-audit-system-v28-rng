import React from 'react';
import { CheckCircle2, ShoppingBag, ArrowRight, Quote } from 'lucide-react';
import { getCheckoutUrl, trackCheckoutClick } from '../constants';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../imageConstants';
import imgTesti1Webp from '../assets/images/testi1.webp';
import imgTesti1Png from '../assets/images/testi1.png';
import imgTesti2Webp from '../assets/images/testi2.webp';
import imgTesti2Png from '../assets/images/testi2.png';
import imgTesti3Webp from '../assets/images/testi3.webp';
import imgTesti3Png from '../assets/images/testi3.png';

interface TestimonialsSectionProps {
  onCheckoutClick?: () => void;
}

interface TestimonialItem {
  id: number;
  title: string;
  proofType: string;
  imageWebp: string;
  imagePng: string;
  webpLocal: string;
  localUrl: string;
  remoteUrl: string;
  quote: string;
}

const TOP_3_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    title: 'Testimoni 1',
    proofType: 'Mempermudah Persiapan Audit',
    imageWebp: imgTesti1Webp,
    imagePng: imgTesti1Png,
    webpLocal: SMARTBOOK_IMAGES.testi1.webpLocal,
    localUrl: SMARTBOOK_IMAGES.testi1.local,
    remoteUrl: SMARTBOOK_IMAGES.testi1.url,
    quote: '“Sebelumnya harus menyusun checklist dan draf pertanyaan sendiri dari nol. Sekarang punya starting point yang jauh lebih terstruktur dan rapi.”'
  },
  {
    id: 2,
    title: 'Testimoni 2',
    proofType: 'Membantu Merumuskan Temuan',
    imageWebp: imgTesti2Webp,
    imagePng: imgTesti2Png,
    webpLocal: SMARTBOOK_IMAGES.testi2.webpLocal,
    localUrl: SMARTBOOK_IMAGES.testi2.local,
    remoteUrl: SMARTBOOK_IMAGES.testi2.url,
    quote: '“Bantuan AI PLOR mempermudah perumusan kalimat temuan yang objektif sehingga auditee langsung paham tanpa ada debat yang berlarut-larut.”'
  },
  {
    id: 3,
    title: 'Testimoni 3',
    proofType: 'Menghemat Waktu Auditor',
    imageWebp: imgTesti3Webp,
    imagePng: imgTesti3Png,
    webpLocal: SMARTBOOK_IMAGES.testi3.webpLocal,
    localUrl: SMARTBOOK_IMAGES.testi3.local,
    remoteUrl: SMARTBOOK_IMAGES.testi3.url,
    quote: '“Waktu persiapan audit terpangkas drastis. Format worksheet Word dan Excel-nya sangat rapi dan langsung siap pakai di lapangan.”'
  },
];

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const handleCtaClick = () => {
    trackCheckoutClick('social_proof_buy', 'Social Proof - Dapatkan SMART Audit System Rp197.000');
  };

  return (
    <section id="testimoni" className="py-8 sm:py-12 bg-slate-100/90 border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-3.5 sm:px-6">
        
        {/* Headline */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-300 text-emerald-900 px-3 py-0.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>PENGALAMAN PENGGUNA NYATA</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-snug px-1">
            Apa Kata Pengguna SMART Audit SYSTEM?
          </h2>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            Tangkapan layar asli pengalaman rekan-rekan auditor internal:
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mb-6">
          {TOP_3_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden flex flex-col justify-between"
            >
              {/* Proof Badge */}
              <div className="px-3.5 py-1.5 bg-slate-50 border-b border-gray-100 text-[11px] sm:text-xs font-bold text-blue-900 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                <span>{item.proofType}</span>
              </div>

              {/* Image Preview */}
              <div className="p-2.5 bg-slate-900/5 flex items-center justify-center border-b border-gray-100 min-h-[170px]">
                <picture className="w-full flex justify-center">
                  <source srcSet={item.imageWebp} type="image/webp" />
                  <img
                    src={item.imagePng}
                    onError={(e) => handleImageFallback(e, item.webpLocal, item.localUrl, item.remoteUrl)}
                    referrerPolicy="no-referrer"
                    alt={item.title}
                    width={400}
                    height={500}
                    className="w-full h-auto max-h-[250px] object-contain rounded-lg block shadow-xs"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Quote */}
              <div className="p-3.5 bg-white flex items-start gap-2">
                <Quote className="w-3.5 h-3.5 text-blue-800 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700 font-medium leading-relaxed italic">
                  {item.quote}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button After Testimonials */}
        <div className="text-center max-w-sm sm:max-w-md mx-auto space-y-2">
          <a
            id="testi-cta-buy"
            href={getCheckoutUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-700 text-white rounded-2xl font-black text-sm sm:text-base shadow-lg shadow-red-600/25 transition-all cursor-pointer min-h-[48px]"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" />
            <span>Dapatkan Promo Rp197.000</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </a>
          <p className="text-[11px] text-gray-500 font-semibold leading-normal">
            Promo Rp197.000 hanya 3 hari • Selanjutnya naik ke Rp249.000 • Akses seumur hidup
          </p>
        </div>

      </div>
    </section>
  );
};
