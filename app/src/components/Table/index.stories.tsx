import * as React from "react";
import {PeopleTable as Component, PeopleTableProps} from "./";

export default {
  title: "App/Components",
};

export const Table = (args: PeopleTableProps) => <Component {...args} />;
Table.args = {
  people: []
}
