import {PeopleProvider, usePeople} from "./provider";
import {PageAction} from "./provider/reducer";
import {PeopleTable} from "../../components/PeopleTable";
import * as React from "react";

export const PeopleConsumer = () => {

  const {isLoading, count, results, dispatch, page} = usePeople();

  const handleChangePage = (newPage: number) => {
    dispatch({
      action: PageAction.UPDATE,
      page: newPage
    })
  };

  return (
    <>
      {
        isLoading ? (
          <span>Loading...</span>
        ) : (
          <PeopleTable people={results} page={page} count={count} handleChangePage={handleChangePage}/>
        )
      }
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