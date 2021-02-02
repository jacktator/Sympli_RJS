import {Redirect, Route, Switch, useParams} from "react-router-dom";
import {PATH_PEOPLE} from "../../utils/constants";
import React from "react";
import {HomeWrapper} from "./index.style";
import {Grid} from "@material-ui/core";

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
    <HomeWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <PeopleContainer />
        </Grid>
        <Grid item xs={12} md={5}>
          <Switch>
            <Route exact path={`${PATH_PEOPLE}/:index`}>
              <PersonContainerWithIndex />
            </Route>
            <Redirect to={PATH_PEOPLE} />
          </Switch>
        </Grid>
      </Grid>
    </HomeWrapper>
  )
}

export default Home;