import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface MetricConfig {
  from: number;
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay: number;
}

const MetricItem = ({ from, to, prefix = "", suffix = "", label, delay }: MetricConfig) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => setDisplayValue(latest));
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (!isInView) return;

    motionValue.set(from);
    const controls = animate(from, to, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      delay,
      onUpdate: (latest) => motionValue.set(latest),
    });

    return () => {
      controls.stop();
    };
  }, [isInView, motionValue, to, from, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="group flex flex-col items-center gap-3 text-center"
    >
      <motion.div
        className="text-3xl font-display font-bold text-[#FFD700] md:text-4xl lg:text-5xl"
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
      >
        <motion.span className="drop-shadow-[0_0_22px_rgba(255,215,0,0.35)]">
          {prefix}
          {displayValue.toLocaleString("en-IN")}
          {suffix}
        </motion.span>
      </motion.div>
      <p className="text-sm uppercase tracking-[0.2em] text-[#B0B8C1] md:text-base">{label}</p>
    </motion.div>
  );
};

const MetricsBar = () => {
  const metrics: MetricConfig[] = [
    { from: 0, to: 12, prefix: "₹", suffix: " Cr/month", label: "0 → ₹12 Cr/month", delay: 0 },
    { from: 0, to: 6000, suffix: "+", label: "0 → 6,000 users", delay: 0.15 },
    { from: 0, to: 60, suffix: "%", label: "60% cost savings", delay: 0.3 },
    { from: 0, to: 18, suffix: "", label: "18 AI agents built", delay: 0.45 },
  ];

  return (
    <section
      id="metrics"
      className="relative bg-[#1B2838] py-20 md:py-[120px] text-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-12">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="relative flex flex-col items-center py-6 md:py-0"
            >
              <MetricItem {...metric} />
              {/* Horizontal divider for mobile (below each item except last) */}
              {index < metrics.length - 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 border-b border-white/10 md:hidden" />
              )}
              {/* Vertical divider for tablet - between items in same row */}
              {index < metrics.length - 1 && index !== 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden h-20 border-r border-white/10 md:block lg:hidden" />
              )}
              {/* Vertical divider for desktop - between all items */}
              {index < metrics.length - 1 && (
                <div className="absolute right-[-24px] top-1/2 hidden h-20 -translate-y-1/2 border-r border-white/10 lg:block" />
              )}
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-base md:text-lg italic text-[#8A92A0]"
        >
          "Yeah, I move fast. Comes with the founder territory."
        </motion.p>
      </div>
    </section>
  );
};

export default MetricsBar;
