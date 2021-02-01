import {PeopleProvider, usePeople} from "./provider";

export const PeopleConsumer = () => {

  const {isLoading, results} = usePeople();

  return isLoading ? (
      <span>Loading...</span>
    ) : (
      <ul>
        {
          results.map(person => <li key={person.name}>{person.name}</li>)
        }
      </ul>
    )
}

export const PeopleContainer = () => {
  return (
    <PeopleProvider>
      <PeopleConsumer />
    </PeopleProvider>
  )
}