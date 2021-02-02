import {Redirect, Route, Switch, useParams} from "react-router-dom";
import {PATH_PEOPLE} from "../../utils/constants";
import React from "react";

const PeopleContainer = React.lazy(() => import("../../containers/PeopleContainer"));
const PersonContainer = React.lazy(() => import("../../containers/PersonContainer"));

interface IndexProps {
  index: string
}
const PersonContainerWithIndex = () => {
  let { index } = useParams<IndexProps>();

  return isNaN(Number(index)) ? (
    <Redirect to={PATH_PEOPLE} />
  ) : (
    <PersonContainer index={parseInt(index)} />
  )
}

const Home = () => {
  return (
    <div>
      <PeopleContainer />
      <Switch>
        <Route exact path={`${PATH_PEOPLE}/:index`}>
          <PersonContainerWithIndex />
        </Route>
        <Redirect to={PATH_PEOPLE} />
      </Switch>
    </div>
  )
}

export default Home;