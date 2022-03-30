import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
// import logo from "../../assets/logo.png";
import { FaSearch, FaBell } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlineNotes } from "react-icons/md";
const Header = () => {
  const [isShow, setShow] = useState(false);
  const handleClickActive = () => {
    setShow(!isShow);
  };
  const nodeRef = useRef();
  // const headerEl = document.querySelector(".header");

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches("header")
      ) {
        setShow(false);
      }
    };
    document.body.addEventListener("click", handleClickOutSide);
    return () => {
      document.removeEventListener("click", handleClickOutSide);
    };
  }, []);
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-main" ref={nodeRef}>
            <div className="header-nav">
              <div className="header-logo">
                <span className="header-logo--icon">
                  <FaPlayCircle />
                </span>
                <span className="header-logo--text">HHmovie</span>
              </div>
              <div className="header-menu">
                <div className={`header-menu--list ${isShow ? "active" : ""}`}>
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
                <div
                  className="header-menu--icon"
                  onClick={() => handleClickActive()}
                >
                  <MdOutlineNotes />
                </div>
              </div>
            </div>
            <div className="header-noti">
              <div className="header-search">
                <FaSearch />
              </div>
              <div className="header-bell">
                <div className="header-bell--icon">
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
