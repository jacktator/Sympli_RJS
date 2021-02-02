import * as React from "react";
import {PersonCard as Component, PersonCardProps} from "./";
import {PERSON} from "./__mock__";
import {MemoryRouter} from "react-router-dom";
import {Meta} from '@storybook/react/types-6-0';

const meta: Meta = {
  title: "App/Components",
  decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>]
};
export default meta;

export const PersonCard = (args: PersonCardProps) => <Component {...args} />;
PersonCard.args = {
  person: PERSON
}
