"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Magnetic from "@/components/common/Magnetic";
import TextScramble from "@/components/common/TextScramble";
import { Shield, Zap, Terminal } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-24 px-6 border-t border-white/5 relative z-10 snap-start bg-[#020203]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="space-y-6 text-center md:text-left">
          <Magnetic>
            <Link
              href="/"
              className="mono text-3xl font-bold group interactive flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-[#00F2FF] flex items-center justify-center shadow-[0_0_20px_rgba(0,242,255,0.3)]">
                <Terminal className="w-6 h-6 text-black" />
              </div>
              <TextScramble text="NOCTRA" />
              <span className="text-[#00F2FF] font-black group-hover:animate-pulse">.TECH</span>
            </Link>
          </Magnetic>
          <p className="text-[10px] mono text-white/20 tracking-[0.3em] max-w-xs">
            ENGINEERING_DISTRIBUTED_SYSTEMS // SECURE_ARCHITECTURES // HIGH_PERFORMANCE_UI
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-[10px] mono text-white/30 uppercase tracking-[0.4em] text-center md:text-left">
          {[
            { name: "Github", url: "#" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/noctra-tech-b36b0a3a5" },
            { name: "Twitter", url: "#" }
          ].map((social) => (
            <Magnetic key={social.name}>
              <motion.a
                whileHover={{ y: -5, color: "#00F2FF" }}
                href={social.url}
                target={social.url !== "#" ? "_blank" : undefined}
                rel={social.url !== "#" ? "noopener noreferrer" : undefined}
                className="hover:text-[#F8FAFC] transition-all relative interactive group block md:inline-block"
              >
                {social.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#00F2FF] transition-all group-hover:w-full" />
              </motion.a>
            </Magnetic>
          ))}
        </div>

        <div className="text-[10px] mono text-white/20 text-center md:text-right space-y-4">
          <div className="flex items-center justify-center md:justify-end gap-3 text-[#00F2FF]/60 bg-white/5 px-4 py-2 rounded-full border border-white/5 shadow-xl w-max mx-auto md:mx-0">
            <Shield className="w-3 h-3 text-[#39FF14]" />
            <span className="tracking-[0.2em]">SYSTEM_STABLE // v5.0.0</span>
          </div>
          <div className="opacity-40">
            &copy; 2024 NOCTRA_TECH // BEYOND_LIMITS
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-10 opacity-10 grayscale hover:grayscale-0 hover:opacity-30 transition-all duration-700">
        {["AMD", "INTEL", "NVIDIA", "APPLE", "NEXTJS", "REACT"].map(tech => (
          <span key={tech} className="mono text-xs tracking-[0.5em]">{tech}</span>
        ))}
      </div>
    </footer>
  );
}
