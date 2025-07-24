import NavBar from "./Navigation/NavBar";
import arrow from "../assets/contact-me.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
// import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypewriterComponent from "./motions/TypewriterComponent";
import { useEffect, useState } from "react";

function FirstSection() {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    console.log("inView:", inView);
  }, [inView, ref]);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1753188913/Stephen_pezldi.jpg";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <header>
      <>
        <NavBar classname={inView ? "" : "fixed"} />
      </>
      <section className="First" id="Home">
        <section className="first-top">
          <section className="First-section">
            <h1>
              <TypewriterComponent
                text="HI, I AM STEPHEN SYLVESTER-PAUL"
                classname="header"
              />
            </h1>
            <p className="about-intro" ref={ref}>
              A Nigeria-based front-end engineer with 4+ years of experience
              passionate about building accessible and user-friendly websites.
            </p>
          </section>

          <section className="intro-contact" aria-label="Contact links">
            <button type="button">
              <a
                href="https://wa.me/2348163122231?text=Hello%20Stephen,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Please%20let%20me%20know%20when%20you%20are%20available.%20Thank%20you"
                className="contact-me"
                aria-label="Chat with me on WhatsApp"
              >
                <p>Contact Me</p>
                <div className="arrow">
                  <img src={arrow} alt="arrow icon" />
                </div>
              </a>
            </button>

            <a
              href="https://www.linkedin.com/in/osesojeh-sylvester-paul-2bb872286/"
              aria-label="View my LinkedIn profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="linkedin">
                <img src={linkedin} alt="LinkedIn icon" />
              </div>
            </a>

            <a
              href="https://github.com/webdev-steve01"
              aria-label="View my GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="linkedin">
                <img src={github} alt="GitHub icon" />
              </div>
            </a>
          </section>
        </section>

        <section className="image-skeleton">
          <figure className={`my-image ${loaded ? "loaded" : ""}`}>
            {loaded && (
              <img
                src="https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1753188913/Stephen_pezldi.jpg"
                alt="Stephen Sylvester-Paul profile picture"
                loading="lazy"
              />
            )}
          </figure>
        </section>
      </section>
    </header>
  );
}

export default FirstSection;
