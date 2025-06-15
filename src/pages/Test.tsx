import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Test() {
  const [leave, setLeave] = useState(false);
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <motion.button layout onClick={() => setLeave(!leave)}>
        Exit
      </motion.button>
      <AnimatePresence mode="popLayout">
        {leave && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{ rotate: "360deg", scale: 1, y: [0, 150, -150, -150, 0] }}
            style={{
              border: "2px solid #000",
              padding: "20px",
              borderRadius: "5px",
              backgroundColor: "#000000",
            }}
            exit={{ rotate: "0deg", scale: 0, y: 0 }}
            transition={{
              duration: 1,
              // type: "spring",
              ease: "backInOut",
              // repeat: Infinity,
            }}
          >
            framer
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Test;
