import * as React from 'react';
import {useEffect} from 'react';
import {initialState, PeopleState} from './state';
import {PeopleContext} from './context';
import * as api from "../../../api";
import {mapAPIPersonToPerson} from "./utils";
import * as Sentry from "@sentry/browser";

export interface PeopleProviderProps {
}

export const PeopleProvider: React.FC<PeopleProviderProps> = ({
  children,
}) => {
  const [state, setState] = React.useState<PeopleState>(initialState);

  const getPeople = async () => {
    const res = await api.getPeople();

    const {count, next, previous, results} = res.data;
    console.log("res", res)

    const people = results ? mapAPIPersonToPerson(results) : [];

    setState({
      isLoading: false,
      count,
      next: next || undefined,
      previous: previous || undefined,
      results: people
    });
  }

  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    });

    try {
      void getPeople();
    } catch (e) {
      Sentry.captureException(e);
    }
  }, []);

  return <PeopleContext.Provider value={state}>{children}</PeopleContext.Provider>;
};
