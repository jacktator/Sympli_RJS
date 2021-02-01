import React, {Component, ErrorInfo, ReactNode} from "react";
import * as Sentry from "@sentry/browser";
import {GenericError} from "../../components/GenericError";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    Sentry.captureException(error);
  }

  public render() {
    if (this.state.hasError) {
      return <GenericError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
