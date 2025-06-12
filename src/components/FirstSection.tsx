import NavBar from "./Navigation/NavBar";
import arrow from "../assets/contact-me.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function FirstSection() {
  return (
    <section>
      <>
        <NavBar />
      </>
      <section className="First">
        <section className="first-top">
          <section className="First-section">
            <h1 className="header">HI, I AM STEPHEN PAUL</h1>
            <p className="about-intro">
              A Nigeria based front-end engineer passionate about building
              accessible and user friendly websites.
            </p>
          </section>
          <section className="intro-contact">
            <button type="button" className="">
              <a href="" className="contact-me">
                <p>CONTACT ME</p>
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
            <a href="https://github.com/osesojeh">
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
