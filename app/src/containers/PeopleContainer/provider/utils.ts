import {Person} from "../../../utils/types";
import {SWAPIPerson} from "../../../api/types";

export const mapAPIPersonToPerson = (results: SWAPIPerson[]): Person[] => results.map(resPerson => {
  const {
    name,
    height,
    birth_year,
    gender,
    films
  } = resPerson;

  return {
    name,
    height,
    birth_year,
    gender,
    films,
  } as Person;
})