import {createContext} from 'react';
import {initialState, PersonState} from './state';

export const PersonContext = createContext<PersonState>(initialState);
