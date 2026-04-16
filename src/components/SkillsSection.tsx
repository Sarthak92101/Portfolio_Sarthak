import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2, FileJson, Palette, Server, Database, GitBranch,
  Layout, Blocks, Terminal, Globe, Wrench, MonitorSmartphone,
} from "lucide-react";

const skillCategories = [
  {
    label: "Programming Languages",
    skills: [
      { name: "C", icon: Code2 },
      { name: "C++", icon: Code2 },
      { name: "Java", icon: Code2 },
      { name: "Python", icon: Code2 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "HTML", icon: Globe },
      { name: "CSS", icon: Palette },
      { name: "JavaScript", icon: FileJson },
      { name: "React", icon: Blocks },
      { name: "Next.js", icon: Layout },
      { name: "Tailwind CSS", icon: MonitorSmartphone },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Terminal },
    ],
  },
  {
    label: "Database",
    skills: [
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    label: "Tools",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: Code2 },
      { name: "VS Code", icon: Wrench },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Skills
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold">
            Tech Stack
          </h2>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * ci }}
            >
              <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.15 * ci + 0.06 * si }}
                    whileHover={{ scale: 1.06, y: -2 }}
                    className="flex items-center gap-2.5 px-4 py-2.5 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors cursor-default card-light"
                  >
                    <skill.icon className="w-4 h-4 text-primary" />
                    <span className="font-heading text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
