import {CircularProgress} from "@material-ui/core";
import * as React from "react";
import {Loader, LoadingWrapper} from "./index.style";

export const Loading = () => {
  return (
    <LoadingWrapper>
      <Loader>
        <CircularProgress />
      </Loader>
    </LoadingWrapper>
  )
}