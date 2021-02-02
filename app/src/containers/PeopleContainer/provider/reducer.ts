export enum PageAction {
  UPDATE = "UPDATE",
}

export interface PagePayload {
  action: PageAction;
  page: number;
}

export const pageReducer = (state: number, payload: PagePayload) => {
  switch (payload.action) {
    case PageAction.UPDATE:
      return payload.page > 0 ? payload.page : 1; // Ensure first page is always 1
    default:
      throw new Error(`pageReducer(): Unexpected Action: ${payload.action}`);
  }
}