import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.png";
import { FaSearch, FaBell } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-main">
            <div className="header-nav">
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
            </div>
            <div className="header-noti">
              <div className="header-search">
                <FaSearch />
              </div>
              <div className="header-bell">
                <div>
                  <FaBell />
                </div>
                <div className="header-bell--number">0</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
