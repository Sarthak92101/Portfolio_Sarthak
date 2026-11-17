import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BriefcaseBusiness, Code2, GraduationCap, MapPin, Sparkles } from "lucide-react";

const milestones = [
  { year: "FOUNDATION", title: "Computer Engineering Diploma", place: "DSEU · Delhi", note: "Built the foundations: programming, systems, and the curiosity to keep going.", icon: GraduationCap },
  { year: "UNDERGRADUATE", title: "BTech in Computer Science · 4th year", place: "MSIT · IPU · 89% through 6th semester", note: "Deepening my craft through software engineering, algorithms, and hands-on product work.", icon: Code2 },
  { year: "CURRENTLY GROWING", title: "Frontend Development Intern", place: "Forward · Sep 2026 — Present", note: "Building a career guidance platform with reusable React and Next.js interfaces, real-time chat, and AI-powered features.", icon: BriefcaseBusiness },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-24 sm:py-32" ref={ref}>
      <div className="section-shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }}>
          <p className="section-kicker mb-5">01 / A little about me</p>
          <h2 className="max-w-lg font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">
            Curious by nature.<br /><span className="text-muted-foreground">Builder by choice.</span>
          </h2>
          <p className="mt-7 max-w-lg text-base leading-8 text-muted-foreground">
            I’m a developer who enjoys turning complex ideas into simple, useful experiences. I work across the stack, care about the details people feel, and learn fastest by building things that solve real problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground/80"><MapPin className="h-4 w-4 text-primary" /> Delhi, India</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground/80"><Sparkles className="h-4 w-4 text-primary" /> Always learning</span>
          </div>
          <a href="#contact" className="mt-9 inline-flex items-center gap-2 font-heading text-sm font-semibold text-primary transition-colors hover:text-foreground">A bit more about working together <ArrowUpRight className="h-4 w-4" /></a>
        </motion.div>

        <div className="relative">
          <div className="absolute bottom-7 left-[19px] top-7 w-px bg-gradient-to-b from-primary/70 via-primary/25 to-transparent" />
          <div className="space-y-4">
            {milestones.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.12 + index * 0.14 }}
                className="relative ml-11 rounded-2xl border border-border/80 bg-card/65 p-5 transition-colors hover:border-primary/30 sm:p-6"
              >
                <span className="absolute -left-[43px] top-6 grid h-10 w-10 place-items-center rounded-full border border-primary/30 bg-background text-primary shadow-[0_0_24px_-8px_hsl(var(--primary)/0.5)]"><item.icon className="h-4 w-4" /></span>
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-primary">{item.year}</span>
                  <span className="text-xs text-muted-foreground">{item.place}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.note}</p>
              </motion.article>
            ))}
            <motion.div initial={{ opacity: 0, x: 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.42 }} className="ml-11 flex items-center gap-3 px-2 pt-1 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_hsl(var(--primary)/0.8)]" /> Current chapter: learning, shipping, and growing at Forward.
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
