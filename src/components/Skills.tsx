"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, StickerBadge } from "./MotionPrimitives";

type CategoryId = "languages" | "frontend" | "backend" | "database" | "tools";

type StackGroup = {
  id: CategoryId;
  index: string;
  label: string;
  accent: string;
  textOnAccent: string;
  items: string[];
};

const STACK_GROUPS: StackGroup[] = [
  {
    id: "languages",
    index: "01",
    label: "Languages",
    accent: "#D7FF45",
    textOnAccent: "#171717",
    items: ["Go", "JavaScript", "Python", "Node.js"],
  },
  {
    id: "frontend",
    index: "02",
    label: "Frontend",
    accent: "#FF91C8",
    textOnAccent: "#171717",
    items: ["React.js", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    id: "backend",
    index: "03",
    label: "Backend",
    accent: "#526BFF",
    textOnAccent: "#FAF9F6",
    items: ["Gin", "GoFiber", "Express.js", "ASP.NET", "Laravel"],
  },
  {
    id: "database",
    index: "04",
    label: "Database",
    accent: "#FF7545",
    textOnAccent: "#171717",
    items: ["MySQL", "MongoDB", "SQL Server", "Redis", "Elasticsearch"],
  },
  {
    id: "tools",
    index: "05",
    label: "Tools",
    accent: "#FAF9F6",
    textOnAccent: "#171717",
    items: ["Git", "Docker", "Claude", "GitHub Copilot"],
  },
];

export default function Skills() {
  const [selectedCat, setSelectedCat] = useState<"all" | CategoryId>("all");
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const visibleGroups =
    selectedCat === "all"
      ? STACK_GROUPS
      : STACK_GROUPS.filter((group) => group.id === selectedCat);

  return (
    <section
      id="stack"
      className="py-24 sm:py-32 bg-[#171717] text-[#FAF9F6] bg-swiss-grid-dark border-b-[2.5px] border-[#171717] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <Reveal clip className="grid lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-16">
          <div className="lg:col-span-4">
            <StickerBadge bg="#D7FF45" textColor="#171717" rotate={-1}>
              04 // TECH STACK
            </StickerBadge>
          </div>
          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-heavy text-4xl sm:text-5xl lg:text-[4.25rem] leading-[0.95] tracking-[-0.04em] text-[#FAF9F6] lowercase">
              my weapons of{" "}
              <span className="text-[#D7FF45] italic">choice.</span>
            </h2>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#FAF9F6]/70">
              {activeTool ? `ACTIVE // ${activeTool}` : "SELECT OR HOVER MATRIX"}
            </p>
          </div>
        </Reveal>

        {/* Category Tabs */}
        <Reveal delay={0.05} className="mb-10 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => setSelectedCat("all")}
            className={`px-4 py-2 rounded-md border-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors min-h-[40px] ${
              selectedCat === "all"
                ? "bg-[#D7FF45] text-[#171717] border-[#D7FF45]"
                : "bg-transparent text-[#FAF9F6] border-[#FAF9F6]/25 hover:border-[#D7FF45]"
            }`}
          >
            All [22]
          </button>

          {STACK_GROUPS.map((group) => {
            const active = selectedCat === group.id;
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => setSelectedCat(group.id)}
                style={
                  active
                    ? {
                        backgroundColor: group.accent,
                        color: group.textOnAccent,
                        borderColor: group.accent,
                      }
                    : undefined
                }
                className={`px-4 py-2 rounded-md border-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors min-h-[40px] ${
                  active
                    ? ""
                    : "bg-transparent text-[#FAF9F6]/80 border-[#FAF9F6]/25 hover:border-[#FAF9F6]"
                }`}
              >
                {group.label}
              </button>
            );
          })}
        </Reveal>

        {/* Swiss Architectural Index Matrix */}
        <div className="border-t-2 border-[#FAF9F6]/25 divide-y-2 divide-[#FAF9F6]/20">
          {visibleGroups.map((group, gIdx) => (
            <Reveal
              key={group.id}
              delay={gIdx * 0.04}
              className="py-7 sm:py-9 grid lg:grid-cols-12 gap-6 items-start"
            >
              {/* Category Column */}
              <div className="lg:col-span-4 flex items-center gap-3.5">
                <span
                  style={{ backgroundColor: group.accent, color: group.textOnAccent }}
                  className="w-9 h-9 rounded-md border-2 border-[#FAF9F6]/20 font-mono text-xs font-bold flex items-center justify-center shrink-0"
                >
                  {group.index}
                </span>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF9F6]">
                    {group.label}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#FAF9F6]/50">
                    {group.items.length} tools
                  </p>
                </div>
              </div>

              {/* Interactive Tech Grid Cells */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {group.items.map((tech) => {
                  const isFocused = activeTool === tech;
                  return (
                    <motion.button
                      key={tech}
                      type="button"
                      onMouseEnter={() => setActiveTool(tech)}
                      onMouseLeave={() => setActiveTool(null)}
                      onFocus={() => setActiveTool(tech)}
                      onBlur={() => setActiveTool(null)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      style={
                        isFocused
                          ? {
                              backgroundColor: group.accent,
                              color: group.textOnAccent,
                              borderColor: group.accent,
                            }
                          : undefined
                      }
                      className={`text-left px-4 py-3.5 rounded-xl border-2 transition-colors duration-150 min-h-[54px] flex items-center justify-between gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF45] ${
                        isFocused
                          ? "shadow-[4px_4px_0_rgba(250,249,246,0.22)]"
                          : "bg-[#202020] border-[#FAF9F6]/18 text-[#FAF9F6] hover:border-[#FAF9F6]/50"
                      }`}
                    >
                      <span className="font-display font-bold text-sm sm:text-base tracking-tight truncate">
                        {tech}
                      </span>
                      <span
                        aria-hidden="true"
                        style={{ backgroundColor: isFocused ? group.textOnAccent : group.accent }}
                        className="w-2 h-2 rounded-full shrink-0"
                      />
                    </motion.button>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
