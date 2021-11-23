import React, { useState } from "react";
import desktop_img from "../images/image-hero-desktop.jpg";
import mobile_img from "../images/image-hero-mobile.jpg";
import logo from "../images/logo.svg";
import ham_menu from "../images/icon-hamburger.svg";
import close_menu from "../images/icon-close-menu.svg";

const Header = () => {
  const [hamClick, setHamClick] = useState(false);

  const checkHamClick = () => {
    return setHamClick(!hamClick);
  };

  window.addEventListener("resize", () => {
    return window.innerWidth > 980 && setHamClick(false);
  });

  return (
    <>
      <header>
        <img
          className="desktop-img"
          src={desktop_img}
          alt="Apple monitor placed over moniter riser."
        />
        <img
          className="mobile-img"
          src={mobile_img}
          alt="Apple monitor placed over moniter riser."
        />
        <div className={hamClick ? `overlay` : undefined}>
          <nav>
            <img className="logo" src={logo} alt="Home." />
            <img
              className="ham-icon"
              src={hamClick ? `${close_menu}` : `${ham_menu}`}
              onClick={checkHamClick}
              alt="Open or close ham menu."
            />
            <ul className={hamClick ? `ham-menu` : `navbar-nav`}>
              <li className="nav-item">About</li>
              <li className="nav-item">Discover</li>
              <li className="nav-item">Get Started</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
