import {Person} from '../../../utils/types';

export interface PeopleState {
  isLoading: boolean;
  count: number;
  next?: string;
  previous?: string;
  results: Person[];
}

export const initialState: PeopleState = {
  isLoading: true,
  count: 0,
  next: undefined,
  previous: undefined,
  results: []
};
