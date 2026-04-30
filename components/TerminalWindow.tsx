"use client";

import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`rounded-lg overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl shadow-black/50 ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="flex-1 text-center text-[11px] text-[#555] font-mono tracking-wide uppercase">
          {title}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
}
