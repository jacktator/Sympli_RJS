import {useContext} from 'react';
import {PeopleContext} from './context';

export const usePeople = () => useContext(PeopleContext);
