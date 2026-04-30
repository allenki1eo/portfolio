"use client";

import { motion } from "framer-motion";
import { GitBranch, MapPin, ArrowDown, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden grid-bg spotlight"
    >
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-indigo-300"
      >
        <Sparkles size={14} className="text-indigo-400" />
        <span>Available for new opportunities</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-glow" />
      </motion.div>

      {/* Main heading */}
      <div className="text-center max-w-4xl mx-auto">
        <FadeUp delay={0}>
          <p className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-4">
            Hi there, I&apos;m
          </p>
        </FadeUp>

        <FadeUp delay={0.12}>
          <h1 className="section-heading text-white mb-4">
            {personalInfo.name}
            <span className="block gradient-text">{personalInfo.title}</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.24}>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            {personalInfo.subtitle}
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.36} className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="shimmer-btn px-7 py-3 rounded-full text-white font-semibold text-sm tracking-wide transition-transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full glass text-slate-200 font-semibold text-sm tracking-wide border border-white/10 hover:border-indigo-500/40 hover:text-white transition-all"
          >
            Get In Touch
          </a>
        </FadeUp>

        {/* Meta info */}
        <FadeUp delay={0.48} className="flex flex-wrap gap-6 justify-center text-sm text-slate-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-indigo-400" />
            {personalInfo.location}
          </span>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
          >
            <GitBranch size={14} className="text-indigo-400" />
            allenki1eo
          </a>
        </FadeUp>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-600 hover:text-indigo-400 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
