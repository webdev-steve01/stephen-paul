import style from "./project.module.css";
import arrow from "../../assets/arrow.svg";
import github from "../../assets/bxl-github.svg.svg";
import { useEffect, useState } from "react";

type project = {
  image: string;
  placeholder?: string;
  title: string;
  desc: string;
  year: string;
  role: string;
  liveLink?: string;
  githubRepo: string;
  isLive: boolean;
  isProfessional?: boolean;
  isDesktop?: boolean;
  unCompleted?: boolean;
  alt: string;
};

function Project(prop: project) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = prop.image;
    img.onload = () => {
      setLoaded(true);
    };
  }, [prop.image]);
  return (
    <article className={style.container}>
      <section className={style.projectImageContainer}>
        <figure className={style.projectImage}>
          <img
            src={loaded ? prop.image : prop.placeholder}
            alt={prop.alt}
            className={`${style.image} ${!loaded ? style.blur : style.loaded} `}
          />
        </figure>

        <div className={style.tags}>
          {prop.isLive && <div className={style.online}>Live</div>}
          {prop.isProfessional && (
            <div className={style.professional}>Professional</div>
          )}
          {prop.unCompleted && (
            <div className={style.incomplete}>incomplete</div>
          )}
          {prop.isDesktop && <div className={style.desktop}>Desktop Only</div>}
        </div>
      </section>

      <section className={style.border}>
        <section className={style.projectBody}>
          <header>
            <h2 className={style.projectTitle}>{prop.title}</h2>
          </header>
          <p className={style.desc}>{prop.desc}</p>
          <section className={style.moreInfo}>
            <h3 className={style.projectInfo}>Project Info</h3>
            <div className={style.projectInfoDetails}>
              <p>Year</p>
              <p className={style.detail}>{prop.year}</p>
            </div>
            <div className={style.projectInfoDetails}>
              <p>Role</p>
              <p className={style.detail}>{prop.role}</p>
            </div>
          </section>
        </section>

        <nav
          className={style.linkSection}
          aria-label={`Links to ${prop.title}`}
        >
          {prop.isLive && (
            <a
              href={prop.liveLink}
              className={style.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>LIVE</p>
              <img
                className={style.linkImage}
                src={arrow}
                alt="Live project link"
              />
            </a>
          )}
          <a
            href={prop.githubRepo}
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
        </nav>
      </section>
    </article>
  );
}

export default Project;
