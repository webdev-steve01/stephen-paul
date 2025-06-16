import { useState, useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

type prop = {
  text: string | string[];
  classname?: string;
};

function TypewriterComponent({ text, classname }: prop) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [startTyping, setStartTyping] = useState(false);
  const [typedText, setTypedText] = useState("");

  const [typewriterText] = useTypewriter({
    words: Array.isArray(text) ? text : [text],
    loop: 1,
    typeSpeed: 90,
    deleteSpeed: 30,
  });

  useEffect(() => {
    if (inView && !startTyping) {
      setStartTyping(true);
    }
  }, [inView]);

  // Update the visible text only after inView
  useEffect(() => {
    if (startTyping) {
      setTypedText(typewriterText);
    }
  }, [typewriterText, startTyping]);

  return (
    <h1 ref={ref} className={classname}>
      {startTyping ? typedText : ""}
    </h1>
  );
}

export default TypewriterComponent;
