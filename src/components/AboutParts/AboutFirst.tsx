import arrow from "../../assets/bx-download.svg.svg";
import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";
import TypewriterComponent from "../motions/TypewriterComponent";
import AboutNav from "../Navigation/AboutNav";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function ABoutFirst() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() =>{
    const img = new Image;
    img.src =   "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,,w_1000,h_1000,c_fit/v1753188913/Stephen_pezldi.jpg"
    img.onload = () => setLoaded(true)
  }, [])

  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    console.log("inView:", inView);
  }, [inView]);

  return (
    <div>
      <AboutNav classname={inView ? "" : "fixed"} />
      <section ref={ref} className="about-section about-main" id="About">
        <section className="about-title about-title-main">
          <TypewriterComponent text="ABOUT ME" classname="about-title-head" />
        </section>
        <article className="about-article">
          <section className="about-text about-text-main">
            <h2 className="about-text-head about-text-head-main">
              I am a front-end developer based in Nigeria with a
              Computer-Science background.{" "}
            </h2>
            <p className="about-text-p p-main">
              I'm a front-end developer based in Nigeria with a strong Computer
              Science background. I’m passionate about building accessible,
              high-performing interfaces that not only look great but work
              seamlessly across all devices.
            </p>
            <section className="download-resume">
                <a
                  href="https://drive.google.com/uc?export=download&id=11MAkbY0a_fj-6gnqHr78tABBbDwwAGUM"
                  className="contact-me resume"
                  download={"resume.pdf"}
                >
                  <p>
                    <span className="resume-d">Download</span> Resume
                  </p>
                  <div className="arrow">
                    <img src={arrow} alt="arrow" />
                  </div>
                </a>
              <a href="https://www.linkedin.com/in/osesojeh-sylvester-paul-2bb872286/">
                <div className="linkedin">
                  <img src={linkedin} alt="linkedin" />
                </div>
              </a>
              <a href="https://github.com/osesojeh">
                <div className="linkedin">
                  <img src={github} alt="linkedin" />
                </div>
              </a>
            </section>
          </section>
        </article>
      </section>
      <div className="about-image-skeleton">
        <section className={`my-image ${loaded ? "loaded": ""}`}>
          {/* <img loading="lazy" src={image} alt="" className="about-image" /> */}
        </section>
      </div>
    </div>
  );
}

export default ABoutFirst;
