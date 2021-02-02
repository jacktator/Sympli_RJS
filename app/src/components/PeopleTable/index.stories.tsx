import * as React from "react";
import {PeopleTable as Component, PeopleTableProps} from "./";

export default {
  title: "App/Components",
};

export const PeopleTable = (args: PeopleTableProps) => <Component {...args} />;
PeopleTable.args = {
  people: [],
  count: 10,
  page: 5
}
