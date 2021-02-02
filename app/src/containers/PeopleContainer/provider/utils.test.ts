import {mapAPIPersonToPerson} from "./utils";
// eslint-disable-next-line jest/no-mocks-import
import {PEOPLE as response} from "../../../api/__mocks__";
import {PEOPLE} from "./__mock__";

describe("mapAPIPersonToPerson()", () => {
  it("should map People response to People[]", () => {
    const people = mapAPIPersonToPerson(response.data.results);

    expect(people).toMatchObject(PEOPLE);
  });
});