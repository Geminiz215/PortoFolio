"use client";

import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { Reveal, StickerBadge } from "./MotionPrimitives";

type RoleEntry = {
  no: string;
  dateBig: string;
  period: string;
  role: string;
  company: string;
  accentBg: string;
  accentText: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
};

const ROLES: RoleEntry[] = [
  {
    no: "01",
    dateBig: "2025—NOW",
    period: "November 2025 — Present",
    role: "Fullstack Developer",
    company: "PT CSM Corporatama (Indomobil Group)",
    accentBg: "#D7FF45",
    accentText: "#171717",
    current: true,
    highlights: [
      "Built CRMS serving 1,000+ users.",
      "Developed an HRIS platform.",
      "Built BI reporting processing 10,000+ records.",
      "Developed an internal company portal.",
      "Worked with Go, GoFiber, ASP.NET, Next.js, Vite, SQL Server, Redis, and MySQL.",
    ],
    stack: ["Go", "GoFiber", "ASP.NET", "Next.js", "Vite", "SQL Server", "Redis", "MySQL"],
  },
  {
    no: "02",
    dateBig: "2022—2025",
    period: "December 2022 — November 2025",
    role: "Backend Developer",
    company: "Aidi Digital Global",
    accentBg: "#526BFF",
    accentText: "#FAF9F6",
    highlights: [
      "Built backend systems using Go, JavaScript, and Node.js.",
      "Developed RESTful APIs.",
      "Built webset.id using React, Next.js, and MongoDB.",
      "Implemented newsletter analytics.",
      "Developed custom Twibbon features.",
      "Optimized MongoDB and MySQL databases.",
    ],
    stack: ["Go", "JavaScript", "Node.js", "React", "Next.js", "MongoDB", "MySQL"],
  },
];

function ExperienceItem({ item, idx }: { item: RoleEntry; idx: number }) {
  const [open, setOpen] = useState(true);

  return (
    <Reveal delay={idx * 0.08} className="relative grid lg:grid-cols-12 gap-6 lg:gap-10 items-start">
      {/* Left: Oversized Date Label + Colorful Marker */}
      <div className="lg:col-span-4 lg:sticky lg:top-28">
        <div className="flex items-center gap-2.5 mb-2">
          <span
            style={{ backgroundColor: item.accentBg, color: item.accentText }}
            className="px-2.5 py-0.5 border-2 border-[#171717] font-mono text-xs font-bold uppercase tracking-wider rounded-sm"
          >
            EXP // {item.no}
          </span>
          {item.current && (
            <span className="px-2.5 py-0.5 bg-[#171717] text-[#D7FF45] font-mono text-[11px] font-bold uppercase tracking-wider rounded-sm">
              ACTIVE
            </span>
          )}
        </div>

        <p className="font-heavy text-4xl sm:text-5xl lg:text-[3.25rem] tracking-[-0.04em] leading-none text-[#171717]">
          {item.dateBig}
        </p>
        <p className="mt-2 font-mono text-xs font-bold uppercase tracking-[0.12em] text-[#171717]/70">
          {item.period}
        </p>
      </div>

      {/* Right: Neo-Brutalist Expandable Card */}
      <div className="lg:col-span-8">
        <div className="bg-[#FAF9F6] brutal-box-lg rounded-2xl overflow-hidden transition-transform duration-200 hover:-translate-y-0.5">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="w-full text-left p-6 sm:p-8 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
          >
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#526BFF]">
                {item.company}
              </p>
              <h3 className="mt-1.5 font-display text-2xl sm:text-3xl font-bold text-[#171717] tracking-tight">
                {item.role}
              </h3>
            </div>

            <span
              aria-hidden="true"
              style={{ backgroundColor: item.accentBg, color: item.accentText }}
              className="shrink-0 w-10 h-10 rounded-lg border-2 border-[#171717] shadow-[2px_2px_0_#171717] flex items-center justify-center"
            >
              {open ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
            </span>
          </button>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 sm:px-8 pb-7 pt-0">
                  <div className="h-[2px] bg-[#171717] mb-6" />

                  <ul className="space-y-3">
                    {item.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[15px] sm:text-base text-[#171717]/90 font-medium leading-relaxed"
                      >
                        <ArrowRight
                          size={16}
                          strokeWidth={2.5}
                          aria-hidden="true"
                          className="mt-1 shrink-0 text-[#FF7545]"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white border-2 border-[#171717] rounded-md font-mono text-xs font-bold text-[#171717]"
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
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 70%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#FF91C8]/25 bg-swiss-grid border-b-[2.5px] border-[#171717]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <Reveal clip className="grid lg:grid-cols-12 gap-6 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <StickerBadge bg="#526BFF" textColor="#FAF9F6" rotate={1}>
              02 // EXPERIENCE
            </StickerBadge>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heavy text-4xl sm:text-5xl lg:text-[4.25rem] leading-[0.95] tracking-[-0.04em] text-[#171717] lowercase">
              where i&apos;ve been{" "}
              <span className="italic underline decoration-[#526BFF] decoration-[5px] underline-offset-4">
                building.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical Scroll Progress Track */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-[31.8%] top-2 bottom-2 w-[3px] bg-[#171717]/15"
          >
            {!prefersReduced && (
              <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="w-full h-full bg-[#171717]"
              />
            )}
          </div>

          <div className="space-y-12 lg:space-y-16">
            {ROLES.map((item, idx) => (
              <ExperienceItem key={item.no} item={item} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
