import { motion } from "framer-motion";

interface SuperpowerCardProps {
  emoji: string;
  title: string;
  description: string;
  tagline: string;
  accent: "purple" | "green" | "orange";
  delay: number;
}

const ACCENT_MAP: Record<SuperpowerCardProps["accent"], { bg: string; glow: string }> = {
  purple: {
    bg: "from-[#1B2838] to-[#0D1B2A]",
    glow: "shadow-[0_10px_30px_rgba(114,9,183,0.15)]",
  },
  green: {
    bg: "from-[#1B2838] to-[#0D1B2A]",
    glow: "shadow-[0_10px_30px_rgba(6,214,160,0.15)]",
  },
  orange: {
    bg: "from-[#1B2838] to-[#0D1B2A]",
    glow: "shadow-[0_10px_30px_rgba(247,127,0,0.15)]",
  },
};

const SuperpowerCard = ({ emoji, title, description, tagline, accent, delay }: SuperpowerCardProps) => {
  const { bg, glow } = ACCENT_MAP[accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.05 }}
      className={`relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br p-6 md:p-8 lg:p-10 backdrop-blur-lg transition-all duration-300 ${bg} ${glow}`}
    >
      <motion.span
        className="mb-6 inline-flex h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-2xl bg-white/10 text-[40px] md:text-[48px] lg:text-[56px]"
        animate={{ scale: [1, 1.08, 1], rotate: [0, 4, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {emoji}
      </motion.span>

      <h3 className="font-display text-lg md:text-xl lg:text-2xl text-white leading-tight text-center md:text-left">{title}</h3>
      <p className="mt-4 text-sm md:text-base lg:text-lg leading-[1.7] text-[#B0B8C1] text-center md:text-left">{description}</p>
      <p className="mt-6 text-sm italic text-[#8A92A0] leading-[1.7] text-center md:text-left">{tagline}</p>
    </motion.div>
  );
};

const Superpowers = () => {
  return (
    <section id="superpowers" className="relative bg-[#0D1B2A] py-20 md:py-[120px]">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 10% 10%, rgba(114,9,183,0.2), transparent 45%)" }} />
      <div className="container relative mx-auto px-6 md:px-24 max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 md:mb-16 lg:mb-20 max-w-3xl text-center font-display text-[28px] md:text-[32px] lg:text-[40px] text-white leading-tight"
        >
          My Superpowers (No Cape Required)
        </motion.h2>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          <SuperpowerCard
            emoji="🧠"
            title="Analytical Thinking & Problem Solving"
            description="I see patterns others miss, connect dots faster than your AI model, and come up with solutions that actually stick."
            tagline="Think: Sherlock Holmes, but for product problems."
            accent="purple"
            delay={0.1}
          />

          <SuperpowerCard
            emoji="🎯"
            title="Creative Leadership & People Skills"
            description={`I don't "manage" people. I bring ideas, creativity, and fairness—and somehow people want to join in.`}
            tagline="Probably because I was an engineer once. I speak their language."
            accent="green"
            delay={0.2}
          />

          <SuperpowerCard
            emoji="🔮"
            title="Visionary Intuition & Mentorship"
            description="I go deeper than 'fix this bug.' I think about growth, purpose, and where this product will be in 3 years."
            tagline="Also, I mentor people. Because good leaders create more leaders."
            accent="orange"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default Superpowers;
