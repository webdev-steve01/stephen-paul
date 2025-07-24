import Project from "./Project/Project";
import Hei from "../assets/portfolio/Hei.png";
import netflix from "../assets/portfolio/netflix.png";
import cbt from "../assets/portfolio/cbt.png";
import TypewriterComponent from "./motions/TypewriterComponent";

const HeiDesc: string =
  "At Hei, a startup launching in September, I developed a robust support page for our WhatsApp chatbot, designed the end-to-end chat flow, and integrated a payment gateway. The platform empowers students with instant, self-service access to campus information and paid services, streamlining common requests and reducing the need for human support..";
const NetflixDesc: string =
  "The goal was to master dynamic content loading and minimize load times while handling large datasets. I implemented server-side data fetching, caching strategies, and genre-based filtering to reduce browser strain. The interface is fully responsive, intuitive across devices, and delivers a fluid user experience. Note: Chrome might flag it for phishing due to the resemblance to Netflix — an unintended consequence.";
const cbtDesc: string =
  "Focused on performance and simplicity over responsiveness, the platform was intentionally built for desktops to support proctored environments. It features dynamic content rendering, clear navigation, and a no-distraction layout to ensure smooth exam-taking for candidates.";

function SecondSection() {
  return (
    <section
      className="Second"
      id="Projects"
      aria-labelledby="featured-projects"
    >
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
