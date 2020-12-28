import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-menu-item">
        <Link className="reactroute1-link" to="/BasicReactRoutes">
          Home
        </Link>
      </div>
      <div className="navigation-menu-item">
        <Link className="reactroute1-link" to="/BasicReactRoutes/Services">
          Services
        </Link>
      </div>
      <div className="navigation-menu-item">
        <Link className="reactroute1-link" to="/BasicReactRoutes/ContactUs">
          Contact Us
        </Link>
      </div>
      <div className="navigation-menu-item">
        <Link className="reactroute1-link" to="/BasicReactRoutes/About">
          About
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
