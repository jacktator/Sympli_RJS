import {PeopleProvider, usePeople} from "./provider";
import {PageAction} from "./provider/reducer";
import {PeopleTable} from "../../components/PeopleTable";
import * as React from "react";
import {Loading} from "../../components/Loading";
import {Paper} from "@material-ui/core";

export const PeopleConsumer = () => {

  const {isLoading, count, results, dispatch, page} = usePeople();

  const handleChangePage = (newPage: number) => {
    dispatch({
      action: PageAction.UPDATE,
      page: newPage
    })
  };

  return (
    <Paper>
      {
        isLoading ? (
          <Loading />
        ) : (
          <PeopleTable people={results} page={page} count={count} handleChangePage={handleChangePage}/>
        )
      }
    </Paper>
  )
}

export interface PeopleContainerProps {
}
const PeopleContainer = () => {
  return (
    <PeopleProvider>
      <PeopleConsumer />
    </PeopleProvider>
  )
}

export default PeopleContainer;