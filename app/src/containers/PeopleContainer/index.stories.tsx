import * as React from "react";
import * as Container from './'
import {MemoryRouter} from "react-router-dom";
import {Meta} from '@storybook/react/types-6-0';

const meta: Meta = {
  title: 'App/Containers',
  decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>]
}
export default meta;

export const PeopleContainer = () => <Container.default />
PeopleContainer.args = {
}