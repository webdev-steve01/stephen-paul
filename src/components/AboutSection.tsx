function AboutSection() {
  return (
    <section className="about-section" id="About">
      <section className="about-title">
        <h1 className="about-title-head">ABOUT ME</h1>
      </section>
      <article className="about-article">
        <section className="about-text">
          <h2 className="about-text-head">
            I am a front-end developer based in Nigeria. Has a Computer-Science
            Background.{" "}
          </h2>
          <p className="about-text-p">
            I am a front-end developer based in Nigeria looking for exciting
            opportunities. Equipped with a Computer Science background. Likes to
            focus on accessibility and functionality when developing.
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
