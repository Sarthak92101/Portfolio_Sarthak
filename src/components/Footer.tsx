import { ArrowUp, Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/70 px-6 py-7">
    <div className="section-shell flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-foreground/80 transition-colors hover:text-primary"><span className="grid h-7 w-7 place-items-center rounded-lg bg-primary font-mono text-[10px] text-primary-foreground">S.</span> Sarthak Sharma</a>
      <p className="text-xs text-muted-foreground">Designed & built with care <span className="text-primary">✳</span> © 2026</p>
      <div className="flex items-center gap-3">
        <a href="https://github.com/sarthak92101" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground transition-colors hover:text-primary"><Github className="h-4 w-4" /></a>
        <a href="https://linkedin.com/in/sarthak92101" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition-colors hover:text-primary"><Linkedin className="h-4 w-4" /></a>
        <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="ml-2 inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">Back up <ArrowUp className="h-3 w-3" /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
