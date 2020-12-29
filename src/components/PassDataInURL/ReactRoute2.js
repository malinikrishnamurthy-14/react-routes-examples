import React from "react";
import Home from "./Home";
import ProductsList from "./ProductsList";
import NavigationBar from "./NavigationBar";
import { Route, Switch } from "react-router-dom";

const ReactRoute2 = () => {
  return (
    <div className="right-container">
      <NavigationBar />
      <div className="page-content">

        <Switch>
          <Route path="/PassDataInURL" component={Home} exact />
          <Route path="/PassDataInURL/ProductsList" component={ProductsList} />
        </Switch>
        
      </div>

    </div>
  );
};

export default ReactRoute2;
