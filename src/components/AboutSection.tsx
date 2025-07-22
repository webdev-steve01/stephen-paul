import TypewriterComponent from "./motions/TypewriterComponent";

function AboutSection() {
  return (
    <section className="about-section" id="About">
      <section className="about-title">
        <TypewriterComponent text="About Me" classname="about-title-head" />
      </section>

      <article className="about-article">
        <section className="about-text">
          <h2 className="about-text-head">
            I'm a Front-End Developer with a background in Computer Science, based in Nigeria.
          </h2>
          <p className="about-text-p">
            I specialize in building accessible, responsive, and user-friendly web experiences.
            With a solid foundation in Computer Science and 4+ years of hands-on experience, I enjoy turning complex problems into simple, elegant interfaces.
            I'm currently open to exciting opportunities where I can contribute to impactful products and grow as a developer.
          </p>
        </section>

        <section>
          <a href="/more-about-me" className="more-about-link">
            More About Me
          </a>
        </section>
      </article>
    </section>
  );
}

export default AboutSection;
