import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Resume Builder",
    description:
      "Developed a full-stack resume builder application that allows users to create, preview, and download professional resumes. Implemented dynamic form handling with live preview and PDF export functionality.",
    tags: ["React", "Node.js", "Express", "MongoDB", "GenAI"],
    github: "https://github.com/Sarthak92101/ResumeBuilder",
    live: "#",
  },
  {
    title: "Music System",
    description:
      "Built an AI-powered music recommendation system that suggests songs based on user preferences and behavior. Integrated third-party APIs to enhance personalization and user experience.",
    tags: ["JavaScript", "React", "API", "AI Tools"],
    github: "https://github.com/Sarthak92101/MUSIC",
    live: "#",
  },
  {
    title: " Video Storage System",
    description:
      "Created a platform that generates videos from text and images using AI tools. Automated content generation workflow to produce engaging visual media efficiently.",
    tags: ["React", "Node.js", "AI APIs"],
    github: "https://github.com/Sarthak92101/VideoWithAI",
    live: "#",
  },
  {
    title: "Wanderlust (Full Stack Travel Website)",
    description:
      "Developed a full-stack travel website with user authentication, trip listings, and CRUD operations. Users can explore destinations, add listings, and manage travel content.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Sarthak92101/Wandurlust",
    live: "#",
  },
  {
    title: "Global Trip Master (Frontend)",
    description:
      "Designed and developed a responsive travel website interface focusing on modern UI/UX principles. Implemented reusable components and optimized layouts for different screen sizes.",
    tags: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
    github: "https://github.com/Sarthak92101/GlobalTripMaster",
    live: "#",
  },
  {
    title: "Mini Projects Collection",
    description:
      "Built multiple mini projects including To-Do App, Weather App, and Calculator to strengthen core JavaScript and frontend development concepts.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sarthak92101/FrontEnd-Mini-Projects",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  const filterOptions = ["All", ...allTags];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
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

          <div className="flex flex-wrap gap-3 mb-8">
            {filterOptions.map((filter) => (
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

        <motion.div
          layout
          className="grid sm:grid-cols-2 gap-6"
        >
          {filteredProjects.map((project, i) => (
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
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-heading bg-secondary text-secondary-foreground rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                  aria-label={`GitHub repo for ${project.title}`}
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href={project.live}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
                  aria-label={`Live demo for ${project.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
