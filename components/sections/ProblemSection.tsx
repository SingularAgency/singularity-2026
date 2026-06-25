"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, AlertCircle, TrendingDown } from "lucide-react";

const OLD_LOOP = [
  { step: "Meeting", detail: "Client shares idea verbally", delay: 0 },
  { step: "Summary", detail: "PM writes it down (maybe)", delay: 0.1 },
  { step: "Ticket", detail: "Story created, backlog added", delay: 0.2 },
  { step: "Sprint", detail: "Prioritized (eventually)", delay: 0.3 },
  { step: "Dev", detail: "Engineer interprets the brief", delay: 0.4 },
  { step: "Review", detail: "Back to client for feedback", delay: 0.5 },
  { step: "Revision", detail: "Misunderstood. Redo.", delay: 0.6 },
];

const STATS = [
  { icon: Clock, value: "3–6 weeks", label: "average idea-to-ship cycle", bad: true },
  { icon: TrendingDown, value: "67%", label: "of client intent lost in translation", bad: true },
  { icon: AlertCircle, value: "$650/SP", label: "average agency story point cost", bad: true },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-[#F9FAFB] border-y border-[#E5E7EB]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">The problem</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            The current loop is broken.
          </h2>
          <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
            Every handoff loses context. Every delay costs momentum. The client prompts in every meeting — but the idea dies there.
          </p>
        </motion.div>

        {/* Old loop timeline */}
        <div className="relative mb-16">
          <div className="flex flex-wrap md:flex-nowrap items-start gap-0">
            {OLD_LOOP.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: item.delay }}
                className="flex-1 min-w-0 relative"
              >
                <div className="flex flex-col items-center text-center px-2">
                  {/* Node */}
                  <div
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold z-10 relative"
                    style={{
                      borderColor: i === 6 ? "#EF4444" : "#D1D5DB",
                      background: i === 6 ? "#FEE2E2" : "#fff",
                      color: i === 6 ? "#EF4444" : "#6B7280",
                    }}
                  >
                    {i + 1}
                  </div>
                  {/* Connector */}
                  {i < OLD_LOOP.length - 1 && (
                    <div className="hidden md:block absolute top-4 left-1/2 w-full h-0.5 bg-[#E5E7EB] z-0" />
                  )}
                  <div className="mt-2">
                    <p
                      className="text-xs font-semibold"
                      style={{ color: i === 6 ? "#EF4444" : "#374151" }}
                    >
                      {item.step}
                    </p>
                    <p className="text-xs text-[#9CA3AF] mt-0.5 leading-tight">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Time arrow */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-6 flex items-center gap-2 text-sm text-[#9CA3AF]"
            style={{ transformOrigin: "left" }}
          >
            <div className="flex-1 h-px bg-[#E5E7EB]" />
            <span className="font-medium">3–6 weeks</span>
            <div className="flex-1 h-px bg-[#E5E7EB]" />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="bg-white rounded-xl border border-[#E5E7EB] p-6 text-center"
            >
              <stat.icon className="w-5 h-5 text-[#EF4444] mx-auto mb-3" />
              <p className="text-3xl font-bold text-[#0A0A0A] mb-1">{stat.value}</p>
              <p className="text-sm text-[#6B7280]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
