import {Redirect, Route, Switch} from "react-router-dom";
import {PATH_PEOPLE} from "../../utils/constants";
import React from "react";

export const Home = () => {
  return (
    <div>
      <div>Table</div>
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