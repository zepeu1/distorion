import React from 'react';
import { Character, FactionType } from '../types';

interface CharacterCardProps {
  character: Character;
}

const getRankColor = (rank: string) => {
  if (rank.includes('0급')) return 'bg-blood-900 text-red-200 border border-blood-500';
  if (rank.includes('1급')) return 'bg-zinc-800 text-zinc-200 border border-zinc-500';
  return 'bg-zinc-900 text-zinc-400 border border-zinc-700';
};

const getFactionBorder = (faction: FactionType) => {
  switch (faction) {
    case FactionType.KSA: return 'hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]';
    case FactionType.BAEKGOL: return 'hover:border-zinc-300/50 hover:shadow-[0_0_15px_rgba(212,212,216,0.15)]';
    case FactionType.CRA: return 'hover:border-red-600/50 hover:shadow-[0_0_15px_rgba(220,38,38,0.15)]';
    case FactionType.CORRUPTED: return 'hover:border-purple-600/50 hover:shadow-[0_0_15px_rgba(147,51,234,0.15)]';
    default: return 'hover:border-zinc-600';
  }
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  // Use the provided image URL format
  const imageUrl = `https://igx.kr/n/hM/${character.code}/1`;

  return (
    <div className={`group relative bg-[#0d0d10] border border-zinc-800 rounded-xl overflow-hidden transition-all duration-300 ${getFactionBorder(character.faction)}`}>
      
      {/* Top Image Section */}
      <div className="relative h-64 w-full overflow-hidden bg-zinc-900">
        <img 
          src={imageUrl} 
          alt={character.name} 
          className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter contrast-125 saturate-50"
          onError={(e) => {
             // Fallback if the specific image code URL fails
             (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${character.code}/400/400`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-transparent to-transparent"></div>
        <div className="absolute bottom-3 left-4 flex gap-2 items-end">
          <h3 className="text-2xl font-bold text-white tracking-tight">{character.name}</h3>
          <span className="text-sm text-zinc-400 pb-0.5">{character.age}세 · {character.gender}</span>
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
          <span className={`px-2 py-0.5 text-xs font-bold rounded ${getRankColor(character.rank)}`}>
            {character.rank}
          </span>
          <span className="px-2 py-0.5 text-xs font-bold bg-black/60 text-white rounded backdrop-blur-sm border border-zinc-700">
            {character.mbti}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col h-full">
        <div className="mb-4">
          <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{character.position}</div>
          <div className="italic text-zinc-300 text-sm border-l-2 border-blood-600 pl-3 py-1 mb-3 bg-zinc-900/30">
            "{character.quote}"
          </div>
          
          <div className="flex flex-wrap gap-1.5 mb-4">
            {character.keywords.map(kw => (
              <span key={kw} className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Stats - Visible on hover or default below */}
        <div className="space-y-2 mt-auto text-sm border-t border-zinc-800 pt-4">
          <div className="flex justify-between items-start gap-2">
            <span className="text-zinc-500 font-medium shrink-0">무기</span>
            <span className="text-zinc-300 text-right">{character.weapon}</span>
          </div>
          <div className="flex justify-between items-start gap-2">
            <span className="text-zinc-500 font-medium shrink-0">이능</span>
            <span className="text-zinc-200 text-right font-medium">{character.ability}</span>
          </div>
          <div className="flex justify-between items-start gap-2">
            <span className="text-zinc-500 font-medium shrink-0">외형</span>
            <span className="text-zinc-400 text-right text-xs leading-relaxed">{character.appearance}</span>
          </div>
          <div className="flex flex-col mt-2 pt-2 border-t border-zinc-800/50">
             <span className="text-zinc-500 font-medium text-xs mb-1">특징</span>
             <span className="text-zinc-400 text-xs leading-relaxed">{character.traits}</span>
          </div>
        </div>
      </div>
    </div>
  );
};