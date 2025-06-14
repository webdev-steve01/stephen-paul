import React from "react";
import ABoutFirst from "../components/AboutParts/AboutFirst";
import AboutNav from "../components/Navigation/AboutNav";
import Capabilities from "../components/AboutParts/Capabilities";
import Experience from "../components/AboutParts/Experience";
import ConnectSection from "../components/ConnectSection";
function About() {
  return (
    <div>
      <AboutNav />
      <ABoutFirst />
      <Capabilities />
      <Experience />
      <ConnectSection />
    </div>
  );
}

export default About;
