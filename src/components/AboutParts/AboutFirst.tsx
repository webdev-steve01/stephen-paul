import AboutNav from "../Navigation/AboutNav";
import { lazy, Suspense } from "react";
// import { useEffect, useState } from "react";
import SharedHero from "../SharedHero";
import { useInView } from "react-intersection-observer";
import aboutVideo from "@/assets/videos/about-video.mp4";
import globe from "@/assets/lottie/Green_network_globe.json";
import { useEffect, useRef } from "react";
const DotLottieReact = lazy(() =>
  import("@lottiefiles/dotlottie-react").then((module) => ({
    default: module.DotLottieReact,
  })),
);

function ABoutFirst() {
  // const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // useEffect(() => {
  //   const img = new Image();
  //   img.src =
  //     "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,,w_1000,h_1000,c_fit/v1753188913/Stephen_pezldi.jpg";
  //   img.onload = () => setLoaded(true);
  // }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // 1.5x speed, adjust as needed
    }
  }, []);

  return (
    <div>
      <AboutNav scrolled={!inView} />
      <div ref={ref} style={{ height: "1px" }} />
      <SharedHero
        descTitle="I am a front-end developer based in Nigeria with a
              Computer-Science background."
        description="  I'm a front-end developer based in Nigeria with a strong Computer
              Science background. I’m passionate about building accessible,
              high-performing interfaces that not only look great but work
              seamlessly across all devices."
        typeWriterText="ABOUT ME"
      />
      <div className="about-image-skeleton">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="my-video"
        >
          <source src={aboutVideo} type="video/mp4" />
        </video>

        {/* Overlay content sits on top of video */}
        <div className="about-video-overlay">
          <p className="about-video-tagline">
            Let's build the future, <br />{" "}
            <span>One line of code at a time.</span>
          </p>

          <div className="about-globe-badge">
            <Suspense fallback={null}>
              <DotLottieReact
                data={globe}
                loop
                autoplay
                className="globe-icon"
              />
            </Suspense>
            <div className="globe-badge-text">
              {/* <span>BASED IN NIGERIA</span> */}
              <span>OPEN TO REMOTE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ABoutFirst;
