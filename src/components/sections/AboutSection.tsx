"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Target, BookOpen, Shield, Globe, Terminal } from "lucide-react";
import TextScramble from "@/components/common/TextScramble";
import Magnetic from "@/components/common/Magnetic";

export default function AboutSection() {
  const stats = [
    { label: "LEARNING_AGILITY", value: "98%", icon: Zap },
    { label: "CODE_EFFICIENCY", value: "Sub-1s", icon: Cpu },
    { label: "PROJECTS_BUILT", value: "24+", icon: Target },
    { label: "TECH_STACKS", value: "10+", icon: BookOpen },
    { label: "SIGNAL_STRENGTH", value: "Optimal", icon: Globe },
    { label: "UPTIME_METRIC", value: "99.9%", icon: Shield },
  ];

  const technicalStack = [
    { category: "FRONTEND", skills: ["React 19", "Next.js 15", "TypeScript 5", "Tailwind CSS", "Framer Motion", "Three.js", "Zustand"] },
    { category: "BACKEND", skills: ["Node.js", "Go", "PostgreSQL", "Prisma ORM", "Redis", "GraphQL", "tRPC"] },
    { category: "DEVOPS", skills: ["Docker", "AWS (EC2/S3/Lambda)", "CI/CD Pipelines", "Vercel", "Kubernetes", "Terraform"] },
  ];

  const milestones = [
    { year: "2025", event: "Lead Developer @ TechStream", desc: "Architected high-scale microservices serving 1M+ users" },
    { year: "2025", event: "Full Stack Engineer", desc: "Built and deployed 15+ production apps with 99.9% uptime" },
    { year: "2025", event: "Open Source Contributor", desc: "Key contributions to React and Next.js ecosystems" },
    { year: "2025", event: "System Architect", desc: "Designed distributed database systems for fintech startups" },
  ];

  return (
    <section id="about" className="min-h-screen py-16 sm:py-32 px-4 sm:px-6 relative overflow-hidden flex flex-col items-center snap-start">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 sm:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="mono text-[#00F2FF] text-[10px] sm:text-xs mb-4 tracking-[0.4em] uppercase">SYSTEM_INITIALIZATION // ABOUT_ME</div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-8 perspective-1000">
              <span className="block">Architect of</span>
              <span className="text-cyber-gradient">Digital Systems</span>
            </h2>
            <p className="text-[#F8FAFC]/70 text-base sm:text-lg mb-8 leading-relaxed max-w-3xl">
              I am a developer who views code as a medium for solving complex problems. My approach is rooted in engineering rigor, ensuring that every digital product I build is scalable, efficient, and resilient.
            </p>
            <p className="text-[#F8FAFC]/40 text-xs sm:text-sm mb-12 leading-relaxed max-w-3xl">
              Driven by curiosity and a commitment to excellence, I bridge the gap between abstract logic and tangible user experiences. I specialize in modern frontend architectures and high-performance backend patterns.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="space-y-2 group"
                >
                  <div className="flex items-center gap-3">
                    <stat.icon className="w-4 h-4 text-[#00F2FF] group-hover:text-[#8B5CF6] transition-colors" />
                    <div className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mono group-hover:text-[#00F2FF] transition-colors">{stat.value}</div>
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-widest font-bold group-hover:text-[#8B5CF6] transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square rounded-full border border-white/5 flex items-center justify-center relative perspective-2000">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#00F2FF]/10 shadow-[0_0_50px_rgba(0,242,255,0.05)]"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-10 rounded-full border-dashed border border-[#8B5CF6]/20"
              />

              <Magnetic strength={0.2}>
                <motion.div
                  whileHover={{ scale: 1.1, rotateZ: 10 }}
                  className="w-1/2 h-1/2 relative rounded-[14px] rotate-45 overflow-hidden group interactive border border-white/10 shadow-[0_0_80px_rgba(139,92,246,0.1)]"
                >
                  <motion.img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                    alt="Profile"
                    className="absolute inset-0 w-full h-full object-cover -rotate-45 scale-[1.4] opacity-40 group-hover:opacity-60 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00F2FF]/20 to-[#8B5CF6]/10 backdrop-blur-sm flex items-center justify-center">
                    <Terminal className="w-12 h-12 text-[#F8FAFC] -rotate-45 group-hover:text-[#00F2FF] transition-all duration-500 group-hover:scale-110 relative z-10" />
                  </div>
                </motion.div>
              </Magnetic>

              <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.1, 0.3, 0.1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 5 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute w-2 h-2 bg-[#00F2FF] rounded-full blur-[2px]"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Stack Section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-40">
          {technicalStack.map((stack, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="premium-card p-10 bg-white/[0.02] border-white/5 group hover:border-[#00F2FF]/30 transition-all duration-700"
            >
              <div className="mono text-[#00F2FF] text-[10px] tracking-widest mb-6 opacity-40 group-hover:opacity-100 transition-opacity">STACK_{stack.category}</div>
              <h3 className="text-2xl font-bold mb-8 group-hover:text-[#00F2FF] transition-colors">{stack.category}</h3>
              <div className="flex flex-wrap gap-3">
                {stack.skills.map((skill, j) => (
                  <span key={j} className="px-4 py-2 rounded-[14px] bg-white/5 border border-white/10 text-xs text-[#F8FAFC]/60 hover:text-[#00F2FF] hover:border-[#00F2FF]/40 transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestones Section */}
        <div className="relative">
          <div className="mono text-[#00F2FF] text-xs mb-12 tracking-[0.4em] uppercase text-center">SYSTEM_HISTORY // MILESTONES</div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10 hidden md:block" />
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:border-[#8B5CF6] transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]">
                  <div className="text-xs mono font-bold text-[#8B5CF6]">{milestone.year}</div>
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-[#00F2FF] transition-colors tracking-tight">{milestone.event}</h4>
                <p className="text-xs text-white/40 leading-relaxed max-w-[200px] mx-auto group-hover:text-white/70 transition-colors">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
