import {Dispatch} from "react";
import {Person} from '../../../utils/types';
import {PagePayload} from "./reducer";

export interface PeopleState {
  isLoading: boolean;
  count: number;
  page: number;
  results: Person[];
  dispatch: Dispatch<PagePayload>
}

export const initialState: PeopleState = {
  isLoading: true,
  count: 0,
  page: 1,
  results: [],
  dispatch: () => {}
};
