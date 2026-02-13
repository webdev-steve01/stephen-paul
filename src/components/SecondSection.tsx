import Project from "./Project/Project";
import TypewriterComponent from "./motions/TypewriterComponent";

const HeiDesc: string =
  "At Hei, a startup launching in September, I developed a robust support page for our WhatsApp chatbot, designed the end-to-end chat flow, and integrated a payment gateway. The platform empowers students with instant, self-service access to campus information and paid services, streamlining common requests and reducing the need for human support..";
const NetflixDesc: string =
  "The goal was to master dynamic content loading and minimize load times while handling large datasets. I implemented server-side data fetching, caching strategies, and genre-based filtering to reduce browser strain. The interface is fully responsive, intuitive across devices, and delivers a fluid user experience. Note: Chrome might flag it for phishing due to the resemblance to Netflix — an unintended consequence.";
const cbtDesc: string =
  "Focused on performance and simplicity over responsiveness, the platform was intentionally built for desktops to support proctored environments. It features dynamic content rendering, clear navigation, and a no-distraction layout to ensure smooth exam-taking for candidates.";
const feTest: string =
  "Built as a frontend assessment for a fintech company. Implemented responsive layouts with Tailwind CSS, animated marquee components, and clean component architecture following Next.js App Router patterns. The project showcased my ability to work from design specifications while maintaining code quality and best practices—leading to a successful job offer";

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
          image="https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1753386876/Hei_zwchyn.png"
          placeholder="https://res.cloudinary.com/dlpty7kky/image/upload//w_100,e_blur:500,q_1/v1753386876/Hei_zwchyn.png"
          desc={HeiDesc}
          year="2025"
          role="Frontend Developer"
          isLive
          title="Support Page for Hei WhatsApp Chatbot"
          githubRepo="https://github.com/webdev-steve01/Hei-support-page.git"
          alt="Support page for Hei WhatsApp chatbot screenshot"
          isProfessional
          liveLink="https://hei-support-page.vercel.app/"
        />
        <Project
          image="https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1753386895/cbt_bmauge.png"
          placeholder="https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1753386895/cbt_bmauge.png"
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
        <Project
          image="https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1770998410/Screenshot_988_dtz87u.png"
          placeholder="https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1770998410/Screenshot_988_dtz87u.png"
          desc={feTest}
          year="2025"
          role="Frontend Developer"
          isLive
          liveLink="https://osesojeh-stephen-sylvesterpaul-lendsqr-fe-test.vercel.app/"
          title="Lendsqr Frontend Assessment Test"
          githubRepo="https://github.com/webdev-steve01/CBT-PROJECT.git"
          alt="CBT platform screenshot"
        />
      </section>
    </section>
  );
}

export default SecondSection;
