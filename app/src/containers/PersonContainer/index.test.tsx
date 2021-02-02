import * as React from "react";
import {render} from "@testing-library/react";
import PersonContainer from './';

describe('<PeopleContainer />', () => {
  it('renders without crashing', () => {
    render(
      <PersonContainer index={1}/>,
    );
  });
});