import { motion } from "framer-motion";

const UserGrowthViz = () => {
  const userCount = 60; // Represents 6000 users (60 dots = 100 users each)

  return (
    <div className="absolute left-0 top-0 bottom-0 w-[250px] opacity-25 pointer-events-none flex items-center justify-center">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Grid of user avatars */}
        <div className="grid grid-cols-10 gap-2 p-6">
          {Array.from({ length: userCount }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: i * 0.02,
                ease: "easeOut",
              }}
              className="w-3 h-3 rounded-full"
              style={{
                background: i % 3 === 0
                  ? "linear-gradient(135deg, #7209B7, #06D6A0)"
                  : i % 3 === 1
                  ? "#7209B7"
                  : "#06D6A0",
                boxShadow: "0 0 8px rgba(114, 9, 183, 0.4)",
              }}
            />
          ))}
        </div>

        {/* Overlay number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="text-center">
            <div
              className="font-display text-6xl font-bold"
              style={{
                background: "linear-gradient(135deg, #7209B7, #06D6A0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(114, 9, 183, 0.5)",
              }}
            >
              6K+
            </div>
            <div className="text-xs text-white/60 mt-2">Active Users</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UserGrowthViz;
