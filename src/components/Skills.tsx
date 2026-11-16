"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./MotionPrimitives";

type CategoryId = "all" | "languages" | "frontend" | "backend" | "database" | "tools";

type TechGroup = {
  id: Exclude<CategoryId, "all">;
  label: string;
  accent: string;
  items: { name: string; weight: "core" | "standard" }[];
};

const TECH_GROUPS: TechGroup[] = [
  {
    id: "languages",
    label: "Languages",
    accent: "#D6FF62",
    items: [
      { name: "Go", weight: "core" },
      { name: "JavaScript", weight: "core" },
      { name: "Python", weight: "standard" },
      { name: "Node.js", weight: "core" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    accent: "#83CFFF",
    items: [
      { name: "React.js", weight: "core" },
      { name: "Next.js", weight: "core" },
      { name: "Tailwind CSS", weight: "standard" },
      { name: "Vite", weight: "standard" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    accent: "#B7F5DA",
    items: [
      { name: "GoFiber", weight: "core" },
      { name: "Gin", weight: "standard" },
      { name: "Express.js", weight: "standard" },
      { name: "ASP.NET", weight: "core" },
      { name: "Laravel", weight: "standard" },
    ],
  },
  {
    id: "database",
    label: "Database & Infrastructure",
    accent: "#C9B8FF",
    items: [
      { name: "MySQL", weight: "core" },
      { name: "MongoDB", weight: "core" },
      { name: "SQL Server", weight: "core" },
      { name: "Redis", weight: "standard" },
      { name: "Elasticsearch", weight: "standard" },
      { name: "Docker", weight: "core" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    accent: "#FFB8D5",
    items: [
      { name: "Git", weight: "standard" },
      { name: "Claude", weight: "standard" },
      { name: "GitHub Copilot", weight: "standard" },
    ],
  },
];

const FILTERS: { id: CategoryId; label: string }[] = [
  { id: "all", label: "All Constellation" },
  ...TECH_GROUPS.map((g) => ({ id: g.id, label: g.label })),
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<CategoryId>("all");
  const [hoveredTech, setHoveredTech] = useState<{ name: string; group: string; accent: string } | null>(
    null
  );
  const prefersReduced = useReducedMotion();

  const allNodes = TECH_GROUPS.flatMap((group, gIdx) =>
    group.items.map((item, iIdx) => ({
      ...item,
      groupId: group.id,
      groupLabel: group.label,
      accent: group.accent,
      floatDelay: ((gIdx * 3 + iIdx) % 6) * 0.45,
      floatRange: item.weight === "core" ? 7 : 5,
    }))
  );

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#17191C] text-[#F8FAF7] overflow-hidden"
    >
      {/* Subtle iridescent dark-mode ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/4 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(165,232,245,0.45) 0%, rgba(201,184,255,0.25) 45%, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/6 w-[440px] h-[440px] rounded-full opacity-15 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(214,255,98,0.45) 0%, rgba(183,245,218,0.2) 50%, transparent 75%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#F8FAF7]/65">
              <span className="w-2 h-2 rounded-full bg-[#D6FF62]" />
              04 / Tech Stack
            </span>
          </div>
          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-[#F8FAF7] leading-[1.03]">
              Tools behind the craft.
            </h2>
            <p className="text-xs font-mono uppercase tracking-[0.14em] text-[#A5E8F5] min-h-[20px]">
              {hoveredTech
                ? `${hoveredTech.name} — ${hoveredTech.group}`
                : "Hover or filter to inspect"}
            </p>
          </div>
        </Reveal>

        {/* Interactive Category Filter */}
        <Reveal delay={0.05} className="mb-12 flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const isActive = activeGroup === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveGroup(f.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-mono transition-all duration-200 min-h-[40px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6FF62] ${
                  isActive
                    ? "bg-[#D6FF62] text-[#17191C] font-semibold shadow-[0_8px_20px_-6px_rgba(214,255,98,0.45)]"
                    : "bg-white/6 text-[#F8FAF7]/75 border border-white/10 hover:bg-white/12 hover:text-[#F8FAF7]"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </Reveal>

        {/* Organic Constellation Cluster */}
        <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 sm:p-10 lg:p-14 overflow-hidden">
          {/* Decorative orbital rings */}
          <svg
            aria-hidden="true"
            viewBox="0 0 800 380"
            className="pointer-events-none absolute inset-0 w-full h-full opacity-20"
            preserveAspectRatio="xMidYMid slice"
          >
            <ellipse
              cx="400"
              cy="190"
              rx="320"
              ry="130"
              fill="none"
              stroke="url(#orbitGrad)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <ellipse
              cx="400"
              cy="190"
              rx="200"
              ry="80"
              fill="none"
              stroke="url(#orbitGrad)"
              strokeWidth="1"
            />
            <defs>
              <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A5E8F5" />
                <stop offset="50%" stopColor="#D6FF62" />
                <stop offset="100%" stopColor="#C9B8FF" />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3.5 sm:gap-5 lg:gap-6">
            {allNodes.map((node) => {
              const highlighted = activeGroup === "all" || activeGroup === node.groupId;
              const isCore = node.weight === "core";

              return (
                <motion.button
                  key={`${node.groupId}-${node.name}`}
                  type="button"
                  onMouseEnter={() =>
                    setHoveredTech({
                      name: node.name,
                      group: node.groupLabel,
                      accent: node.accent,
                    })
                  }
                  onMouseLeave={() => setHoveredTech(null)}
                  onFocus={() =>
                    setHoveredTech({
                      name: node.name,
                      group: node.groupLabel,
                      accent: node.accent,
                    })
                  }
                  animate={
                    prefersReduced
                      ? { opacity: highlighted ? 1 : 0.25 }
                      : {
                          opacity: highlighted ? 1 : 0.22,
                          scale: highlighted ? 1 : 0.94,
                          y: [0, -node.floatRange, 0],
                        }
                  }
                  transition={
                    prefersReduced
                      ? { duration: 0.2 }
                      : {
                          y: {
                            duration: 5.5 + node.floatDelay,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: node.floatDelay,
                          },
                          opacity: { duration: 0.25 },
                          scale: { duration: 0.25 },
                        }
                  }
                  whileHover={prefersReduced ? undefined : { scale: 1.08, y: -4 }}
                  whileTap={prefersReduced ? undefined : { scale: 0.96 }}
                  className={`group relative inline-flex items-center gap-2.5 rounded-full transition-shadow duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6FF62] ${
                    isCore
                      ? "px-5 sm:px-6 py-3 sm:py-3.5 bg-white/10 border border-white/20 backdrop-blur-md shadow-[0_12px_28px_-8px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.25)]"
                      : "px-4 py-2.5 bg-white/[0.05] border border-white/10 hover:border-white/25"
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{
                      backgroundColor: node.accent,
                      boxShadow: `0 0 12px ${node.accent}88`,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className={`font-display tracking-tight whitespace-nowrap ${
                      isCore
                        ? "text-sm sm:text-base font-bold text-[#F8FAF7]"
                        : "text-xs sm:text-sm font-medium text-[#F8FAF7]/85"
                    }`}
                  >
                    {node.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Minimal Group Legend */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {TECH_GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActiveGroup((prev) => (prev === g.id ? "all" : g.id))}
              className="text-left p-3.5 rounded-2xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.06] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: g.accent }}
                  aria-hidden="true"
                />
                <span className="text-xs font-mono uppercase tracking-wider text-[#F8FAF7]/80 truncate">
                  {g.label}
                </span>
              </div>
              <p className="mt-1 text-[11px] font-mono text-[#F8FAF7]/45">
                {g.items.length} technologies
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
