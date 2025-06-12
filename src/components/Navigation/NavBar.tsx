import React, { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import cancel from "../../assets/cancel-close-delete-svgrepo-com.svg";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="Navbar">
      <div>{"<Stephen Paul />"}</div>
      <ul className="NavList-desktop">
        <li className="NavItem">
          <a href="#" className="NavLink">
            Home
          </a>
        </li>
        <li className="NavItem">
          <a href="#" className="NavLink">
            About
          </a>
        </li>
        <li className="NavItem">
          <a href="#" className="NavLink">
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
            <a href="#" className="NavLink">
              Home
            </a>
          </li>
          <li className="NavItem">
            <a href="#" className="NavLink">
              About
            </a>
          </li>
          <li className="NavItem">
            <a href="#" className="NavLink">
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

export default NavBar;
