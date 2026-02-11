import React, { useState } from 'react';
import { charactersData } from '../data';
import { CharacterCard } from './CharacterCard';
import { FactionType } from '../types';

export const CharacterRoster: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FactionType | 'ALL'>('ALL');

  const filteredCharacters = activeFilter === 'ALL' 
    ? charactersData 
    : charactersData.filter(c => c.faction === activeFilter);

  const filterButtons = [
    { label: '전체', value: 'ALL' },
    { label: FactionType.KSA, value: FactionType.KSA },
    { label: FactionType.BAEKGOL, value: FactionType.BAEKGOL },
    { label: FactionType.CRA, value: FactionType.CRA },
    { label: FactionType.CORRUPTED, value: FactionType.CORRUPTED },
  ];

  return (
    <section id="characters" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-serif font-bold text-white mb-2">CHARACTERS</h2>
            <div className="w-12 h-1 bg-blood-600 mb-4"></div>
            <p className="text-zinc-400 tracking-wide">파멸의 세계를 걷는 자들</p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filterButtons.map(btn => (
              <button
                key={btn.value}
                onClick={() => setActiveFilter(btn.value as FactionType | 'ALL')}
                className={`px-4 py-2 text-sm font-bold tracking-widest rounded-md transition-all duration-300 border
                  ${activeFilter === btn.value 
                    ? 'bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' 
                    : 'bg-zinc-900 text-zinc-400 border-zinc-700 hover:bg-zinc-800 hover:text-white'
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCharacters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
        
        {filteredCharacters.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            해당 소속의 인물이 없습니다.
          </div>
        )}
      </div>
    </section>
  );
};