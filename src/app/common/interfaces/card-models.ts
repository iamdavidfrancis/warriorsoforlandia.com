
export interface CardResults {
  results: Array<CardData>;
  resultCount: number;
  totalCount: number;

  // TODO: Add paging?
}

export interface CardSearch {
  page?: number;
  pageSize?: number;
  usePaging?: boolean;
  name?: string;
  type?: string;
  set?: string;
  artist?: string;
  sortOrder?: string;
  textSearch?: string;
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

export interface SortOrder {
  display: string;
  value: string;
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
