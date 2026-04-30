"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GitBranch, Mail, Share2, ArrowUpRight, AtSign } from "lucide-react";
import { personalInfo } from "@/lib/data";

const links = [
  {
    icon: GitBranch,
    label: "GitHub",
    handle: "@allenki1eo",
    href: "https://github.com/allenki1eo",
    color: "rgba(99,102,241,0.15)",
    border: "rgba(99,102,241,0.3)",
    text: "#818cf8",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "Say hello",
    href: `mailto:${personalInfo.email}`,
    color: "rgba(6,182,212,0.15)",
    border: "rgba(6,182,212,0.3)",
    text: "#22d3ee",
  },
  {
    icon: AtSign,
    label: "Twitter / X",
    handle: "@allenki1eo",
    href: "https://twitter.com/allenki1eo",
    color: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.12)",
    text: "#e2e8f0",
  },
  {
    icon: Share2,
    label: "LinkedIn",
    handle: "Connect",
    href: "https://linkedin.com/in/allenki1eo",
    color: "rgba(59,130,246,0.12)",
    border: "rgba(59,130,246,0.25)",
    text: "#60a5fa",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/8 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-3xl mx-auto text-center relative" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3"
        >
          Let&apos;s talk
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading text-white mb-5"
        >
          Got a project in mind?
          <span className="block gradient-text">Let&apos;s build it.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-slate-400 leading-relaxed mb-14 max-w-lg mx-auto"
        >
          Whether you have a bold idea, a problem to solve, or just want to connect — I&apos;m always
          open to interesting conversations and collaborations.
        </motion.p>

        {/* Links grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 card-hover group text-left"
                style={{ borderColor: link.border }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: link.color, border: `1px solid ${link.border}` }}
                >
                  <Icon size={18} style={{ color: link.text }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">{link.label}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{link.handle}</p>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-slate-600 group-hover:text-indigo-400 transition-colors flex-shrink-0"
                />
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-slate-600 text-sm"
        >
          Based in Tanzania · Open to remote work worldwide
        </motion.div>
      </div>
    </section>
  );
}
