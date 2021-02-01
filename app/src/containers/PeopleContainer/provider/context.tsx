import {createContext} from 'react';
import {initialState, PeopleState} from './state';

export const PeopleContext = createContext<PeopleState>(initialState);
