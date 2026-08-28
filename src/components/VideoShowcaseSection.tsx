import React, { useState } from 'react';
import { Play, Sparkles, Video, ExternalLink } from 'lucide-react';

interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  category: string;
  desc: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: '1',
    youtubeId: '0T6Wi4lFWSY',
    title: 'Checklist & Simulasi Audit dengan AI-GPT',
    category: 'AI Checklist & Simulasi',
    desc: 'Lihat bagaimana AI menyusun draf pertanyaan 5W+1H dan simulasi audit otomatis.',
  },
  {
    id: '2',
    youtubeId: 'TOUEcFQIo24',
    title: 'AI CAPA Generator',
    category: 'Analisis 5-Why & CAPA',
    desc: 'Formulasi tindakan koreksi, pencegahan, dan akar masalah secara terstruktur.',
  },
  {
    id: '3',
    youtubeId: '-9gi_xe-EMU',
    title: 'Modul & Podcast Audit Mutu Internal',
    category: 'Materi & Audio Series',
    desc: 'Pratinjau modul pembelajaran dan podcast audio ulasan mendalam standar ISO.',
  },
  {
    id: '4',
    youtubeId: 'fGjeApNQAX4',
    title: 'AI Asisten AMI',
    category: 'Asisten Audit Mutu Internal',
    desc: 'Konsultasi cepat klausul ISO 9001 & ISO 19011 kapan saja saat bertugas.',
  },
];

export const VideoShowcaseSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem>(VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  return (
    <section id="cuplikan-video" className="py-8 sm:py-12 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-60 h-60 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-3.5 sm:px-6 relative z-10">
        
        {/* Header requested by user */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 bg-blue-500/10 border border-blue-400/30 text-blue-300 px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-2.5">
            <Video className="w-4 h-4 text-blue-400" />
            <span>VIDEO PRATINJAU LANGSUNG</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug px-1">
            Supaya Lebih Mudah Melihat Isi SMART Audit SYSTEM, Berikut Contoh Videonya:
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
            Pilih video di bawah untuk melihat cuplikan fitur dan tampilan dashboard di HP/laptop:
          </p>
        </div>

        {/* Video Player & Selector Layout */}
        <div className="bg-slate-950 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
          
          {/* Main Selected Video Player */}
          <div className="max-w-[320px] sm:max-w-xs mx-auto mb-5">
            <div className="relative rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-xl aspect-9/16 max-h-[460px] mx-auto flex items-center justify-center">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={activeVideo.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full cursor-pointer group flex flex-col items-center justify-center text-center p-3 bg-slate-900/90"
                >
                  <img
                    src={`https://img.youtube.com/vi/${activeVideo.youtubeId}/hqdefault.jpg`}
                    alt={activeVideo.title}
                    width={480}
                    height={360}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
                  />
                  <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 group-hover:bg-red-700 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform mb-2">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                  <div className="relative z-10 bg-slate-950/85 backdrop-blur-xs px-3.5 py-2 rounded-xl border border-slate-700 max-w-[95%]">
                    <span className="text-xs font-bold text-amber-400 block mb-0.5">
                      Ketuk untuk Memutar Video
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white leading-tight line-clamp-2">
                      🎥 {activeVideo.title}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-3 text-center px-1">
              <div className="inline-block text-xs font-black text-blue-400 bg-blue-950/80 border border-blue-800 px-2.5 py-0.5 rounded-full mb-1.5">
                {activeVideo.category}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                🎥 {activeVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                {activeVideo.desc}
              </p>
            </div>
          </div>

          {/* 4 Video Selector Tabs / Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3.5 border-t border-slate-800/80">
            {VIDEOS.map((vid) => {
              const isCurrent = activeVideo.id === vid.id;
              return (
                <button
                  key={vid.id}
                  onClick={() => handleSelectVideo(vid)}
                  className={`text-left p-3 rounded-xl sm:rounded-2xl border transition-all flex items-center gap-3 cursor-pointer min-h-[50px] ${
                    isCurrent
                      ? 'bg-blue-950/80 border-blue-500 shadow-md ring-1 ring-blue-500/50'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-900 active:bg-slate-800'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-bold ${
                    isCurrent ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-300'
                  }`}>
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      {vid.category}
                    </span>
                    <span className={`text-xs sm:text-sm font-bold block truncate ${
                      isCurrent ? 'text-blue-300 font-extrabold' : 'text-white'
                    }`}>
                      🎥 {vid.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
