import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
// import logo from "../../assets/logo.png";
import { FaSearch, FaBell } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlineNotes } from "react-icons/md";

// NavLink
const navData = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/movies",
    title: "Movie",
  },
  {
    id: 3,
    to: "/tv",
    title: " TV Series",
  },
];

const Header = () => {
  const [isShow, setShow] = useState(false);
  const handleClickActive = () => {
    setShow(!isShow);
  };
  const nodeRef = useRef();
  console.log(
    "🚀 ~ file: Header.js ~ line 14 ~ Header ~ nodeRef",
    nodeRef.current
  );

  useEffect(() => {
    const handleClickOutSide = (e) => {
      console.log("kk", e.target);
      if (nodeRef.current && !nodeRef.current.contains(e.target)) {
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
          <div className="header-main">
            <div className="header-nav" ref={nodeRef}>
              <div className="header-logo">
                <span className="header-logo--icon">
                  <FaPlayCircle />
                </span>
                <span className="header-logo--text">HHmovie</span>
              </div>
              <div className="header-menu">
                <div className={`header-menu--list ${isShow ? "active" : ""}`}>
                  {navData &&
                    navData.length > 0 &&
                    navData.map((item) => (
                      <NavLink
                        key={item.id}
                        to={item.to}
                        onClick={() => setShow(false)}
                        className={({ isActive }) =>
                          isActive ? "header-active" : "header-white"
                        }
                      >
                        {item.title}
                      </NavLink>
                    ))}
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
