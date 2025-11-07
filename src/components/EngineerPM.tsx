import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stackItems = [
  { name: "Python", emoji: "🐍" },
  { name: "React", emoji: "⚛️" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Next.js", emoji: "⬛" },
  { name: "Firebase", emoji: "🔥" },
  { name: "LLMs", emoji: "🤖" },
  { name: "n8n", emoji: "🟠" },
  { name: "Zapier", emoji: "⚡" },
  { name: "Docker", emoji: "🐳" },
  { name: "Kubernetes", emoji: "☸️" },
  { name: "GCP", emoji: "☁️" },
];

const EngineerPM = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#08101F] via-[#0D1B2A] to-[#091325] py-24 md:py-32">
      <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_top_left,rgba(114,9,183,0.25),transparent_60%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_bottom_right,rgba(6,214,160,0.2),transparent_60%)]" />

      <div className="container relative mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center font-display text-4xl text-white md:text-5xl"
        >
          Here's Why CTOs Actually Like Working With Me
        </motion.h2>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[32px] border border-white/10 bg-[#0F192A]/90 p-6 shadow-[0_25px_80px_rgba(3,10,22,0.6)]">
              <div className="flex items-center gap-2 text-xs text-[#8A92A0]">
                <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-4 font-mono">prototype.tsx</span>
              </div>

              <div className="mt-6 grid gap-5 font-mono text-sm text-[#B0B8C1]">
                <motion.pre
                  className="overflow-x-auto rounded-2xl border border-white/5 bg-[#0A1524]/80 p-6"
                  animate={{ boxShadow: ["0 0 0 rgba(114,9,183,0.2)", "0 0 45px rgba(114,9,183,0.45)", "0 0 0 rgba(114,9,183,0.2)"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
{`// Most PMs write specs.
// I prototype MVPs.

const buildMomentum = async () => {
  const idea = await discoverSignals();
  const mvp = await shipPrototype(idea, 72);
  const feedback = await interviewUsers(mvp);

  while (!hasProductMarketFit(feedback)) {
    runExperiment();
  }

  return scaleConfidently();
};

buildMomentum();`}
                </motion.pre>

                <motion.div
                  className="grid gap-3 rounded-2xl border border-white/5 bg-[#0A1524]/80 p-5"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#FFD700]">Automation Pipeline</p>
                  <div className="grid gap-2 text-[#B0B8C1]">
                    <span>n8n → LLM → Webhooks → Slack</span>
                    <span>72% process time saved</span>
                  </div>
                </motion.div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "React", "Node.js", "n8n", "Zapier", "LLMs"].map((chip) => (
                  <span key={chip} className="rounded-full border border-[#7209B7]/40 bg-[#7209B7]/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-[#B0B8C1]">
                    {chip}
                  </span>
                ))}
              </div>

              <motion.div
                className="absolute -right-10 top-1/2 hidden h-24 w-24 rounded-full bg-gradient-to-br from-[#7209B7]/40 to-[#06D6A0]/40 blur-3xl lg:block"
                animate={{ scale: [1, 1.1, 0.95, 1], opacity: [0.6, 0.8, 0.6] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-7 text-white"
          >
            <h3 className="font-display text-3xl md:text-[38px]">
              Most PMs write specs.
              <br />I prototype MVPs in days.
            </h3>

            <div className="space-y-5 text-lg text-[#B0B8C1]">
              <p>Why? Because I:</p>
              <ul className="space-y-3 text-base text-[#B0B8C1]">
                {["Was a Software Engineer (I know the pain)", "Build with Python, React, Node.js, Next.js", "Vibe with no-code (n8n, Zapier, Make.com)", "Actually understand AI/LLMs (not just the buzzwords)", "Can talk to engineers without a translator"].map((point, idx) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 text-[#06D6A0]">✓</span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="pt-4 text-lg italic text-[#FFD700]">Translation: I'm a PM who can ship. Fast.</p>
            </div>

            <div className="pt-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#8A92A0]">The Stack I Work With</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {stackItems.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className={cn(
                      "flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm",
                      "backdrop-blur-md",
                    )}
                  >
                    <span className="text-lg">{tech.emoji}</span>
                    <span>{tech.name}</span>
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
