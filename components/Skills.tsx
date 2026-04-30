"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { skills } from "@/lib/data";
import TerminalWindow from "./TerminalWindow";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 font-mono">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <TerminalWindow title="skills/ — ~/portfolio">
          <div className="mb-5 text-sm">
            <span className="text-[#4e9a06]">allen</span>
            <span className="text-[#d3d7cf]">@</span>
            <span className="text-[#729fcf]">portfolio</span>
            <span className="text-[#d3d7cf]">:</span>
            <span className="text-[#fcaf3e]">~</span>
            <span className="text-[#d3d7cf]">$ </span>
            <span className="text-[#d3d7cf]">ls -la skills/</span>
          </div>

          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="border-l-2 border-[#4e9a06] pl-4"
              >
                <p className="text-[#fcaf3e] text-xs mb-2 font-bold tracking-wide">
                  drwxr-xr-x &nbsp; allen &nbsp; dev &nbsp;{" "}
                  {skill.category.toLowerCase().replace(/\s/g, "-")}.d/
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="file-tag">
                      -rw-r--r-- &nbsp;{item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + skills.length * 0.1 }}
              className="border-l-2 border-[#ad7fa8] pl-4"
            >
              <p className="text-[#ad7fa8] text-xs mb-2 font-bold tracking-wide">
                drwxr-xr-x &nbsp; allen &nbsp; dev &nbsp; always-learning.d/
              </p>
              <p className="text-[#888a85] text-xs">
                Exploring agentic AI, distributed systems, mobile dev...
              </p>
            </motion.div>
          </div>

          <div className="text-[#888a85] text-xs border-t border-white/5 pt-4 mt-6">
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
