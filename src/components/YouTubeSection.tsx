import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Play, Youtube } from "lucide-react";

const YouTubeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="youtube" className="relative scroll-mt-24 px-6 py-20 sm:py-28" ref={ref}>
      <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65 }} className="section-shell relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-[#151a17] p-7 sm:p-10 lg:p-14">
        <div className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full bg-red-500/[0.12] blur-[90px]" />
        <div className="pointer-events-none absolute -bottom-40 left-[25%] h-80 w-80 rounded-full bg-primary/[0.08] blur-[90px]" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-400/20 bg-red-400/[0.08] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-red-300"><Youtube className="h-3.5 w-3.5" /> Classes by Sarthak</p>
            <h2 className="max-w-xl font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">Sharing what I learn.<br /><span className="text-foreground/50">One clear lesson at a time.</span></h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-foreground/60">I make approachable tutorials about web development, MERN, DSA, and the ideas that help new developers get unstuck.</p>
            <motion.a href="https://www.youtube.com/@classesbysarthak" target="_blank" rel="noopener noreferrer" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-flex items-center gap-3 rounded-full bg-red-500 px-5 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-red-400">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-white/15"><Play className="ml-0.5 h-3 w-3 fill-current" /></span> Visit the channel <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rotate-[-3deg] rounded-2xl border border-white/[0.08]" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e1110] p-5 shadow-2xl sm:p-7">
              <div className="mb-8 flex items-center justify-between"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/35">On the channel</span><span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_16px_rgba(248,113,113,0.7)]" /></div>
              <div className="space-y-3">
                {["Build something real", "Understand the fundamentals", "Keep getting better"].map((line, index) => (
                  <motion.div key={line} initial={{ opacity: 0, x: 12 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + index * 0.12 }} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] px-4 py-3.5">
                    <span className="font-mono text-[10px] text-red-300">0{index + 1}</span><span className="font-heading text-sm font-medium text-white/80">{line}</span><ArrowUpRight className="ml-auto h-3.5 w-3.5 text-white/25" />
                  </motion.div>
                ))}
              </div>
              <div className="mt-7 border-t border-white/[0.08] pt-5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">Web dev <span className="px-2 text-primary">/</span> MERN <span className="px-2 text-primary">/</span> DSA</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default YouTubeSection;
