export enum FactionType {
  KSA = 'K.S.A',
  BAEKGOL = '백골교',
  CRA = 'C.R.A',
  CORRUPTED = '오염체',
}

export interface Character {
  id: string;
  name: string;
  gender: string;
  age: string;
  mbti: string;
  keywords: string[];
  traits: string;
  quote: string;
  weapon: string;
  position: string;
  ability: string;
  rank: string;
  appearance: string;
  code: string;
  faction: FactionType;
}

export interface FactionInfo {
  id: FactionType;
  name: string;
  fullName?: string;
  description: string;
  location: string;
  color: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}