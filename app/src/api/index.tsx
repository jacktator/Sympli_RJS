import {client} from "./client";
import {SWAPIPeopleResponse, SWAPIPersonResponse} from "./types";

export const getPeople = (): Promise<SWAPIPeopleResponse> => client.get('/people')

export const getPerson = (index: number): Promise<SWAPIPersonResponse> => client.get(`/people/${index}`)