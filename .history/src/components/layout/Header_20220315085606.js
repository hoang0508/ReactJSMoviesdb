import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "header-active" : "")}
        >
          <span className="header-text">Home</span>
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => (isActive ? "header-active" : "")}
        >
          <span className="header-text">Movie</span>
        </NavLink>
      </header>
    </>
  );
};

export default Header;
