import { GitBranch } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span className="gradient-text font-bold">Allen</span>
          <span>·</span>
          <span>© {year} · Built with Next.js & Tailwind</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-indigo-400 transition-colors"
          >
            <GitBranch size={18} />
          </a>
          <span className="text-slate-700 text-xs font-mono">Tanzania 🇹🇿</span>
        </div>
      </div>
    </footer>
  );
}
