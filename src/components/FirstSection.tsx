import NavBar from "./Navigation/NavBar";
import arrow from "../assets/contact-me.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
// import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypewriterComponent from "./motions/TypewriterComponent";
import { useEffect } from "react";

function FirstSection() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    console.log("inView:", inView);
  }, [inView, ref]);
  // })
  return (
    <section>
      <>
        <NavBar classname={inView ? "" : "fixed"} />
      </>
      <section className="First" id="Home">
        <section className="first-top">
          <section className="First-section">
            <TypewriterComponent
              text="HI, I AM STEPHEN SYLVESTER-PAUL"
              classname="header"
            />
            <p className="about-intro" ref={ref}>
              A Nigeria based front-end engineer with 4+ years of experience
              passionate about building accessible and user friendly websites.
            </p>
          </section>
          <section className="intro-contact">
            <button type="button" className="">
              <a
                href="https://wa.me/2348163122231?text=Hello%20Stephen,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Please%20let%20me%20know%20when%20you%20are%20available.%20Thank%20you"
                className="contact-me"
              >
                <p>Contact Me</p>
                <div className="arrow">
                  <img src={arrow} alt="arrow" />
                </div>
              </a>
            </button>
            <a href="https://www.linkedin.com/in/osesojeh-sylvester-paul-2bb872286/">
              <div className="linkedin">
                <img src={linkedin} alt="linkedin" />
              </div>
            </a>
            <a href="https://github.com/webdev-steve01">
              <div className="linkedin">
                <img src={github} alt="linkedin" />
              </div>
            </a>
          </section>
        </section>

        <section className="image-skeleton">
          <section className="my-image">
            {/* <img src={stephen} alt="me" /> */}
          </section>
        </section>
      </section>
    </section>
  );
}

export default FirstSection;
