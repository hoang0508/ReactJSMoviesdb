import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <NavLink
          className={({ isActive }) => (isActive ? "header-active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "header-active" : "")}
        >
          Movie
        </NavLink>
      </header>
    </>
  );
};

export default Header;
