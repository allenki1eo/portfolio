"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { GitBranch, MapPin, ArrowDown, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
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
      className="relative min-h-screen flex flex-col justify-center px-4 overflow-hidden grid-bg"
    >
      {/* Ambient orbs */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-cyan-500/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-28 pb-20">

        {/* ── LEFT: Text content ── */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-7 flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-indigo-300 self-center lg:self-start"
          >
            <Sparkles size={13} className="text-indigo-400" />
            <span>Available for new opportunities</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-glow" />
          </motion.div>

          <FadeUp delay={0}>
            <p className="text-indigo-400 font-mono text-xs tracking-widest uppercase mb-3">
              Hi there, I&apos;m
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="section-heading text-white mb-2">
              {personalInfo.name}
            </h1>
          </FadeUp>

          <FadeUp delay={0.18}>
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-5">
              {personalInfo.title}
            </h2>
          </FadeUp>

          <FadeUp delay={0.26}>
            <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed mb-9">
              {personalInfo.subtitle}
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.34} className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
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

          {/* Meta */}
          <FadeUp
            delay={0.42}
            className="flex flex-wrap gap-5 justify-center lg:justify-start text-sm text-slate-500"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={13} className="text-indigo-400" />
              {personalInfo.location}
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
            >
              <GitBranch size={13} className="text-indigo-400" />
              allenki1eo
            </a>
          </FadeUp>
        </div>

        {/* ── RIGHT: Banner image ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center w-full max-w-xl lg:max-w-none"
        >
          {/* Glow backdrop */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-indigo-500/20 blur-3xl scale-95 pointer-events-none" />
            <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-2xl scale-90 pointer-events-none" />

            {/* Floating frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-900/40"
              style={{
                background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(6,182,212,0.05) 100%)",
              }}
            >
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-indigo-400/60 rounded-tl-2xl z-10" />
              <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400/60 rounded-tr-2xl z-10" />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400/60 rounded-bl-2xl z-10" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-indigo-400/60 rounded-br-2xl z-10" />

              <Image
                src="/banner1.png"
                alt="Allen's work — web apps and digital experiences"
                width={640}
                height={420}
                priority
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 hover:text-indigo-400 transition-colors"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  );
}
