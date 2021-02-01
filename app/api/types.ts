export interface SWAPIPerson {
  name: string;
  height: string;
  birth_year: string;
  gender: string;
  films: string[];
  [others: string]: any;
}

export interface SWAPIPeopleResponse {
  count: number;
  next?: string;
  previous?: string;
  results: SWAPIPerson[];
}

export interface SWAPIPersonResponse extends SWAPIPerson {}