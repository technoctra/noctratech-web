"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import SpaceBackground from "../common/SpaceBackground";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    // Only show loader on initial mount of the whole app
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#020203] text-[#F8FAFC] selection:bg-[#00F2FF]/30 selection:text-[#00F2FF] overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 1, ease: [0.87, 0, 0.13, 1] }
            }}
            className="fixed inset-0 z-[100] bg-[#020203] flex flex-col items-center justify-center overflow-hidden"
          >
            <div className="relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "280px" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="h-[1px] bg-[#00F2FF] mb-8 relative"
              >
                <motion.div 
                  animate={{ left: ["0%", "100%", "0%"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute -top-1 w-2 h-2 rounded-full bg-[#00F2FF] shadow-[0_0_15px_#00F2FF]"
                />
              </motion.div>
              
              <div className="flex flex-col items-center gap-6">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mono text-[10px] text-[#00F2FF] tracking-[0.6em] animate-pulse"
                >
                  ESTABLISHING_SECURE_UPLINK...
                </motion.div>
                <div className="text-5xl font-bold mono tracking-tighter">
                  NOCTRA<span className="text-[#00F2FF] font-black">.TECH</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SpaceBackground />
      <Header />
      
      <main className="relative z-10">
        {children}
      </main>
      
      <Footer />
      
      {/* Visual background noise/texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[99] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Global Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-[80] overflow-hidden">
        <div className="scan-line" />
      </div>
    </div>
  );
}
