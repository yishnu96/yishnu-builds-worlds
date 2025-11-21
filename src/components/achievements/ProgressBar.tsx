import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  before: string | number;
  after: string | number;
  percentage: number;
  color: "purple" | "green" | "orange";
  delay?: number;
}

const colorMap = {
  purple: {
    bg: "bg-[#7209B7]/20",
    fill: "bg-gradient-to-r from-[#7209B7] to-[#06D6A0]",
    text: "text-[#7209B7]",
  },
  green: {
    bg: "bg-[#06D6A0]/20",
    fill: "bg-gradient-to-r from-[#06D6A0] to-[#7209B7]",
    text: "text-[#06D6A0]",
  },
  orange: {
    bg: "bg-[#F77F00]/20",
    fill: "bg-gradient-to-r from-[#F77F00] to-[#FFD700]",
    text: "text-[#F77F00]",
  },
};

const ProgressBar = ({ label, before, after, percentage, color, delay = 0 }: ProgressBarProps) => {
  const colors = colorMap[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center text-sm">
        <span className="text-[#B0B8C1]">{label}</span>
        <div className="flex items-center gap-2">
          <span className="text-[#8A92A0] line-through">{before}</span>
          <span className="text-white">→</span>
          <span className={`font-semibold ${colors.text}`}>{after}</span>
        </div>
      </div>

      <div className={`h-2 rounded-full ${colors.bg} overflow-hidden`}>
        <motion.div
          className={`h-full ${colors.fill} rounded-full`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          style={{
            boxShadow: color === "purple"
              ? "0 0 10px rgba(114, 9, 183, 0.5)"
              : color === "green"
              ? "0 0 10px rgba(6, 214, 160, 0.5)"
              : "0 0 10px rgba(247, 127, 0, 0.5)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default ProgressBar;
