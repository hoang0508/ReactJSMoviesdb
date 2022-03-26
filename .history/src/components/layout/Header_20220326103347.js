import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <div>
          <img
            src="https://w7.pngwing.com/pngs/119/342/png-transparent-logo-netflix-nasdaq-nflx-brand-television-copywriter-floor-television-text-rectangle.png"
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
