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
            <p>Dec 2023 - Sept 2025 </p>
          </div>
          <ul className="work-description">
            <li className="work-description-item">
              Led the development and optimization of reusable React components
              and design systems, improving development speed by 40%.
            </li>{" "}
            <li className="work-description-item">
              Led debugging and performance optimization efforts across both
              client and server environments, drastically improving page load
              times and reducing submission errors by 23%.
            </li>{" "}
            <li className="work-description-item">
              Conducted code reviews and mentored junior developers on clean
              code practices and modern React patterns.
            </li>
            <li className="work-description-item">
              Improved performance by implementing advanced image optimization
              strategies, increasing Lighthouse scores from 70 to 95+.
            </li>
            <li className="work-description-item">
              Collaborated with backend engineers to define API contracts and
              optimize data-fetching flows with SWR and server components.
            </li>
          </ul>
        </article>
        <article className="work">
          <div className="work-title-and-date">
            <div>
              <p className="company">Lendsqr</p>
              <p className="job">Frontend Engineer</p>
            </div>
            <p>Sept 2025 - Present</p>
          </div>
          <ul className="work-description">
            <li className="work-description-item">
              Wrote and maintained automated tests to ensure features
              consistently passed QA and improved overall reliability.
            </li>
            <li className="work-description-item">
              Optimized data fetching and caching with React Query, streamlining
              state management and speeding up development.
            </li>
            <li className="work-description-item">
              Followed modern frontend paradigms and best practices to build
              scalable, maintainable, and reusable components.
            </li>
            <li className="work-description-item">
              Collaborated in dev syncs with engineers and designers to align
              requirements and deliver features efficiently.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
}

export default Experience;
