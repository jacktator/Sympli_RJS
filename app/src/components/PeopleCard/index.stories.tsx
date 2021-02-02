import * as React from "react";
import {PersonCard as Component, PersonCardProps} from "./";
import {PERSON} from "./__mock__";

export default {
  title: "App/Components",
};

export const PersonCard = (args: PersonCardProps) => <Component {...args} />;
PersonCard.args = {
  person: PERSON
}
