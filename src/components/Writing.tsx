import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WritingColumnProps {
  icon: React.ReactNode;
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
    gradient: "from-[#1B2838] to-[#0D1B2A]",
    glow: "shadow-[0_10px_30px_rgba(114,9,183,0.15)]",
    accent: "text-[#7209B7]",
  },
  green: {
    gradient: "from-[#1B2838] to-[#0D1B2A]",
    glow: "shadow-[0_10px_30px_rgba(6,214,160,0.15)]",
    accent: "text-[#06D6A0]",
  },
};

const WritingColumn = ({ icon, title, description, href, accent, delay, latest, subtitle }: WritingColumnProps) => {
  const styles = accentStyles[accent];

  return (
    <motion.article
      initial={{ opacity: 0, x: accent === "purple" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-br p-12 ${styles.gradient} ${styles.glow}`}
    >
      <div className="mb-6">{icon}</div>
      <h3 className="mt-6 font-display text-3xl text-white leading-tight">{title}</h3>
      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[#8A92A0]">{subtitle}</p>
      <p className="mt-4 text-base md:text-lg leading-[1.7] text-[#B0B8C1]">{description}</p>
      <p className="mt-6 text-sm italic text-[#8A92A0] leading-[1.7]">Because PMs are humans too.</p>

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

      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-[#7209B7] transition-colors hover:underline"
      >
        Read more →
      </a>
    </motion.article>
  );
};

const Writing = () => {
  return (
    <section id="writing" className="relative bg-[#1B2838] py-20 md:py-[120px]">
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at top, rgba(114,9,183,0.22), transparent 55%)" }} />
      <div className="container relative mx-auto px-6 md:px-24 max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center font-display text-[32px] md:text-[40px] text-white leading-tight"
        >
          I Write Stuff Too <motion.span className="inline-block text-[72px]" animate={{ rotate: [0, -10, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>✍️</motion.span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-2xl text-center text-base md:text-lg text-[#B0B8C1] leading-[1.7]"
        >
          When I'm not turning whiteboards into revenue, I'm thinking out loud about Bollywood, culture, product, and AI craft.
        </motion.p>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <WritingColumn
            icon={
              <svg role="img" viewBox="0 0 24 24" className="h-12 w-12 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
              </svg>
            }
            title="Random Musings"
            subtitle="Medium"
            description="I write about ancient history, spirituality, philosophy, and whatever idea pulls me in."
            href="https://medium.com/@yishnu"
            accent="purple"
            delay={0.2}
            latest={[
              { title: "The Map That Reveals About India’s Greatest War", href: "https://yishnu.medium.com/the-map-that-reveals-about-indias-greatest-war-1825ef3ec2d2" },
              { title: "How Beliefs Shape Who We Become", href: "https://yishnu.medium.com/how-beliefs-shape-who-we-become-b8a716b38b9f" },
              { title: "Why Indian Films Feel Different", href: "https://yishnu.medium.com/why-indian-films-feel-different-0dd91d396a27" },
            ]}
          />

          <WritingColumn
            icon={
              <svg role="img" viewBox="0 0 24 24" className="h-12 w-12 fill-[#FF6719]" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
              </svg>
            }
            title="Tech & Product Insights"
            subtitle="Substack"
            description="Where I actually help people solve AI, business, and product problems. The useful stuff."
            href="https://yishnu96.substack.com/"
            accent="green"
            delay={0.3}
            latest={[
              { title: "How AI is Breaking Product Design", href: "https://open.substack.com/pub/yishnu96/p/how-ai-is-breaking-product-design?r=bajcn&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false" },
              { title: "How the Soviet Revolution Led to Google and LLMs", href: "https://open.substack.com/pub/yishnu96/p/what-makes-first-principles-thinking?r=bajcn&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false" },
              { title: "AI will make User Interface Obsolete", href: "https://open.substack.com/pub/yishnu96/p/ui-is-about-to-become-obsolete?r=bajcn&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default Writing;
