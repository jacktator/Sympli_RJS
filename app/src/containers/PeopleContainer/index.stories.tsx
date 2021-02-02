import * as React from "react";
import * as Container from './'
import {MemoryRouter} from "react-router-dom";

export default {
  title: 'App/Containers',
  decorators: [(Story) => <MemoryRouter><Story/></MemoryRouter>]
}

export const PeopleContainer = () => <Container.default />
PeopleContainer.args = {
}