import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoShowcaseSection } from './components/VideoShowcaseSection';
import { ProblemsSection } from './components/ProblemsSection';
import { ThreeBenefitsSection } from './components/ThreeBenefitsSection';
import { ProductContentsSection } from './components/ProductContentsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingOffer } from './components/PricingOffer';
import { GuaranteeAndFaqSection } from './components/GuaranteeAndFaqSection';
import { Footer } from './components/Footer';

export default function App() {
  const handleCheckoutScroll = () => {
    const checkoutElem = document.getElementById('penawaran');
    if (checkoutElem) {
      checkoutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col selection:bg-blue-900 selection:text-white antialiased">
      {/* Top Navbar */}
      <Navbar onCheckoutClick={handleCheckoutScroll} />

      {/* Main Content: Streamlined Mobile-First Sales Page */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* 1. BAGIAN PEMBUKA (HERO) */}
        <Hero onCheckoutClick={handleCheckoutScroll} />

        {/* 2. CUPLIKAN CONTOH VIDEO SMART AUDIT SYSTEM */}
        <VideoShowcaseSection />

        {/* 3. MASALAH YANG DIALAMI AUDITOR */}
        <ProblemsSection />

        {/* 4. TIGA MANFAAT UTAMA (PREPARE, FIND, FIX) */}
        <ThreeBenefitsSection />

        {/* 5. ISI PRODUK (3 KATEGORI: AI SUITE, DOKUMEN KERJA, MATERI) */}
        <ProductContentsSection />

        {/* 6. TESTIMONI (3 BUKTI NYATA TERBAIK) */}
        <TestimonialsSection onCheckoutClick={handleCheckoutScroll} />

        {/* 7. PERBANDINGAN DENGAN CHATGPT */}
        <ComparisonSection />

        {/* 8. PENAWARAN (HARGA NORMAL RP249.000 -> PROMO RP197.000) */}
        <PricingOffer onCheckoutClick={handleCheckoutScroll} />

        {/* 9. GARANSI & FAQ (6 PERTANYAAN PENTING & LISENSI) */}
        <GuaranteeAndFaqSection />
      </main>

      {/* Footer with single Kontak CS button at the very bottom */}
      <Footer />
    </div>
  );
}
