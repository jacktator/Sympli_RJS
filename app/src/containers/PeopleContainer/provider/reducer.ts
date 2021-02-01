import {INITIAL_PAGE} from "./constants";

export enum PageAction {
  PREVIOUS = "PREVIOUS",
  NEXT = "NEXT"
}


export const pageReducer = (state: number, action: PageAction) => {
  switch (action) {
    case PageAction.PREVIOUS:
      return state > 1 ? state - 1 : INITIAL_PAGE;
    case PageAction.NEXT:
      return state + 1;
    default:
      throw new Error();
  }
}