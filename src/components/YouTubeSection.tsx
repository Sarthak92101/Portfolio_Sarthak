import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Youtube, Users, PlayCircle } from "lucide-react";

const YouTubeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="youtube" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative p-8 sm:p-12 rounded-3xl bg-card border border-border overflow-hidden card-light"
        >
          {/* Decorative blobs */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-destructive/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Youtube className="w-5 h-5 text-destructive" />
                </div>
                <p className="font-heading text-sm uppercase tracking-[0.2em] text-destructive font-semibold">
                  YouTube Channel
                </p>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
                I teach on YouTube
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
                I create tutorials on web development, MERN stack, DSA, and coding tips to help students 
                and beginners kickstart their tech journey. Clear explanations, practical projects, real-world skills.
              </p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-destructive text-destructive-foreground font-heading font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
              >
                <PlayCircle className="w-4 h-4" />
               <a href="https://www.youtube.com/@classesbysarthak"> Visit Channel </a>
              </motion.a>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {[
                { label: "Subscribers", value: "Growing", icon: Users },
                { label: "Topics", value: "MERN & DSA", icon: PlayCircle },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="p-5 rounded-xl bg-secondary/50 border border-border text-center"
                >
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="font-heading text-lg font-bold">{stat.value}</p>
                  <p className="text-muted-foreground text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YouTubeSection;
