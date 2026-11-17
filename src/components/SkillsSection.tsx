import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Blocks, Code2, Database, GitBranch, Globe2, Server, Sparkles, Terminal } from "lucide-react";

const skillGroups = [
  { label: "Languages", caption: "The building blocks", icon: Code2, skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"] },
  { label: "Frontend", caption: "Interfaces that feel right", icon: Blocks, skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { label: "Backend", caption: "Systems behind the screen", icon: Server, skills: ["Node.js", "Express.js", "REST APIs"] },
  { label: "Data & AI", caption: "From raw data to insight", icon: Sparkles, skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"] },
  { label: "Databases", caption: "Structured and flexible data", icon: Database, skills: ["MongoDB", "MySQL"] },
  { label: "Tools", caption: "My everyday toolkit", icon: Terminal, skills: ["Git", "GitHub", "VS Code", "Cursor", "IntelliJ"] },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="relative scroll-mt-24 px-6 py-24 sm:py-32" ref={ref}>
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="section-kicker mb-4">02 / My toolkit</p>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Things I work with.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">A practical mix of product-minded frontend, full-stack development, and data tools. Always adding something new to the toolbox.</p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.label}
              initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.08 * index }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/80 bg-card/55 p-5 transition-colors hover:border-primary/30 sm:p-6 ${index === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-primary/[0.04] blur-3xl transition-colors group-hover:bg-primary/[0.1]" />
              <div className="relative">
                <div className="mb-6 flex items-start justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/15 bg-primary/[0.08] text-primary"><group.icon className="h-[18px] w-[18px]" /></span>
                  <span className="font-mono text-[10px] text-muted-foreground/60">0{index + 1}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold">{group.label}</h3>
                <p className="mb-5 mt-1 text-xs text-muted-foreground">{group.caption}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span key={skill} initial={{ opacity: 0, scale: 0.94 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.25, delay: 0.1 + index * 0.06 + skillIndex * 0.035 }} className="rounded-lg border border-border/80 bg-background/50 px-2.5 py-1.5 font-mono text-[11px] text-foreground/75 transition-colors group-hover:border-primary/15 group-hover:text-foreground">{skill}</motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.55 }} className="mt-5 flex items-center gap-3 border-t border-border/60 pt-5 text-xs text-muted-foreground">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary"><GitBranch className="h-3.5 w-3.5" /></span>
          <span>Comfortable learning a new tool when the problem calls for it.</span>
          <span className="ml-auto hidden items-center gap-1 font-mono uppercase tracking-widest sm:flex"><Globe2 className="h-3.5 w-3.5" /> Curious always</span>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
