import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Nav.css";
import Scroll from "react-scroll";
const ScrollLink = Scroll.ScrollLink;

function Nav() {
  const [click, setClick] = useState(false);
  const about = useRef();

  const handleClick = () => {
    setClick(!click);
    // console.log(about.current);
    // const anchor = document.querySelector("#about-us");
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <HashLink smooth to="/" className="nav-logo">
            <img className="logoimg" src="./assets/Arroz-logo.png" alt="logo" />
            Arroz Solutions
          </HashLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <HashLink
                smooth
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/login"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Login
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/#about-us"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/career"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Career
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink
                smooth
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </HashLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
