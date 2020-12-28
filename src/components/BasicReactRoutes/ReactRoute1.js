import React from "react";
import { Route, Switch } from "react-router-dom";

import NavigationBar from "./NavigationBar";
import Home from "./Home";
import About from "./About";
import ContactUs from "./ContactUs";
import Services from "./Services";

const ReactRoute1 = () => {
  return (
    <div className="right-container">
      <NavigationBar />
      <div className="page-content">
        <Switch>
          <Route path="/BasicReactRoutes" component={Home} exact />
          <Route path="/BasicReactRoutes/ContactUs" component={ContactUs} />
          <Route path="/BasicReactRoutes/About" component={About} />
          <Route path="/BasicReactRoutes/Services" component={Services} />
        </Switch>
      </div>
    </div>
  );
};

export default ReactRoute1;
