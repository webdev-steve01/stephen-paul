import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRightIcon,
  type ArrowUpRightIconHandle,
} from "@animateicons/react/lucide";
import github from "../../assets/bxl-github.svg.svg";
import type { ProjectData } from "./Project";
import style from "./scrollSpy.module.css";

gsap.registerPlugin(ScrollTrigger);

function ScrollSpyProjects({ projects }: { projects: ProjectData[] }) {
  const [active, setActive] = useState(0);
  const [loadedMap, setLoadedMap] = useState<Record<number, boolean>>({});
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRefs = useRef<(ArrowUpRightIconHandle | null)[]>([]);

  // preload full-res images, same pattern as the original Project component
  useLayoutEffect(() => {
    projects.forEach((p, i) => {
      const img = new Image();
      img.src = p.image;
      img.onload = () => setLoadedMap((m) => ({ ...m, [i]: true }));
    });
  }, [projects]);

  // only run the pin/scroll-spy logic on desktop viewports
  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 901px)", () => {
      const triggers = panelRefs.current.map((panel, i) => {
        if (!panel) return null;
        return ScrollTrigger.create({
          trigger: panel,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });

      return () => triggers.forEach((t) => t?.kill());
    });

    return () => mm.revert();
  }, [projects.length]);

  return (
    <div className={style.grid}>
      <div className={style.stickyPanel}>
        {projects.map((p, i) => (
          <figure
            key={p.title}
            className={`${style.stickyImage} ${
              i === active ? style.stickyImageActive : ""
            }`}
          >
            <img
              src={loadedMap[i] ? p.image : p.placeholder}
              alt={p.alt}
              className={`${style.image} ${
                loadedMap[i] ? style.loaded : style.blur
              }`}
            />
            <div className={style.tags}>
              {p.isLive && <div className={style.online}>Live</div>}
              {p.isProfessional && (
                <div className={style.professional}>Professional</div>
              )}
              {p.unCompleted && (
                <div className={style.incomplete}>Incomplete</div>
              )}
              {p.isDesktop && (
                <div className={style.desktopTag}>Desktop Only</div>
              )}
              {p.isPrivate && (
                <div className={style.desktopTag}>Private Repository</div>
              )}
            </div>
          </figure>
        ))}
      </div>

      <div className={style.textPanels}>
        {projects.map((p, i) => (
          <div
            key={p.title}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className={`${style.textPanel} ${
              i === active ? style.textPanelActive : ""
            }`}
          >
            <h2 className={style.projectTitle}>{p.title}</h2>
            <p className={style.desc}>{p.desc}</p>

            <section className={style.moreInfo}>
              <h3 className={style.projectInfo}>Project Info</h3>
              <div className={style.projectInfoDetails}>
                <p>Year</p>
                <p className={style.detail}>{p.year}</p>
              </div>
              <div className={style.projectInfoDetails}>
                <p>Role</p>
                <p className={style.detail}>{p.role}</p>
              </div>
            </section>

            <nav
              className={style.linkSection}
              aria-label={`Links to ${p.title}`}
            >
              {p.isLive && (
                <a
                  href={p.liveLink}
                  className={style.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => arrowRefs.current[i]?.startAnimation()}
                  onMouseLeave={() => arrowRefs.current[i]?.stopAnimation()}
                >
                  <p>LIVE</p>
                  <ArrowUpRightIcon
                    ref={(el) => {
                      arrowRefs.current[i] = el;
                    }}
                    size={24}
                    color="#D3E97A"
                  />
                </a>
              )}

              {!p.isPrivate && p.githubRepo && (
                <a
                  href={p.githubRepo}
                  className={style.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>GITHUB</p>
                  <img
                    className={style.linkImage}
                    src={github}
                    alt="GitHub repository link"
                  />
                </a>
              )}
            </nav>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrollSpyProjects;
