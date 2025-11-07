import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const isCoarsePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [coarse] = useState(() => (typeof window === "undefined" ? true : isCoarsePointer()));

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const followerX = useSpring(cursorX, { stiffness: 200, damping: 20, mass: 0.3 });
  const followerY = useSpring(cursorY, { stiffness: 200, damping: 20, mass: 0.3 });

  useEffect(() => {
    if (coarse) return;

    const handleMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
      setVisible(true);

      const target = event.target as HTMLElement;
      const isInteractive = Boolean(target?.closest("a, button, input, textarea, [data-cursor-interactive]"));
      setInteractive(isInteractive);
    };

    const handleLeave = () => setVisible(false);
    const handleDown = () => setInteractive(true);
    const handleUp = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isInteractive = Boolean(target?.closest("a, button, input, textarea, [data-cursor-interactive]"));
      setInteractive(isInteractive);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [coarse, cursorX, cursorY]);

  const opacity = useMemo(() => (visible && !coarse ? 1 : 0), [visible, coarse]);

  if (coarse) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[70] h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#7209B7]/10 mix-blend-screen"
        style={{ x: followerX, y: followerY, opacity }}
        animate={interactive ? { scale: 1.4, borderColor: "rgba(6,214,160,0.35)" } : { scale: 1, borderColor: "rgba(255,255,255,0.12)" }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[71] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06D6A0]"
        style={{ x: cursorX, y: cursorY, opacity }}
        animate={interactive ? { scale: 0.8 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
      />
    </>
  );
};

export default CustomCursor;

