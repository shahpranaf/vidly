import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">Vidly</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <NavLink className="p-2 text-dark" to="/movies">
          Movies
        </NavLink>
        <NavLink className="p-2 text-dark" to="/customers">
          Customers
        </NavLink>
        <NavLink className="p-2 text-dark" to="/rentals">
          Rentals
        </NavLink>
        {!user && (
          <React.Fragment>
            <NavLink className="p-2 text-dark" to="/login">
              Login
            </NavLink>
            <NavLink className="btn btn-outline-primary" to="/register">
              Register
            </NavLink>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <NavLink className="p-2 text-dark" to="/profile">
              {user.name}
            </NavLink>
            <NavLink className="p-2 text-dark" to="/logout">
              Logout
            </NavLink>
          </React.Fragment>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
