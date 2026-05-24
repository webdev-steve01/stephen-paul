import Project from "./Project/Project";
import TypewriterComponent from "./motions/TypewriterComponent";

const NetflixDesc: string =
  "The goal was to master dynamic content loading and minimize load times while handling large datasets. I implemented server-side data fetching, caching strategies, and genre-based filtering to reduce browser strain. The interface is fully responsive, intuitive across devices, and delivers a fluid user experience. Note: Chrome might flag it for phishing due to the resemblance to Netflix — an unintended consequence.";
const stackInvoiceDesc: string =
  "Built a complete business management web app from the ground up using Next.js, Firebase, and TypeScript. The platform lets business owners and freelancers create and manage invoices with PDF generation, track inventory across folders, manage staff with role-based team permissions, and view sales analytics all in a clean mobile-first interface. Also hooked up a separate React landing page that proxies into the web app via Vercel rewrites.";
const dubbyDesc: string =
  "The goal was to create a welcoming and professional digital platform that reflects Dubby Educators’ mission of making quality education accessible, engaging, and student-focused. I designed a responsive landing page that highlights their homeschooling, private tutoring, and counseling services while maintaining a clean and trustworthy user experience. The interface emphasizes clarity, accessibility, and strong visual hierarchy to help parents and students easily explore educational solutions across devices. The result is a modern, conversion-focused platform that balances professionalism with an approachable learning experience";

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
            View all projects
          </a>
        </div>
        <p className="second-text">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </header>

      <section className="project-holder">
        <Project
          image="https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1753386840/netflix_pynkpl.png"
          placeholder="https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1753386840/netflix_pynkpl.png"
          desc={NetflixDesc}
          year="2025"
          role="Fullstack Developer"
          isLive
          title="A Fullstack Movie Website"
          githubRepo="https://github.com/webdev-steve01/netflix-clone.git"
          alt="Fullstack Netflix-style movie website project screenshot"
          liveLink="https://netflix-clone-rho-gray.vercel.app/"
        />
        <Project
          image="https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1779563067/Screenshot_2026-05-23_200141_czoxfk.png"
          placeholder="https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1779563067/Screenshot_2026-05-23_200141_czoxfk.png"
          desc={stackInvoiceDesc}
          year="2026"
          role="Frontend Engineer"
          isLive
          isPrivate
          title="Stack Invoice. A full-stack SaaS invoicing and inventory management platform"
          githubRepo=""
          alt="stack invoice web application"
          liveLink="https://stack-invoice-web.vercel.app/"
        />
        <Project
          image="https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1779562772/dubby_eugjn6.png"
          placeholder="https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1779562772/dubby_eugjn6.png"
          desc={dubbyDesc}
          year="2025"
          role="Frontend Developer"
          isLive
          isPrivate
          title="Dubby Educators. A Modern Learning Platform for Personalized Education"
          githubRepo="https://github.com/webdev-steve01"
          alt="Landing page for dubby"
          liveLink="https://dubbyeducators.vercel.app/"
        />
      </section>
    </section>
  );
}

export default SecondSection;
