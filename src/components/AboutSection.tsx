import React from "react";

function AboutSection() {
  return (
    <section className="about-section">
      <section className="about-title">
        <h1 className="about-title-head">ABOUT ME</h1>
      </section>
      <article className="about-article">
        <section className="about-text">
          <h2 className="about-text-head">
            I am a front-end developer based in Sydney. Has Mechanical
            Engineering background.{" "}
          </h2>
          <p className="about-text-p">
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing.{" "}
          </p>
        </section>
        <section>
          <a href="" className="more-about-link">
            More About Me
          </a>
        </section>
      </article>
    </section>
  );
}

export default AboutSection;
