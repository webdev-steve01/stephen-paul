import Project from "./Project/Project";
import Hei from "../assets/portfolio/Hei.png";
import netflix from "../assets/portfolio/netflix.png";
import cbt from "../assets/portfolio/cbt.png";
import { Typewriter } from "react-simple-typewriter";
import TypewriterComponent from "./motions/TypewriterComponent";

const HeiDesc: string =
  "At Hei, I developed and delivered a comprehensive support page to enhance the user experience for our WhatsApp chatbot. This crucial resource provides students with seamless access to information and assistance, ensuring their campus life is efficient and smooth by addressing common queries and service needs.";
const NetflixDesc: string =
  "Developed a Netflix-style movie platform that lets users explore and discover films in an interactive, responsive interface. Focused on delivering a smooth browsing experience with clean design, dynamic content loading, and intuitive navigation across devices.";
const cbtDesc: string =
  "Created a computer-based testing platform designed for efficient question delivery and smooth user interaction on desktops. Built with a focus on dynamic content rendering, responsive design, and an intuitive interface to support seamless exam-taking.";

function SecondSection() {
  return (
    <div className="Second" id="Projects">
      <article className="second-article">
        <TypewriterComponent
          text="Featured Projects"
          classname="second-header"
        />
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
          liveLink="http://www.heiservicebot.com.ng"
        />
        <Project
          image={netflix}
          desc={NetflixDesc}
          year="2025"
          role="Fullstack Developer"
          isLive
          unCompleted
          title="A Fullstack Movie Website"
          githubRepo="https://github.com/webdev-steve01/netflix-clone.git"
          alt="Hei"
          liveLink="https://netflix-clone-rho-gray.vercel.app/"
        />
        <Project
          image={cbt}
          desc={cbtDesc}
          year="2025"
          role="Frontend Developer"
          isLive
          isDesktop
          title="A Fully Functional CBT Platform"
          githubRepo="https://github.com/webdev-steve01/CBT-PROJECT.git"
          alt="cbt-project.vercel.app"
        />
      </section>
    </div>
  );
}

export default SecondSection;
