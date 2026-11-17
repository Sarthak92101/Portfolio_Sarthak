import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  "About",
  "Skills",
  "Projects",
  "Achievements",
  "YouTube",
  // "Photos", // Re-enable when the gallery is ready.
  "Contact",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const sections = navItems
      .filter((item) => item !== "Photos")
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (item: string) => {
    setMobileOpen(false);
    if (item === "Photos") {
      navigate("/gallery");
      return;
    }
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = (mobile = false) => navItems.map((item) => (
    <li key={item}>
      <button
        onClick={() => handleNavClick(item)}
        className={`${mobile ? "w-full rounded-lg px-3 py-2.5 text-left" : "relative px-1 py-2"} font-heading text-[13px] font-medium transition-colors ${activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
      >
        {item}
        {!mobile && activeSection === item.toLowerCase() && <motion.span layoutId="nav-indicator" className="absolute inset-x-1 -bottom-1 h-px bg-primary" />}
      </button>
    </li>
  ));

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/70 glass"
    >
      <div className="section-shell flex items-center justify-between px-6 py-3.5">
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="group flex items-center gap-2 font-heading text-lg font-bold tracking-tight text-foreground">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-primary font-mono text-xs text-primary-foreground transition-transform group-hover:rotate-[-8deg]">S.</span>
          <span>Sarthak<span className="text-primary"> Sharma</span></span>
        </a>

        <ul className="hidden items-center gap-4 lg:flex">{navLinks()}</ul>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a href="/SarthakSharmaResume.pdf" download className="inline-flex items-center gap-2 rounded-full border border-primary/35 px-4 py-2 font-heading text-xs font-semibold text-foreground transition-all hover:border-primary hover:bg-primary/10">
            Resume <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileOpen((open) => !open)} className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden border-t border-border/70 bg-background/95 lg:hidden">
            <ul className="section-shell grid grid-cols-2 gap-1 px-6 py-4">{navLinks(true)}</ul>
            <div className="section-shell px-6 pb-5">
              <a href="/SarthakSharmaResume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-heading text-sm font-semibold text-primary-foreground">Download resume <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
