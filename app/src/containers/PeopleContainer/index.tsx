import {PeopleProvider, usePeople} from "./provider";
import {PageAction} from "./provider/reducer";
import {PeopleTable} from "../../components/Table";

export const PeopleConsumer = () => {

  const {isLoading, count, results, dispatch, page} = usePeople();

  const maxPage = Math.floor(count / results.length);
  return (
    <>
      {
        isLoading ? (
          <span>Loading...</span>
        ) : (
          <PeopleTable people={results} />
        )
      }
      <button disabled={page === 1} onClick={() => dispatch(PageAction.PREVIOUS)}>Previous</button>
      <span>{page}</span>
      <button disabled={page === maxPage} onClick={() => page < maxPage && dispatch(PageAction.NEXT)}>Next</button>
    </>
  )
}

export interface PeopleContainerProps {
}
export const PeopleContainer = () => {
  return (
    <PeopleProvider>
      <PeopleConsumer />
    </PeopleProvider>
  )
}