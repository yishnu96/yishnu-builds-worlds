import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WritingColumnProps {
  emoji: string;
  title: string;
  description: string;
  href: string;
  accent: "purple" | "green";
  delay: number;
  latest: { title: string; href: string }[];
  subtitle: string;
}

const accentStyles = {
  purple: {
    gradient: "from-[#1E2F42] via-[#0F1D2F] to-[#1B2838]",
    glow: "shadow-[0_25px_60px_rgba(114,9,183,0.35)]",
    accent: "text-[#7209B7]",
  },
  green: {
    gradient: "from-[#0F2429] via-[#0D1B2A] to-[#111F2F]",
    glow: "shadow-[0_25px_60px_rgba(6,214,160,0.3)]",
    accent: "text-[#06D6A0]",
  },
};

const WritingColumn = ({ emoji, title, description, href, accent, delay, latest, subtitle }: WritingColumnProps) => {
  const styles = accentStyles[accent];

  return (
    <motion.article
      initial={{ opacity: 0, x: accent === "purple" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br p-12 ${styles.gradient} ${styles.glow}`}
    >
      <span className="text-5xl drop-shadow-[0_12px_45px_rgba(114,9,183,0.25)]">{emoji}</span>
      <h3 className="mt-6 font-display text-3xl text-white">{title}</h3>
      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#8A92A0]">{subtitle}</p>
      <p className="mt-4 text-base leading-7 text-[#B0B8C1]">{description}</p>
      <p className="mt-6 text-sm italic text-[#8A92A0]">Because PMs are humans too.</p>

      <div className="mt-6 space-y-2">
        {latest.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-[#B0B8C1] transition-colors hover:border-[#7209B7] hover:text-white"
          >
            <span>{item.title}</span>
            <ArrowUpRight className="h-4 w-4 opacity-60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        ))}
      </div>

      <Button
        asChild
        variant="outline"
        className="mt-8 w-full border-[#7209B7] text-white hover:bg-gradient-to-r hover:from-[#7209B7] hover:to-[#06D6A0]"
      >
        <a href={href} target="_blank" rel="noreferrer">
          Read more
        </a>
      </Button>
    </motion.article>
  );
};

const Writing = () => {
  return (
    <section id="writing" className="relative bg-[#152235] py-24 md:py-32">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at top, rgba(114,9,183,0.22), transparent 55%)" }} />
      <div className="container relative mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-display text-4xl text-white md:text-5xl"
        >
          I Write Stuff Too <motion.span animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>✍️</motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-base text-[#B0B8C1]"
        >
          When I'm not turning whiteboards into revenue, I'm thinking out loud about Bollywood, culture, product, and AI craft.
        </motion.p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <WritingColumn
            emoji="🎬"
            title="Random Musings"
            subtitle="Medium"
            description="Where I write about Bollywood, life, politics, and whatever crosses my mind."
            href="https://medium.com/@yishnu"
            accent="purple"
            delay={0.2}
            latest={[
              { title: "Bollywood's Product Problem", href: "https://medium.com/@yishnu" },
              { title: "Why founders need drama-free ops", href: "https://medium.com/@yishnu" },
            ]}
          />

          <WritingColumn
            emoji="💻"
            title="Tech & Product Insights"
            subtitle="Stack Overflow & beyond"
            description="Where I actually help people solve AI, business, and product problems. The useful stuff."
            href="https://stackoverflow.com/users/8154250/yishnu-pramanik"
            accent="green"
            delay={0.3}
            latest={[
              { title: "How to productionise an AI agent", href: "https://stackoverflow.com/users/8154250/yishnu-pramanik" },
              { title: "Documenting growth experiments", href: "https://stackoverflow.com/users/8154250/yishnu-pramanik" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Writing;
