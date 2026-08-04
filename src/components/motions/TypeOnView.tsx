import { useInView } from "react-intersection-observer";
import TextType from "../TextType";

function TypeOnView({
  text = "",
  className = "",
  typingSpeed = 60,
  threshold = 0.3,
}) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="w-full text-left">
      {inView && (
        <TextType
          text={Array.isArray(text) ? text : [text]}
          className={`text-left font-[30em] ${className}`}
          typingSpeed={typingSpeed}
          //   showCursor
          loop={false}
        />
      )}
    </div>
  );
}

export default TypeOnView;
