import Project from "./Project/Project";
import Hei from "../assets/portfolio/Hei.png";
import netflix from "../assets/portfolio/netflix.png";
import cbt from "../assets/portfolio/cbt.png";

const HeiDesc: string =
  "Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.";

function SecondSection() {
  return (
    <div className="Second">
      <article className="second-article">
        <h1 className="second-header">Featured Projects</h1>
        <p className="second-text">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </article>

      <section className="project-holder" id="projects">
        <Project
          image={Hei}
          desc={HeiDesc}
          year="2025"
          role="Frontend Developer"
          isLive
          title="Support Page for Hei whatsapp Chatbot"
          githubRepo="https://github.com/webdev-steve01/Hei-support-page.git"
          alt="Hei"
          isProfessional
          liveLink="https://hei-support-page.vercel.app/"
        />
        <Project
          image={netflix}
          desc={HeiDesc}
          year="2025"
          role="Fullstack Developer"
          isLive
          unCompleted
          title="A Fullstack movie website"
          githubRepo="https://github.com/webdev-steve01/netflix-clone.git"
          alt="Hei"
          liveLink="https://netflix-clone-rho-gray.vercel.app/"
        />
        <Project
          image={cbt}
          desc={HeiDesc}
          year="2025"
          role="Frontend Developer"
          isLive
          title="Support Page for Hei whatsapp Chatbot"
          githubRepo="https://github.com/webdev-steve01/CBT-PROJECT.git"
          alt="cbt-project.vercel.app"
        />
      </section>
    </div>
  );
}

export default SecondSection;
