"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, LayoutDashboard, Zap, Wrench, ArrowUpRight, X, Terminal, Cpu, Shield, Sparkles, Database, Cloud } from "lucide-react";
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

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      title: "Technical Architecture",
      icon: Cpu,
      desc: "Designing scalable, high-performance systems with a focus on engineering rigor.",
      details: "I architect digital ecosystems that handle growth with ease. From microservices to serverless patterns, I ensure your technical foundation is robust and future-proof. My architecture designs prioritize low latency, high availability, and cost-efficiency.",
      size: "lg",
      code: "0x01_ARCH",
      color: "#00F2FF",
      features: ["System Design", "Scalability Planning", "Performance Audits", "API Architecture", "Microservices", "Event-Driven Design"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Full-Stack Engineering",
      icon: Code2,
      desc: "End-to-end development of modern web applications using cutting-edge stacks.",
      details: "I build seamless digital experiences across the entire stack. My focus is on clean code, type safety, and high-performance frontend architectures. I leverage the latest features of React 19 and Next.js 15 to deliver lightning-fast applications.",
      size: "sm",
      code: "0x02_DEV",
      color: "#8B5CF6",
      features: ["Next.js & React", "Node.js & Go", "Type-Safe APIs", "Modern State Management", "Custom Hooks", "Server Components"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "UI/UX Engineering",
      icon: LayoutDashboard,
      desc: "Bridging the gap between creative design and technical implementation.",
      details: "Design is more than visuals; it's about functionality. I create intuitive interfaces with advanced animations and pixel-perfect precision. I focus on creating interactive experiences that guide users and tell a story through motion.",
      size: "sm",
      code: "0x03_UIX",
      color: "#39FF14",
      features: ["Advanced Animations", "Responsive Design", "Design Systems", "Accessibility (A11y)", "SVG Motion", "Interaction Design"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "AI & Machine Learning",
      icon: Sparkles,
      desc: "Implementing intelligent features and LLM-powered solutions into modern apps.",
      details: "I integrate advanced AI capabilities into your products, from RAG-based chatbots to automated content processing and data analysis. I ensure AI features are fast, reliable, and provide real value to your users.",
      size: "md",
      code: "0x05_AI",
      color: "#FF007F",
      features: ["LLM Orchestration", "RAG Pipelines", "Prompt Engineering", "Vector Databases", "OpenAI/Anthropic", "LangChain"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Cloud Infrastructure",
      icon: Cloud,
      desc: "Designing and managing secure, scalable cloud environments.",
      details: "I architect cloud-native solutions that are secure by design. From AWS configurations to Docker orchestration, I ensure your application environment is optimized for performance and reliability.",
      size: "sm",
      code: "0x06_CLOUD",
      color: "#00F2FF",
      features: ["AWS / Vercel / Azure", "Docker & K8s", "CI/CD Automation", "Infrastructure as Code", "Security Hardening", "Edge Computing"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const workflow = [
    { step: "01", title: "ANALYSIS", desc: "Technical feasibility and architecture planning.", detail: "Analyzing requirements, defining tech stack, and mapping system dependencies." },
    { step: "02", title: "ARCHITECT", desc: "Core system design and infrastructure setup.", detail: "Designing database schemas, API contracts, and cloud infrastructure layout." },
    { step: "03", title: "ENGINEER", desc: "High-performance development and integration.", detail: "Writing type-safe code, implementing core logic, and ensuring pixel-perfection." },
    { step: "04", title: "OPTIMIZE", desc: "Performance tuning and security hardening.", detail: "Lighthouse audits, load testing, and implementing zero-trust security." },
  ];

  return (
    <section id="services" className="min-h-screen py-16 sm:py-32 px-4 sm:px-6 relative flex flex-col items-center overflow-hidden snap-start">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="mb-12 sm:mb-20"
        >
          <div className="mono text-[#00F2FF] text-xs sm:text-xs mb-4 tracking-[0.4em] uppercase">CAPABILITIES // CORE_EXPERTISE</div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-8 perspective-1000">
            <span className="block">Engineered</span>
            <span className="text-cyber-gradient">Solutions</span>
          </h2>
          <p className="text-[#F8FAFC]/60 max-w-4xl text-base sm:text-lg leading-relaxed">
            I deliver comprehensive digital systems that combine technical excellence with strategic execution. Precision in every line of code, performance in every interaction.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 sm:mb-40"
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: -5,
              }}
              onClick={() => setSelectedService(s)}
              className={`premium-card p-8 group interactive relative h-full flex flex-col justify-between overflow-hidden border-white/5 transition-all duration-500 cursor-pointer shadow-xl perspective-1000 ${s.size === "lg" ? "lg:col-span-2 lg:row-span-1" : s.size === "md" ? "lg:col-span-2" : ""
                }`}
            >
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                <motion.img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-1000 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div
                    className="w-14 h-14 rounded-[14px] bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-700 group-hover:rotate-[360deg] group-hover:bg-cyber-gradient group-hover:text-black group-hover:shadow-[0_0_30px_rgba(0,242,255,0.3)]"
                  >
                    <s.icon className="w-7 h-7 transition-colors" />
                  </div>
                  <div className="mono text-[10px] text-white/20 group-hover:text-[#00F2FF] transition-colors uppercase font-bold tracking-widest flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#00F2FF]/40 animate-pulse" />
                    {s.code}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-[#00F2FF] transition-all duration-500">
                  <TextScramble text={s.title} />
                </h3>
                <p className="text-[#F8FAFC]/50 mb-8 leading-relaxed text-sm group-hover:text-[#F8FAFC]/80 transition-colors">
                  {s.desc}
                </p>
              </div>

              <div className="relative z-10 mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3 text-[10px] mono text-[#00F2FF] opacity-40 group-hover:opacity-100 transition-all duration-500">
                  <span className="w-8 h-[1px] bg-[#00F2FF] block group-hover:w-12 transition-all duration-700" />
                  SYSTEM_OPTIMIZED
                </div>
                <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-[#00F2FF] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
              </div>

              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-1000"
                style={{ backgroundColor: s.color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Development Pipeline Section */}
        <div className="relative">
          <div className="mono text-[#00F2FF] text-xs mb-12 tracking-[0.4em] uppercase text-center">SYSTEM_EXECUTION // PIPELINE</div>
          <div className="grid md:grid-cols-4 gap-4 relative">
            {workflow.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="premium-card p-8 bg-white/[0.01] border-white/5 relative group hover:border-[#00F2FF]/20 transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 mono text-[40px] font-bold text-white/[0.02] group-hover:text-[#00F2FF]/5 transition-colors leading-none">
                  {item.step}
                </div>
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-[#00F2FF] shadow-[0_0_10px_#00F2FF]" />
                  <div className="text-[10px] mono text-white/40 group-hover:text-[#00F2FF] transition-colors tracking-widest uppercase">{item.title}</div>
                </div>
                <h4 className="text-xl font-bold mb-4 group-hover:text-white transition-colors tracking-tight">{item.desc}</h4>
                <p className="text-xs text-white/30 leading-relaxed group-hover:text-white/50 transition-colors">
                  {item.detail}
                </p>

                {i < 3 && (
                  <div className="absolute top-1/2 -right-2 translate-x-1/2 -translate-y-1/2 hidden lg:block z-20">
                    <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-[#00F2FF] transition-colors rotate-45" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#020203]/98 backdrop-blur-2xl z-[200] flex items-center justify-center p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="max-w-4xl w-full premium-card bg-[#0A0A0F]/90 border-white/10 rounded-[20px] p-8 sm:p-16 relative overflow-hidden shadow-[0_0_100px_rgba(0,242,255,0.1)]"
            >
              <div className="absolute top-8 right-8">
                <Magnetic strength={0.2}>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all interactive group"
                  >
                    <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                  </button>
                </Magnetic>
              </div>

              <div className="grid lg:grid-cols-3 gap-16 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/20 text-[10px] mono text-[#00F2FF] uppercase tracking-widest">
                      {selectedService.code}
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-[#00F2FF]/20 to-transparent" />
                  </div>

                  <h3 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-8 tracking-tight">
                    {selectedService.title}
                  </h3>

                  <p className="text-[#F8FAFC]/70 text-xl leading-relaxed mb-12">
                    {selectedService.details}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                    {selectedService.features.map((f: string, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center gap-4 text-xs mono text-[#F8FAFC]/90 group"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]" />
                        <span className="group-hover:text-[#00F2FF] transition-colors">{f}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center space-y-10">
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-20px] rounded-full border border-dashed border-[#00F2FF]/20"
                    />
                    <div className="w-40 h-40 rounded-[14px] bg-gradient-to-br from-[#00F2FF]/10 to-[#8B5CF6]/10 border border-white/10 flex items-center justify-center backdrop-blur-3xl shadow-2xl relative z-10">
                      <selectedService.icon className="w-20 h-20 text-[#00F2FF]" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-[#39FF14]" />
                      <span className="text-[10px] mono text-white/40 uppercase tracking-[0.2em]">Safety_Verification</span>
                    </div>
                    <div className="px-6 py-2 rounded-[14px] bg-[#39FF14]/10 border border-[#39FF14]/20 text-[#39FF14] mono text-sm font-bold shadow-[0_0_20px_rgba(57,255,20,0.1)]">
                      PROTOCOL_PASSED
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-[150px] opacity-20 pointer-events-none -z-10"
                style={{ backgroundColor: selectedService.color }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
