import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
}

const projects: Project[] = [
  {
    title: "Resume Builder",
    description:
      "Developed a full-stack resume builder application that allows users to create, preview, and download professional resumes. Implemented dynamic form handling with live preview and PDF export functionality.",
    tags: ["React", "Node.js", "Express", "MongoDB", "GenAI"],
    github: "https://github.com/Sarthak92101/ResumeBuilder",
    live: "https://resume-builder-delta-liart.vercel.app/login",
  },
  {
    title: "Music System",
    description:
      "Built an AI-powered music recommendation system that suggests songs based on user preferences and behavior. Integrated third-party APIs to enhance personalization and user experience.",
    tags: ["JavaScript", "React", "API", "AI Tools"],
    github: "https://github.com/Sarthak92101/MUSIC",
    live: null,
  },
  {
    title: "Video Storage System",
    description:
      "Created a platform that generates videos from text and images using AI tools. Automated content generation workflow to produce engaging visual media efficiently.",
    tags: ["React", "Node.js", "AI APIs"],
    github: "https://github.com/Sarthak92101/VideoWithAI",
    live: null,
  },
  {
    title: "Wanderlust (Full Stack Travel Website)",
    description:
      "Developed a full-stack travel website with user authentication, trip listings, and CRUD operations. Users can explore destinations, add listings, and manage travel content.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Sarthak92101/Wandurlust",
    live: null,
  },
  {
    title: "Global Trip Master (Frontend)",
    description:
      "Designed and developed a responsive travel website interface focusing on modern UI/UX principles. Implemented reusable components and optimized layouts for different screen sizes.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    github: "https://github.com/Sarthak92101/GlobalTripMaster",
    live: "https://global-trip-master.vercel.app/",
  },
  {
    title: "Mini Projects Collection",
    description:
      "Built multiple mini projects including To-Do App, Weather App, and Calculator to strengthen core JavaScript and frontend development concepts.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sarthak92101/FrontEnd-Mini-Projects",
    live: null,
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const allTags: string[] = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  );

  const filterOptions: string[] = ["All", ...allTags];

  const filteredProjects: Project[] =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.tags.includes(activeFilter)
        );

  return (
    <section id="projects" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Projects
          </p>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            What I've Built
          </h2>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3 mb-8">
            {filterOptions.map((filter: string) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-heading text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* PROJECT GRID */}
        <motion.div layout className="grid sm:grid-cols-2 gap-6">
          {filteredProjects.map((project: Project, i: number) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="group p-6 sm:p-8 rounded-2xl bg-card border border-border card-hover card-light"
            >

              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-heading bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">

                {/* GITHUB */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>

                {/* LIVE */}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground opacity-60">
                    Live Not Available
                  </span>
                )}

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;