import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router";

import ProductsTable from "./Products";
import ServicesTable from "./Services";

const ReactRoute5 = () => {
  return (
    <div className="right-container">
      <ul type="none">
        <li className="list-item">
          <Link className="link" to="/ReactRoute5/productstable">
            Products
          </Link>
        </li>
        <li className="list-item">
          <Link className="link" to="/ReactRoute5/servicestable">
            Services
          </Link>
        </li>
      </ul>
      {/* <Route path="/ReactRoute5/">    
        <Route path="productstable" component={ProductsTable} />  
        <Route path="servicestable" component={ServicesTable} />
      </Route> */}
      <Route path="/ReactRoute5/productstable" component={ProductsTable} />
      <Route path="/ReactRoute5/servicestable" component={ServicesTable} />
    </div>
  );
};

export default ReactRoute5;
