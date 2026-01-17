"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Magnetic from "./Magnetic";

export default function BackButton() {
  const router = useRouter();

    return (
      <div className="fixed bottom-8 left-8 z-[100]">
        <Magnetic>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/")}
            className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#0A0A0B]/80 backdrop-blur-xl border border-white/10 hover:border-[#38BDF8]/50 shadow-2xl transition-all duration-300 group interactive"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-[#38BDF8]" />
            <div className="flex flex-col items-start">
              <span className="mono text-[10px] text-[#38BDF8] leading-none mb-1 tracking-tighter opacity-70">RETURN_TO</span>
              <span className="mono text-xs tracking-widest font-bold">HOME</span>
            </div>
          </motion.button>
        </Magnetic>
      </div>
    );
}
