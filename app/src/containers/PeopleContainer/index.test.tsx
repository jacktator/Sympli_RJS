import * as React from "react";
import {render} from "@testing-library/react";
import PeopleContainer from './';

describe('<PeopleContainer />', () => {
  it('renders without crashing', () => {
    render(
      <PeopleContainer />,
    );
  });
});