import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-gradient-to-r from-[#7209B7] via-[#06D6A0] to-[#F77F00]"
      style={{ scaleX, transformOrigin: "0% 50%" }}
    />
  );
};

export default ScrollProgress;

