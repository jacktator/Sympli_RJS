import {Redirect, Route, Switch} from "react-router-dom";
import {PATH_PEOPLE} from "../../utils/constants";
import React from "react";
import {PeopleContainer} from "../../containers/PeopleContainer";

const Home = () => {
  return (
    <div>
      <PeopleContainer />
      <Switch>
        <Route exact path={`${PATH_PEOPLE}`}>
        </Route>
        <Route exact path={`${PATH_PEOPLE}/:index`}>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Person
          </a>
        </Route>
        <Redirect to={PATH_PEOPLE} />
      </Switch>
    </div>
  )
}

export default Home;