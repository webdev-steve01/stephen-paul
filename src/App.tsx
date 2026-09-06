import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import Test from "./pages/Test";
import Projects from "./pages/Projects";
import CursorCircle from "./components/motions/cursor";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <CursorCircle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/more-about-me" element={<About />} />
          <Route path="/test" element={<Test />} />
          <Route path="/projects" element={<Projects />} />
          {/* You can add more routes here as needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
