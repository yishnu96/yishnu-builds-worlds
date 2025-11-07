import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorGlow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  const springX = useSpring(0, { stiffness: 120, damping: 20, mass: 0.2 });
  const springY = useSpring(0, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    const handleMediaChange = () => setEnabled(mediaQuery.matches);
    handleMediaChange();
    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const handleMove = (event: MouseEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
      springX.set(event.clientX);
      springY.set(event.clientY);
      setIsVisible(true);
    };

    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseenter", handleEnter);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseenter", handleEnter);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [enabled, springX, springY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 mix-blend-difference md:block"
        style={{ x: pointer.x, y: pointer.y, opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-purple blur-3xl opacity-60 md:block"
        style={{ x: springX, y: springY, opacity: isVisible ? 0.4 : 0 }}
      />
    </>
  );
};

export default CursorGlow;

