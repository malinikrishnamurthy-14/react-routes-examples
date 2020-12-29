import React from "react";
import { Link } from "react-router-dom";

class LeftMenu extends React.Component {
  render() {
    return (
      <div className="left-container">
        <div className="heading-container">
          <p className="heading">
            <Link to="/">Learn React Routes</Link>
          </p>
        </div>
        <div>
          <ul type="none">
            <li className="list-item">
              <Link className="link" to="/BasicReactRoutes">
                Basic React Routes
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/PassDataInURL">
                Pass Data in URL via React Routes
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/ReactRoute3">
                Show Page Not Found when Route Does not Exist
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/ReactRoute4">
                Multiple components under one route
              </Link>
            </li>
            <li className="list-item">
              <Link className="link" to="/ReactRoute5">Nesting of Routes</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LeftMenu;
