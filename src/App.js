import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";

import LeftMenu from "./components/LeftMenu";
import LearnReactRoutes from "./components/LearnReactRoutes/LearnReactRoutes";
import ReactRoute1 from "./components/BasicReactRoutes/ReactRoute1";
import ReactRoute2 from "./components/PassDataInURL/ReactRoute2";
import ReactRoute3 from "./components/RouteDoesNotExist/ReactRoute3";
import ReactRoute4 from "./components/MultipleComponentsUnderRoute/ReactRoute4";
import ReactRoute5 from "./components/NestedRoutes/ReactRoute5";

function App() {
  return (
    <BrowserRouter>
      <div className="main-container">
        <LeftMenu />
        <Switch>
          <Route path="/" component={LearnReactRoutes} exact />
          <Route path="/BasicReactRoutes" component={ReactRoute1} />
          <Route path="/PassDataInURL" component={ReactRoute2} />
          <Route path="/ReactRoute3" component={ReactRoute3} />
          <Route path="/ReactRoute4" component={ReactRoute4} />
          <Route path="/ReactRoute5" component={ReactRoute5} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
