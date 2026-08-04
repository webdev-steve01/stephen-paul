import SHinyButton from "../motions/SHinyButton";

function Capabilities() {
  const capabilities = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Mobile First design",
    "Tailwind",
    "TypeScript",
    "Node.js",
    "MongoDB",
  ];
  return (
    <div id="Capabilities" className="capabilities-section">
      <h1 className="capabilities-title">MY CAPABILITIES</h1>
      <div className="capabilities-content">
        <p className="capabilities-text">
          I'm a front-end developer with a Computer Science background, skilled
          in building responsive, accessible interfaces using Next.js, React,
          Tailwind CSS, and TypeScript. I’m experienced in API integration,
          state management, and creating clean, scalable UI components. I bring
          strong problem-solving skills, attention to detail, and a
          collaborative mindset to every project.
        </p>
        <div className="capabilities-list">
          {capabilities.map((capability) => (
            <SHinyButton text={capability} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
