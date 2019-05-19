import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        Vidly
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item m-2">
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li class="nav-item m-2">
            <NavLink to="/customer">Customer</NavLink>
          </li>
          <li class="nav-item m-2">
            <NavLink to="/rental">Rental</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
