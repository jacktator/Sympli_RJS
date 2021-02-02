export interface Film {
  title: string;
  link: string;
}

export interface Person {
  name: string;
  height: string;
  birth_year: string;
  gender: string;
  films: Film[];
}