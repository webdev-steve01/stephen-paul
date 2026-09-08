import SHinyButton from "../motions/SHinyButton";

function Capabilities() {
  const capabilities = [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "TanStack Query",
    "JavaScript",
    "HTML",
    "CSS",
    "Responsive Design",
    "Node.js",
    "Go",
    "PostgreSQL",
  ];
  return (
    <div id="Capabilities" className="capabilities-section">
      <div className="capabilities-left">
        <h1 className="capabilities-title">MY CAPABILITIES</h1>
      </div>
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
            <SHinyButton key={capability} text={capability} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Capabilities;
