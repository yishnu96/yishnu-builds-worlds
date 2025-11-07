import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const TheClose = () => {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-6xl font-display font-bold"
          >
            Still Reading? Cool. Here's the Deal.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 text-xl lg:text-2xl font-display"
          >
            <p>I build 0→1 products that scale.</p>
            <p>I speak engineer, designer, AND business.</p>
            <p>I move fast and don't break things (much).</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4 text-lg text-muted-foreground pt-8"
          >
            <p>If you're looking for someone who can:</p>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {[
                "Take your idea from napkin sketch to revenue",
                "Lead teams without ego battles",
                "Actually ship AI products (not just talk about them)"
              ].map((point, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-3"
                >
                  <span className="text-secondary text-2xl">✓</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-2xl pt-4">Then let's talk.</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground italic pt-8"
          >
            Fair warning: I work with founders and teams who move fast.
            <br />
            If your sprint planning takes longer than your sprints, we might not vibe{" "}
            <span className="inline-block hover:rotate-12 transition-transform">😅</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-12"
          >
            <Button size="lg" className="bg-gradient-purple text-white glow-purple text-lg px-8">
              Let's Build Something <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8">
              Or Just Say Hi <span className="ml-2">👋</span>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground/70 pt-12"
          >
            Currently working on AI automation projects.
            <br />
            Available for: Senior PM roles, consulting, advisory, or just grabbing coffee if you're in Mumbai.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TheClose;
