import Project from "./Project/Project";
import Hei from "../assets/portfolio/Hei.png";
import netflix from "../assets/portfolio/netflix.png";
import cbt from "../assets/portfolio/cbt.png";
import TypewriterComponent from "./motions/TypewriterComponent";

const HeiDesc: string =
  "At Hei, I developed and delivered a comprehensive support page to enhance the user experience for our WhatsApp chatbot. This crucial resource provides students with seamless access to information and assistance, ensuring their campus life is efficient and smooth by addressing common queries and service needs. This was a professional work";
const NetflixDesc: string =
  "Developed a Netflix-style movie platform that lets users explore and discover films in an interactive, responsive interface. Focused on delivering a smooth browsing experience with clean design, dynamic content loading, and intuitive navigation across devices. This was a perfect project to test my ability to optimize and reduce load time as I was dealing with large amounts of data";
const cbtDesc: string =
  "Created a computer-based testing platform for desktops designed for efficient question delivery and smooth user interaction on desktops. Built with a focus on dynamic content rendering, and an intuitive interface to support seamless exam-taking.";

function SecondSection() {
  return (
    <section className="Second" id="Projects" aria-labelledby="featured-projects">
      <header className="second-article">
        <h2 id="featured-projects">
          <TypewriterComponent
            text="Featured Projects"
            classname="second-header"
          />
        </h2>
        <p className="second-text">
          Here are some of the selected projects that showcase my passion for
          front-end development.
        </p>
      </header>

      <section className="project-holder">
        <Project
          image={netflix}
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
          image={Hei}
          desc={HeiDesc}
          year="2025"
          role="Frontend Developer"
          isLive
          title="Support Page for Hei WhatsApp Chatbot"
          githubRepo="https://github.com/webdev-steve01/Hei-support-page.git"
          alt="Support page for Hei WhatsApp chatbot screenshot"
          isProfessional
          liveLink="http://www.heiservicebot.com.ng"
        />
        <Project
          image={cbt}
          desc={cbtDesc}
          year="2025"
          role="Frontend Developer"
          isLive
          liveLink="https://cbt-project.vercel.app/"
          isDesktop
          title="A Fully Functional CBT Platform"
          githubRepo="https://github.com/webdev-steve01/CBT-PROJECT.git"
          alt="CBT platform screenshot"
        />
      </section>
    </section>
  );
}

export default SecondSection;
