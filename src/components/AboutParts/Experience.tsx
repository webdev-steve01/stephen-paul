function Experience() {
  return (
    <div className="capabilities-section" id="Experience">
      <h1 className="capabilities-title">MY EXPERIENCE</h1>
      <div className="experience-content">
        <article className="work">
          <div className="work-title-and-date">
            <div>
              <p className="company">Virograf</p>
              <p className="job">Senior Frontend Developer</p>
            </div>
            <p>Nov 2023 — Present </p>
          </div>
          <ul className="work-description">
            <li className="work-description-item">
              Led the development and optimization of reusable React components and design systems, improving development speed by 40%.


            </li>{" "}
            <li className="work-description-item">
              Led debugging and performance optimization efforts across both
              client and server environments, drastically improving page load times and
              reducing submission errors by 23%.
            </li>{" "}
            <li className="work-description-item">
              Conducted code reviews and mentored junior developers on clean code practices and modern React patterns.
            </li>
            <li className="work-description-item">
              Improved performance by implementing advanced image optimization strategies, increasing Lighthouse scores from 70 to 95+.
            </li>
            <li className="work-description-item">
            Collaborated with backend engineers to define API contracts and optimize data-fetching flows with SWR and server components.
            </li>
          </ul>
        </article>
        <article className="work">
          <div className="work-title-and-date">
            <div>
              <p className="company"> Archibuzz</p>
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
              Collaborated with designers to translate Figma mockups into pixel-perfect web pages.


            </li>
            <li className="work-description-item">
            Optimized components for performance by implementing lazy loading, image compression, and efficient state management.


            </li>
            <li className="work-description-item">
              Used Git for version control and participated in agile workflows through issue tracking and regular code commits.



            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default Experience;
