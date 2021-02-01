import * as React from 'react';
import {useEffect} from 'react';
import {initialState, PeopleState} from './state';
import {PeopleContext} from './context';
import * as api from "../../../api";
import {mapAPIPersonToPerson} from "./utils";
import * as Sentry from "@sentry/browser";
import {pageReducer} from "./reducer";
import {INITIAL_PAGE} from "./constants";

export interface PeopleProviderProps {
}

export const PeopleProvider: React.FC<PeopleProviderProps> = ({
                                                                children,
}) => {
  // Since Pagination is the only control user has, only using Redux-like reducer for page.
  const [page, dispatch] = React.useReducer(pageReducer, INITIAL_PAGE);

  // For Network data, using React setState
  const [state, setState] = React.useState<PeopleState>(initialState);

  const getPeople = async (p: number) => {
    const res = await api.getPeople(p);

    const {count, results} = res.data;

    const people = results ? mapAPIPersonToPerson(results) : [];

    setState({
      ...state,
      isLoading: false,
      count,
      results: people
    });
  }

  useEffect(() => {
    setState({
      ...state,
      isLoading: true,
    });

    try {
      void getPeople(page);
    } catch (e) {
      Sentry.captureException(e);
    }
  }, [page]);

  return (
    <PeopleContext.Provider value={{
        ...state,
        page,
        dispatch
      }}>
      {children}
    </PeopleContext.Provider>
  );
};
