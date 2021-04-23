import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#aboutus">About Us</a>
        </li>
        <li className="p__opensans">
          <a href="#specials">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div className="app__navbar-login--separator"></div>
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-mobile">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          className="overlay__open"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setToggleMenu(true);
          }}
        ></GiHamburgerMenu>

        {toggleMenu && (
          <div className="app__navbar-mobile_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-mobile_links">
              <li className="p__opensans">
                <a
                  href="#home"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#aboutus"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  About Us
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#menu"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Menu
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#awards"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Awards
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#contact"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
