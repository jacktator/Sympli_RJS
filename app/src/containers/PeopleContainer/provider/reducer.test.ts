import {PageAction, PagePayload, pageReducer} from './reducer';

describe("pageReducer()", () => {
  describe("when valid page is provided", () => {
    it("should return new `page`", () => {
      const state = 1;
      const newPage = 10;
      const payload: PagePayload = {
        action: PageAction.UPDATE,
        page: newPage,
      }

      const newState = pageReducer(state, payload)

      expect(newState).toEqual(newPage);
    });
  });
  describe("when invalid page is provided", () => {
    it("should return 1 as `page`", () => {
      const state = 1;
      const newPage = -1;
      const payload: PagePayload = {
        action: PageAction.UPDATE,
        page: newPage,
      }

      const newState = pageReducer(state, payload)

      expect(newState).toEqual(1);
    });
  });
});