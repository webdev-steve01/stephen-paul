import Project from "./Project/Project";
import ScrollSpyProjects from "./Project/scrollSpyProjects";
import TypewriterComponent from "./motions/TypewriterComponent";
import type { ProjectData } from "./Project/Project";
import style from "./SecondSection.module.css";

export const projects: ProjectData[] = [
  {
    image:
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1753386840/netflix_pynkpl.png",
    placeholder:
      "https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1753386840/netflix_pynkpl.png",
    desc: "The goal was to master dynamic content loading and minimize load times while handling large datasets. I implemented server-side data fetching, caching strategies, and genre-based filtering to reduce browser strain. The interface is fully responsive, intuitive across devices, and delivers a fluid user experience. Note: Chrome might flag it for phishing due to the resemblance to Netflix — an unintended consequence.",
    year: "2025",
    role: "Fullstack Developer",
    isLive: true,
    title: "A Fullstack Movie Website",
    githubRepo: "https://github.com/webdev-steve01/netflix-clone.git",
    alt: "Fullstack Netflix-style movie website project screenshot",
    liveLink: "https://netflix-clone-rho-gray.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1779563067/Screenshot_2026-05-23_200141_czoxfk.png",
    placeholder:
      "https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1779563067/Screenshot_2026-05-23_200141_czoxfk.png",
    desc: "Built a complete business management web app from the ground up using Next.js, Firebase, and TypeScript. The platform lets business owners and freelancers create and manage invoices with PDF generation, track inventory across folders, manage staff with role-based team permissions, and view sales analytics all in a clean mobile-first interface. Also hooked up a separate React landing page that proxies into the web app via Vercel rewrites.",
    year: "2026",
    role: "Frontend Engineer",
    isLive: true,
    isPrivate: true,
    title:
      "Stack Invoice. A full-stack SaaS invoicing and inventory management platform",
    githubRepo: "",
    alt: "stack invoice web application",
    liveLink: "https://stack-invoice-web.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1788704276/sabimarket-image_ym1agj.png",
    placeholder:
      "https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1788704276/sabimarket-image_ym1agj.png",
    desc: "Built a voice-first business management platform that helps market traders track inventory, log sales, monitor profits, and receive low-stock alerts. The platform also provides market insights to help users identify better prices for goods across different markets, while voice-based transaction logging allows users to record sales in simple English with automatic calculations. Developed as part of a cohort hackathon, where my team placed 2nd.",
    year: "2026",
    role: "Frontend Developer",
    isLive: true,
    liveLink: "https://sabimarket-ai.vercel.app/",
    // isDesktop: true,
    title: "A Voice-First Business Management Platform",
    githubRepo: "https://github.com/sabmarketai/SABIMARKET_AI",
    alt: "sabimarket_dashboard",
  },
];

function SecondSection() {
  return (
    <section
      className="Second"
      id="Projects"
      aria-labelledby="featured-projects"
    >
      <header className="second-article">
        <div className="flex-btw">
          <h2 id="featured-projects" className="">
            <TypewriterComponent
              text="Featured Projects"
              classname="second-header"
            />
          </h2>
          <a className="pad-x-2 more-about-link" href="/projects">
            All projects
          </a>
        </div>
        <p className="second-text">
          Here are some of the selected projects that showcase my passion for
          front-end development.
          <br /> Click on "All projects" to see more
        </p>
      </header>

      {/* Desktop: pinned-image scroll-spy (GSAP ScrollTrigger, matchMedia-gated) */}
      <ScrollSpyProjects projects={projects} />

      {/* Mobile: original stacked cards, untouched */}
      <section className={`project-holder ${style.mobileOnly}`}>
        {projects.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </section>
    </section>
  );
}

export default SecondSection;
