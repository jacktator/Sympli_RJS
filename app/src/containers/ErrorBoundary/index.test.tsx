import ErrorBoundary from "./index";
import {render} from "@testing-library/react";
import {ERROR_MESSAGE} from "../../utils/constants";

describe("<ErrorBoundary />", () => {
  it(`shows the fallback when there's an error`, () => {
    const Throws = () => {
      throw new Error("Network Error!");
    };

    const { getByText, unmount } = render(
      <ErrorBoundary>
        <Throws />
      </ErrorBoundary>
    );
    getByText(ERROR_MESSAGE);
    unmount();
  });
});
