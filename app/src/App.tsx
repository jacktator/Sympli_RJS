import React, {lazy, Suspense} from "react";
import ErrorBoundary from "./containers/ErrorBoundary";
import {BrowserRouter as Router} from "react-router-dom";
import {Loading} from "./components/Loading";

const Home = lazy(() => import('./page/Home'));

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <AppWithRouter />
      </Suspense>
    </ErrorBoundary>
  );
};

const AppWithRouter = () => {
  return (
    <Router>
      {/*<Navbar />*/}
      <Home />
    </Router>
  );
};

export default App;
