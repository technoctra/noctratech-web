"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Zap, Crosshair, Terminal, Sparkles, Code2, Cpu, Activity, Shield, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/common/Magnetic";
import TextScramble from "@/components/common/TextScramble";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    } as any
  }
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="hero" ref={containerRef} className="relative min-h-screen flex items-center pt-24 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden snap-start">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="lg:col-span-6 text-center lg:text-left z-10"
        >
          <motion.div
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse shadow-[0_0_8px_#00F2FF]" />
            <span className="text-[10px] sm:text-[10px] mono text-[#00F2FF] uppercase tracking-widest">System_Online // v6.0.4</span>
          </motion.div>

          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] sm:leading-[0.85] tracking-tighter mb-6 sm:mb-10 perspective-2000"
          >
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%", rotateX: 90 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block origin-bottom bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/20"
              >
                Architecting
              </motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%", rotateX: 90 }}
                animate={{ y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="inline-block origin-bottom text-cyber-gradient"
              >
                Intelligence.
              </motion.span>
            </div>
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-base sm:text-lg md:text-xl text-[#F8FAFC]/60 max-w-2xl mx-auto lg:mx-0 mb-10 sm:mb-12 leading-relaxed px-2 sm:px-0"
          >
            Engineering resilient digital infrastructures and immersive neural interfaces. Bridging the gap between high-performance logic and human-centric design.
          </motion.p>

          <motion.div
            variants={fadeIn}
            className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start"
          >
            <Magnetic strength={0.2}>
              <Button size="lg" className="h-14 px-8 sm:px-10 rounded-full font-bold text-xs sm:text-sm mono group interactive bg-gradient-to-r from-[#00F2FF] to-[#8B5CF6] hover:scale-[1.05] transition-all border-none text-black w-full sm:w-auto shadow-[0_0_30px_rgba(0,242,255,0.3)]" asChild>
                <a
                  href="https://wa.me/918532091012?text=Hi%20%F0%9F%91%8B%0AI%20visited%20the%20Noctra%20Tech%20website%20and%20would%20like%20a%20free%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TextScramble text="Get a Free Consultation" /> <MessageCircle className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="lg:col-span-6 mt-12 lg:mt-0 flex justify-center lg:justify-end"
        >
          <div
            className="relative p-[1px] rounded-[24px] bg-gradient-to-br from-[#00F2FF]/30 via-white/5 to-[#8B5CF6]/20 shadow-2xl w-full max-w-[580px]"
          >
            <div className="bg-[#0A0A0F] rounded-[24px] p-6 sm:p-10 mono text-[12px] leading-relaxed relative overflow-hidden backdrop-blur-md border border-white/5">

              {/* Visual Header: Neural Core - Simplified */}
              <div className="relative h-64 sm:h-80 w-full mb-8 rounded-2xl overflow-hidden bg-black/60 border border-white/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.05),transparent_60%)]" />

                {/* Static Rings instead of animating */}
                <div className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-[#00F2FF]/10 flex items-center justify-center" />
                <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-[#8B5CF6]/10 flex items-center justify-center" />

                <div className="relative z-10 flex flex-col items-center">
                  <Cpu className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-4 opacity-90" />
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-xs text-[#00F2FF] tracking-widest uppercase">
                    Core_Active
                  </div>
                </div>

                {/* Simplified Data lines - Static */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between px-4 opacity-50">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1 h-1 bg-[#00F2FF]/40 rounded-full" />
                    ))}
                  </div>
                  <div className="text-xs sm:text-[10px] text-white/20">UPLINK_STABLE</div>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <div>
                  <div className="text-white/40 mb-1 uppercase text-xs sm:text-[9px] tracking-[0.3em] flex items-center gap-2">
                    <Activity className="w-3 h-3 text-[#00F2FF]" />
                    Neural_Interface_v6
                  </div>
                  <div className="text-[#F8FAFC] text-xl sm:text-2xl font-bold font-sans tracking-tight">
                    System <span className="text-[#00F2FF]">Diagnostics</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs sm:text-[10px] text-white/20 uppercase tracking-widest mb-1">Status</div>
                  <div className="text-[#39FF14] text-xs sm:text-[10px] flex items-center gap-2 justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14]" />
                    OPTIMAL
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 font-sans tracking-normal">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#00F2FF]/10 text-[#00F2FF]">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="text-[#F8FAFC]/40 text-xs sm:text-[10px] uppercase tracking-wider">Speed</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">1.2<span className="text-sm text-white/40 ml-1">ms</span></div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                      <Shield className="w-4 h-4" />
                    </div>
                    <span className="text-[#F8FAFC]/40 text-xs sm:text-[10px] uppercase tracking-wider">Security</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">99.9<span className="text-sm text-white/40 ml-1">%</span></div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex justify-between text-xs sm:text-[10px] uppercase tracking-widest text-white/40 mb-1">
                  <span>Processing_Load</span>
                  <span className="text-[#00F2FF]">14%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00F2FF] w-[14%]" />
                </div>
              </div>

              <div className="mt-8 flex justify-between items-center text-xs sm:text-[10px] text-white/20 mono">
                <div className="flex gap-4">
                  <span>ID_NX-01</span>
                  <span>T_54.2°C</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00F2FF]/40" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
