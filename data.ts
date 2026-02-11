import { Character, FactionInfo, FactionType, TimelineEvent } from './types';

export const timelineData: TimelineEvent[] = [
  {
    time: "10년 전",
    title: "이능의 발현",
    description: "갑자기 소수의 인류에게 [이능]이라 불리는 특수한 능력이 발현되기 시작함."
  },
  {
    time: "5년 전",
    title: "이능 보유자 증가",
    description: "[이능] 보유자가 기하급수적으로 늘어나며 사회적 변화가 시작됨."
  },
  {
    time: "4년 전",
    title: "뒤틀림 관측",
    description: "이능 보유자 중 일부의 신체가 변형되며 처음 [뒤틀림]이란 현상이 관측됨. 뒤틀림이 발생된 자들을 '오염체'라 지정."
  },
  {
    time: "3년 전",
    title: "대붕괴 시작",
    description: "[뒤틀림]의 원인이 극도의 스트레스, 불안감, 자아붕괴 등으로 판명됨. 동시다발적인 뒤틀림 현상이 전 세계적으로 발생하여 인류 문명이 서서히 무너지기 시작함."
  },
  {
    time: "1년 전",
    title: "멸망의 끝자락",
    description: "인류의 약 1%만이 생존. 반면 오염체들은 전 인류의 20%까지 상승하여 세상을 뒤덮음."
  }
];

export const factionsData: FactionInfo[] = [
  {
    id: FactionType.KSA,
    name: "K.S.A",
    fullName: "Korea Survivors Association (한국 생존자 협회)",
    location: "서울",
    color: "border-blue-500",
    description: "일부 고위 계층 등을 보호하며 견고한 요새를 설립한 공식 생존자 단체. 체계적인 군사력과 정보망을 갖추고 있으나, 내부에서도 지속해서 일어나는 뒤틀림 현상으로 골머리를 앓고 있다."
  },
  {
    id: FactionType.BAEKGOL,
    name: "백골교",
    location: "인천",
    color: "border-zinc-300",
    description: "뒤틀림이 인류를 구원한다고 믿는 광신도 사이비 종교단체. 생각보다 규모가 크며, 오염과 죽음을 찬양하며 맹목적인 믿음을 강요한다."
  },
  {
    id: FactionType.CRA,
    name: "C.R.A",
    fullName: "Civilian Rescue Association (민간인 구조 협회)",
    location: "강원도 (본거지) / 전국 순회",
    color: "border-red-600",
    description: "민간업체, 군인들 등이 자발적으로 모여 설립한 구조 단체. 전국을 돌아다니며 생존자를 구출하는 헌신적인 활동을 펼친다."
  },
  {
    id: FactionType.CORRUPTED,
    name: "오염체",
    location: "전역",
    color: "border-purple-600",
    description: "뒤틀림이 발생한 자들. 대부분의 개체는 이성을 잃은 좀비 같은 상태이나, 일부는 정신을 유지하고 있다. 하지만 그들도 역시 머릿속에 울리는 목소리를 따라 인류를 공격하려는 본능에 시달린다."
  }
];

export const charactersData: Character[] = [
  // K.S.A
  {
    id: "ksa-1", name: "강마리", gender: "여", age: "23", mbti: "ISTP",
    keywords: ["침착한", "무심한"], traits: "이론보다 감각과 기술,외면과 내면 모두 차가운",
    quote: "말 길게 하지 마. 타겟 좌표만 줘.", weapon: "저격소총", position: "K.S.A 2과 팀장",
    ability: "침묵 (주위의 모든 소리제거)", rank: "1급", appearance: "붉은색 포티테일, 금안",
    code: "c", faction: FactionType.KSA
  },
  {
    id: "ksa-2", name: "이윤슬", gender: "여", age: "26", mbti: "ISTJ",
    keywords: ["원칙주의", "효율성", "무감정"], traits: "철저한 계획,감정표현이 거의 없음",
    quote: "불필요한 대화는 생략해. 비효율적이니까.", weapon: "샷건", position: "K.S.A 협회장",
    ability: "이동 (순식간에 상대의 뒤로 이동)", rank: "0급", appearance: "은색 단발, 적안",
    code: "d", faction: FactionType.KSA
  },
  {
    id: "ksa-3", name: "홍예서", gender: "여", age: "24", mbti: "ISTP",
    keywords: ["완벽주의", "침착한"], traits: "냉소적인 유머감각(뼈때리는 말들),외유내강",
    quote: "잡담은 끝났나요? 장전이나 하세요.", weapon: "기관단총", position: "K.S.A 2과 팀원",
    ability: "전투보조 (자신의 총알의 속도와 파괴력 증가)", rank: "2급", appearance: "귀여운 얼굴, 주황색 양갈래, 금안",
    code: "g", faction: FactionType.KSA
  },
  {
    id: "ksa-4", name: "권예준", gender: "남", age: "23", mbti: "INFJ",
    keywords: ["완벽주의", "고독한"], traits: "무심한 듯 섬세함,나서기 보단 뒤에서 판을 짜줌",
    quote: "타겟 다운. 다음 위치로 이동하겠습니다.", weapon: "돌격소총", position: "K.S.A 2과 팀원",
    ability: "프레임 (1초를 10번 으로 나눠 순식간에 움직임)", rank: "2급", appearance: "노란색 머리, 하늘색 눈동자",
    code: "h", faction: FactionType.KSA
  },
  {
    id: "ksa-5", name: "오선우", gender: "남", age: "28", mbti: "ENTJ",
    keywords: ["원칙주의", "효율성"], traits: "철저한 자기관리, 무거운 책임감, 절대적인 카리스마",
    quote: "확인 사살까지 끝내라. 자비는 사치다.", weapon: "돌격소총", position: "K.S.A 1과 팀장",
    ability: "각성 (일시적으로 신체능력 극대화)", rank: "1급", appearance: "흑발, 적안",
    code: "j", faction: FactionType.KSA
  },
  {
    id: "ksa-6", name: "서나리", gender: "여", age: "26", mbti: "ISFJ",
    keywords: ["예의바름", "원칙중시"], traits: "사소한 배려,안정성 중시",
    quote: "다친 곳은 없으신가요? ...다행이네요. 장전이나 도와드리죠.", weapon: "돌격소총", position: "K.S.A 1과 팀원",
    ability: "정밀사격 (명중확률 극대화)", rank: "2급", appearance: "푸른색 단발 머리, 금안",
    code: "k", faction: FactionType.KSA
  },
  {
    id: "ksa-7", name: "정나연", gender: "여", age: "21", mbti: "INFP",
    keywords: ["무심함", "몽환적"], traits: "직관력이 좋음, 공허함 속에 천재성, 낮은 사회적 에너지, 자신만의 세계",
    quote: "여긴 너무 시끄러워. 빨리 끝내고 자고 싶어.", weapon: "경기관총", position: "K.S.A 1과 팀원",
    ability: "예지 (5초 후를 미리 예지)", rank: "2급", appearance: "은색 단발 머리, 금안",
    code: "l", faction: FactionType.KSA
  },
  // 백골교
  {
    id: "b-1", name: "김아인", gender: "여", age: "27", mbti: "ENFJ",
    keywords: ["신비주의", "성스러움", "냉혹함"], traits: "심미주의자,결단력이 좋음,압도적 위압감",
    quote: "백골의 뜻 아래, 모든 혼란은 정화될 것입니다.", weapon: "장검", position: "백골교 교주",
    ability: "잔상 (잔상이 보일 정도의 속도 움직임. 검을 휘두르면 참격이 날아감)", rank: "0급", appearance: "적갈색 장발, 금안",
    code: "q", faction: FactionType.BAEKGOL
  },
  {
    id: "b-2", name: "백태린", gender: "여", age: "24", mbti: "ISFP",
    keywords: ["조용함", "잔혹함"], traits: "교주에게 맹목적 의존, 뛰어난 집중력",
    quote: "교주님이 말씀하셨어요. 당신은 정화되어야 한다고.", weapon: "권총", position: "백골교 신자",
    ability: "분신 (자신의 분신을 3개까지 소환가능)", rank: "2급", appearance: "하늘색 장발, 흑안",
    code: "p", faction: FactionType.BAEKGOL
  },
  {
    id: "b-3", name: "정하영", gender: "여", age: "22", mbti: "INFP",
    keywords: ["몽환적", "수동적"], traits: "평소에는 유순, 명령을 받으면 거절 없이 잔혹한 임무수행, 극도로 불안해 함",
    quote: "방아쇠를 당길 때마다 마음이 아파요. 하지만... 멈출 순 없네요.", weapon: "권총", position: "백골교 신자",
    ability: "무통 (일시적으로 자신이 느끼는 고통의 감각 제거)", rank: "2급", appearance: "초록색 단발, 금안",
    code: "n", faction: FactionType.BAEKGOL
  },
  {
    id: "b-4", name: "이연서", gender: "여", age: "26", mbti: "ISTJ",
    keywords: ["냉철함", "결벽증"], traits: "머리가 좋음, 사이코패스, 현실주의, 이성적",
    quote: "질서를 어지럽히는 자에게 줄 자비는... 제게 남아있지 않아서요", weapon: "권총", position: "백골교 집행자",
    ability: "정신간섭 (상대의 정신에 간섭하며 혼동을 줌)", rank: "1급", appearance: "보라색 장발, 금안",
    code: "m", faction: FactionType.BAEKGOL
  },
  // 오염체
  {
    id: "o-1", name: "배한결", gender: "남", age: "30", mbti: "ISTP",
    keywords: ["고독함", "냉소적"], traits: "허무주의적 태도, 쿨한 성격, 뛰어난 전투 효율, 자유주의자",
    quote: "내 끝은 내가 정해. 너희 같은 놈들 손엔 안 죽어.", weapon: "오염된 카타나", position: "정신유지 오염체",
    ability: "공간참•오염 (공간을 베는 오염된 참격을 날림)", rank: "0급", appearance: "흑발, 청안, 삿갓을 씀",
    code: "w", faction: FactionType.CORRUPTED
  },
  {
    id: "o-2", name: "마세은", gender: "여", age: "27", mbti: "ENFJ",
    keywords: ["퇴폐적", "자기애"], traits: "지적인 쾌락주의, 여유로운 광기, 변덕스러움, 뒤틀림을 진화로 받아들임",
    quote: "나랑 같이 이 검은 바다에 빠져볼래? 생각보다 따뜻할지도 몰라.", weapon: "곰방대", position: "정신유지 오염체",
    ability: "흑연•오염 (타인의 정신을 파괴하는 오염된 연기를 뿜음)", rank: "1급", appearance: "흑백 단발머리, 어두운 적안",
    code: "y", faction: FactionType.CORRUPTED
  },
  {
    id: "o-3", name: "정로아", gender: "여", age: "25", mbti: "ISTJ",
    keywords: ["단호함", "냉혹함"], traits: "강력한 무력, 말이 적음, 간결하고 단호함, 타인과의 교류 거부",
    quote: "사라져라. 너는 내 경로에 존재할 가치가 없다.", weapon: "장검", position: "정신유지 오염체",
    ability: "위압감•오염 (존재만으로 주위에 극도의 긴장감을 줌)", rank: "1급", appearance: "흑색 장발, 금안, 검정색 로브",
    code: "z", faction: FactionType.CORRUPTED
  },
  {
    id: "o-4", name: "오민재", gender: "남", age: "31", mbti: "ISFP",
    keywords: ["체념적", "고독함"], traits: "실전파, 오염에 대한 체념, 무관심한 태도",
    quote: "아, 몸이 좀 무겁다 했더니... 또 이 검은 게 올라오네. 귀찮게.", weapon: "야구 방망이", position: "정신유지 오염체",
    ability: "검은 손•오염 (바닥에서 검은손을 소환함)", rank: "2급", appearance: "갈색 머리, 흑안",
    code: "B", faction: FactionType.CORRUPTED
  },
  // C.R.A
  {
    id: "cra-1", name: "유지안", gender: "여", age: "26", mbti: "ENTJ",
    keywords: ["저돌적", "직설적"], traits: "직설적이고 화끈함, 행동으로 보여줌, 강한 생존본능, 전 K.S.A 1과",
    quote: "내 뒤에 딱 붙어 있어. 길은 내가 뚫을 테니까.", weapon: "붉은 광선검", position: "C.R.A 대장",
    ability: "신속 (최대 음속으로 이동)", rank: "0급", appearance: "붉은 포니테일, 청안",
    code: "r", faction: FactionType.CRA
  },
  {
    id: "cra-2", name: "유준영", gender: "남", age: "21", mbti: "ISFP",
    keywords: ["무심함", "냉소적"], traits: "현실주의적 사고, 자유로운 영혼",
    quote: "귀찮게... 그냥 한꺼번에 덤벼. 한 발에 끝내줄 테니까.", weapon: "샷건", position: "C.R.A 대원",
    ability: "글리치 (자신의 몸에 글리치 효과 발생. 절반 확률로 공격 무시)", rank: "2급", appearance: "파란색 머리, 파란색 눈",
    code: "v", faction: FactionType.CRA
  },
  {
    id: "cra-3", name: "정이솔", gender: "여", age: "27", mbti: "INTJ",
    keywords: ["무미건조", "직관적"], traits: "뛰어난 집중력, 통찰력이 좋음, 속으로 은근한 자부심",
    quote: "오염체 제거 완료. 다음 좌표 불러주세요.", weapon: "지정사수소총", position: "C.R.A 대원",
    ability: "지속출혈 (총알 명중시 명중 대상에게 큰 출혈을 입힘)", rank: "1급", appearance: "노란색 장발, 적안",
    code: "t", faction: FactionType.CRA
  }
];