import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div>
      <nav
        style={{ margin: "5px", backgroundColor: "rgba(200,220,220,0.5)" }}
        className="navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Movies
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink className="nav-link" to="/movies">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/customers">
                  Customers
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rentails">
                  Rentails
                </NavLink>
              </li>
              <li className="nav-item">
                {!props.user && (
                  <NavLink className="nav-link " to="/login">
                    Login
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {!props.user && (
                  <NavLink className="nav-link " to="/register">
                    Register
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {/* to={`/account?user=${props.user.name}` */}
                {props.user && (
                  <NavLink className="nav-link " to="/account">
                    {props.user.name}
                  </NavLink>
                )}
              </li>
              <li className="nav-item">
                {props.user && (
                  <NavLink className="nav-link " to="/logout">
                    Logout
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
