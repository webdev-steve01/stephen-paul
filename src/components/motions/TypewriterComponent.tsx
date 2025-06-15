import { useTypewriter } from "react-simple-typewriter";
// import { useInView } from "react-intersection-observer";

type prop = {
  text: string | string[];
  classname?: string;
};
function TypewriterComponent({ text, classname }: prop) {
  // const { ref, inView } = useInView();
  const [startTyping] = useTypewriter({
    words: Array.isArray(text) ? text : [text],
    loop: 1,
    typeSpeed: 90,
    deleteSpeed: 30,
  });

  return (
    <h1 className={classname}>
      {startTyping}
      {/* <Cursor /> */}
    </h1>
  );
}

export default TypewriterComponent;
