import * as React from "react";
import {ERROR_MESSAGE} from "../../utils/constants";
import {GenericErrorWrapper} from "./index.style";

export const GenericError = () => {
  return <GenericErrorWrapper>{ERROR_MESSAGE}</GenericErrorWrapper>;
};
