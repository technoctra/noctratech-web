"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Zap, Crosshair, Terminal, Sparkles, Code2, Cpu, Activity, Shield } from "lucide-react";
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
            <span className="text-[9px] sm:text-[10px] mono text-[#00F2FF] uppercase tracking-widest">System_Online // v6.0.4</span>
          </motion.div>
          
          <motion.h1
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.85] tracking-tighter mb-8 sm:mb-10 perspective-2000"
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
                <Link href="/work">
                  <TextScramble text="SYSTEM_INIT()" /> <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="outline" size="lg" className="h-14 px-8 sm:px-10 rounded-full border-white/10 hover:bg-white/5 text-[#F8FAFC] font-bold group interactive w-full sm:w-auto backdrop-blur-sm" asChild>
                <Link href="/services">
                  Core_Archive
                  <ChevronRight className="ml-2 w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </Button>
            </Magnetic>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotateY: 45, x: 100 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0, x: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="lg:col-span-6 relative perspective-2000 preserve-3d mt-12 lg:mt-0 flex justify-center lg:justify-end"
        >
          <Magnetic strength={0.05}>
            <motion.div 
                whileHover={{ 
                  rotateX: 10, 
                  rotateY: -10, 
                  translateZ: 100,
                  scale: 1.02
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="premium-card p-[1px] rounded-[24px] cursor-default bg-gradient-to-br from-[#00F2FF]/50 via-transparent to-[#8B5CF6]/30 shadow-[0_0_100px_rgba(0,242,255,0.2)] w-full max-w-[580px]"
              >
                <div className="bg-[#050508]/90 rounded-[24px] p-6 sm:p-10 mono text-[12px] leading-relaxed relative overflow-hidden backdrop-blur-3xl border border-white/5 group">
                
                {/* Visual Header: Neural Core */}
                <div className="relative h-64 sm:h-80 w-full mb-8 rounded-2xl overflow-hidden bg-black/40 border border-white/5 flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.1),transparent_70%)]" />
                  
                  {/* Concentric Rotating Rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-[#00F2FF]/20 flex items-center justify-center"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00F2FF] shadow-[0_0_10px_#00F2FF]" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full border border-[#8B5CF6]/20 flex items-center justify-center"
                  >
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
                  </motion.div>
                  
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#00F2FF] to-[#8B5CF6] blur-2xl opacity-40"
                  />
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <Cpu className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-4 animate-pulse" />
                    <div className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] sm:text-xs text-[#00F2FF] tracking-widest uppercase">
                      Core_Active
                    </div>
                  </div>

                  {/* Data lines */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between px-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: [4, 12, 4] }}
                          transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                          className="w-1 bg-[#00F2FF]/40 rounded-full"
                        />
                      ))}
                    </div>
                    <div className="text-[10px] text-white/20">UPLINK_STABLE</div>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8">
                  <div>
                    <div className="text-white/40 mb-1 uppercase text-[9px] tracking-[0.3em] flex items-center gap-2">
                      <Activity className="w-3 h-3 text-[#00F2FF]" /> 
                      Neural_Interface_v6
                    </div>
                    <div className="text-[#F8FAFC] text-xl sm:text-2xl font-bold font-sans tracking-tight">
                      System <span className="text-[#00F2FF]">Diagnostics</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-white/20 uppercase tracking-widest mb-1">Status</div>
                    <div className="text-[#39FF14] text-[10px] flex items-center gap-2 justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-pulse" />
                      OPTIMAL
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 sm:gap-6 font-sans tracking-normal">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#00F2FF]/30 transition-all group/stat">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#00F2FF]/10 text-[#00F2FF]">
                        <Zap className="w-4 h-4" />
                      </div>
                      <span className="text-[#F8FAFC]/40 text-[10px] uppercase tracking-wider">Speed</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white">1.2<span className="text-sm text-white/40 ml-1">ms</span></div>
                  </div>
                  
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-[#8B5CF6]/30 transition-all group/stat">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                        <Shield className="w-4 h-4" />
                      </div>
                      <span className="text-[#F8FAFC]/40 text-[10px] uppercase tracking-wider">Security</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-white">99.9<span className="text-sm text-white/40 ml-1">%</span></div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="flex justify-between text-[10px] uppercase tracking-widest text-white/40 mb-1">
                    <span>Processing_Load</span>
                    <span className="text-[#00F2FF]">14%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "14%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="h-full bg-[#00F2FF] shadow-[0_0_10px_#00F2FF]"
                    />
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-center text-[10px] text-white/20 mono">
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
                
                <motion.div 
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                  className="absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 pointer-events-none"
                />
              </div>
            </motion.div>
          </Magnetic>
        
          <motion.div 
            animate={{ 
              y: [0, -60, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#00F2FF]/10 blur-[100px] rounded-full -z-20 opacity-50" 
          />
          <motion.div 
            animate={{ 
              y: [0, 60, 0],
              rotate: [0, -180, -360],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-64 sm:w-96 h-64 sm:h-96 bg-[#8B5CF6]/10 blur-[100px] rounded-full -z-20 opacity-50" 
          />
        </motion.div>
      </div>
    </section>
  );
}
