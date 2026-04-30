"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo } from "@/lib/data";
import TerminalWindow from "./TerminalWindow";

const links = [
  {
    label: "github",
    handle: "allenki1eo",
    href: personalInfo.github,
  },
  {
    label: "email",
    handle: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    label: "twitter",
    handle: "@allenki1eo",
    href: "https://twitter.com/allenki1eo",
  },
  {
    label: "linkedin",
    handle: "allenki1eo",
    href: "https://linkedin.com/in/allenki1eo",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 font-mono">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <TerminalWindow title="contact.sh — ~/portfolio">
          <div className="mb-5 text-sm">
            <span className="text-[#4e9a06]">allen</span>
            <span className="text-[#d3d7cf]">@</span>
            <span className="text-[#729fcf]">portfolio</span>
            <span className="text-[#d3d7cf]">:</span>
            <span className="text-[#fcaf3e]">~</span>
            <span className="text-[#d3d7cf]">$ </span>
            <span className="text-[#d3d7cf]">./contact.sh</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-[#8ae234] mb-4 glow-green text-sm">
              $ ./contact.sh — initializing connection...
              <span className="text-[#888a85] block mt-1">
                [OK] Channel open. Ready to collaborate.
              </span>
            </p>
            <p className="text-[#d3d7cf] mb-6 text-sm leading-relaxed">
              Whether you have a bold idea, a problem to solve, or just want to
              connect — I&apos;m always open to interesting conversations and
              collaborations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                  className="terminal-card rounded p-3 flex items-center justify-between group hover:border-[#8ae234]/30 transition-all"
                >
                  <div>
                    <p className="text-[#fcaf3e] text-[11px] font-bold uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-[#d3d7cf] text-sm group-hover:text-[#729fcf] transition-colors">
                      {link.handle}
                    </p>
                  </div>
                  <span className="text-[#888a85] text-xs group-hover:text-[#8ae234] transition-colors">
                    →
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

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
