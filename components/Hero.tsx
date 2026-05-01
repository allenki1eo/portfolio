"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { personalInfo } from "@/lib/data";

function Typewriter({
  text,
  speed = 40,
  delay = 0,
  className = "",
}: {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplay(text.slice(0, i + 1));
        i++;
        if (i >= text.length) clearInterval(interval);
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return <span className={className}>{display}</span>;
}

function Prompt() {
  return (
    <>
      <span className="text-[#4e9a06]">allen</span>
      <span className="text-[#d3d7cf]">@</span>
      <span className="text-[#729fcf]">portfolio</span>
      <span className="text-[#d3d7cf]">:</span>
      <span className="text-[#fcaf3e]">~</span>
      <span className="text-[#d3d7cf]">$ </span>
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-20 pb-10 font-mono"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Boot sequence */}
          <div className="text-[#888a85] text-[11px] sm:text-xs mb-8 space-y-1">
            <p>Linux version 6.5.0-generic (allen@portfolio)</p>
            <p>{new Date().toString()}</p>
            <p>
              Loading profile... <span className="text-[#8ae234]">[OK]</span>
            </p>
            <p>
              Starting user session... <span className="text-[#8ae234]">[OK]</span>
            </p>
          </div>

          {/* Command: whoami */}
          <div className="mb-6 text-sm">
            <Prompt />
            <Typewriter
              text="whoami"
              speed={60}
              delay={600}
              className="text-[#d3d7cf]"
            />
          </div>

          {/* Output */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#8ae234] glow-green mb-2 tracking-tight">
              {personalInfo.name}
            </h1>
            <p className="text-[#fcaf3e] text-base sm:text-lg mb-2">
              {personalInfo.title}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-[#888a85] mb-5">
              <span>📍 {personalInfo.location}</span>
              <span className="text-[#8ae234]">● Available for hire</span>
              <span>since: 2020</span>
            </div>
            <p className="text-[#d3d7cf] max-w-xl leading-relaxed text-sm sm:text-base">
              {personalInfo.subtitle}
            </p>
          </motion.div>

          {/* Command: echo quick links */}
          <div className="mb-2 text-sm">
            <Prompt />
            <Typewriter
              text='echo "quick links"'
              speed={40}
              delay={2400}
              className="text-[#d3d7cf]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-6"
          >
            <a
              href="#projects"
              className="file-tag hover:bg-[#8ae234]/15 transition-colors"
            >
              📁 projects/
            </a>
            <a
              href="#contact"
              className="file-tag hover:bg-[#8ae234]/15 transition-colors"
            >
              📧 contact
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="file-tag hover:bg-[#8ae234]/15 transition-colors"
            >
              🐙 github
            </a>
          </motion.div>

          {/* Blinking cursor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.2 }}
            className="text-sm"
          >
            <Prompt />
            <span className="cursor-blink" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
