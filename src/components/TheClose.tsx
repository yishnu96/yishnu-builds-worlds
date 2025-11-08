import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const points = [
  "Take your idea from napkin sketch to revenue",
  "Lead teams without ego battles",
  "Actually ship AI products (not just talk about them)",
];

const TheClose = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-[#06101F] via-[#0D1B2A] to-[#050B15] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(114,9,183,0.24),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(6,214,160,0.18),transparent_60%)]" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(120deg, rgba(255,255,255,0.05) 0%, transparent 55%)" }} />

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.h2
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl"
          >
            Still Reading? Cool. Here's the Deal.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 space-y-4 text-xl font-display leading-relaxed md:text-2xl"
          >
            <p>I build 0→1 products that scale.</p>
            <p>I speak engineer, designer, AND business.</p>
            <p>I move fast and don't break things (much).</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 space-y-6 text-base text-[#B0B8C1] md:text-lg"
          >
            <p>If you're looking for someone who can:</p>
            <ul className="space-y-3 text-left md:text-center">
              {points.map((point, idx) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.55 + idx * 0.12 }}
                  viewport={{ once: true }}
                  className="mx-auto flex max-w-2xl items-center gap-3"
                >
                  <span className="text-[#06D6A0]">✓</span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
            <p className="text-2xl text-white">Then let's talk.</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-10 text-sm italic text-[#8A92A0] leading-[1.7] md:text-base"
          >
            Fair warning: I work with founders and teams who move fast. If your sprint planning takes longer than your sprints, we might not vibe
            <span className="inline-block align-middle"> 😅</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              size="lg"
              className="h-14 rounded-full bg-gradient-to-r from-[#7209B7] via-[#06D6A0] to-[#F77F00] px-10 text-white shadow-[0_20px_70px_rgba(114,9,183,0.35)] transition-transform hover:scale-[1.03]"
              onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Build Something <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 rounded-full border-[#F77F00] bg-transparent px-10 text-[#F77F00] transition-colors hover:bg-[#F77F00] hover:text-white"
              onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
            >
              Or Just Say Hi 👋
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12 text-xs uppercase tracking-[0.3em] text-[#8A92A0]"
          >
            Currently building AI automation projects · Available for senior PM roles, consulting, advisory, or coffee in Mumbai
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default TheClose;
