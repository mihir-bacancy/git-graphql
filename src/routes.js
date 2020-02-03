import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import WithAuth from "./services/WithAuth";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={WithAuth(Home)} />
      </Switch>
    </Router>
  );
}

export default Routes;
