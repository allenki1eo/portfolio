"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, stats } from "@/lib/data";
import { User, Zap, Globe, Code2 } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Zap, label: "Fast Learner", desc: "Picking up new technologies rapidly" },
  { icon: Globe, label: "Impact Driven", desc: "Building for real-world problems" },
  { icon: User, label: "User Focused", desc: "Designing with humans in mind" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3 text-center"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading text-center text-white mb-16"
        >
          The person behind
          <span className="block gradient-text">the code</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              {personalInfo.bio2}
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="glass rounded-xl p-4 card-hover"
                >
                  <h.icon size={18} className="text-indigo-400 mb-2" />
                  <p className="text-white text-sm font-semibold mb-1">{h.label}</p>
                  <p className="text-slate-500 text-xs leading-snug">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="glass rounded-2xl p-6 text-center card-hover"
                >
                  <p className="gradient-text text-4xl font-black mb-1">{s.value}</p>
                  <p className="text-slate-500 text-xs font-medium tracking-wide">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Quote block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="glass rounded-2xl p-6 border-l-4 border-indigo-500/60"
            >
              <p className="text-slate-300 italic leading-relaxed text-sm">
                &ldquo;Technology should empower people. Every line of code I write is a step toward making
                tools that genuinely improve lives — starting from Tanzania, reaching the world.&rdquo;
              </p>
              <p className="text-indigo-400 text-xs font-mono mt-3">— Allen</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
