import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Code2, GitBranch, Sparkles, Trophy, Users } from "lucide-react";
import Counter from "@/components/ui/counter";

const achievements = [
  { icon: Trophy, rank: "69", exam: "IPU LEET · 2024", detail: "All India Rank in the lateral entry entrance test." },
  { icon: Award, rank: "06", exam: "DTU LEET · 2024", detail: "Placed among the top performers in the lateral entry entrance test." },
];

const stats = [
  { icon: Code2, value: 50, suffix: "+", label: "Projects built" },
  { icon: GitBranch, value: 200, suffix: "+", label: "Git commits" },
  { icon: Users, value: 1000, suffix: "+", label: "YouTube views" },
  { icon: Sparkles, value: 4.8, suffix: "/5", label: "Average rating" },
];

const experience = [
  { company: "Forward", title: "Frontend Development Intern", time: "Sep 2026 — Present", detail: "Building a career guidance platform with Next.js, reusable UI, real-time chat, and AI-powered workflows." },
  { company: "CodeAlpha", title: "Data Science Intern", time: "Jul 2026 — Aug 2026", detail: "Built and evaluated machine learning pipelines for classification, sales prediction, and trend analysis." },
  { company: "Unified Mentor", title: "Web Development Intern", time: "Jun 2025 — Jul 2025", detail: "Built React components and backend APIs with Node.js, Express, MongoDB, and Tailwind CSS." },
  { company: "CodeSoft", title: "Web Development Intern", time: "Nov 2023 — Dec 2023", detail: "Developed responsive web experiences and worked on frontend performance and API integration." },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="relative scroll-mt-24 px-6 py-24 sm:py-32" ref={ref}>
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="section-kicker mb-4">04 / The path so far</p><h2 className="font-heading text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">Progress, in practice.</h2></div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground">A combination of hands-on experience, milestones, and the small wins that keep the momentum going.</p>
        </motion.div>

        <div className="mb-16 grid grid-cols-2 divide-x divide-y divide-border/70 overflow-hidden rounded-2xl border border-border/80 bg-card/55 sm:grid-cols-4 sm:divide-y-0">
          {stats.map((stat, index) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: index * 0.08 }} className="p-4 sm:p-6">
              <div className="mb-5 flex items-center justify-between"><stat.icon className="h-4 w-4 text-primary" /><span className="font-mono text-[10px] text-muted-foreground/60">0{index + 1}</span></div>
              <Counter end={stat.value} suffix={stat.suffix} delay={0.25 + index * 0.12} />
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="section-kicker mb-4">Recognition</p>
            <h3 className="mb-7 font-heading text-2xl font-semibold tracking-tight">A couple of milestones I’m proud of.</h3>
            <div className="space-y-3">
              {achievements.map((item, index) => (
                <motion.article key={item.exam} initial={{ opacity: 0, x: -16 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.1 + index * 0.1 }} className="flex gap-4 rounded-xl border border-border/70 bg-card/45 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><item.icon className="h-4 w-4" /></span>
                  <div><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-primary">{item.exam}</p><h4 className="mt-1 font-heading text-base font-semibold">Rank {item.rank}</h4><p className="mt-1 text-xs leading-5 text-muted-foreground">{item.detail}</p></div>
                </motion.article>
              ))}
            </div>
          </div>

          <div>
            <p className="section-kicker mb-4">Experience</p>
            <h3 className="mb-7 font-heading text-2xl font-semibold tracking-tight">Learning by shipping.</h3>
            <div className="relative space-y-0 border-l border-border/80 pl-6">
              {experience.map((role, index) => (
                <motion.article key={role.company} initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.12 + index * 0.1 }} className="relative pb-7 last:pb-0">
                  <span className="absolute -left-[29px] top-1.5 h-1.5 w-1.5 rounded-full bg-primary ring-4 ring-background" />
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline"><h4 className="font-heading text-base font-semibold">{role.title}</h4><span className="font-mono text-[10px] text-muted-foreground">{role.time}</span></div>
                  <p className="mt-1 text-xs font-medium text-primary">{role.company}</p>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">{role.detail}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
