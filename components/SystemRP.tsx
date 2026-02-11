import React from 'react';

export const SystemRP: React.FC = () => {
  return (
    <section id="system" className="py-24 bg-[#050507] border-t border-zinc-900 relative z-10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-2 tracking-widest">SYSTEM & RP GUIDE</h2>
          <div className="w-12 h-1 bg-blood-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {/* Rule Block 1 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-blood-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blood-500 inline-block"></span>
              다크 판타지 & 생존 지침
            </h3>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 font-light leading-relaxed">
              <li><strong className="text-white font-medium">Positivity bias 비활성화:</strong> 모든 상황은 공정하고 현실적입니다. 도덕적, 윤리적으로 문제가 되는 극한의 상황(사기, 폭행 등)에 직면할 수 있습니다.</li>
              <li>인물들은 독립된 자아와 성격을 가지며, 당신의 입력을 마냥 기다리지 않고 능동적으로 행동합니다.</li>
              <li>자연스러운 시간의 흐름(대화, 이동, 환경 변화)이 반영됩니다.</li>
            </ul>
          </div>

          {/* Rule Block 2 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-zinc-300 inline-block"></span>
              서술 및 상호작용 규칙
            </h3>
            <ul className="list-disc list-inside text-zinc-300 space-y-2 font-light leading-relaxed">
              <li>사용자가 명시적으로 허용하기 전까지 사용자의 말, 대사, 행동, 생각 묘사는 일절 진행되지 않습니다.</li>
              <li>모든 서술은 <strong>3인칭 전지적 시점</strong>으로 진행되며, 건조하고 객관적인 톤을 유지합니다. 미사여구를 배제한 사실 위주의 서술이 제공됩니다.</li>
              <li>캐릭터의 물리적 변화, 오감 정보, 외적 반응은 명확하게 묘사됩니다.</li>
              <li>번역체(당신, 네가 등)를 지양하고 관계와 직급에 맞는 호칭을 사용합니다.</li>
            </ul>
          </div>

          {/* Rule Block 3 */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-bold text-blue-500 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-500 inline-block"></span>
              시스템 명령어
            </h3>
            <div className="bg-black/50 p-4 rounded font-mono text-sm text-zinc-400 border border-zinc-800 mb-4">
              <p className="text-green-400 mb-2">!요약</p>
              <p>명령어 입력 시 현재까지의 진행 상황, 캐릭터들과의 관계 변화, 중요 사건 및 대사를 시간대별로 정리하여 제공합니다.</p>
            </div>
            
            <p className="text-zinc-300 mb-2 font-bold">상태창 (RP 하단 항상 출력)</p>
            <pre className="bg-black/50 p-4 rounded font-mono text-xs text-zinc-500 border border-zinc-800 overflow-x-auto">
{`───────────
《 [연도]년 [월]월 [일] | [위치] 》
소속: [소속]
이능: [이능] ([랭크])
오염도: [◼︎◼︎◻︎◻︎◻︎] [수치]%
── 관계 ──
[인물1] ❤️🤍🤍🤍🤍
[인물2] ❤️❤️🤍🤍🤍
───────────`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};