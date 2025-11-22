import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";


const NotFound = () => {
  const location = useLocation();
  const isWorkRoute = location.pathname.startsWith("/work/");

  return (
    <div className="min-h-screen bg-[#0D1B2A] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[150px] md:text-[200px] font-display font-bold leading-none"
        >
          <span className="bg-gradient-to-r from-[#7209B7] via-[#06D6A0] to-[#F77F00] bg-clip-text text-transparent">
            404
          </span>
        </motion.div>

        {/* Error Message */}
        <h1 className="text-2xl md:text-4xl font-display text-white mb-4">
          {isWorkRoute ? "Project Not Found" : "Page Not Found"}
        </h1>

        <p className="text-lg text-[#B0B8C1] mb-8 max-w-md mx-auto">
          {isWorkRoute
            ? "The case study you're looking for doesn't exist or may have been moved."
            : "The page you're looking for doesn't exist or may have been moved."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {isWorkRoute && (
            <Link
              to="/#case-studies"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#7209B7] text-white font-medium hover:bg-[#7209B7]/90 transition-all hover:scale-105"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Work
            </Link>
          )}
          <Link
            to="/"
            className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full ${isWorkRoute
              ? "border border-white/20 text-[#B0B8C1] hover:border-[#7209B7] hover:text-white"
              : "bg-[#7209B7] text-white hover:bg-[#7209B7]/90"
              } transition-all hover:scale-105`}
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </div>

        {/* Decorative Element */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-[#7209B7]/10 to-[#06D6A0]/10 rounded-full blur-3xl -z-10"
        />
      </motion.div>
    </div>
  );
};

export default NotFound;
