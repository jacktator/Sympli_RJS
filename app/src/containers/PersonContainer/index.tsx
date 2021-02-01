import {PersonProvider, usePerson} from "./provider";

export const PersonConsumer = () => {

  const {isLoading, person} = usePerson();

  return isLoading ? (
      <span>Loading...</span>
    ) : (
      <ul>
        {
          person?.name
        }
        {
          person?.birth_year
        }
      </ul>
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