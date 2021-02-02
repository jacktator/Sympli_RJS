import {Film, Person} from "../../../utils/types";
import {SWAPIPerson} from "../../../api/types";

export const mapAPIPersonToPerson = (results: SWAPIPerson[]): Person[] => results.map(resPerson => {
  const {
    name,
    height,
    birth_year,
    gender,
    mass,
    films: resFilms
  } = resPerson;

  const films = resFilms.map(resFilm => {
    return {
      link: resFilm
    } as Film;
  })

  return {
    name,
    height,
    birth_year,
    gender,
    films,
    mass,
  } as Person;
})