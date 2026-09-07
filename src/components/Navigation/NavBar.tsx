import { useEffect, useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import cancel from "../../assets/cancel-close-delete-svgrepo-com.svg";
import MagneticButton from "../motions/MagneticButton";
import MenuPanel from "./MenuPanel";

const navBarLinks = [
  { label: "Home", href: "#Home" },
  { label: "Projects", href: "#Projects" },
  { label: "About", href: "#About" },
  { label: "Contact", href: "#Contact" },
];

type Props = {
  scrolled?: boolean;
};

function NavBar({ scrolled = false }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!scrolled) setIsOpen(false);
  }, [scrolled]);

  return (
    <>
      <div className={`Navbar ${scrolled ? "navHidden" : ""}`}>
        <div className="my-name">{"<StephenPaul />"}</div>
        <ul className="NavList-desktop">
          <li className="NavItem">
            <a href="#Home" className="NavLink">
              Home
            </a>
          </li>
          <li className="NavItem">
            <a href="#Projects" className="NavLink">
              Projects
            </a>
          </li>
          <li className="NavItem">
            <a href="#About" className="NavLink">
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
      </div>

      <div
        className={`floating-hamburger-wrapper ${
          scrolled ? "floating-hamburger-visible" : ""
        }`}
      >
        <MagneticButton
          className="floating-hamburger"
          onClick={() => setIsOpen(!isOpen)}
          ariaLabel={isOpen ? "Close menu" : "Open menu"}
          magneticContent
          contentStrength={8}
        >
          <img src={isOpen ? cancel : Hamburger} alt="" />
        </MagneticButton>
      </div>

      <MenuPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        links={navBarLinks}
      />
    </>
  );
}

export default NavBar;
