import arrow from "../assets/arrow.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import TypewriterComponent from "./motions/TypewriterComponent";

type SharedHeroProps = {
  typeWriterText: string;
  descTitle: string;
  description: string;
};

function SharedHero({
  typeWriterText,
  descTitle,
  description,
}: SharedHeroProps) {
  return (
    <section className="about-section about-main" id="About">
      <section className="about-title about-title-main">
        <TypewriterComponent
          text={typeWriterText}
          classname="about-title-head"
        />
      </section>
      <article className="about-article">
        <section className="about-text about-text-main">
          <h2 className="about-text-head about-text-head-main">{descTitle}</h2>
          <p className="about-text-p p-main">{description}</p>
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
  );
}

export default SharedHero;
