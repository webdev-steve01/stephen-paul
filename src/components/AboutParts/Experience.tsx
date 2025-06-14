import React from "react";

function Experience() {
  return (
    <div className="capabilities-section" id="Experience">
      <h1 className="capabilities-title">MY EXPERIENCE</h1>
      <div className="experience-content">
        <article className="work">
          <div className="work-title-and-date">
            <div>
              <p>Virograf</p>
              <p className="job">FullStack Developer</p>
            </div>
            <p>Nov 2023 — Present </p>
          </div>
          <ul className="work-description">
            <li className="work-description-item">
              Developed and integrated responsive frontend interfaces using
              Next.js, Tailwind CSS, and TypeScript, with attention to user
              experience, form validation, and multi-step onboarding flows.
            </li>{" "}
            <li className="work-description-item">
              Led debugging and performance optimization efforts across both
              client and server environments, improving page load times and
              reducing submission errors by 40%.
            </li>{" "}
            <li className="work-description-item">
              Collaborated directly with product/design to translate evolving
              user needs into clean, functional, and scalable features.
            </li>
            <li className="work-description-item">
              Maintained clean Git workflow practices, modular code structure,
              and reusable components.
            </li>
          </ul>
        </article>
        <article className="work">
          <div className="work-title-and-date">
            <div>
              <p> Archibuzz</p>
              <p className="job">Frontend Developer</p>
            </div>
            <p>Oct 2024 — April 2025 </p>
          </div>
          <ul className="work-description">
            <li className="work-description-item">
              Built and refined responsive, user-focused UI components using
              React and Tailwind CSS, increasing user engagement by 35% and
              reducing onboarding drop-off rates by 25% across mobile and
              desktop platforms.
            </li>
            <li className="work-description-item">
              Collaborated with the engineering team to improve performance by
              30%, eliminate redundant code through reusable components, and
              enforce best practices in component-based architecture for
              scalable development.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default Experience;
