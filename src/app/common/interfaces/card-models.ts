
export interface CardResults {
  results: Array<CardData>;
  resultCount: number;

  // TODO: Add paging?
}

export interface CardSearch {
  name?: string;
  type?: string;
  set?: string;
  artist?: string;
}

export interface CardData {
  id: string;
  name?: string;
  initiative?: number;
  type?: string;
  subType?: string;
  ability?: string;
  element?: string;
  flavorText?: string;
  set?: Set;
  collectorsNumber?: string;
  artist?: string;
  attackGrid?: Array<Array<number|null>>;
  rulings?: Array<Ruling>;

  life?: number;
  speed?: number;
  wisdom?: number;
  damage?: number;
  defense?: number;
}

export interface Set {
  code: string;
  name: string;
  year: string;
}

export interface Ruling {
  timestamp: Date;
  ruling: string;
}

export interface Type {
  name: string;
  id: string;
}
