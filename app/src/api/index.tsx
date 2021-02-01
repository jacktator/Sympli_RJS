import {client} from "./client";
import {SWAPIPeopleResponse, SWAPIPersonResponse} from "./types";

export const getPeople = (page: number): Promise<SWAPIPeopleResponse> => client.get(`/people/?page=${page}`)

export const getPerson = (index: number): Promise<SWAPIPersonResponse> => client.get(`/people/${index}/`)