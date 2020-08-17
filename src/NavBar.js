import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <section className="navTop">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container nav-bg">
            <NavLink className="navbar-brand" to="/">
              <strong>Tech<span>troppers</span></strong>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/service"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="menuActive"
                    className="nav-link"
                    exact
                    to="/contact"
                  >
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
