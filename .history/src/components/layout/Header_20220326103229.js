import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
            alt=""
          />
        </div>
        <div>
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
