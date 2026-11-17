import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Layers3 } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
}

const projects: Project[] = [
  { title: "Resume Builder", description: "A full-stack tool for creating, previewing, and exporting polished resumes, with dynamic forms and a live document preview.", tags: ["React", "Node.js", "Express", "MongoDB", "GenAI"], github: "https://github.com/Sarthak92101/ResumeBuilder", live: "https://resume-builder-delta-liart.vercel.app/" },
  { title: "Just Rest", description: "A sleep and recovery brand concept that flips Nike’s hustle language into a calming digital experience, complete with a sleep score and phone dashboard.", tags: ["Next.js", "React", "Tailwind CSS"], github: "https://github.com/Sarthak92101/JustRest", live: "https://justrest-sleep.netlify.app" },
  { title: "Music System", description: "An AI-powered music recommendation experience that uses user preferences and third-party APIs to make discovery feel personal.", tags: ["JavaScript", "React", "API", "AI Tools"], github: "https://github.com/Sarthak92101/MUSIC", live: null },
  { title: "Video Storage System", description: "A content workflow for generating videos from text and images with AI tools, bringing the moving parts of creation into one place.", tags: ["React", "Node.js", "AI APIs"], github: "https://github.com/Sarthak92101/VideoWithAI", live: null },
  { title: "Wanderlust", description: "A full-stack travel platform with authentication, destination listings, and CRUD flows for exploring and managing trip content.", tags: ["React", "Node.js", "Express", "MongoDB"], github: "https://github.com/Sarthak92101/Wandurlust", live: null },
  { title: "Global Trip Master", description: "A responsive travel interface built around reusable components, clear visual hierarchy, and layouts that work across screen sizes.", tags: ["HTML", "CSS", "JavaScript", "React"], github: "https://github.com/Sarthak92101/GlobalTripMaster", live: "https://global-trip-master.vercel.app/" },
  { title: "Mini Projects Collection", description: "A set of focused builds including a to-do app, weather app, and calculator—small projects for sharpening core JavaScript skills.", tags: ["HTML", "CSS", "JavaScript"], github: "https://github.com/Sarthak92101/FrontEnd-Mini-Projects", live: null },
];

const filters = ["All", "Full Stack", "Frontend", "AI & Data"];
const tones = ["from-lime-300/20 via-emerald-500/10 to-transparent", "from-sky-400/20 via-indigo-500/10 to-transparent", "from-fuchsia-400/20 via-violet-500/10 to-transparent", "from-orange-300/20 via-rose-500/10 to-transparent"];

const ProjectsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");
  const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => {
    if (activeFilter === "Full Stack") return project.tags.some((tag) => ["Node.js", "Express", "MongoDB"].includes(tag));
    if (activeFilter === "Frontend") return project.tags.some((tag) => ["React", "Next.js", "HTML"].includes(tag));
    return project.tags.some((tag) => /AI|GenAI|API/i.test(tag));
  });

  return (
    <section id="projects" className="relative scroll-mt-24 px-6 py-24 sm:py-32" ref={ref}>
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-10 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className="section-kicker mb-4">03 / Selected work</p>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Made with intent.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">A few things I’ve designed, built, and learned from along the way.</p>
          </div>
          <div className="flex w-fit flex-wrap gap-1 rounded-full border border-border bg-card/70 p-1">
            {filters.map((filter) => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className={`relative rounded-full px-4 py-2 font-mono text-[11px] transition-colors ${activeFilter === filter ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {activeFilter === filter && <motion.span layoutId="project-filter" className="absolute inset-0 rounded-full bg-primary" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="relative z-10">{filter}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid gap-4 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title} layout
                initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.32, delay: index * 0.035 }}
                className={`group relative overflow-hidden rounded-2xl border border-border/80 bg-card/65 transition-colors hover:border-primary/35 ${activeFilter === "All" && index === 0 ? "md:col-span-2 md:grid md:grid-cols-[1fr_0.9fr]" : ""}`}
              >
                <div className={`relative min-h-40 overflow-hidden border-b border-border/60 bg-gradient-to-br ${tones[index % tones.length]} p-5 ${activeFilter === "All" && index === 0 ? "md:min-h-full md:border-b-0 md:border-r" : ""}`}>
                  <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(hsl(var(--foreground)/0.3)_0.7px,transparent_0.7px)] [background-size:12px_12px]" />
                  <div className="relative flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/55"><span>Project / {String(projects.indexOf(project) + 1).padStart(2, "0")}</span><Layers3 className="h-4 w-4" /></div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                    <p className="max-w-md font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground/90 sm:text-3xl">{project.title}</p>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-foreground/15 bg-background/35 text-foreground/70 backdrop-blur transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-primary/50 group-hover:text-primary"><ArrowUpRight className="h-4 w-4" /></span>
                  </div>
                  <div className="absolute right-8 top-12 h-24 w-24 rounded-full border border-foreground/10 transition-transform duration-700 group-hover:scale-125" />
                  <div className="absolute right-14 top-[4.25rem] h-12 w-12 rounded-full border border-primary/20 transition-transform duration-700 group-hover:-translate-x-2 group-hover:translate-y-2" />
                </div>
                <div className="p-5 sm:p-6">
                  <p className="mb-5 text-sm leading-7 text-muted-foreground">{project.description}</p>
                  <div className="mb-6 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => <span key={tag} className="rounded-md bg-secondary/70 px-2 py-1 font-mono text-[10px] text-secondary-foreground/80">{tag}</span>)}
                  </div>
                  <div className="flex items-center gap-5 border-t border-border/60 pt-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"><Github className="h-4 w-4" /> Source</a>
                    {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"><ExternalLink className="h-4 w-4" /> Live project</a>}
                    {!project.live && <span className="text-xs text-muted-foreground/60">In progress</span>}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
