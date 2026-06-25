"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const LOOP_STEPS = [
  { label: "Client speaks intent", icon: "💬", color: "#7C3AED" },
  { label: "AI extracts the plan", icon: "⚡", color: "#6D28D9" },
  { label: "Client approves", icon: "✓", color: "#5B21B6" },
  { label: "Agents execute in loops", icon: "🔄", color: "#4C1D95" },
  { label: "Humans when necessary", icon: "👤", color: "#3B0764" },
  { label: "Shipped at hyperspeed", icon: "🚀", color: "#1A0040" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(90deg, #7C3AED 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, #7C3AED 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-[#E5E7EB] bg-white/80 backdrop-blur-sm text-sm font-medium text-[#7C3AED]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
          The synthetic evolutionary jump
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          Every idea dies
          <br />
          <span className="gradient-text">in a meeting.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Singularity is the moment AI and human intelligence merge —
          enabling the shortest possible loop from client intent to shipped product.
        </motion.p>

        {/* The Loop visualization */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-1 mb-12"
        >
          {LOOP_STEPS.map((step, i) => (
            <div key={i} className="flex items-center gap-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.08 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F9FAFB] border border-[#E5E7EB] text-sm font-medium text-[#374151]"
              >
                <span>{step.icon}</span>
                {step.label}
              </motion.div>
              {i < LOOP_STEPS.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                  className="text-[#D1D5DB] text-lg font-light"
                >
                  →
                </motion.span>
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a
            href="#river"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#7C3AED] text-white font-semibold hover:bg-[#6D28D9] transition-colors"
          >
            See it in action
            <ArrowDown className="w-4 h-4" />
          </a>
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#E5E7EB] text-[#374151] font-semibold hover:bg-[#F9FAFB] transition-colors"
          >
            Book a demo
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9CA3AF]"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
