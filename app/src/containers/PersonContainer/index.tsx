import {PersonProvider, usePerson} from "./provider";
import {PersonCard} from "../../components/PeopleCard";
import * as React from "react";
import {Loading} from "../../components/Loading";

export const PersonConsumer = () => {

  const {isLoading, person} = usePerson();

  return !isLoading && person ? (
      <PersonCard person={person} />
    ) : (
      <Loading />
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