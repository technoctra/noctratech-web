"use client";

import { motion, useScroll, useTransform, useVelocity } from "framer-motion";

export default function SpaceBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const velocity = useVelocity(scrollY);
  const skew = useTransform(velocity, [-1000, 1000], [-5, 5]);

  return (
    <>
      <motion.div style={{ y: y1, skewY: skew }} className="stars" />
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="glow-point top-[10%] left-[20%] opacity-20" 
          style={{ background: 'radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, transparent 70%)' }}
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="glow-point bottom-[20%] right-[10%] opacity-15" 
          style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)' }}
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-[40%] left-[60%] w-[500px] h-[500px] rounded-full bg-[#00F2FF]/5 blur-[150px]"
        />
      </div>
    </>
  );
}
