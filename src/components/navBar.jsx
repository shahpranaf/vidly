import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/movies">
        Vidly
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item m-2">
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li className="nav-item m-2">
            <NavLink to="/customer">Customer</NavLink>
          </li>
          <li className="nav-item m-2">
            <NavLink to="/rental">Rental</NavLink>
          </li>
          <li className="nav-item m-2">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="nav-item m-2">
            <NavLink to="/register">Signup</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
