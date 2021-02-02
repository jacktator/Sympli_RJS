import {mapAPIPersonToPerson} from "./utils";
// eslint-disable-next-line jest/no-mocks-import
import {PERSON as response} from "../../../api/__mocks__";
import {PERSON} from "./__mock__";

describe("mapAPIPersonToPerson()", () => {
  it("should map Person response to Person", () => {
    const person = mapAPIPersonToPerson(response.data);

    expect(person).toMatchObject(PERSON);
  });
});