import {Person} from "../../../utils/types";
import {SWAPIPerson} from "../../../api/types";

export const mapAPIPersonToPerson = (person: SWAPIPerson): Person => {
  const {
    name,
    height,
    birth_year,
    gender,
    films
  } = person;

  return {
    name,
    height,
    birth_year,
    gender,
    films,
  } as Person;
}