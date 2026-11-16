"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { Reveal } from "./MotionPrimitives";

type ExperienceItem = {
  index: string;
  yearDisplay: string;
  period: string;
  role: string;
  company: string;
  location: string;
  current: boolean;
  summary: string;
  contributions: string[];
  stack: string[];
  variant: "light" | "dark";
};

const EXPERIENCES: ExperienceItem[] = [
  {
    index: "01",
    yearDisplay: "2025 — NOW",
    period: "November 2025 — Present",
    role: "Fullstack Developer",
    company: "PT CSM Corporatama (Indomobil Group)",
    location: "Jakarta, Indonesia",
    current: true,
    summary:
      "Architecting and shipping enterprise-scale internal platforms, approval workflows, and BI reporting systems.",
    contributions: [
      "Built Car Rental Management System (CRMS) serving 1,000+ users.",
      "Developed HRIS for employee administration and attendance.",
      "Designed CRMS Business Intelligence reporting system processing 10,000+ records.",
      "Built internal company portal for centralized document management.",
      "Used Go, GoFiber, ASP.NET, Next.js, Vite, SQL Server, Redis, and MySQL.",
    ],
    stack: ["Go", "GoFiber", "ASP.NET", "Next.js", "Vite", "SQL Server", "Redis", "MySQL"],
    variant: "light",
  },
  {
    index: "02",
    yearDisplay: "2022 — 2025",
    period: "December 2022 — November 2025",
    role: "Backend Developer",
    company: "Aidi Digital Global",
    location: "Tangerang / BSD",
    current: false,
    summary:
      "Engineered core backend services, RESTful APIs, and fullstack web products across multiple digital platforms.",
    contributions: [
      "Developed and maintained backend systems using JavaScript, Go, and Node.js.",
      "Designed RESTful APIs for newsletter, invoice, and vendor management.",
      "Built webset.id using React, Next.js, and MongoDB.",
      "Implemented newsletter analytics for views and link clicks.",
      "Developed custom Twibbon functionality for klip.id.",
      "Managed MongoDB and MySQL databases.",
    ],
    stack: ["JavaScript", "Go", "Node.js", "React", "Next.js", "MongoDB", "MySQL"],
    variant: "dark",
  },
];

function TimelineRow({ item, idx }: { item: ExperienceItem; idx: number }) {
  const [expanded, setExpanded] = useState(true);
  const isDark = item.variant === "dark";

  return (
    <Reveal delay={idx * 0.08} className="relative grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
      {/* Left: Large Date Typography */}
      <div className="lg:col-span-4 lg:sticky lg:top-28">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-[#4A515A]">
            Role {item.index}
          </span>
          {item.current && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D6FF62] text-[#17191C] text-[11px] font-mono font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#17191C]" />
              Current
            </span>
          )}
        </div>
        <p className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-[-0.04em] text-[#17191C] leading-none">
          {item.yearDisplay}
        </p>
        <p className="mt-2 text-xs font-mono uppercase tracking-[0.14em] text-[#4A515A]">
          {item.period}
        </p>
      </div>

      {/* Right: Distinct Visual Treatment Panel */}
      <div className="lg:col-span-8">
        <div
          className={`rounded-[2rem] transition-all duration-300 overflow-hidden ${
            isDark
              ? "bg-[#17191C] text-[#F8FAF7] shadow-[0_28px_56px_-18px_rgba(23,25,28,0.28)]"
              : "bg-white text-[#17191C] border border-[#17191C]/10 shadow-[0_24px_48px_-16px_rgba(23,25,28,0.08)]"
          }`}
        >
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="w-full text-left p-6 sm:p-9 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6FF62]"
          >
            <div>
              <p
                className={`text-xs font-mono uppercase tracking-[0.15em] ${
                  isDark ? "text-[#A5E8F5]" : "text-[#4A515A]"
                }`}
              >
                {item.company} &bull; {item.location}
              </p>
              <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight">
                {item.role}
              </h3>
              <p
                className={`mt-3 text-sm sm:text-[15px] leading-relaxed max-w-2xl ${
                  isDark ? "text-[#F8FAF7]/75" : "text-[#4A515A]"
                }`}
              >
                {item.summary}
              </p>
            </div>

            <span
              aria-hidden="true"
              className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                isDark
                  ? "bg-white/10 text-[#D6FF62] hover:bg-white/15"
                  : "bg-[#EFF4EE] text-[#17191C] hover:bg-[#D6FF62]"
              }`}
            >
              {expanded ? <Minus size={17} /> : <Plus size={17} />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 sm:px-9 pb-8 pt-0">
                  <div
                    className={`h-px mb-6 ${isDark ? "bg-white/12" : "bg-[#17191C]/10"}`}
                  />
                  <ul className="space-y-3">
                    {item.contributions.map((point) => (
                      <li
                        key={point}
                        className={`flex items-start gap-3 text-[15px] leading-relaxed ${
                          isDark ? "text-[#F8FAF7]/90" : "text-[#17191C]/85"
                        }`}
                      >
                        <ArrowUpRight
                          size={15}
                          aria-hidden="true"
                          className={`mt-1 shrink-0 ${
                            isDark ? "text-[#D6FF62]" : "text-[#17191C]"
                          }`}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
                          isDark
                            ? "bg-white/10 text-[#F8FAF7] border border-white/10"
                            : "bg-[#EFF4EE] text-[#17191C] border border-[#17191C]/8"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 70%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative py-24 sm:py-32 bg-[#EFF4EE] bg-editorial-dots border-t border-[#17191C]/8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-6 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#4A515A]">
              <span className="w-2 h-2 rounded-full bg-[#83CFFF] ring-2 ring-[#17191C]/15" />
              02 / Career Timeline
            </span>
          </div>
          <div className="lg:col-span-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-[#17191C] leading-[1.03]">
              Where I&apos;ve built.
            </h2>
            <p className="text-sm font-mono text-[#4A515A]">
              2022 &mdash; Present
            </p>
          </div>
        </Reveal>

        {/* Timeline with Scroll Progress Accent */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-[31.5%] top-2 bottom-2 w-px bg-[#17191C]/10"
          >
            {!prefersReduced && (
              <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="w-full h-full bg-gradient-to-b from-[#D6FF62] via-[#83CFFF] to-[#C9B8FF]"
              />
            )}
          </div>

          <div className="space-y-12 lg:space-y-16">
            {EXPERIENCES.map((item, idx) => (
              <TimelineRow key={item.index} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
