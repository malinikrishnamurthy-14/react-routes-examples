import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navigation-bar">
      <div className="navigation-menu-item">
        <Link className="reactroute1-link" to="/ReactRoute4/ContactUs1">
          Contact Us
        </Link>
      </div>
      <div className="navigation-menu-item">
        <Link className="reactroute1-link" to="/ReactRoute4/About1">
          About
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
