import React from "react";
import { Route, Switch } from "react-router-dom";

import NavigationBar from "./NavigationBar1";
import About from "./About1";
import ContactUs from "./ContactUs1";

const ReactRoute4 = () => {
  return (
    <div className="right-container">
      <NavigationBar />
      <div className="page-content">
        <Switch>

          <Route path="/ReactRoute4/ContactUs1">
            <ContactUs />
            <About />
          </Route>

          <Route path="/ReactRoute4/About1">
            <About />
            <ContactUs />
          </Route>

        </Switch>
      </div>
    </div>
  );
};

export default ReactRoute4;
