"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, Send, ShieldCheck, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Magnetic from "@/components/common/Magnetic";
import TextScramble from "@/components/common/TextScramble";

export default function ContactSection() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = (msg: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${msg}`].slice(-5));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    addLog("Initializing secure uplink...");

    await new Promise(r => setTimeout(r, 800));
    addLog("Encrypting payload...");

    await new Promise(r => setTimeout(r, 1000));
    addLog("Data packet transmitted successfully.");

    setFormState("success");
    addLog("Uplink standby.");
  };

  return (
    <section id="contact" className="min-h-screen py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden flex items-center snap-start">
      <div className="max-w-[1600px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="p-6 sm:p-12 md:p-20 rounded-[20px] sm:rounded-[24px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-start overflow-visible relative bg-[#020203] border border-white/5 shadow-2xl"
        >

          <div className="relative z-10">
            <div className="mono text-[#00F2FF] text-[10px] sm:text-xs mb-4 tracking-[0.4em] uppercase">CONTACT // NOCTRA</div>
            <motion.h2
              initial={{ opacity: 0, x: -20, rotateX: 45 }}
              whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-8 perspective-2000"
            >

              <span className="block text-white">Let’s Build Something</span>
              <span className="block text-[#00F2FF]">for Your Business.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-[#F8FAFC]/60 text-xl mb-12 leading-relaxed max-w-3xl"
            >
              Looking for a custom website or web application? <br />
              Get a free consultation with Noctra Tech.
            </motion.p>

            <div className="mb-16 space-y-8">
              <Magnetic strength={0.2}>
                <Button size="lg" className="h-14 px-8 sm:px-10 rounded-full font-bold text-xs sm:text-sm mono group interactive bg-[#25D366] hover:bg-[#128C7E] hover:scale-[1.05] transition-all border-none text-white w-full sm:w-auto shadow-[0_0_30px_rgba(37,211,102,0.3)]" asChild>
                  <a
                    href="https://wa.me/918532091012?text=Hi%20%F0%9F%91%8B%0AI%20visited%20the%20Noctra%20Tech%20website%20and%20would%20like%20a%20free%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 w-5 h-5 fill-current" /> <TextScramble text="Chat on WhatsApp" />
                  </a>
                </Button>
              </Magnetic>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-4 h-4 text-[#00F2FF]" />
                </div>
                <div>
                  <div className="text-[10px] mono text-white/40 uppercase tracking-widest">Email_Channel</div>
                  <div className="text-sm font-bold text-white">technoctra@gmail.com</div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-10 border-t border-white/5 space-y-6"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-4 h-4 text-[#39FF14]" />
                <span className="mono text-[10px] text-white/40 mb-0 tracking-widest uppercase">Encryption_Active</span>
              </div>

              <div className="bg-[#050505] rounded-[14px] p-4 border border-white/5 min-h-[100px] flex flex-col gap-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/20" />
                  <div className="w-2 h-2 rounded-full bg-yellow-500/20" />
                  <div className="w-2 h-2 rounded-full bg-green-500/20" />
                  <span className="text-[8px] mono text-white/20 ml-2">SYSTEM_LOGS</span>
                </div>
                {logs.length === 0 ? (
                  <div className="text-[10px] mono text-white/10 animate-pulse">Waiting for input...</div>
                ) : (
                  logs.map((log, i) => (
                    <div key={i} className="text-[10px] mono text-[#00F2FF]/70">
                      {log}
                    </div>
                  ))
                )}
              </div>

              <div className="flex gap-6">
                <div className="flex items-center gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse shadow-[0_0_10px_#00F2FF]" />
                  <span className="text-xs mono text-white/60 group-hover:text-[#00F2FF] transition-colors">REMOTE_SYNC</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Globe className="w-3 h-3 text-[#00F2FF]" />
                  <span className="text-xs mono text-white/60 group-hover:text-[#00F2FF] transition-colors">GLOBAL_OPS</span>
                </div>
              </div>

            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                  className="h-[600px] flex flex-col items-center justify-center text-center p-10 rounded-[20px] bg-[#0A0A0F]/80 border border-[#39FF14]/30 shadow-[0_0_50px_rgba(57,255,20,0.1)] backdrop-blur-xl"
                >
                  <div className="w-20 h-20 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 flex items-center justify-center mb-8">
                    <ShieldCheck className="w-10 h-10 text-[#39FF14]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">Request Received</h3>
                  <p className="text-white/60 mb-10 text-base max-w-sm">Thanks for contacting Noctra Tech. We’ll get back to you shortly.</p>
                  <Button
                    onClick={() => { setFormState("idle"); setLogs([]); }}
                    className="mono bg-white/5 hover:bg-white/10 text-white border border-white/10 h-12 px-8 rounded-[14px]"
                  >
                    RESET_TERMINAL
                  </Button>
                </motion.div>
              ) : (
                <form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-8 relative z-10 p-10 rounded-[20px] bg-white/[0.02] border border-white/5 shadow-2xl"
                >
                  <div className="absolute top-4 right-4 mono text-[8px] text-white/10 tracking-[0.3em]">SECURE_LINK_v5.0</div>

                  {[
                    { label: "NAME", placeholder: "Your Name", type: "input", icon: Zap },
                    { label: "BUSINESS NAME", placeholder: "Your Business Name", type: "input", icon: ShieldCheck },
                    { label: "WHAT DO YOU WANT TO BUILD?", placeholder: "Describe your project...", type: "textarea", icon: MessageCircle }
                  ].map((field, i) => (
                    <div key={i} className="space-y-2 group">
                      <div className="flex items-center justify-between px-1">
                        <label className="text-[10px] mono text-white/30 uppercase tracking-[0.3em] group-focus-within:text-[#00F2FF] transition-colors flex items-center gap-2">
                          <field.icon className="w-3 h-3" />
                          {field.label}
                        </label>
                      </div>
                      {field.type === "input" ? (
                        <Input
                          required
                          disabled={formState === "submitting"}
                          className="bg-[#050508] border-white/5 h-14 rounded-[14px] focus:border-[#00F2FF]/50 focus:ring-1 focus:ring-[#00F2FF]/20 transition-all text-[#F8FAFC] placeholder:text-white/10 px-6"
                          placeholder={field.placeholder}
                        />
                      ) : (
                        <Textarea
                          required
                          disabled={formState === "submitting"}
                          className="bg-[#050508] border-white/5 rounded-[14px] focus:border-[#00F2FF]/50 focus:ring-1 focus:ring-[#00F2FF]/20 transition-all min-h-[160px] text-[#F8FAFC] placeholder:text-white/10 p-6"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}

                  <Magnetic strength={0.05}>
                    <Button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="w-full h-16 rounded-[14px] font-bold mono uppercase tracking-[0.3em] text-xs group overflow-hidden bg-gradient-to-r from-[#00F2FF] to-[#8B5CF6] hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(0,242,255,0.2)] border-none text-black"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <TextScramble text={formState === "submitting" ? "SENDING..." : "SEND REQUEST"} />
                        <Send className={`w-4 h-4 ${formState === "submitting" ? "animate-pulse" : "group-hover:translate-x-1 group-hover:-translate-y-1"} transition-transform`} />
                      </span>
                    </Button>
                  </Magnetic>

                  <div className="flex justify-center mt-6">
                    <div className="flex items-center gap-2 text-[9px] mono text-white/20">
                      <div className={`w-1 h-1 rounded-full ${formState === "submitting" ? "bg-yellow-400 animate-pulse" : "bg-[#39FF14]"}`} />
                      {formState === "submitting" ? "ESTABLISHING_SECURE_UPLINK..." : "SIGNAL_STRENGTH: OPTIMAL"}
                    </div>
                  </div>
                </form>
              )}
            </AnimatePresence>

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00F2FF]/10 blur-[50px] rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 blur-[50px] rounded-full -z-10 animate-pulse" />

          </motion.div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-radial from-[#00F2FF]/5 via-transparent to-transparent pointer-events-none -z-20 blur-[120px]" />
        </motion.div>
      </div>
    </section>
  );
}
