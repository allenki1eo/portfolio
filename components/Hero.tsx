"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, ArrowDown, Sparkles, Code2, Layers, Zap, GitBranch } from "lucide-react";
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
      className="relative min-h-screen flex flex-col justify-end overflow-hidden"
    >
      {/* ═══════════════════════════════════════════════════════════════
          CINEMATIC BANNER BACKDROP — full-bleed, edge-to-edge
      ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">
        {/* Banner image fills the entire hero */}
        <Image
          src="/banner1.png"
          alt="Allen's work — web apps and digital experiences"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Cinematic gradient overlays for depth & readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050f]/90 via-[#05050f]/40 to-[#05050f]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05050f]/80 via-transparent to-[#05050f]/80" />

        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, transparent 0%, #05050f 100%)",
          }}
        />

        {/* Animated grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          FLOATING AMBIENT ORBS (parallax depth)
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[10%] w-[300px] h-[300px] rounded-full bg-indigo-600/15 blur-[120px] pointer-events-none z-[1]"
      />
      <motion.div
        animate={{ x: [0, -15, 0], y: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 right-[8%] w-[250px] h-[250px] rounded-full bg-cyan-500/12 blur-[100px] pointer-events-none z-[1]"
      />

      {/* ═══════════════════════════════════════════════════════════════
          FLOATING DECORATIVE TECH ORBS around the banner focal point
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[22%] right-[18%] z-[2] hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border border-white/10 shadow-2xl shadow-indigo-900/30"
      >
        <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center">
          <Code2 size={16} className="text-indigo-300" />
        </div>
        <span className="text-sm font-medium text-slate-200">Clean Code</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0], rotate: [0, -4, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-[38%] left-[12%] z-[2] hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border border-white/10 shadow-2xl shadow-cyan-900/20"
      >
        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center">
          <Layers size={16} className="text-cyan-300" />
        </div>
        <span className="text-sm font-medium text-slate-200">Scalable Arch</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[28%] right-[14%] z-[2] hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border border-white/10 shadow-2xl shadow-indigo-900/30"
      >
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center">
          <Zap size={16} className="text-emerald-300" />
        </div>
        <span className="text-sm font-medium text-slate-200">Fast Perf</span>
      </motion.div>

      {/* ═══════════════════════════════════════════════════════════════
          HORIZONTAL SCANLINE (cinematic touch)
      ═══════════════════════════════════════════════════════════════ */}
      <motion.div
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 5, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-400/40 to-transparent z-[2] pointer-events-none"
      />

      {/* ═══════════════════════════════════════════════════════════════
          MAIN CONTENT — centered, large, overlaid on banner
      ═══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-32 pb-24 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-8 flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-white/10 text-sm text-indigo-300"
        >
          <Sparkles size={14} className="text-indigo-400" />
          <span>Available for new opportunities</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-glow" />
        </motion.div>

        <FadeUp delay={0}>
          <p className="text-indigo-400 font-mono text-xs tracking-[0.25em] uppercase mb-4">
            Hi there, I&apos;m
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-3 drop-shadow-2xl">
            {personalInfo.name}
          </h1>
        </FadeUp>

        <FadeUp delay={0.18}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text mb-6 drop-shadow-lg">
            {personalInfo.title}
          </h2>
        </FadeUp>

        <FadeUp delay={0.26}>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed mb-10 drop-shadow-md">
            {personalInfo.subtitle}
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.34} className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="shimmer-btn px-8 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide transition-transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full glass text-slate-100 font-semibold text-sm tracking-wide border border-white/15 hover:border-indigo-500/50 hover:text-white hover:bg-white/5 transition-all backdrop-blur-xl"
          >
            Get In Touch
          </a>
        </FadeUp>

        {/* Meta row */}
        <FadeUp
          delay={0.42}
          className="flex flex-wrap gap-6 justify-center text-sm text-slate-400"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-indigo-400" />
            {personalInfo.location}
          </span>
          <span className="hidden sm:inline text-slate-600">|</span>
          <span className="flex items-center gap-1.5">
            <GitBranch size={14} className="text-indigo-400" />
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              allenki1eo
            </a>
          </span>
        </FadeUp>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BOTTOM EDGE TREATMENT — curved cinematic fade into next section
      ═══════════════════════════════════════════════════════════════ */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none">
        {/* Smooth curve transition */}
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z"
            fill="#05050f"
          />
        </svg>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-slate-500 hover:text-indigo-400 transition-colors"
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
