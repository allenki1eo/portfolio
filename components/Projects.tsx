"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import { GitBranch, ExternalLink, Star } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [showAll, setShowAll] = useState(false);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const visible = showAll ? projects : featured;

  return (
    <section id="projects" className="py-28 px-4 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-indigo-400 font-mono text-sm tracking-widest uppercase mb-3 text-center"
        >
          What I&apos;ve built
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-heading text-center text-white mb-4"
        >
          Selected{" "}
          <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-center text-slate-500 max-w-xl mx-auto mb-16"
        >
          A showcase of products I&apos;ve built — from AI-powered tools to community
          platforms, each solving a real problem.
        </motion.p>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {featured.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        {/* Rest: shown on expand */}
        {showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10"
          >
            {rest.map((project, i) => (
              <SmallCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        )}

        {/* Toggle button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex justify-center mt-10"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 rounded-full glass border border-white/10 text-slate-300 text-sm font-semibold hover:border-indigo-500/40 hover:text-indigo-300 transition-all"
          >
            {showAll ? "Show Less" : `See All ${projects.length} Projects`}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  featured: boolean;
  gradient: string;
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project;
  index: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="glass rounded-2xl p-6 card-hover group relative overflow-hidden flex flex-col"
    >
      {/* Gradient accent top bar */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient}`} />

      {/* Featured badge */}
      <div className="flex items-center justify-between mb-4">
        <span className="flex items-center gap-1 text-xs text-amber-400 font-medium">
          <Star size={11} fill="currentColor" />
          Featured
        </span>
        <div className="flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <GitBranch size={14} />
          </a>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-white font-bold text-xl mb-3 group-hover:text-indigo-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function SmallCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="glass rounded-xl p-5 card-hover group relative overflow-hidden flex flex-col"
    >
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradient}`} />

      <div className="flex items-start justify-between mb-3">
        <h3 className="text-white font-semibold text-sm group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-white transition-colors ml-2 flex-shrink-0"
        >
          <ExternalLink size={13} />
        </a>
      </div>

      <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1">
        {project.description.slice(0, 90)}…
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="tag text-[10px]">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
