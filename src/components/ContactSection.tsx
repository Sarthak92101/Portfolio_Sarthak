import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/sarthak92101", detail: "Projects & code" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sarthak92101", detail: "Let’s connect" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/sarthak.syntax", detail: "Bits of life" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`From: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:sarthaksharma25702@gmail.com?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email app", description: "Your message is ready to send." });
  };

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24 sm:py-32" ref={ref}>
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
          <p className="section-kicker mb-4">05 / Your turn</p>
          <h2 className="font-heading text-4xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-5xl">Have a good<br /><span className="text-gradient">one in mind?</span></h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">Tell me what you’re building, what you’re curious about, or just say hello. I’m always up for a thoughtful conversation.</p>
          <a href="mailto:sarthaksharma25702@gmail.com" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"><Mail className="h-4 w-4 text-primary" /> sarthaksharma25702@gmail.com <ArrowUpRight className="h-3.5 w-3.5" /></a>
          <div className="mt-9 flex flex-wrap gap-2">
            {socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label} className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary"><social.icon className="h-4 w-4" /></a>)}
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground/60">Usually replies within a couple of days</p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: 0.12 }} className="rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-8">
          <div className="mb-7 flex items-center justify-between border-b border-border/70 pb-5"><div><p className="font-heading text-lg font-semibold">Send a note</p><p className="mt-1 text-xs text-muted-foreground">A few details are all I need.</p></div><span className="font-mono text-[10px] text-muted-foreground/60">HELLO@01</span></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block"><span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Your name</span><input required id="name" type="text" maxLength={100} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/55 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10" placeholder="Jane Smith" /></label>
            <label className="block"><span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Email address</span><input required id="email" type="email" maxLength={255} value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/55 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10" placeholder="jane@example.com" /></label>
          </div>
          <label className="mt-5 block"><span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">What’s on your mind?</span><textarea required id="message" rows={5} maxLength={1000} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm leading-6 text-foreground placeholder:text-muted-foreground/55 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/10" placeholder="A little context goes a long way…" /></label>
          <motion.button type="submit" whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-heading text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-[0_12px_40px_-18px_hsl(var(--primary)/0.7)]">Prepare email <Send className="h-3.5 w-3.5" /></motion.button>
          <p className="ml-3 inline text-[11px] text-muted-foreground">Opens in your email app</p>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
