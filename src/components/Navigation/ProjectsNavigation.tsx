import { useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import cancel from "../../assets/cancel-close-delete-svgrepo-com.svg";
type props = {
  classname?: string;
};

function ProjectsNav({ classname }: props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`Navbar ${classname}`}>
      <div className="my-name">{"<StephenPaul />"}</div>
      <ul className="NavList-desktop">
        <li className="NavItem">
          <a href="/" className="NavLink">
            Home
          </a>
        </li>
        <li className="NavItem">
          <a href="/more-about-me" className="NavLink">
            About
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
        <ul className="NavList-mobile" onClick={() => setIsOpen(false)}>
          <li className="NavItem">
            <a href="/" className="NavLink">
              Home
            </a>
          </li>
          <li className="NavItem">
            <a href="/more-about-me" className="NavLink">
              About
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

export default ProjectsNav;
