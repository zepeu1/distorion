import React from 'react';
import { timelineData } from '../data';

export const Timeline: React.FC = () => {
  return (
    <section id="worldview" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <h2 className="text-4xl font-serif font-bold text-white mb-2">WORLDVIEW</h2>
          <div className="w-12 h-1 bg-blood-600"></div>
          <p className="mt-4 text-zinc-400 tracking-wide">무너져버린 세상의 연대기</p>
        </div>

        <div className="space-y-12">
          {timelineData.map((event, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Desktop view styling: alternating left/right is complex without grid, 
                  let's keep a clean vertical line on the left for all screens */}
              <div className="md:hidden absolute left-0 top-1.5 w-3 h-3 bg-zinc-800 border border-zinc-500 rounded-full z-10"></div>
              <div className="md:hidden absolute left-1.5 top-4 bottom-[-3rem] w-px bg-zinc-800"></div>

              <div className="md:flex items-start md:gap-8 relative">
                <div className="hidden md:flex flex-col items-end w-32 shrink-0 pt-1">
                  <span className="text-blood-500 font-bold tracking-widest">{event.time}</span>
                </div>
                
                <div className="hidden md:block absolute left-32 top-1.5 w-3 h-3 bg-zinc-800 border-2 border-blood-600 rounded-full z-10 translate-x-[-5px]"></div>
                {index !== timelineData.length - 1 && (
                  <div className="hidden md:block absolute left-32 top-4 bottom-[-3rem] w-px bg-gradient-to-b from-zinc-700 to-zinc-900 translate-x-1"></div>
                )}

                <div className="md:w-full pb-2">
                  <span className="md:hidden text-blood-500 font-bold tracking-widest block mb-1 text-sm">{event.time}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-zinc-400 leading-relaxed font-light">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};