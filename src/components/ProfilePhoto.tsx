import { motion } from "framer-motion";
import { useState } from "react";

interface ProfilePhotoProps {
  variant?: "hero" | "footer";
  priority?: boolean;
}

const ProfilePhoto = ({ variant = "hero", priority = false }: ProfilePhotoProps) => {
  const [imageError, setImageError] = useState(false);

  // Size configurations
  const sizes = {
    hero: {
      desktop: "w-[300px] h-[300px]",
      tablet: "md:w-[200px] md:h-[200px]",
      mobile: "w-[150px] h-[150px]",
    },
    footer: {
      desktop: "w-[80px] h-[80px]",
      tablet: "w-[80px] h-[80px]",
      mobile: "w-[80px] h-[80px]",
    },
  };

  const currentSize = sizes[variant];

  // Hero variant with animations
  if (variant === "hero") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative"
      >
        {/* Backdrop blur circle */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 rounded-full bg-[#0D1B2A]/40 blur-2xl scale-110" />
        </div>

        {/* Main photo container with floating animation */}
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Pulsing border glow */}
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7209B7] to-[#06D6A0] blur-[20px]"
          />

          {/* Photo container */}
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: 2,
            }}
            transition={{ duration: 0.3 }}
            className={`relative ${currentSize.mobile} ${currentSize.tablet} lg:${currentSize.desktop} rounded-full overflow-hidden`}
            style={{
              boxShadow: "0 0 0 3px transparent",
              background: "linear-gradient(135deg, #7209B7, #06D6A0)",
              padding: "3px",
            }}
            onHoverStart={() => {
              // Intensify glow on hover
              const glowElement = document.getElementById("photo-glow");
              if (glowElement) {
                glowElement.style.opacity = "0.5";
              }
            }}
            onHoverEnd={() => {
              const glowElement = document.getElementById("photo-glow");
              if (glowElement) {
                glowElement.style.opacity = "0.3";
              }
            }}
          >
            {/* Inner white border for better photo separation */}
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0D1B2A] p-[2px]">
              {imageError ? (
                // Fallback placeholder
                <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1B2838] to-[#0D1B2A] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-2">👨‍💻</div>
                    <p className="text-xs text-[#B0B8C1]">Yishnu</p>
                  </div>
                </div>
              ) : (
                <img
                  src="/images/yishnu-profile.jpg"
                  alt="Yishnu Pramanik - Product Manager and AI Specialist"
                  className="w-full h-full object-cover rounded-full"
                  loading={priority ? "eager" : "lazy"}
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </motion.div>

          {/* Glow effect element for hover control */}
          <div
            id="photo-glow"
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7209B7] to-[#06D6A0] blur-[20px] opacity-30 transition-opacity duration-300 pointer-events-none"
          />
        </motion.div>

        {/* Optional: Verified badge or status indicator */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          className="absolute -bottom-2 -right-2 lg:-bottom-3 lg:-right-3"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#06D6A0] border-4 border-[#0D1B2A] flex items-center justify-center shadow-[0_0_20px_rgba(6,214,160,0.4)]">
            <svg
              className="w-5 h-5 lg:w-6 lg:h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  // Footer variant - simple and static
  return (
    <div className="relative">
      {/* Simple border */}
      <div
        className={`relative ${currentSize.mobile} rounded-full overflow-hidden`}
        style={{
          background: "linear-gradient(135deg, #7209B7, #06D6A0)",
          padding: "2px",
        }}
      >
        <div className="w-full h-full rounded-full overflow-hidden bg-[#0D1B2A] p-[1px]">
          {imageError ? (
            // Fallback placeholder
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1B2838] to-[#0D1B2A] flex items-center justify-center">
              <div className="text-3xl">👨‍💻</div>
            </div>
          ) : (
            <img
              src="/images/yishnu-profile.jpg"
              alt="Yishnu Pramanik - Product Manager and AI Specialist"
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          )}
        </div>
      </div>

      {/* Subtle glow for footer version */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#7209B7] to-[#06D6A0] blur-md opacity-20 -z-10" />
    </div>
  );
};

export default ProfilePhoto;
