import { useEffect, useState } from "react";
import Hamburger from "../../assets/hamburger.svg";
import cancel from "../../assets/cancel-close-delete-svgrepo-com.svg";
import MagneticButton from "../motions/MagneticButton";
import MenuPanel from "./MenuPanel";

type Props = {
  scrolled?: boolean;
};

const aboutNavLinks = [
  { label: "Home", href: "./" },
  { label: "Capabilities", href: "#Capabilities" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "#Experience" },
  { label: "Contact", href: "#Contact" },
];

function AboutNav({ scrolled = false }: Props) {
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
            <a href="/projects" className="NavLink">
              Projects
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
        links={aboutNavLinks}
      />
    </>
  );
}

export default AboutNav;
