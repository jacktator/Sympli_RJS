import {Dispatch} from "react";
import {Person} from '../../../utils/types';
import {PageAction} from "./reducer";

export interface PeopleState {
  isLoading: boolean;
  count: number;
  page: number;
  results: Person[];
  dispatch: Dispatch<PageAction>
}

export const initialState: PeopleState = {
  isLoading: true,
  count: 0,
  page: 1,
  results: [],
  dispatch: () => {}
};
