import React from 'react';
import { factionsData } from '../data';

export const Factions: React.FC = () => {
  return (
    <section id="factions" className="py-24 bg-zinc-950/50 relative z-10 border-y border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center flex flex-col items-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-2">FACTIONS</h2>
          <div className="w-12 h-1 bg-zinc-600 mb-4"></div>
          <p className="text-zinc-400 tracking-wide max-w-2xl text-center">
            인류의 1%만이 남은 세상. 저마다의 방식으로 생존하거나, 뒤틀림에 순응한 세력들.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {factionsData.map((faction) => (
            <div 
              key={faction.id} 
              className={`bg-zinc-900/40 border-t-2 ${faction.color} p-8 rounded-b-lg transition-transform duration-300 hover:-translate-y-2 hover:bg-zinc-900/60 shadow-lg`}
            >
              <div className="text-xs font-bold tracking-widest text-zinc-500 mb-1 uppercase">{faction.location}</div>
              <h3 className="text-2xl font-black text-white mb-1 tracking-tight">{faction.name}</h3>
              {faction.fullName && <div className="text-xs text-zinc-400 mb-4">{faction.fullName}</div>}
              {!faction.fullName && <div className="h-4 mb-4"></div>}
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                {faction.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};