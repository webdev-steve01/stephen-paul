import style from "./project.module.css";
import arrow from "../../assets/arrow.svg";
import github from "../../assets/bxl-github.svg.svg";
type project = {
  image: string;
  title: string;
  desc: string;
  year: string;
  role: string;
  liveLink?: string;
  githubRepo: string;
  isLive: boolean;
  isProfessional?: boolean;
  unCompleted?: boolean;
  alt: string;
};

function Project(prop: project) {
  return (
    <section className={style.container}>
      <section className={style.projectImageContainer}>
        <div className={style.projectImage}>
          <img src={prop.image} alt={prop.alt} className={style.image} />
        </div>

        <div className={style.tags}>
          {prop.isLive && <div className={style.online}>Live</div>}
          {prop.isProfessional && (
            <div className={style.professional}>Professional</div>
          )}
          {prop.unCompleted && (
            <div className={style.incomplete}>incomplete</div>
          )}
        </div>
      </section>

      <section>
        <section className={style.projectBody}>
          <h1 className={style.projectTitle}>{prop.title}</h1>
          <p className={style.desc}>{prop.desc}</p>
          <div className={style.moreInfo}>
            <div className={style.projectInfo}>Project Info</div>
            <div className={style.projectInfoDetails}>
              <p>Year</p>
              <p className={style.detail}>{prop.year}</p>
            </div>
            <div className={style.projectInfoDetails}>
              <p>Role</p>
              <p className={style.detail}>{prop.role}</p>
            </div>
          </div>
        </section>
        <section className={style.linkSection}>
          {prop.isLive ? (
            <a href={prop.liveLink} className={style.link}>
              <p>LIVE</p>
              <img className={style.linkImage} src={arrow} alt="arrow" />
            </a>
          ) : (
            <></>
          )}
          <a href="" className={style.link}>
            <p>GITHUB</p>
            <img className={style.linkImage} src={github} alt="arrow" />
          </a>
        </section>
      </section>
    </section>
  );
}

export default Project;
