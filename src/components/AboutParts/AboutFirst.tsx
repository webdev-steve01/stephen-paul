import AboutNav from "../Navigation/AboutNav";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import SharedHero from "../SharedHero";

function ABoutFirst() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src =
      "https://res.cloudinary.com/dlpty7kky/image/upload/f_auto,,w_1000,h_1000,c_fit/v1753188913/Stephen_pezldi.jpg";
    img.onload = () => setLoaded(true);
  }, []);

  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    console.log("inView:", inView);
  }, [inView]);

  return (
    <div>
      <AboutNav classname={`inView ? "" : "fixed"`} />
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
        <section className={`my-image  ${loaded ? "loaded-two" : ""}`}>
          {/* <img loading="lazy" src={image} alt="" className="about-image" /> */}
        </section>
      </div>
    </div>
  );
}

export default ABoutFirst;
