import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AchievementProps {
  emoji: string;
  title: string;
  intro: string;
  highlights: string[];
  logos?: { label: string; count: number };
  translation: string;
  accent: "purple" | "green" | "orange";
  delay: number;
}

const accentStyles: Record<AchievementProps["accent"], { border: string; glow: string }> = {
  purple: {
    border: "border-l-4 border-[#7209B7]",
    glow: "",
  },
  green: {
    border: "border-r-4 border-[#06D6A0]",
    glow: "",
  },
  orange: {
    border: "border-l-4 border-[#F77F00]",
    glow: "",
  },
};

const highlightAccent: Record<AchievementProps["accent"], string> = {
  purple: "text-[#06D6A0]",
  green: "text-[#06D6A0]",
  orange: "text-[#F77F00]",
};

const AchievementBlock = ({ emoji, title, intro, highlights, logos, translation, accent, delay }: AchievementProps) => {
  const isReverse = accent === "green";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -6 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#1B2838] to-[#0D1B2A] p-10 shadow-[0_25px_80px_rgba(3,10,22,0.45)] transition-all duration-300",
        accentStyles[accent].border,
        accentStyles[accent].glow
      )}
    >
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 20%, rgba(114,9,183,0.25), transparent 45%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <div
        className={cn(
          "relative z-10 flex flex-col gap-8 lg:items-start lg:gap-12",
          isReverse ? "lg:flex-row-reverse" : "lg:flex-row",
        )}
      >
        <div className="text-[56px]">{emoji}</div>

        <div className="max-w-2xl space-y-5">
          <h3 className="font-display text-2xl text-white">{title}</h3>
          <p className="text-lg text-[#B0B8C1]">{intro}</p>
          <ul className="space-y-3 text-[#B0B8C1]">
            {highlights.map((point, idx) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.1 + idx * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className={`mt-1 text-lg ${highlightAccent[accent]}`}>✓</span>
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>

          {/* Logo Container */}
          {logos && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <p className="mb-4 text-sm text-[#8A92A0]">{logos.label}:</p>
              <div className="flex flex-wrap gap-6">
                {Array.from({ length: logos.count }).map((_, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                    className="flex h-20 w-40 items-center justify-center rounded-lg border-2 border-dashed border-white/20 bg-white/5 text-xs text-muted-foreground grayscale transition-all duration-300 hover:border-white/40"
                  >
                    Logo {index + 1}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          <p className="pt-6 text-sm italic text-[#8A92A0]">{translation}</p>
        </div>
      </div>
    </motion.article>
  );
};

const Achievements = () => {
  return (
    <section id="work" className="bg-[#0D1B2A] py-20 md:py-[120px]">
      <div className="container mx-auto px-6 md:px-24 max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 text-center font-display text-[32px] md:text-[40px] text-white leading-tight"
        >
          Okay, Let Me Brag a Little <motion.span className="inline-block text-[72px]" animate={{ y: [0, -6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>🚀</motion.span>
        </motion.h2>

        <div className="space-y-[100px]">
          <AchievementBlock
            emoji="🏛️"
            title="Showcased at National Stage"
            intro="My DaaS platform got the government's attention and ended up on national and global stages."
            highlights={["Digital Transformation by Lay Government", "Global Partnership on AI (GPAI)", "Vibrant Gujarat Summit showcase"]}
            logos={{ label: "Featured at these events (logos will be added)", count: 3 }}
            translation="Translation: Big people thought it was worth showing off."
            accent="purple"
            delay={0.1}
          />

          <AchievementBlock
            emoji="💰"
            title="Built a ₹12 Cr/month Business"
            intro="As a founding member at Vendosmart, I owned the product strategy and execution from day zero."
            highlights={["Revenue from ₹0 → ₹12 Cr in 10 months", "Scaled product + growth experiments in parallel", "Ran squads that actually loved shipping"]}
            logos={{ label: "Built with (company logo will be added)", count: 1 }}
            translation="(Still proud of this one)"
            accent="green"
            delay={0.2}
          />

          <AchievementBlock
            emoji="☁️"
            title="6,000 Users Don't Lie"
            intro="Built Coredge's DaaS platform from scratch—designed, shipped, iterated, and scaled."
            highlights={["0 → 6,000 users in 10 months", "Co-founder personally appraised the build", "Deployment time reduced from 15 min → 3 min"]}
            logos={{ label: "Powered by (company logo will be added)", count: 1 }}
            translation="This is what I do. I make things people actually use."
            accent="orange"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
