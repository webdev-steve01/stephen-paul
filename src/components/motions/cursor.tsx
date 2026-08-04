import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const circleX = useSpring(mouseX, springConfig);
  const circleY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const sharedStyle = {
    translateX: "-50%",
    translateY: "-50%",
    pointerEvents: "none" as const,
    position: "fixed" as const,
    top: 0,
    left: 0,
    borderRadius: "50%",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 0.2s ease",
  };

  return (
    <>
      {/* dot — snaps instantly, bright core */}
      <motion.div
        style={{
          ...sharedStyle,
          x: mouseX,
          y: mouseY,
          zIndex: 10000,
          width: "8px",
          height: "8px",
          backgroundColor: "#4ade80",
          boxShadow: "0 0 8px 2px rgba(74, 222, 128, 0.8)",
        }}
      />
      {/* circle — trails behind, soft glow ring */}
      <motion.div
        style={{
          ...sharedStyle,
          x: circleX,
          y: circleY,
          zIndex: 9999,
          width: "36px",
          height: "36px",
          border: "1px solid rgba(74, 222, 128, 0.5)",
          boxShadow:
            "0 0 20px 4px rgba(74, 222, 128, 0.25), inset 0 0 15px rgba(74, 222, 128, 0.15)",
          backdropFilter: "blur(1px)",
        }}
      />
    </>
  );
}
