import {PersonProvider, usePerson} from "./provider";
import {PersonCard} from "../../components/PeopleCard";
import * as React from "react";
import {Loading} from "../../components/Loading";

export const PersonConsumer = () => {

  const {isLoading, person} = usePerson();

  return isLoading ? (
      <Loading />
    ) : (
      <PersonCard person={person} />
    )
}

export interface PersonContainerProps {
  index: number;
}
export const PersonContainer = ({index}: PersonContainerProps) => {
  return (
    <PersonProvider index={index}>
      <PersonConsumer />
    </PersonProvider>
  )
}