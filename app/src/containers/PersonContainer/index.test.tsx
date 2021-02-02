import * as React from "react";
import {render} from "@testing-library/react";
import {PersonContainer as Container} from './';

describe('<PeopleContainer />', () => {
  it('renders without crashing', () => {
    render(
      <Container index={1}/>,
    );
  });
});