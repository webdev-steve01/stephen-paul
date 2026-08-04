import Project from "./Project/Project";
import TypewriterComponent from "./motions/TypewriterComponent";

const NetflixDesc: string =
  "The goal was to master dynamic content loading and minimize load times while handling large datasets. I implemented server-side data fetching, caching strategies, and genre-based filtering to reduce browser strain. The interface is fully responsive, intuitive across devices, and delivers a fluid user experience. Note: Chrome might flag it for phishing due to the resemblance to Netflix — an unintended consequence.";
const stackInvoiceDesc: string =
  "Built a complete business management web app from the ground up using Next.js, Firebase, and TypeScript. The platform lets business owners and freelancers create and manage invoices with PDF generation, track inventory across folders, manage staff with role-based team permissions, and view sales analytics all in a clean mobile-first interface. Also hooked up a separate React landing page that proxies into the web app via Vercel rewrites.";
const onwemaDesc: string =
  "The goal was to design a modern and engaging landing page that captures the convenience and accessibility of Onwe Mma’s beauty marketplace platform. I created a responsive user experience that clearly showcases the platform’s ability to connect clients with trusted beauty professionals, including braiders, nail technicians, makeup artists, barbers, and skincare experts. The interface focuses on clean layouts, smooth navigation, and strong visual storytelling to build trust while encouraging bookings and business growth. The final result is a polished, mobile-friendly platform that reflects the brand’s mission of making beauty services more accessible and business management easier for professionals.";
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
          image="https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1779563053/Screenshot_2026-05-23_200224_pyfri7.png"
          placeholder="https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1779563053/Screenshot_2026-05-23_200224_pyfri7.png"
          desc={onwemaDesc}
          year="2025"
          role="Frontend Developer"
          isLive
          isPrivate
          title="Onwe Mma. A Beauty Marketplace Landing Page"
          githubRepo=""
          alt="Landing page for dubby"
          liveLink="https://onwemma-web.vercel.app/"
        />
      </section>
    </section>
  );
}

export default SecondSection;
