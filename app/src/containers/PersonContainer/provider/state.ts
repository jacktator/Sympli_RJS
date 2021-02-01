import {Person} from '../../../utils/types';

export interface PersonState {
  isLoading: boolean;
  person?: Person
}

export const initialState: PersonState = {
  isLoading: true,
  person: undefined
};
