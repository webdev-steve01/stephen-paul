import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../motions/MagneticButton";
import cancel from "../../assets/cancel-close-delete-svgrepo-com.svg";

type MenuLink = { label: string; href: string };

type MenuPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  links: MenuLink[];
};

function MenuPanel({ isOpen, onClose, links }: MenuPanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          <motion.div
            className="menu-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="menu-panel-blob" />

            <MagneticButton
              className="menu-close"
              onClick={onClose}
              ariaLabel="Close menu"
            >
              <img src={cancel} alt="" />
            </MagneticButton>

            <nav className="menu-links" aria-label="Main navigation">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="menu-link"
                  onClick={onClose}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="menu-footer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + links.length * 0.06, duration: 0.4 }}
            >
              <div className="menu-email">
                <p className="menu-email-label">EMAIL ADDRESS</p>
                <a
                  href="mailto:stephenpaul.code@gmail.com"
                  className="menu-email-value"
                >
                  stephenpaul.code@gmail.com
                </a>
              </div>

              <div className="menu-socials">
                <a
                  href="https://github.com/webdev-steve01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-social-pill"
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/stephen-paul-codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-social-pill"
                >
                  LINKEDIN
                </a>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default MenuPanel;
