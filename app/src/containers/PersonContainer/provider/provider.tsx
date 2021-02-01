import * as React from 'react';
import {useEffect} from 'react';
import {initialState, PersonState} from './state';
import {PersonContext} from './context';
import * as api from "../../../api";
import {mapAPIPersonToPerson} from "./utils";
import * as Sentry from "@sentry/browser";

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

    const person = mapAPIPersonToPerson(data);

    setState({
      isLoading: false,
      person: person,
    });
  }

  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    });

    try {
      void getPerson(index);
    } catch (e) {
      Sentry.captureException(e);
    }
  }, [index]);

  return <PersonContext.Provider value={state}>{children}</PersonContext.Provider>;
};
