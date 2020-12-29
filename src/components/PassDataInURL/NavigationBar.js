import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
        <div className="navigation-menu-item">
          <Link className="reactroute1-link" to="/PassDataInURL">
            Home
          </Link>
        </div>
        <div className="navigation-menu-item">
          <Link className="reactroute1-link" to="/PassDataInURL/ProductsList">
            Products List
          </Link>
        </div>
      </div>
  );
};

export default NavigationBar;
