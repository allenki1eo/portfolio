import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 px-4 sm:px-6 font-mono text-xs text-[#888a85] border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>
          <span className="text-[#4e9a06]">allen</span>
          <span className="text-[#d3d7cf]">@</span>
          <span className="text-[#729fcf]">portfolio</span>
          <span className="text-[#d3d7cf]">:</span>
          <span className="text-[#fcaf3e]">~</span>
          <span className="text-[#d3d7cf]">$ </span>
          <span>
            echo &quot;© {year} — Built with Next.js &amp; Tailwind&quot;
          </span>
        </p>
        <p className="text-[#4e9a06]">● Tanzania 🇹🇿</p>
      </div>
    </footer>
  );
}
