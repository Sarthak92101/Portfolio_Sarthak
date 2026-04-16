import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { Typewriter } from "@/components/ui/typewriter";
import Particles from "@/components/ui/particles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary/30 bg-primary/10"
        >
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-primary">
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">Sarthak</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <Typewriter
            texts={[
              "Full-Stack Developer · BTech CSE @ MSIT (IPU)",
              "MERN Stack Enthusiast · DSA Learner",
              "YouTube Educator · Problem Solver",
              "Building Modern Web Experiences"
            ]}
            typeSpeed={80}
            deleteSpeed={40}
            delayBetweenTexts={2500}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-border text-foreground font-heading font-semibold text-sm rounded-lg hover:border-primary/50 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
