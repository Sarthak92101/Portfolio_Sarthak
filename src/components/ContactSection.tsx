import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Mail, Twitter, Youtube, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/sarthak92101" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/sarthak92101" },
  // { icon: Youtube, label: "YouTube", href: "https://youtube.com/@sarthak92101" },
  // { icon: Twitter, label: "Twitter", href: "https://twitter.com/sarthak92101" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/sarthak.syntax" },
  { icon: Mail, label: "Email", href: "mailto:sarthaksharma25702@gmail.com" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    // Simulate send
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-heading text-sm uppercase tracking-[0.3em] text-primary mb-3">
            Contact
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg">
            Got a project idea or just want to say hi? Drop me a message!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block font-heading text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-heading text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block font-heading text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-card border border-border rounded-xl text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-heading font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <p className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Find me on
            </p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading text-sm font-semibold group-hover:text-primary transition-colors">{s.label}</p>
                  <p className="text-muted-foreground text-xs truncate max-w-[200px]">{s.href}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
