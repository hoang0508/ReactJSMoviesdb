import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header className="header">
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
      </header>
    </>
  );
};

export default Header;
