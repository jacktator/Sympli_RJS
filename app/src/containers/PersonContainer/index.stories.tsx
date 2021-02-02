import * as React from "react";
import * as Container from './'

export default {
  title: 'App/Containers',
}

export const PersonContainer = (args: Container.PersonContainerProps) => <Container.default {...args} />
PersonContainer.args = {
  index: 1
}