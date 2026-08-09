export interface Shloka {
  id: string;
  chapter: number;
  verse: number;
  sanskrit: string;
  transliteration: string;
  translation: string;
  meaning: string;
}

export interface Chapter {
  id: number;
  chapter_number: number;
  name_sanskrit: string;
  name_english: string;
  name_meaning: string;
  verses_count: number;
  summary: string;
}
