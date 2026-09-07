import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number; // how far the whole button is allowed to pull, in px
  ariaLabel?: string;
  magneticContent?: boolean; // opt-in: also pull the inner content toward the cursor
  contentStrength?: number; // how far the inner content is allowed to pull, in px
};

function MagneticButton({
  children,
  className,
  onClick,
  strength = 16,
  ariaLabel,
  magneticContent = false,
  contentStrength = 10,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 15, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 300, damping: 15, mass: 0.6 });

  const contentX = useMotionValue(0);
  const contentY = useMotionValue(0);
  const contentSpringX = useSpring(contentX, {
    stiffness: 250,
    damping: 12,
    mass: 0.4,
  });
  const contentSpringY = useSpring(contentY, {
    stiffness: 250,
    damping: 12,
    mass: 0.4,
  });

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    x.set(Math.max(Math.min(distX * 0.4, strength), -strength));
    y.set(Math.max(Math.min(distY * 0.4, strength), -strength));

    if (magneticContent) {
      contentX.set(
        Math.max(Math.min(distX * 0.6, contentStrength), -contentStrength),
      );
      contentY.set(
        Math.max(Math.min(distY * 0.6, contentStrength), -contentStrength),
      );
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    if (magneticContent) {
      contentX.set(0);
      contentY.set(0);
    }
  };

  return (
    <motion.button
      ref={ref}
      type="button"
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      aria-label={ariaLabel}
    >
      {magneticContent ? (
        <motion.span
          style={{
            x: contentSpringX,
            y: contentSpringY,
            display: "inline-flex",
          }}
        >
          {children}
        </motion.span>
      ) : (
        children
      )}
    </motion.button>
  );
}

export default MagneticButton;
