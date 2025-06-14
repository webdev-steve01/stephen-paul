import React, { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import cancel from "../../assets/cancel-close-delete-svgrepo-com.svg";

function AboutNav() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="Navbar">
      <div className="my-name">{"<Stephen Paul />"}</div>
      <ul className="NavList-desktop">
        <li className="NavItem">
          <a href="./" className="NavLink">
            Home
          </a>
        </li>
        <li className="NavItem">
          <a href="#Capabilities" className="NavLink">
            Capabilities
          </a>
        </li>
        <li className="NavItem">
          <a href="#Experience" className="NavLink">
            Experience
          </a>
        </li>
        <li className="NavItem">
          <a href="#Contact" className="NavLink">
            Contact
          </a>
        </li>
      </ul>

      <div className="image-ham" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={isOpen ? cancel : Hamburger}
          alt="Hamburger"
          className="Hamburger"
        />
      </div>
      {isOpen ? (
        <ul className="NavList-mobile">
          <li className="NavItem">
            <a href="./" className="NavLink">
              Home
            </a>
          </li>
          <li className="NavItem">
            <a href="#Projects" className="NavLink">
              Capabilities
            </a>
          </li>
          <li className="NavItem">
            <a href="#About" className="NavLink">
              Experience
            </a>
          </li>
          <li className="NavItem">
            <a href="#Contact" className="NavLink">
              Contact
            </a>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AboutNav;
