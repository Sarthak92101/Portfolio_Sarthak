import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Code, Rocket } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    title: "Diploma in Computer Engineering",
    place: "DSEU, Delhi",
    description: "Built a strong foundation in programming, data structures, and web technologies.",
  },
  {
    icon: Code,
    title: "BTech CSE (4th Year)",
    place: "MSIT, IPU",
    description: "Deepening expertise in software engineering, algorithms, and full-stack development.",
  },
  {
    icon: Rocket,
    title: "Aspiring Software Engineer",
    place: "Building the future",
    description: "Focused on mastering MERN stack, contributing to open-source, and teaching on YouTube.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-3">
            About Me
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            My Journey
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
            From completing a Diploma in Computer Engineering at DSEU to pursuing my BTech at MSIT (IPU), 
            I've been on a mission to build impactful software and share knowledge along the way.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="p-6 rounded-2xl bg-card border border-border card-hover card-light"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-primary text-sm mb-3 font-medium">{item.place}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
