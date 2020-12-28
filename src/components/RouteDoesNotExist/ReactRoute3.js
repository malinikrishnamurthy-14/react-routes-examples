import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import NotFound from "./NotFound";

const ReactRoute3 = () => {
  return (
    <div className="right-container">
      <p className="not-found">This is the ReactRoute3.js component. In this component, a route is configured without any path and therefore loads NotFound component by default.</p>
      <Switch>
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
};

export default ReactRoute3;
