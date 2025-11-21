import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import RevenueChart from "./achievements/RevenueChart";
import UserGrowthViz from "./achievements/UserGrowthViz";
import ProgressBar from "./achievements/ProgressBar";
import Badge from "./achievements/Badge";
import CompanyLogo from "./achievements/CompanyLogo";

interface AchievementProps {
  emoji: string;
  title: string;
  intro: string;
  highlights: string[];
  translation: string;
  accent: "purple" | "green" | "orange";
  delay: number;
  type: "government" | "revenue" | "scale";
}

const accentStyles: Record<AchievementProps["accent"], { border: string; gradientFrom: string; gradientTo: string }> = {
  purple: {
    border: "border-l-4",
    gradientFrom: "#7209B7",
    gradientTo: "#06D6A0",
  },
  green: {
    border: "border-r-4",
    gradientFrom: "#06D6A0",
    gradientTo: "#7209B7",
  },
  orange: {
    border: "border-l-4",
    gradientFrom: "#F77F00",
    gradientTo: "#FFD700",
  },
};

const highlightAccent: Record<AchievementProps["accent"], string> = {
  purple: "text-[#06D6A0]",
  green: "text-[#06D6A0]",
  orange: "text-[#F77F00]",
};

const AchievementBlock = ({ emoji, title, intro, highlights, translation, accent, delay, type }: AchievementProps) => {
  const isReverse = accent === "green";
  const styles = accentStyles[accent];

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-[#1B2838] to-[#0D1B2A] p-10 shadow-[0_25px_80px_rgba(3,10,22,0.45)] transition-all duration-500 hover:-translate-y-2",
        styles.border
      )}
      style={{
        borderImageSource: `linear-gradient(180deg, ${styles.gradientFrom}, ${styles.gradientTo})`,
        borderImageSlice: 1,
      }}
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(90deg,
            ${styles.gradientFrom}00 0%,
            ${styles.gradientFrom}40 50%,
            ${styles.gradientFrom}00 100%)`,
          backgroundSize: "200% 100%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, ${styles.gradientFrom}40, transparent 45%)`,
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Background visualization based on type */}
      {type === "revenue" && <RevenueChart />}
      {type === "scale" && <UserGrowthViz />}
      {type === "government" && (
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L50 15V45L30 60L10 45V15L30 0Z' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      )}

      {/* Badges */}
      {type === "government" && (
        <>
          <Badge type="featured" text="National Stage" position="top-right" delay={delay + 0.5} />
          <CompanyLogo name="GPAI" position="top-right" size="sm" delay={delay + 0.7} />
        </>
      )}
      {type === "revenue" && (
        <>
          <Badge type="award" text="Founding Member" position="top-right" delay={delay + 0.5} />
          <CompanyLogo name="Vendosmart" position="bottom-right" size="sm" delay={delay + 0.7} />
        </>
      )}
      {type === "scale" && (
        <>
          <Badge type="verified" text="Co-founder Approved" position="top-right" delay={delay + 0.5} />
          <CompanyLogo name="Coredge" position="bottom-right" size="sm" delay={delay + 0.7} />
          <CompanyLogo name="Adani" position="bottom-left" size="sm" delay={delay + 0.9} />
        </>
      )}

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

          {/* Progress bars for specific metrics */}
          {type === "revenue" && (
            <div className="space-y-4 mt-6 pt-6 border-t border-white/10">
              <ProgressBar
                label="Revenue Growth"
                before="₹0"
                after="₹12 Cr/mo"
                percentage={100}
                color="green"
                delay={delay + 0.6}
              />
              <ProgressBar
                label="User Satisfaction"
                before="20%"
                after="76%"
                percentage={76}
                color="green"
                delay={delay + 0.7}
              />
              <ProgressBar
                label="RFQ per Quotation"
                before="0.5"
                after="2.7"
                percentage={90}
                color="green"
                delay={delay + 0.8}
              />
            </div>
          )}

          {type === "scale" && (
            <div className="space-y-4 mt-6 pt-6 border-t border-white/10">
              <ProgressBar
                label="User Growth"
                before="0"
                after="6,000+"
                percentage={100}
                color="orange"
                delay={delay + 0.6}
              />
              <ProgressBar
                label="Deployment Time"
                before="15 min"
                after="3 min"
                percentage={80}
                color="orange"
                delay={delay + 0.7}
              />
              <ProgressBar
                label="Support Ticket Reduction"
                before="100%"
                after="40%"
                percentage={60}
                color="orange"
                delay={delay + 0.8}
              />
            </div>
          )}

          {type === "government" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 pt-6 border-t border-white/10"
            >
              <p className="text-sm text-[#8A92A0] mb-4">Featured at:</p>
              <div className="flex flex-wrap gap-4">
                {["GPAI Summit", "Vibrant Gujarat", "Digital India"].map((event, index) => (
                  <motion.div
                    key={event}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-sm text-[#B0B8C1] hover:border-[#7209B7]/50 hover:bg-[#7209B7]/10 transition-all duration-300"
                  >
                    {event}
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
          Okay, Let Me Brag a Little{" "}
          <motion.span
            className="inline-block text-[72px]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            🚀
          </motion.span>
        </motion.h2>

        <div className="space-y-[100px]">
          <AchievementBlock
            emoji="🏛️"
            title="Showcased at National Stage"
            intro="My DaaS platform got the government's attention and ended up on national and global stages."
            highlights={[
              "Digital Transformation by Govt of India",
              "Global Partnership on AI (GPAI)",
              "Vibrant Gujarat Summit showcase",
            ]}
            translation="Translation: Big people thought it was worth showing off."
            accent="purple"
            delay={0.1}
            type="government"
          />

          <AchievementBlock
            emoji="💰"
            title="Built a ₹12 Cr/month Business"
            intro="As a founding member at Vendosmart, I owned the product strategy and execution from day zero."
            highlights={[
              "Revenue from ₹0 → ₹12 Cr in 10 months",
              "Scaled product + growth experiments in parallel",
              "Ran squads that actually loved shipping",
            ]}
            translation="(Still proud of this one)"
            accent="green"
            delay={0.2}
            type="revenue"
          />

          <AchievementBlock
            emoji="☁️"
            title="6,000 Users Don't Lie"
            intro="Built Coredge's DaaS platform from scratch—designed, shipped, iterated, and scaled."
            highlights={[
              "0 → 6,000 users in 10 months",
              "Co-founder personally appraised the build",
              "Deployment time reduced from 15 min → 3 min",
            ]}
            translation="This is what I do. I make things people actually use."
            accent="orange"
            delay={0.3}
            type="scale"
          />
        </div>
      </div>
    </section>
  );
};

export default Achievements;
