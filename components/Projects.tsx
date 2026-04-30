"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import TerminalWindow from "./TerminalWindow";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 font-mono">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <TerminalWindow title="projects/ — ~/portfolio">
          <div className="mb-5 text-sm">
            <span className="text-[#4e9a06]">allen</span>
            <span className="text-[#d3d7cf]">@</span>
            <span className="text-[#729fcf]">portfolio</span>
            <span className="text-[#d3d7cf]">:</span>
            <span className="text-[#fcaf3e]">~</span>
            <span className="text-[#d3d7cf]">$ </span>
            <span className="text-[#d3d7cf]">ls -la projects/</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {visible.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="terminal-card rounded p-4 group hover:border-[#8ae234]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-[#729fcf] font-bold text-sm group-hover:text-[#fcaf3e] transition-colors">
                    {project.title.toLowerCase().replace(/\s/g, "-")}.proj
                  </h3>
                  {project.featured && (
                    <span className="text-[#fcaf3e] text-[10px]">★ featured</span>
                  )}
                </div>
                <p className="text-[#888a85] text-xs leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="file-tag text-[10px]">
                      {tag.toLowerCase()}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="text-[#888a85] hover:text-[#d3d7cf] text-xs transition-colors mb-4 block"
          >
            {showAll
              ? "$ cd .."
              : `$ ls -la projects/ --all (${projects.length} entries)`}
          </button>

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
