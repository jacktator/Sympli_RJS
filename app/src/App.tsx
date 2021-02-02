import React, {lazy, Suspense} from "react";
import ErrorBoundary from "./containers/ErrorBoundary";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Loading} from "./components/Loading";
import {PATH_PEOPLE} from "./utils/constants";
import {Navbar} from "./components/Navbar";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {themeOptions} from "./theme";

const Home = lazy(() => import('./page/Home'));

const theme = createMuiTheme(themeOptions);

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <AppWithTheme />
      </Suspense>
    </ErrorBoundary>
  );
};

const AppWithTheme = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppWithRouter />
    </ThemeProvider>
  )
}

const AppWithRouter = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={PATH_PEOPLE}>
          <Home />
        </Route>
        <Redirect to={PATH_PEOPLE} />
      </Switch>
    </Router>
  );
};

export default App;
