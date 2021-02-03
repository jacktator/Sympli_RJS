import * as React from "react";
import {ERROR_MESSAGE} from "../../utils/constants";
import {ErrorMessage, GenericErrorWrapper} from "./index.style";

export const GenericError = () => {
  return (
    <GenericErrorWrapper>
      <ErrorMessage>
        {ERROR_MESSAGE}
      </ErrorMessage>
    </GenericErrorWrapper>
  );
};
