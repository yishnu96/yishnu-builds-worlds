import { motion } from "framer-motion";

interface CompanyLogoProps {
  name: string;
  imageSrc?: string;
  position: "top-right" | "bottom-right" | "bottom-left" | "top-left";
  size?: "sm" | "md" | "lg";
  delay?: number;
}

const sizeMap = {
  sm: "w-16 h-16",
  md: "w-20 h-20",
  lg: "w-28 h-28",
};

const positionMap = {
  "top-right": "top-6 right-6",
  "bottom-right": "bottom-6 right-6",
  "bottom-left": "bottom-6 left-6",
  "top-left": "top-6 left-6",
};

const CompanyLogo = ({ name, imageSrc, position, size = "md", delay = 0 }: CompanyLogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.4, scale: 1 }}
      whileHover={{ opacity: 0.7, scale: 1.05 }}
      transition={{ duration: 0.5, delay }}
      className={`absolute ${positionMap[position]} z-10 ${sizeMap[size]}`}
    >
      <div className="relative w-full h-full">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-contain filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
        ) : (
          <div className="w-full h-full rounded-xl border-2 border-dashed border-white/20 bg-white/5 flex items-center justify-center">
            <span className="text-xs text-white/40 text-center px-2 font-semibold uppercase tracking-wider">
              {name}
            </span>
          </div>
        )}

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-xl blur-xl -z-10 opacity-0 hover:opacity-30 transition-opacity duration-300"
          style={{
            background: "radial-gradient(circle, rgba(114,9,183,0.6), transparent 70%)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default CompanyLogo;
