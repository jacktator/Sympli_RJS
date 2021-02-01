import React from "react";
import ErrorBoundary from "./containers/ErrorBoundary";
import {BrowserRouter as Router} from "react-router-dom";
import {Home} from "./page/Home";

const App = () => {
  return (
    <ErrorBoundary>
      <AppWithRouter />
    </ErrorBoundary>
  );
}

const AppWithRouter = () => {
  return (
    <Router>
      <Home />
    </Router>
  )
}

export default App;
