import {useContext} from 'react';
import {PersonContext} from './context';

export const usePerson = () => useContext(PersonContext);
