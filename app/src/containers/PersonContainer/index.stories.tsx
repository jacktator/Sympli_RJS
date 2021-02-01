import * as React from "react";
import {PersonContainer as Component, PersonContainerProps} from './'

export default {
  title: 'App/Containers',
}

export const PersonContainer = (args: PersonContainerProps) => <Component {...args} />
PersonContainer.args = {
  index: 1
}