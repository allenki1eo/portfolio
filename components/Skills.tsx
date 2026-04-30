"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import { Code2, Monitor, Server, Brain, Wrench } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>> = {
  code: Code2,
  monitor: Monitor,
  server: Server,
  brain: Brain,
  tool: Wrench,
};

const categoryColors: Record<string, { bg: string; border: string; text: string; glow: string }> = {
  Languages: {
    bg: "rgba(99, 102, 241, 0.08)",
    border: "rgba(99, 102, 241, 0.25)",
    text: "#818cf8",
    glow: "rgba(99,102,241,0.12)",
  },
  Frontend: {
    bg: "rgba(6, 182, 212, 0.08)",
    border: "rgba(6, 182, 212, 0.25)",
    text: "#22d3ee",
    glow: "rgba(6,182,212,0.12)",
  },
  Backend: {
    bg: "rgba(16, 185, 129, 0.08)",
    border: "rgba(16, 185, 129, 0.25)",
    text: "#34d399",
    glow: "rgba(16,185,129,0.12)",
  },
  "AI & ML": {
    bg: "rgba(168, 85, 247, 0.08)",
    border: "rgba(168, 85, 247, 0.25)",
    text: "#c084fc",
    glow: "rgba(168,85,247,0.12)",
  },
  Tools: {
    bg: "rgba(251, 146, 60, 0.08)",
    border: "rgba(251, 146, 60, 0.25)",
    text: "#fb923c",
    glow: "rgba(251,146,60,0.12)",
  },
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-4 relative">
      {/* Background orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3 text-center"
        >
          What I work with
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading text-center text-white mb-4"
        >
          Skills &{" "}
          <span className="gradient-text">Technologies</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-slate-500 max-w-xl mx-auto mb-16"
        >
          A curated stack of languages, frameworks, and tools I rely on to build fast,
          reliable, and intelligent applications.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Code2;
            const colors = categoryColors[skill.category];

            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="glass rounded-2xl p-6 card-hover group"
                style={{ boxShadow: `0 0 0 1px ${colors.border}` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: colors.bg, border: `1px solid ${colors.border}` }}
                  >
                    <Icon size={18} style={{ color: colors.text }} />
                  </div>
                  <h3 className="text-white font-semibold text-base">{skill.category}</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-xs font-medium transition-all"
                      style={{
                        background: colors.bg,
                        color: colors.text,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Extra card: currently learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + skills.length * 0.08 }}
            className="glass rounded-2xl p-6 card-hover md:col-span-2 lg:col-span-1"
            style={{ boxShadow: "0 0 0 1px rgba(244,63,94,0.2)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-rose-500/10 border border-rose-500/25">
                <span className="text-rose-400 text-lg">✦</span>
              </div>
              <h3 className="text-white font-semibold text-base">Always Learning</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Continuously exploring new technologies — from agentic AI workflows to
              distributed systems and mobile development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
