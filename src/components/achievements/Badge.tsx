import { motion } from "framer-motion";
import { Check, Award, Sparkles } from "lucide-react";

interface BadgeProps {
  type: "verified" | "award" | "featured";
  text: string;
  position?: "top-right" | "bottom-right" | "top-left";
  delay?: number;
}

const Badge = ({ type, text, position = "top-right", delay = 0 }: BadgeProps) => {
  const icons = {
    verified: Check,
    award: Award,
    featured: Sparkles,
  };

  const Icon = icons[type];

  const positionClasses = {
    "top-right": "top-4 right-4",
    "bottom-right": "bottom-4 right-4",
    "top-left": "top-4 left-4",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotate: 5 }}
      className={`absolute ${positionClasses[position]} z-20`}
    >
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#7209B7] to-[#06D6A0] shadow-lg">
        <Icon className="h-3 w-3 text-white" />
        <span className="text-xs font-semibold text-white uppercase tracking-wider">
          {text}
        </span>
      </div>
    </motion.div>
  );
};

export default Badge;
