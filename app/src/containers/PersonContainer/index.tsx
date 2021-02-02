import {PersonProvider, usePerson} from "./provider";
import {PersonCard} from "../../components/PersonCard";
import * as React from "react";
import {Loading} from "../../components/Loading";
import {Paper} from "@material-ui/core";

export const PersonConsumer = () => {

  const {isLoading, person} = usePerson();

  return (
    <Paper>
      {
        !isLoading && person ? (
          <PersonCard person={person} />
        ) : (
          <Loading />
        )
      }
    </Paper>
  )
}

export interface PersonContainerProps {
  index: number;
}
const PersonContainer = ({index}: PersonContainerProps) => {
  return (
    <PersonProvider index={index}>
      <PersonConsumer />
    </PersonProvider>
  )
}

export default PersonContainer;