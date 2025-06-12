import linkedin from "../assets/bxl-linkedin.svg.svg";
import github from "../assets/bxl-github.svg.svg";
import x from "../assets/bxl-x.svg";
import instagram from "../assets/bxl-instagram.svg.svg";
function ConnectSection() {
  return (
    <section className="connect">
      <section className="connect-body">
        <h1 className="connect-header">Let’s connect</h1>
        <p className="connect-text">
          Say hello at{" "}
          <a href="mailto:osesojehssp@gmail.com" className="connect-link">
            My Gmail
          </a>
          .
        </p>
        <p className="connect-text">For more info, here is my resume</p>
        <div className="connect-socials">
          <a href="">
            <img className="socials-image" src={linkedin} alt="linkedin link" />
          </a>
          <a href="">
            <img className="socials-image" src={github} alt="github link" />
          </a>
          <a href="">
            <img className="socials-image" src={x} alt="twitter link" />
          </a>
          <a href="">
            <img
              className="socials-image"
              src={instagram}
              alt="instagram link"
            />
          </a>
        </div>
      </section>
      <section>
        <form action="" className="connect-form">
          <div className="form-child">
            <label htmlFor="Name">Name</label>
            <input type="text" name="" id="Name" className="Input" />
          </div>
          <div className="form-child">
            <label htmlFor="Email">Email</label>
            <input type="email" name="" id="Email" className="Input" />
          </div>
          <div className="form-child">
            <label htmlFor="Subject">Subject</label>
            <input type="text" name="" id="Subject" className="Input" />
          </div>
          <div className="form-child">
            <label htmlFor="Message">Message</label>
            <textarea
              name="message"
              id="Message"
              className="Input"
              rows={5}
              cols={30}
            ></textarea>
          </div>
          <button type="submit" className="Submit">
            Submit
          </button>
        </form>
      </section>
    </section>
  );
}

export default ConnectSection;
