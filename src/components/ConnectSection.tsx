import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import linkedin from "../assets/bxl-linkedin.svg.svg";
import github from "../assets/bxl-github.svg.svg";
import x from "../assets/bxl-x.svg";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

function ConnectSection() {
  const [isSending, setIsSending] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setAlertMessage(null);
    setIsSuccess(null);
    setIsSending(true);

    try {
      if (!form.current) throw new Error("Form reference is not set.");

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);

      setAlertMessage("Your message has been sent successfully!");
      setIsSuccess(true);
      form.current.reset();
    } catch (error: any) {
      console.error("Failed to send message:", error);
      setAlertMessage(
        `Failed to send message: ${error.text || error.message || "Unknown error"}. Please try again later.`
      );
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlertMessage(null);
      setIsSuccess(null);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [alertMessage, isSuccess]);

  return (
    <section className="connect" id="Contact">
      <div className="connect-body">
        <h1 className="connect-header">Let’s connect</h1>

        <article className="connect-article">
          <p className="connect-text">
            Feel free to contact me at{" "}
            <a href="mailto:stephenpaul.code@gmail.com" className="connect-link">
              stephenpaul.code@gmail.com
            </a>.
          </p>
          <p className="connect-text">
            For more info, here is my{" "}
            <a href="https://drive.google.com/uc?export=download&id=11MAkbY0a_fj-6gnqHr78tABBbDwwAGUM" download="resume.pdf" className="connect-link">
              resume
            </a>.
          </p>

          <nav className="connect-socials" aria-label="Social Media Links">
            <a
              href="https://www.linkedin.com/in/osesojeh-sylvester-paul-2bb872286/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Stephen's LinkedIn profile" className="socials-image" />
            </a>
            <a
              href="https://github.com/webdev-steve01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Stephen's GitHub profile" className="socials-image" />
            </a>
            <a
              href="https://x.com/Osesojeh01?t=6vxUpJ4fqjir0yUeJWNmZA&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={x} alt="Stephen on Twitter/X" className="socials-image" />
            </a>
          </nav>
        </article>
      </div>

      <form
        onSubmit={sendEmail}
        className="connect-form"
        ref={form}
        aria-label="Contact form"
      >
        <div className="form-child">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name"
            id="Name"
            className="Input"
            required
            disabled={isSending}
            aria-required="true"
          />
        </div>
        <div className="form-child">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email"
            id="Email"
            className="Input"
            required
            disabled={isSending}
            aria-required="true"
          />
        </div>
        <div className="form-child">
          <label htmlFor="Subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="Subject"
            className="Input"
            required
            disabled={isSending}
            aria-required="true"
          />
        </div>
        <div className="form-child">
          <label htmlFor="Message">Message</label>
          <textarea
            name="message"
            id="Message"
            className="Input"
            rows={5}
            required
            disabled={isSending}
            aria-required="true"
          ></textarea>
        </div>

        <button type="submit" className="Submit" disabled={isSending}>
          {isSending ? "Sending..." : "Submit"}
        </button>

        {alertMessage && (
          <p
            role="alert"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "1rem",
              color: isSuccess ? "green" : "red",
            }}
          >
            {alertMessage}
          </p>
        )}
      </form>
    </section>
  );
}

export default ConnectSection;
