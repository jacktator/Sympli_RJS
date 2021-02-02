import * as React from 'react';
import {useEffect} from 'react';
import {initialState, PersonState} from './state';
import {PersonContext} from './context';
import * as api from "../../../api";
import {mapAPIPersonToPerson} from "./utils";
import * as Sentry from "@sentry/browser";
import axios from "axios";
import {SWAPIFilmResponse} from "../../../api/types";

export interface PersonProviderProps {
  index: number;
}

export const PersonProvider: React.FC<PersonProviderProps> = ({
  children,
  index
}) => {
  const [state, setState] = React.useState<PersonState>(initialState);

  const getPerson = async (i: number) => {
    const {data} = await api.getPerson(i);

    const requests = data.films.map(film => {
      return axios.get(film.replace("http", "https")) as Promise<SWAPIFilmResponse>
    });
    const films = await axios.all(requests);

    const person = mapAPIPersonToPerson(data, films);

    setState(state => {
      return {
        isLoading: false,
        person: person,
      }
    });
  }

  useEffect(() => {
    setState(state => {
      return {
        ...state,
        isLoading: true,
      }
    });

    try {
      void getPerson(index);
    } catch (e) {
      Sentry.captureException(e);
    }
  }, [index]);

  return <PersonContext.Provider value={state}>{children}</PersonContext.Provider>;
};
