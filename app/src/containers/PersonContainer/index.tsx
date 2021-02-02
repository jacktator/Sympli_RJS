import {PersonProvider, usePerson} from "./provider";
import {PersonCard} from "../../components/PeopleCard";

export const PersonConsumer = () => {

  const {isLoading, person} = usePerson();

  return isLoading ? (
      <span>Loading...</span>
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