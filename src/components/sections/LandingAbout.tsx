"use client";

import { motion } from "framer-motion";
import { Terminal, Code2, Cpu, Globe, Brackets, Database, Layout, Sparkles, Activity, ShieldCheck } from "lucide-react";
import Magnetic from "@/components/common/Magnetic";
import TextScramble from "@/components/common/TextScramble";

export default function LandingAbout() {
    const stats = [
      { label: "CODE_ITERATIONS", value: "850+", icon: Activity },
      { label: "GITHUB_STREAK", value: "48_DAYS", icon: Terminal },
      { label: "OPTIMIZATION", value: "99.9%", icon: ShieldCheck },
      { label: "LEARNING_UNITS", value: "2.4k", icon: Cpu },
    ];

    const features = [
      {
        icon: <Brackets className="w-6 h-6" />,
        title: "Modern UI Architecture",
        desc: "Specializing in React and Next.js to build high-performance, accessible user interfaces with advanced state patterns."
      },
      {
        icon: <Database className="w-6 h-6" />,
        title: "Full-Stack Foundations",
        desc: "Engineering robust backend systems and database architectures that ensure data integrity and real-time synchronization."
      },
      {
        icon: <Layout className="w-6 h-6" />,
        title: "Scalable Styling",
        desc: "Implementing design systems with Tailwind CSS that maintain consistent, pixel-perfect aesthetics across all viewports."
      },
      {
        icon: <Sparkles className="w-6 h-6" />,
        title: "Creative Interactions",
        desc: "Crafting immersive digital experiences through advanced Framer Motion sequences and micro-interaction logic."
      }
    ];

  return (
    <section className="py-32 relative overflow-hidden border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="perspective-2000"
          >
            <div className="mono text-[#38BDF8] text-[10px] tracking-[0.5em] mb-6 uppercase">
              // SYSTEM_DIAGNOSTICS
            </div>
              <h2 className="text-4xl md:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter">
                The Evolution of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#A855F7]">Digital Logic.</span>
              </h2>
              <p className="text-[#E6E9F9]/60 text-lg mb-12 leading-relaxed max-w-3xl italic">
                "I translate complex requirements into elegant code. Every project is an opportunity to optimize and innovate."
              </p>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-10">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <stat.icon className="w-4 h-4 text-[#38BDF8] opacity-50 group-hover:opacity-100 group-hover:text-[#A855F7] transition-all" />
                    <div className="text-3xl font-bold mono group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#38BDF8] group-hover:to-[#A855F7] transition-all">{stat.value}</div>
                  </div>
                  <div className="mono text-[9px] text-white/30 tracking-widest uppercase group-hover:text-[#38BDF8] transition-colors pl-7">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <Magnetic key={i} strength={0.15}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.02,
                    }}
                    className="p-8 rounded-[14px] bg-white/[0.02] border border-white/5 hover:border-[#38BDF8]/30 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm"
                  >
                    <div className="w-14 h-14 rounded-[14px] bg-gradient-to-br from-[#38BDF8]/10 to-transparent border border-[#38BDF8]/20 flex items-center justify-center text-[#38BDF8] mb-8 group-hover:rotate-[360deg] group-hover:from-[#38BDF8] group-hover:text-white transition-all duration-1000 shadow-xl">
                      {feature.icon}
                    </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-[#38BDF8] transition-colors">
                    <TextScramble text={feature.title} />
                  </h3>
                  <p className="text-[#E6E9F9]/40 text-sm leading-relaxed group-hover:text-[#E6E9F9]/70 transition-colors">
                    {feature.desc}
                  </p>
                  
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[#38BDF8] to-[#A855F7] w-0 group-hover:w-full transition-all duration-1000"
                  />
                </motion.div>
              </Magnetic>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-radial from-[#38BDF8]/5 via-transparent to-transparent pointer-events-none -z-10 blur-[150px]" />
    </section>
  );
}
