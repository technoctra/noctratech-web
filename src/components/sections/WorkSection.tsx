"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Terminal, ArrowUpRight, Cpu, Zap, Activity } from "lucide-react";
import TextScramble from "@/components/common/TextScramble";
import Magnetic from "@/components/common/Magnetic";

const fadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as any }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    } as any
  }
};

export default function WorkSection() {
  const projects = [
    {
      title: "Quantum Ledger",
      category: "FINTECH_INFRASTRUCTURE",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
      desc: "High-throughput blockchain indexing service with real-time analytics and predictive fraud detection.",
      tech: ["Go", "gRPC", "Redis", "TimescaleDB"],
      stats: { perf: "100/100", build: "18s", size: "850kb", uptime: "99.999%" }
    },
    {
      title: "Neural Vision",
      category: "AI_SAAS_PLATFORM",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      desc: "Enterprise-grade image processing pipeline leveraging custom LLMs for automated content moderation.",
      tech: ["Next.js", "Python", "PyTorch", "AWS Lambda"],
      stats: { perf: "97/100", build: "52s", size: "140kb", uptime: "99.8%" }
    },
    {
      title: "Electric Hub",
      category: "ENERGY_ORCHESTRATION",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
      desc: "Distributed energy grid management system with real-time load balancing and grid-aware optimization.",
      tech: ["React 19", "Rust", "MQTT", "Grafana"],
      stats: { perf: "99/100", build: "31s", size: "210kb", uptime: "99.95%" }
    },
    {
      title: "Digital Ecosystem",
      category: "FULL_STACK_PLATFORM",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      desc: "A comprehensive digital transformation project integrating e-commerce and real-time logistics tracking.",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
      stats: { perf: "98/100", build: "45s", size: "120kb", uptime: "99.9%" }
    },
    {
      title: "Security Gateway",
      category: "INFRASTRUCTURE",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      desc: "Robust authentication and authorization layer designed for high-traffic applications with zero-trust protocols.",
      tech: ["Go", "Kubernetes", "AWS", "Terraform"],
      stats: { perf: "99/100", build: "12s", size: "1.2mb", uptime: "99.99%" }
    }
  ];

  const philosophy = [
    {
      icon: Shield,
      title: "Scalable Architecture",
      text: "I build systems that grow with your project, ensuring performance remains peak at any load.",
      code: "0x0A_SCALE",
      metric: "LATENCY < 50ms",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Globe,
      title: "User-Centric Design",
      text: "Every pixel is placed with purpose, creating intuitive experiences that drive engagement.",
      code: "0x0B_UX",
      metric: "CTR +45.2%",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Terminal,
      title: "Technical Excellence",
      text: "Clean, maintainable code is my baseline. I deliver robust solutions that stand the test of time.",
      code: "0x0C_CODE",
      metric: "TEST_COV 100%",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800"
    },
  ];

  return (
    <section id="work" className="min-h-screen py-16 sm:py-32 px-4 sm:px-6 relative snap-start overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="mb-12 sm:mb-24"
        >
          <div className="mono text-[#00F2FF] text-[10px] sm:text-xs mb-4 tracking-[0.4em] uppercase">REPOSITORY // SELECTED_WORKS</div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 perspective-1000">

            <span className="block">Engineered</span>
            <span className="text-cyber-gradient">Artifacts</span>
          </h2>
          <p className="text-[#F8FAFC]/60 max-w-3xl text-base sm:text-lg leading-relaxed">
            A curated collection of digital systems I've architected. Each project is a testament to precision, performance, and problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-24 sm:mb-40 perspective-2000">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{
                y: -15,
                rotateX: 5,
                rotateY: -5,
              }}
              className="group cursor-pointer perspective-1000 h-full"
            >
              <div className="premium-card bg-[#0A0A0A]/50 border-white/5 group-hover:border-[#00F2FF]/30 transition-all duration-700 h-full flex flex-col overflow-hidden shadow-2xl relative">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <div className="px-2 py-1 rounded-[14px] bg-black/60 backdrop-blur-md border border-white/10 mono text-[8px] text-white/40">
                      ID_{(i + 1).toString().padStart(3, '0')}
                    </div>
                    <div className="flex gap-2">
                      <div className="px-2 py-1 rounded-[14px] bg-black/60 backdrop-blur-md border border-white/10 mono text-[9px] text-[#00F2FF]">
                        PERF_{project.stats.perf}
                      </div>
                      <div className="px-2 py-1 rounded-[14px] bg-white/5 backdrop-blur-md border border-white/10 mono text-[9px] text-[#00F2FF]">
                        UP_{project.stats.uptime}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="mono text-[10px] text-[#00F2FF] tracking-[0.2em] uppercase font-bold">{project.category}</div>
                    <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-[#00F2FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>


                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00F2FF] transition-all duration-500">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#F8FAFC]/40 group-hover:text-[#F8FAFC]/70 transition-colors leading-relaxed mb-8">
                    {project.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, j) => (
                      <span key={j} className="text-[9px] mono px-2 py-1 bg-white/5 rounded-full border border-white/10 text-white/60 group-hover:text-[#00F2FF] group-hover:border-[#00F2FF]/30 transition-all">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-[9px] mono text-white/20 uppercase flex justify-between">
                        <span>Optimization</span>
                        <span className="text-[#00F2FF] opacity-60">READY</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${80 + (i * 4)}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-[#00F2FF]"
                        />
                      </div>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="text-[9px] mono text-white/20 uppercase">Build_Time</div>
                      <div className="text-[10px] mono text-[#00F2FF] font-bold">{project.stats.build}</div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00F2FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24 text-center"
          >
            <div className="mono text-[#00F2FF] text-xs mb-4 tracking-[0.4em] uppercase">CORE_ENGINE // PHILOSOPHY</div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8">
              System <span className="text-cyber-gradient">Principles</span>
            </h2>

            <p className="text-[#F8FAFC]/60 max-w-3xl mx-auto text-lg leading-relaxed italic">
              "Code is not just logic; it's the architecture of human intent."
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {philosophy.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="premium-card group interactive relative overflow-hidden bg-white/[0.01] border-white/5 h-full flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                </div>

                <div className="relative z-10 p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 rounded-[12px] bg-gradient-to-br from-[#00F2FF]/10 to-transparent border border-[#00F2FF]/20 group-hover:border-[#00F2FF] transition-all duration-700 shadow-xl group-hover:shadow-[0_0_30px_rgba(0,242,255,0.2)]">
                      <item.icon className="w-6 h-6 text-[#00F2FF]" />
                    </div>
                    <div className="text-right">
                      <div className="mono text-[10px] text-white/20 group-hover:text-[#00F2FF] transition-colors tracking-widest uppercase font-bold mb-1">
                        {item.code}
                      </div>
                      <div className="mono text-[8px] text-[#00F2FF] font-bold">{item.metric}</div>
                    </div>
                  </div>


                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold tracking-tight">
                      <TextScramble text={item.title} />
                    </h4>
                    <p className="text-[#F8FAFC]/50 leading-relaxed group-hover:text-[#F8FAFC]/80 transition-colors text-sm">
                      {item.text}
                    </p>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="h-[1px] w-12 bg-[#00F2FF]/20 group-hover:w-full group-hover:bg-[#00F2FF] transition-all duration-1000" />
                  </div>
                </div>

                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#00F2FF]/5 blur-[60px] group-hover:opacity-20 opacity-0 transition-opacity" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>


      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F2FF]/10 to-transparent" />
    </section>
  );
}
