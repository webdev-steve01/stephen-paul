import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "./components/motions/Preloader";

gsap.registerPlugin(ScrollTrigger);

const HomePage = lazy(() => import("./pages/HomePage"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [loading, setLoading] = useState(isHome);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // only freeze scroll if the preloader is actually going to show
    if (isHome) {
      lenis.stop();
      document.body.style.overflow = "hidden";
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
    };
  }, [isHome]);

  const handlePreloaderComplete = () => {
    setLoading(false);
    document.body.style.overflow = "";
    lenisRef.current?.start();
  };

  return (
    <div className="relative min-h-screen">
      {isHome && loading && <Preloader onComplete={handlePreloaderComplete} />}

      <div className="relative z-10">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/more-about-me" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
