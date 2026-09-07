import Project from "../components/Project/Project";
import ScrollSpyProjects from "@/components/Project/scrollSpyProjects";
import type { ProjectData } from "../components/Project/Project";
import { useInView } from "react-intersection-observer";
import SharedHero from "../components/SharedHero";
import ConnectSection from "../components/ConnectSection";
import ProjectsNav from "../components/Navigation/ProjectsNavigation";

import style from "./projects.module.css";

const projects: ProjectData[] = [
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
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1779630355/Screenshot_2026-05-24_144536_c4as9e.png",
    placeholder:
      "https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1779630355/Screenshot_2026-05-24_144536_c4as9e.png",
    desc: "Built as the operational backbone of the Onwe Mma ecosystem, this admin portal provides a centralized space for managing users, monitoring platform activity, and communicating with beauty professionals and clients. The dashboard features visually engaging analytics and metric-based graphs that give administrators clear insights into bookings, user growth, engagement, and overall platform performance. Integrated notification management, user controls, and streamlined administrative tools create an efficient workflow while maintaining a clean, modern interface. Access is tied directly to accounts created through the mobile application, creating a connected experience between the consumer platform and the organization’s internal management system.",
    year: "2026",
    role: "Frontend Engineer",
    isLive: true,
    isPrivate: true,
    title: "Onwe Mma Admin Portal. Analytics & Platform Management Dashboard",
    githubRepo: "",
    alt: "onwema web admin portal",
    liveLink: "https://onwemma-web-admin.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1779562772/dubby_eugjn6.png",
    placeholder:
      "https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1779562772/dubby_eugjn6.png",
    desc: "The goal was to create a welcoming and professional digital platform that reflects Dubby Educators’ mission of making quality education accessible, engaging, and student-focused. I designed a responsive landing page that highlights their homeschooling, private tutoring, and counseling services while maintaining a clean and trustworthy user experience. The interface emphasizes clarity, accessibility, and strong visual hierarchy to help parents and students easily explore educational solutions across devices. The result is a modern, conversion-focused platform that balances professionalism with an approachable learning experience",
    year: "2025",
    role: "Frontend Developer",
    isLive: true,
    isPrivate: true,
    title:
      "Dubby Educators. A Modern Learning Platform for Personalized Education",
    githubRepo: "https://github.com/webdev-steve01",
    alt: "Landing page for dubby",
    liveLink: "https://dubbyeducators.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1779563053/Screenshot_2026-05-23_200224_pyfri7.png",
    placeholder:
      "https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1779563053/Screenshot_2026-05-23_200224_pyfri7.png",
    desc: "The goal was to design a modern and engaging landing page that captures the convenience and accessibility of Onwe Mma’s beauty marketplace platform. I created a responsive user experience that clearly showcases the platform’s ability to connect clients with trusted beauty professionals, including braiders, nail technicians, makeup artists, barbers, and skincare experts. The interface focuses on clean layouts, smooth navigation, and strong visual storytelling to build trust while encouraging bookings and business growth. The final result is a polished, mobile-friendly platform that reflects the brand’s mission of making beauty services more accessible and business management easier for professionals.",
    year: "2025",
    role: "Frontend Developer",
    isLive: true,
    isPrivate: true,
    title: "Onwe Mma. A Beauty Marketplace Landing Page",
    githubRepo: "",
    alt: "Landing page for dubby",
    liveLink: "https://onwemma-web.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1753386876/Hei_zwchyn.png",
    placeholder:
      "https://res.cloudinary.com/dlpty7kky/image/upload//w_100,e_blur:500,q_1/v1753386876/Hei_zwchyn.png",
    desc: "At Hei, a startup launching in September, I developed a robust support page for our WhatsApp chatbot, designed the end-to-end chat flow, and integrated a payment gateway. The platform empowers students with instant, self-service access to campus information and paid services, streamlining common requests and reducing the need for human support..",
    year: "2025",
    role: "Frontend Developer",
    isLive: true,
    title: "Support Page for Hei WhatsApp Chatbot",
    githubRepo: "https://github.com/webdev-steve01/Hei-support-page.git",
    alt: "Support page for Hei WhatsApp chatbot screenshot",
    liveLink: "https://hei-support-page.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1770998410/Screenshot_988_dtz87u.png",
    placeholder:
      "https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1770998410/Screenshot_988_dtz87u.png",
    desc: "Built as a frontend assessment for a fintech company. Implemented responsive layouts with Tailwind CSS, animated marquee components, and clean component architecture following Next.js App Router patterns. The project showcased my ability to work from design specifications while maintaining code quality and best practices—leading to a successful job offer",
    year: "2065",
    role: "Frontend Developer",
    isLive: true,
    liveLink:
      "https://osesojeh-stephen-sylvesterpaul-lendsqr-fe-test.vercel.app/",
    title: "Lendsqr Frontend Assessment Test",
    githubRepo: "https://github.com/webdev-steve01/CBT-PROJECT.git",
    alt: "CBT platform screenshot",
  },
  {
    image:
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,w_1000,h_1000,c_fit/v1753386895/cbt_bmauge.png",
    placeholder:
      "https://res.cloudinary.com/dlpty7kky/image/upload/w_100,e_blur:500,q_1/v1753386895/cbt_bmauge.png",
    desc: "Focused on performance and simplicity over responsiveness, the platform was intentionally built for desktops to support proctored environments. It features dynamic content rendering, clear navigation, and a no-distraction layout to ensure smooth exam-taking for candidates.",
    year: "2025",
    role: "Frontend Developer",
    isLive: true,
    liveLink: "https://cbt-project.vercel.app/",
    isDesktop: true,
    title: "A Fully Functional CBT Platform",
    githubRepo: "https://github.com/webdev-steve01/CBT-PROJECT.git",
    alt: "CBT platform screenshot",
  },
];

function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <div>
      <>
        <ProjectsNav scrolled={!inView} />
        <div ref={ref}></div>
      </>
      <SharedHero
        descTitle="A collection of projects that reflect my growth as a developer,
  from responsive front-end interfaces to full-stack applications focused on
  performance, usability, and clean user experience."
        description="Each project here represents a different stage in my journey as a
  developer. Some were built to sharpen my front-end skills, others challenged
  me to think more deeply about architecture, scalability, and user experience."
        typeWriterText="PROJECTS"
      />

      {/* Desktop: pinned-image scroll-spy */}
      <ScrollSpyProjects projects={projects} />

      {/* Mobile: original stacked cards */}
      <section className={`project-holder ${style.mobileOnly}`}>
        {projects.map((p) => (
          <Project key={p.title} {...p} />
        ))}
      </section>

      <ConnectSection />
    </div>
  );
}

export default Projects;
