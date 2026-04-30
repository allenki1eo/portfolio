"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "about.txt", href: "#about" },
  { label: "skills/", href: "#skills" },
  { label: "projects/", href: "#projects" },
  { label: "contact.sh", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 font-mono text-sm transition-all duration-300 ${
          scrolled
            ? "bg-[#0c0c0c]/95 border-b border-white/5 backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo as prompt */}
          <a
            href="#home"
            className="text-xs sm:text-sm hover:opacity-80 transition-opacity"
          >
            <span className="text-[#4e9a06] font-bold">allen</span>
            <span className="text-[#d3d7cf]">@</span>
            <span className="text-[#729fcf] font-bold">portfolio</span>
            <span className="text-[#d3d7cf]">:</span>
            <span className="text-[#fcaf3e]">~</span>
            <span className="text-[#d3d7cf]">$ </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded text-[#888a85] hover:text-[#d3d7cf] hover:bg-white/5 transition-all text-xs"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#888a85] hover:text-[#d3d7cf] transition-colors"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed top-12 left-4 right-4 z-40 bg-[#141414] border border-white/10 rounded-lg p-4 md:hidden font-mono text-sm shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2.5 text-[#888a85] hover:text-[#d3d7cf] hover:bg-white/5 rounded transition-all text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
