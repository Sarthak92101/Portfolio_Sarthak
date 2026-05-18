import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, Code, GitBranch, Users, Star } from "lucide-react";
import Counter from "@/components/ui/counter";

const achievements = [
  {
    icon: Trophy,
    rank: "Rank 69",
    exam: "IPU LEET 2024",
    description: "Secured All India Rank 69 in IPU Lateral Entry Entrance Test for BTech admissions.",
  },
  {
    icon: Award,
    rank: "Rank 6",
    exam: "DTU LEET 2024",
    description: "Achieved Rank 6 in STU Lateral Entry Entrance Test, placing among the top performers.",
  },
];

const stats = [
  {
    icon: Code,
    value: 50,
    suffix: "+",
    label: "Projects Built",
    delay: 0.2,
  },
  {
    icon: GitBranch,
    value: 200,
    suffix: "+",
    label: "Git Commits",
    delay: 0.4,
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "YouTube Views",
    delay: 0.6,
  },
  {
    icon: Star,
    value: 4.8,
    suffix: "/5",
    label: "Average Rating",
    delay: 0.8,
  },
];

const milestones = [
  {
    title: "CodeSoft — Web Development Intern",
    duration: "Nov 2023 — Dec 2023",
    bullets: [
      "Developed responsive web application components and integrated backend APIs.",
      "Worked on frontend performance and UI responsiveness.",
    ],
  },
  {
    title: "Unified Mentor — Web Development Intern",
    duration: "Jun 2025 — Jul 2025",
    bullets: [
      "Built reusable React.js components and backend APIs using Node.js and Express.js.",
      "Worked with MongoDB and Tailwind CSS for full-stack development.",
    ],
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Achievements
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            Milestones & Stats
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: stat.delay }}
                className="text-center p-6 rounded-2xl bg-card border border-border card-light"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <Counter end={stat.value} suffix={stat.suffix} delay={stat.delay + 0.5} />
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-4 mb-16">
            <div>
              <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-3">
                Internship Highlights
              </p>
              <h3 className="font-heading text-3xl font-bold text-foreground">
                Meaningful full-stack experience
              </h3>
              <p className="text-muted-foreground max-w-2xl mt-3">
                Recent internship work with product-focused frontend and backend contributions,
                built using React, Tailwind CSS, Node.js, Express, and MongoDB.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {milestones.map((milestone) => (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-primary/5 via-card to-card p-6 shadow-[0_30px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative z-10">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
                      <div>
                        <p className="font-heading text-lg font-semibold text-foreground">
                          {milestone.title}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {milestone.duration}
                        </p>
                      </div>
                      {/* <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                        Agile product work
                      </span> */}
                    </div>

                    <div className="space-y-4">
                      {milestone.bullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.exam}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden glow-accent card-light"
            >
              {/* Glow blob */}
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-heading text-3xl font-bold text-gradient mb-1">{item.rank}</p>
                <p className="font-heading text-lg font-semibold mb-3">{item.exam}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
