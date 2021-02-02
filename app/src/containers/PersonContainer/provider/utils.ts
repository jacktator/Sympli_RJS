import {Film, Person} from "../../../utils/types";
import {SWAPIFilmResponse, SWAPIPerson} from "../../../api/types";

export const mapAPIPersonToPerson = (person: SWAPIPerson, resFilms: SWAPIFilmResponse[] = []): Person => {
  const {
    name,
    height,
    birth_year,
    gender,
    mass
  } = person;

  const films = resFilms.map(resFilm => {
    const {
      title,
      url
    } = resFilm.data;
    return {
      title: title,
      link: url
    } as Film;
  })

  console.log(films)
  return {
    name,
    height,
    birth_year,
    gender,
    films,
    mass
  } as Person;
}