import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Typewriter } from "@/components/ui/typewriter";

const HeroSection = () => (
  <section className="relative isolate min-h-[92svh] overflow-hidden px-6 pb-20 pt-28 sm:pt-32">
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-40 right-[8%] h-[34rem] w-[34rem] rounded-full bg-primary/[0.08] blur-[110px]" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-emerald-500/[0.05] blur-[100px]" />
      <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(hsl(var(--foreground)/0.06)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.06)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
    </div>

    <div className="section-shell relative z-10 grid min-h-[calc(92svh-9rem)] items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.08] px-4 py-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-primary">Open to opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-6 font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[5.8rem]"
        >
          Building thoughtful<br className="hidden sm:block" />
          <span className="text-gradient"> digital experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="mb-3 text-lg font-medium text-foreground/80 sm:text-xl"
        >
          Hi, I’m Sarthak Sharma — a full-stack developer in Delhi, India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-9 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg"
        >
          <Typewriter
            texts={[
              "Full-stack developer · BTech CSE @ MSIT (IPU)",
              "Building with React, Node.js & MongoDB",
              "YouTube educator · Curious problem solver",
              "Turning ideas into useful products",
            ]}
            typeSpeed={55}
            deleteSpeed={28}
            delayBetweenTexts={2200}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_hsl(var(--primary)/0.7)]">
            Explore my work <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3.5 font-heading text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-primary/[0.06]">
            Let’s connect
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[390px]"
      >
        <div className="absolute -inset-5 rotate-3 rounded-[2rem] border border-primary/15" />
        <div className="absolute -inset-5 -rotate-3 rounded-[2rem] border border-foreground/[0.07]" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.65rem] border border-foreground/10 bg-secondary shadow-2xl shadow-black/40">
          <img src="/my.jpeg" alt="Sarthak Sharma" className="h-full w-full object-cover object-[center_34%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/5 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <p className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-primary"><Sparkles className="h-3.5 w-3.5" /> Currently building</p>
            <p className="font-heading text-xl font-semibold">Products with purpose.</p>
            <p className="mt-1 text-sm text-foreground/65">Code, craft & a little curiosity.</p>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, -7, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-5 -left-8 hidden items-center gap-3 rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur-md sm:flex"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary/10 font-mono text-xs text-primary">&lt;/&gt;</span>
          <span><span className="block font-heading text-sm font-semibold">Full-stack developer</span><span className="block text-xs text-muted-foreground">Delhi, India · 2026</span></span>
        </motion.div>
      </motion.div>
    </div>

    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="absolute bottom-7 left-1/2 -translate-x-1/2 text-muted-foreground/60">
      <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.7, repeat: Infinity }} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em]">
        Scroll to explore <ArrowDown className="h-3.5 w-3.5" />
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
