"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, stats } from "@/lib/data";
import TerminalWindow from "./TerminalWindow";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-4 sm:px-6 font-mono">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <TerminalWindow title="about.txt — ~/portfolio">
          {/* Command */}
          <div className="mb-5 text-sm">
            <span className="text-[#4e9a06]">allen</span>
            <span className="text-[#d3d7cf]">@</span>
            <span className="text-[#729fcf]">portfolio</span>
            <span className="text-[#d3d7cf]">:</span>
            <span className="text-[#fcaf3e]">~</span>
            <span className="text-[#d3d7cf]">$ </span>
            <span className="text-[#d3d7cf]">cat about.txt</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-[#d3d7cf] leading-relaxed mb-8 text-sm"
          >
            <p>{personalInfo.bio}</p>
            <p className="text-[#888a85]">{personalInfo.bio2}</p>
          </motion.div>

          {/* Stats as neofetch blocks */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
          >
            {stats.map((s) => (
              <div key={s.label} className="terminal-card rounded p-3">
                <p className="text-[#8ae234] text-lg font-bold glow-green">
                  {s.value}
                </p>
                <p className="text-[#888a85] text-[11px]">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="border-l-2 border-[#fcaf3e] pl-4 mb-6"
          >
            <p className="text-[#888a85] italic text-sm leading-relaxed">
              &ldquo;Technology should empower people. Every line of code I write
              is a step toward making tools that genuinely improve lives.&rdquo;
            </p>
            <p className="text-[#fcaf3e] text-xs mt-2">— Allen</p>
          </motion.div>

          {/* Prompt with cursor */}
          <div className="text-[#888a85] text-xs border-t border-white/5 pt-4">
            <span className="text-[#4e9a06]">allen</span>
            <span className="text-[#d3d7cf]">@</span>
            <span className="text-[#729fcf]">portfolio</span>
            <span className="text-[#d3d7cf]">:</span>
            <span className="text-[#fcaf3e]">~</span>
            <span className="text-[#d3d7cf]">$ </span>
            <span className="cursor-blink" />
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
}
