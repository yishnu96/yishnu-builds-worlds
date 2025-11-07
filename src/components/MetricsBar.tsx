import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MetricItem = ({ from, to, suffix = "", label, delay }: { from: number; to: number; suffix?: string; label: string; delay: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = (to - from) / steps;
    let current = from;
    let step = 0;

    const timer = setInterval(() => {
      if (step < steps) {
        current += increment;
        setCount(Math.floor(current));
        step++;
      } else {
        setCount(to);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, from, to]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="text-center hover:scale-110 transition-transform"
    >
      <div className="text-4xl lg:text-5xl font-display font-bold text-gold mb-2">
        {from === 0 && to > 0 && count === to ? `${from} → ` : ""}{count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const MetricsBar = () => {
  return (
    <section id="metrics" className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <MetricItem from={0} to={12} suffix=" Cr/month" label="₹0 → ₹12 Cr/month" delay={0} />
          <MetricItem from={0} to={6000} suffix=" users" label="0 → 6,000 users" delay={0.2} />
          <MetricItem from={0} to={60} suffix="%" label="60% cost savings" delay={0.4} />
          <MetricItem from={0} to={18} suffix="" label="18 AI agents built" delay={0.6} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-lg text-muted-foreground italic mt-10"
        >
          "Yeah, I move fast. Comes with the founder territory."
        </motion.p>
      </div>
    </section>
  );
};

export default MetricsBar;
