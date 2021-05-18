/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import First from "./First/First";
import Second from "./Second/Second";

export default () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path='/' exact component={First} />
          <Route path='/second' component={Second} />
        </Switch>
      </>
    </Router>
  );
};
