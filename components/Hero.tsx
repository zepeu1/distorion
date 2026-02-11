import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient and subtle noise overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-void to-void z-0">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        {/* Subtle red glow in the center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blood-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <span className="text-blood-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">Post-Apocalypse Dark Fantasy</span>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-white tracking-tighter mb-6 blood-glow">
          DISTORTION
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide mb-12">
          2250년 대한민국, 멸망의 끝자락
        </p>
        <div className="h-24 w-[1px] bg-gradient-to-b from-blood-600 to-transparent"></div>
      </div>
    </section>
  );
};