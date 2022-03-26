import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-menu">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "header-active" : "header-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "header-active" : "header-white"
            }
          >
            Movie
          </NavLink>
          <NavLink
            to="/tv"
            className={({ isActive }) =>
              isActive ? "header-active" : "header-white"
            }
          >
            TV Series
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
