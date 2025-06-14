import React from "react";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import AboutSection from "../components/AboutSection";
import ConnectSection from "../components/ConnectSection";

function HomePage() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <AboutSection />
      <ConnectSection />
    </div>
  );
}

export default HomePage;
