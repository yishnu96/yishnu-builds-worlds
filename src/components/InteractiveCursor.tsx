import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const dotSize = 10;
const ringSize = 40;

const springConfig = { stiffness: 300, damping: 30, mass: 0.4 };
const ringSpringConfig = { stiffness: 180, damping: 25, mass: 0.6 };

const InteractiveCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const dotX = useSpring(useTransform(rawX, (value) => value - dotSize / 2), springConfig);
  const dotY = useSpring(useTransform(rawY, (value) => value - dotSize / 2), springConfig);

  const ringX = useSpring(useTransform(rawX, (value) => value - ringSize / 2), ringSpringConfig);
  const ringY = useSpring(useTransform(rawY, (value) => value - ringSize / 2), ringSpringConfig);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) {
      return;
    }

    setIsVisible(true);
    document.body.classList.add("custom-cursor-enabled");

    const handlePointerMove = (event: PointerEvent) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
    };

    const hideCursor = () => setIsVisible(false);
    const showCursor = () => setIsVisible(true);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", hideCursor);
    window.addEventListener("pointerup", showCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", hideCursor);
      window.removeEventListener("pointerup", showCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
    };
  }, [rawX, rawY]);

  const cursorStyles = useMemo(
    () => ({
      opacity: isVisible ? 1 : 0,
    }),
    [isVisible],
  );

  return (
    <>
      <motion.div
        className="custom-cursor-ring pointer-events-none fixed z-[100] hidden lg:block h-10 w-10 rounded-full"
        style={{ translateX: ringX, translateY: ringY, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="custom-cursor-dot pointer-events-none fixed z-[100] hidden lg:block h-2.5 w-2.5 rounded-full bg-gradient-purple"
        style={{ translateX: dotX, translateY: dotY, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
};

export default InteractiveCursor;

