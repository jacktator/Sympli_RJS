export interface SWAPIPerson {
  name: string;
  height: string;
  birth_year: string;
  gender: string;
  films: string[];
  [others: string]: any;
}

export interface SWAPIPeopleResponse {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: SWAPIPerson[];
  }
}

export interface SWAPIPersonResponse {
  data: SWAPIPerson
}