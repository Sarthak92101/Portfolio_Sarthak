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
    exam: "STU LEET 2024",
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
