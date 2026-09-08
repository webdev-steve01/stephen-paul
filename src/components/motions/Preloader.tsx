import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type PreloaderProps = {
  onComplete: () => void;
};

// const NAME = "STEPHEN PAUL";

function Preloader({ onComplete }: PreloaderProps) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const holdTimer = setTimeout(() => setExiting(true), 1600);
    return () => clearTimeout(holdTimer);
  }, []);
  const NAME = "OSESOJEH SYLVESTER-PAUL";
  const words = NAME.split(" ");

  return (
    <motion.div
      className="preloader"
      animate={exiting ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (exiting) onComplete();
      }}
    >
      <div className="preloader-name" aria-hidden="true">
        {words.map((word, wi) => (
          <span className="preloader-word" key={wi}>
            {word.split("").map((char, i) => (
              <span className="preloader-letter-mask" key={i}>
                <motion.span
                  className="preloader-letter"
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.1 + (wi * word.length + i) * 0.045,
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {char}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </div>

      <div className="preloader-footer">
        <span>Portfolio</span>
        <span>{new Date().getFullYear()}</span>
      </div>
    </motion.div>
  );
}

export default Preloader;
