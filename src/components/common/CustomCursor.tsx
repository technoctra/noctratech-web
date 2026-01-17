"use client";

import { useState, useEffect } from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

    const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const trailingConfig = { damping: 20, stiffness: 80, mass: 1 };
    const trailX = useSpring(mouseX, trailingConfig);
    const trailY = useSpring(mouseY, trailingConfig);

    useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, input, textarea, .interactive, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
        <motion.div
          className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[999] mix-blend-difference flex items-center justify-center"
          style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        >
          <motion.div
            animate={{
              scale: isHovering ? 2.5 : 1,
              rotate: isClicking ? 45 : 0,
              opacity: isClicking ? 0.5 : 1,
            }}
            className="w-full h-full border border-[#38BDF8] rounded-full flex items-center justify-center"
          >
            <div className="w-1 h-1 bg-[#38BDF8] rounded-full" />
          </motion.div>
          
          <AnimatePresence>
            {isHovering && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="absolute -top-10 text-[10px] mono text-[#38BDF8] whitespace-nowrap"
              >
                SELECT_MODE
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[998] opacity-20"
          style={{ 
            x: trailX, 
            y: trailY, 
            translateX: "-50%", 
            translateY: "-50%",
            border: "1px solid #38BDF8",
            borderRadius: "50%"
          }}
        />
        
        <motion.div
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-[997]"
          style={{
            background: `radial-gradient(circle 200px at ${trailX}px ${trailY}px, rgba(56, 189, 248, 0.05), transparent 100%)`,
          }}
        />
    </>
  );
}
