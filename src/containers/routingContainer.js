import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./headerContainer";
import DhashboardContainer from "./dashboardContainer";

const appContainer = () => (
  <>
    <HashRouter>
      <>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={DhashboardContainer} />
        </Switch>
      </>
    </HashRouter>
  </>
);

export default appContainer;
