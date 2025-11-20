import { motion } from "framer-motion";
import { ArrowRight, Zap, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const AUTOMATIONS = [
  { icon: "⚡", name: "Real Estate Voice Agent", tag: "n8n + Vapia" },
  { icon: "⚡", name: "Lead Scoring Pipeline", tag: "Make.com + AI" },
  { icon: "⚡", name: "Content Generator Workflow", tag: "Zapier + GPT-4" },
  { icon: "⚡", name: "Data Extraction Bot", tag: "n8n + Anthropic" },
];

const REPOS = [
  { icon: "📦", name: "pm-toolkit", tag: "Python scripts for PMs" },
  { icon: "📦", name: "mvp-starter-template", tag: "Next.js boilerplate" },
  { icon: "📦", name: "ai-prompt-library", tag: "Curated prompts" },
  { icon: "📦", name: "analytics-dashboard", tag: "React + Recharts" },
];

const IBuildStuff = () => {
  return (
    <section id="builds" className="relative bg-card py-20 md:py-[120px]">
      <div className="container relative mx-auto px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-[32px] md:text-[40px] text-foreground mb-4">
            I Build Stuff Too <span className="text-[72px]">🛠️</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Because talking is cheap. Here's what I actually ship.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* AI Automations Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card to-muted/20 p-10 shadow-[0_10px_30px_rgba(114,9,183,0.15)] transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="mb-6 text-[72px]">🤖</div>
              <h3 className="font-display text-3xl text-foreground mb-4">
                AI Automations
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Custom AI agents and workflows I've built for clients. From voice agents to 
                data pipelines, see what's possible when you combine LLMs with no-code tools.
              </p>

              <div className="space-y-3 mb-8">
                {AUTOMATIONS.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 rounded-lg bg-background/50 px-5 py-4 transition-all duration-300 hover:bg-background/80 hover:border-l-4 hover:border-primary"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <p className="text-foreground font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{item.tag}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#7209B7] transition-colors hover:underline"
              >
                View All Automations →
              </a>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />
          </motion.div>

          {/* GitHub Projects Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-2xl border border-secondary/30 bg-gradient-to-br from-card to-muted/20 p-10 shadow-[0_10px_30px_rgba(6,214,160,0.15)] transition-all duration-300"
          >
            <div className="relative z-10">
              <div className="mb-6 text-[72px]">💻</div>
              <h3 className="font-display text-3xl text-foreground mb-4">
                Open Source & Code
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Tools, scripts, and side projects I've open-sourced. Because sharing is caring, 
                and good code should be free.
              </p>

              <div className="space-y-3 mb-8">
                {REPOS.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href="#"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 rounded-lg bg-background/50 px-5 py-4 transition-all duration-300 hover:bg-background/80 hover:border-l-4 hover:border-secondary"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div className="flex-1">
                      <p className="text-foreground font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{item.tag}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#7209B7] transition-colors hover:underline"
              >
                View GitHub Profile →
              </a>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl transition-all duration-500 group-hover:bg-secondary/20" />
          </motion.div>
        </div>

        {/* Note about placeholders */}
        <p className="mt-8 text-center text-sm text-muted-foreground/60 italic">
          Links to be updated with actual automation and repository URLs
        </p>
      </div>
    </section>
  );
};

export default IBuildStuff;
