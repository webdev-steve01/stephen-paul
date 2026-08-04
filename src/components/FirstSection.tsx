import NavBar from "./Navigation/NavBar";
import arrow from "../assets/download-svgrepo-com.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { useInView } from "react-intersection-observer";
import TypewriterComponent from "./motions/TypewriterComponent";
import { useEffect, useState, lazy, Suspense } from "react";
import Tilt from "react-parallax-tilt";
import { resume_download } from "../constants/resume";
const LiquidEther = lazy(() => import("./LiquidEther"));

function FirstSection() {
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1770996714/everything_picture_n8hl0i.jpg";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <header style={{ position: "relative", overflow: "hidden" }}>
      <NavBar classname={inView ? "" : "fixed"} />

      <div
        style={{
          width: "100%",
          // height: "600px",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none", // let clicks pass through to content below
        }}
      >
        <Suspense fallback={null}>
          <LiquidEther
            colors={["#D3E97A", "#B8D85A", "#F0FFD0"]}
            mouseForce={20}
            cursorSize={100}
            isViscous
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </Suspense>
      </div>
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
                // href="https://wa.me/2348163122231?text=Hello%20Stephen,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Please%20let%20me%20know%20when%20you%20are%20available.%20Thank%20you"
                href={resume_download}
                className="contact-me"
                aria-label="Chat with me on WhatsApp"
              >
                <p>Download CV</p>
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

        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          transitionSpeed={1000}
          scale={1.03}
          tiltReverse={true}
          className="image-skeleton"
        >
          <section className="image-skeleton">
            <figure className={`my-image ${loaded ? "loaded" : ""}`}>
              {loaded && (
                <img
                  src="https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1770996714/everything_picture_n8hl0i.jpg"
                  alt="Stephen Sylvester-Paul profile picture"
                  loading="lazy"
                />
              )}
            </figure>
          </section>
        </Tilt>
      </section>
    </header>
  );
}

export default FirstSection;
