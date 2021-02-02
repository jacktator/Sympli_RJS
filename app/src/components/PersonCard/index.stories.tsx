import * as React from "react";
import {PersonCard as Component, PersonCardProps} from "./";
import {PERSON} from "./__mock__";
import {MemoryRouter} from "react-router-dom";

export default {
  title: "App/Components",
  decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>]
};

export const PersonCard = (args: PersonCardProps) => <Component {...args} />;
PersonCard.args = {
  person: PERSON
}
