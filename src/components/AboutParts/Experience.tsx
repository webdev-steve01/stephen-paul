type ExperienceEntry = {
  company: string;
  role: string;
  dateRange: string;
  bullets: string[];
};

const experience: ExperienceEntry[] = [
  {
    company: "Graycrest",
    role: "Contract Frontend Developer",
    dateRange: "Jan 2026 - Aug 2026",
    bullets: [
      "Built landing pages, admin dashboards, and fully functional web applications for multiple client projects.",
      "Translated Figma designs into pixel-accurate, production-ready code.",
      "Consistently met project deadlines across a contract-based, multi-client workload.",
      "Established project architecture and folder/component conventions adopted as the team standard across all frontend codebases.",
      "Set up reusable component patterns and TypeScript types shared across projects, cutting new-feature setup time for the team.",
    ],
  },
  {
    company: "Lendsqr",
    role: "Frontend Engineer",
    dateRange: "Sept 2025 - Sept 2026",
    bullets: [
      "Wrote and maintained automated tests to ensure features consistently passed QA and improved overall reliability.",
      "Optimized data fetching and caching with React Query, streamlining state management and speeding up development.",
      "Followed modern frontend paradigms and best practices to build scalable, maintainable, and reusable components.",
      "Collaborated in dev syncs with engineers and designers to align requirements and deliver features efficiently.",
    ],
  },
];

function Experience() {
  return (
    <div className="capabilities-section" id="Experience">
      <div>
        <h1 className="capabilities-title">MY EXPERIENCE</h1>

        <p className="connect-text">
          Check my Resume for all my work experience
        </p>
      </div>
      <div className="experience-content">
        {experience.map((job) => (
          <article className="work" key={job.company}>
            <div className="work-title-and-date">
              <div>
                <p className="company">{job.company}</p>
                <p className="job">{job.role}</p>
              </div>
              <p>{job.dateRange}</p>
            </div>
            <ul className="work-description">
              {job.bullets.map((bullet, i) => (
                <li className="work-description-item" key={i}>
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Experience;
