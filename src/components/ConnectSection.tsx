// Removed "use client"; as it's specific to Next.js App Router and not needed for plain React/Vite.
import React, { useState, useRef, useEffect } from "react";
// Ensure you have installed this package: npm install @emailjs/browser or yarn add @emailjs/browser
import emailjs from "@emailjs/browser"; // Import EmailJS library

// IMPORTANT: The "Could not resolve" errors for these image imports (e.g., "../assets/bxl-linkedin.svg.svg")
// typically mean that the file is not found at that exact relative path in your file system,
// or that your Vite configuration isn't set up to directly import assets with these specific paths or double extensions (.svg.svg).
// Please verify the exact location and filenames of your SVG files.
// For a standard React/Vite setup, assets are often placed in the `public` folder and
// referenced directly by their URL (e.g., `<img src="/assets/bxl-linkedin.svg.svg" />`).
// However, adhering strictly to your original code, the import statements are kept as provided.
import linkedin from "../assets/bxl-linkedin.svg.svg";
import github from "../assets/bxl-github.svg.svg";
import x from "../assets/bxl-x.svg";
import instagram from "../assets/bxl-instagram.svg.svg";

// Removed the 'message' type alias as it's unused.

const SERVICE_ID = "service_6u281gh"; // Your EmailJS Service ID
const TEMPLATE_ID = "template_xpxmglo"; // Your EmailJS Template ID
const PUBLIC_KEY = "Snxb-oa0ozpvJpf5O"; // Your EmailJS Public Key (User ID)

function ConnectSection() {
  // Removed redundant useState for form fields (name, email, subject, message).
  // emailjs.sendForm directly reads values from the DOM form element using 'name' attributes.

  const [isSending, setIsSending] = useState(false); // State to track sending status
  const [alertMessage, setAlertMessage] = useState<string | null>(null); // State for alert messages
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null); // State to track success/error status

  const form = useRef<HTMLFormElement>(null); // Create a ref for the form

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    setAlertMessage(null); // Clear previous alert messages
    setIsSuccess(null); // Clear previous success/error status
    setIsSending(true); // Set sending state to true

    try {
      if (!form.current) {
        console.error("Form reference is not set.");
        throw new Error("Form reference is not set. Cannot send email.");
      }

      // EmailJS will read the values from the form.current element.
      // Make sure the `name` attributes on your input fields match the placeholders
      // in your EmailJS template (e.g., name="name" for {{name}}).
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);

      setAlertMessage("Your message has been sent successfully!");
      setIsSuccess(true);
      form.current.reset(); // IMPORTANT: Reset the form *after* successful submission
    } catch (error: any) {
      // Use 'any' for error handling
      console.error("Failed to send message:", error);
      setAlertMessage(
        `Failed to send message: ${
          error.text || error.message || "Unknown error"
        }. Please try again later.`
      );
      setIsSuccess(false);
    } finally {
      setIsSending(false); // Reset sending state
    }
  };

  useEffect(() => {
    // set a timeout that will clear the alert message after 10 seconds
    const timeout = setTimeout(() => {
      setAlertMessage(null);
      setIsSuccess(null);
    }, 10000); // Clear message after 10 seconds

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [alertMessage, isSuccess]); // Rerun effect if alertMessage or isSuccess changes

  return (
    // Reverted classNames to original (or removed if they were Tailwind-specific additions)
    <section className="connect" id="Contact">
      <section className="connect-body">
        <h1 className="connect-header">Let’s connect</h1>
        <article className="connect-article">
          <p className="connect-text">
            Feel free to contact me at{" "}
            <a href="mailto:osesojehssp@gmail.com" className="connect-link">
              My Gmail
            </a>
            .
          </p>
          <p className="connect-text">For more info, here is my resume</p>
          <div className="connect-socials">
            {/* Reverting image usage to original <img> tags and src attributes. */}
            <a
              href="https://www.linkedin.com/in/osesojeh-sylvester-paul-2bb872286/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="socials-image"
                src={linkedin}
                alt="linkedin link"
              />
            </a>
            <a
              href="https://github.com/webdev-steve01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="socials-image" src={github} alt="github link" />
            </a>
            <a href="YOUR_X_PROFILE" target="_blank" rel="noopener noreferrer">
              <img className="socials-image" src={x} alt="twitter link" />
            </a>
            <a
              href="YOUR_INSTAGRAM_PROFILE"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="socials-image"
                src={instagram}
                alt="instagram link"
              />
            </a>
          </div>
        </article>
      </section>

      {/* Form section */}
      <form
        onSubmit={sendEmail}
        className="connect-form" // Reverted to original class
        ref={form}
      >
        <div className="form-child">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            name="name" // Make sure this matches your EmailJS template placeholder
            id="Name"
            className="Input" // Reverted to original class
            required // Added required attribute
            disabled={isSending} // Disable input while sending
          />
        </div>
        <div className="form-child">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="email" // Make sure this matches your EmailJS template placeholder
            id="Email"
            className="Input" // Reverted to original class
            required // Added required attribute
            disabled={isSending} // Disable input while sending
          />
        </div>
        <div className="form-child">
          <label htmlFor="Subject">Subject</label>
          <input
            type="text"
            name="subject" // Make sure this matches your EmailJS template placeholder
            id="Subject"
            className="Input" // Reverted to original class
            required // Added required attribute
            disabled={isSending} // Disable input while sending
          />
        </div>
        <div className="form-child">
          <label htmlFor="Message">Message</label>
          <textarea
            name="message" // Make sure this matches your EmailJS template placeholder
            id="Message"
            className="Input" // Reverted to original class
            rows={5}
            required // Added required attribute
            disabled={isSending} // Disable textarea while sending
          ></textarea>
        </div>
        <button
          type="submit"
          className="Submit" // Reverted to original class
          disabled={isSending} // Disable button while sending
        >
          {isSending ? "Sending..." : "Submit"}
        </button>

        {/* Display alert message. Removed Tailwind conditional styling to revert to original intent,
            but retained basic structure for the message itself. You can style this
            using your own CSS classes if needed. */}
        {alertMessage && (
          <p
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
