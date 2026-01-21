"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Orbit, Menu, X, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/common/Magnetic";
import TextScramble from "@/components/common/TextScramble";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className={`glass-nav ${scrolled ? "glass-nav-scrolled" : "py-4 sm:py-8 bg-transparent border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Magnetic>
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-bold group interactive"
          >
            <div className="w-10 h-10 rounded-xl bg-[#00F2FF] flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110 duration-500 shadow-[0_0_20px_rgba(0,242,255,0.4)]">
              <Terminal className="w-6 h-6 text-black" />
            </div>
            <span className="mono text-xl tracking-tighter group-hover:text-[#00F2FF] transition-colors">
              NOCTRA
              <span className="text-[#00F2FF] font-black">.TECH</span>
            </span>
          </Link>
        </Magnetic>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              prefetch={true}
              className={`text-xs mono uppercase tracking-[0.2em] font-bold transition-all relative group px-2 py-1 interactive hover:scale-105 ${pathname === item.href ? "text-[#00F2FF]" : "text-[#F8FAFC]/50 hover:text-[#F8FAFC]"
                }`}
            >
              <span className="relative z-10">{item.name}</span>
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-[#00F2FF] transition-all group-hover:w-full ${pathname === item.href ? "w-full" : "w-0"
                }`} />
            </Link>
          ))}
        </nav>


        <button className="md:hidden text-[#F8FAFC] p-2 interactive" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-[#020203]/98 backdrop-blur-3xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#00F2FF] flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-black" />
                </div>
                <span className="mono font-bold text-lg">NOCTRA<span className="text-[#00F2FF]">.TECH</span></span>
              </div>
              <button className="interactive p-2 rounded-xl bg-white/5" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    prefetch={true}
                    className={`text-3xl font-bold interactive tracking-tighter ${pathname === item.href ? "text-[#00F2FF]" : "text-[#F8FAFC]"
                      }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
