import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const EngineerPM = () => {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-display font-bold text-center mb-16"
        >
          Here's Why CTOs Actually Like Working With Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Code Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="p-6 bg-muted rounded-2xl font-mono text-sm glow-purple">
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-gold" />
                <div className="w-3 h-3 rounded-full bg-secondary" />
              </div>
              <pre className="text-foreground/80 overflow-x-auto">
{`// Most PMs write specs.
// I prototype MVPs.

const buildProduct = async () => {
  const idea = await brainstorm();
  const mvp = await prototype(idea);
  const feedback = await ship(mvp);
  
  while (!isProductMarketFit) {
    iterate(feedback);
  }
  
  return scale();
};

buildProduct();`}
              </pre>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "React", "Node.js", "AI/LLMs", "n8n"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold">
              Most PMs write specs.
              <br />I prototype MVPs in days.
            </h3>

            <div className="space-y-4">
              <p className="text-muted-foreground">Why? Because I:</p>
              <ul className="space-y-3">
                {[
                  "Was a Software Engineer (I know the pain)",
                  "Build with Python, React, Node.js, Next.js",
                  "Vibe with no-code (n8n, Zapier, Make.com)",
                  "Actually understand AI/LLMs (not just the buzzwords)",
                  "Can talk to engineers without a translator"
                ].map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-secondary text-xl">✓</span>
                    <span className="text-muted-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="text-gold italic text-lg pt-4">
                Translation: I'm a PM who can ship. Fast.
              </p>
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">The Stack I Work With:</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Python", icon: "🐍" },
                  { name: "React", icon: "⚛️" },
                  { name: "Node.js", icon: "🟢" },
                  { name: "Firebase", icon: "🔥" },
                  { name: "LLMs", icon: "🤖" },
                  { name: "Docker", icon: "🐳" },
                  { name: "K8s", icon: "☸️" },
                  { name: "GCP", icon: "☁️" }
                ].map((tech, idx) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + idx * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg cursor-default"
                  >
                    <span className="text-xl">{tech.icon}</span>
                    <span className="text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineerPM;
