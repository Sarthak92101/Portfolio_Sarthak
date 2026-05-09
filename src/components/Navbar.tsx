import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useNavigate } from "react-router-dom";

const navItems = ["About", "Skills", "Projects", "Achievements", "YouTube", "Photos", "Contact"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (item: string) => {
    if (item === "Photos") {
      navigate("/gallery");
    } else {
      const element = document.getElementById(item.toLowerCase());
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-xl font-bold tracking-tight text-foreground">
          Sarthak<span className="text-primary">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => handleNavClick(item)}
                className="font-heading text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item}
              </button>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
          <li>
            <a
              href="/SarthakSharmaResume.pdf"
              download
              className="px-4 py-2 bg-primary text-primary-foreground font-heading text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-border/50"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      handleNavClick(item);
                      setMobileOpen(false);
                    }}
                    className="block py-2 font-heading text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li className="mt-2">
                <ThemeToggle />
              </li>
              <li>
                <a
                  href="/resume.png"
                  download
                  className="inline-block mt-2 px-4 py-2 bg-primary text-primary-foreground font-heading text-sm font-semibold rounded-lg"
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
