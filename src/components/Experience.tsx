"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, MapPin, ChevronDown, GraduationCap } from "lucide-react";
import { Reveal, SectionHeading, Tag } from "./ui";

const jobs = [
  {
    role: "Fullstack Developer",
    company: "PT CSM Corporatama — Indomobil Group",
    period: "November 2025 — Present",
    location: "Jakarta",
    current: true,
    points: [
      "Built CRMS serving 1,000+ users",
      "Developed approval workflow applications",
      "Built HRIS for employee leave, permits, attendance, and correspondence",
      "Developed Business Intelligence system processing 10,000+ records",
      "Built internal company portal",
      "Used AI-assisted development with Claude",
    ],
    stack: ["Go", "GoFiber", "Next.js", "Vite", "ASP.NET", "SQL Server", "Redis", "MySQL"],
  },
  {
    role: "Backend Developer",
    company: "Aidi Digital Global",
    period: "December 2022 — November 2025",
    location: "Tangerang / BSD",
    current: false,
    points: [
      "Developed backend systems using JavaScript, Go, and Node.js",
      "Designed and implemented RESTful APIs",
      "Built newsletter, invoice, and vendor management systems",
      "Built frontend and backend for webset.id",
      "Developed newsletter open/link tracking",
      "Developed custom Twibbon features for klip.id",
      "Optimized MongoDB and MySQL databases",
      "Developed Employee API using Express.js and Node.js",
      "Worked using Agile methodology",
    ],
    stack: ["JavaScript", "Go", "Node.js", "Express.js", "React", "Next.js", "MongoDB", "MySQL"],
  },
];

function JobCard({ job, index }: { job: (typeof jobs)[number]; index: number }) {
  // Keep all roles expanded by default so HR can scan full career history without extra clicks
  const [open, setOpen] = useState(true);

  return (
    <Reveal delay={index * 0.06} className="relative pl-10 sm:pl-14 pb-10 last:pb-0">
      {/* Timeline node */}
      <span
        className={`absolute left-[11px] sm:left-[19px] top-6 w-3.5 h-3.5 rounded-full border-2 ${
          job.current
            ? "bg-emerald-400 border-emerald-400 shadow-[0_0_14px_2px_rgba(16,185,129,0.4)]"
            : "bg-slate-800 border-slate-500"
        }`}
      />

      <div className="rounded-2xl border border-slate-800/90 bg-[#0B111E]/90 glass-panel-hover overflow-hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="w-full text-left p-6 sm:p-7 flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono font-medium uppercase tracking-[0.14em] text-cyan-400">
                {job.period}
              </span>
              {job.current && (
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono font-medium uppercase tracking-wider text-emerald-300">
                  Current Role
                </span>
              )}
            </div>
            <h3 className="mt-2.5 text-xl sm:text-2xl font-bold text-slate-50 tracking-tight">
              {job.role}
            </h3>
            <p className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={14} className="text-cyan-400" />
                {job.company}
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin size={14} className="text-slate-400" />
                {job.location}
              </span>
            </p>
          </div>
          <ChevronDown
            size={18}
            className={`shrink-0 mt-1 text-slate-400 transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
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
              <div className="px-6 sm:px-7 pb-7 pt-0">
                <div className="h-px bg-slate-800/80 mb-5" />
                <ul className="space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[15px] text-slate-300 leading-relaxed">
                      <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dot-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <SectionHeading
          eyebrow="Career"
          title="Professional Experience"
          subtitle="Three years of shipping systems that other people depend on to do their job."
        />

        <div className="mt-14 relative">
          {/* Timeline rail */}
          <span className="absolute left-[17px] sm:left-[25px] top-6 bottom-6 w-px bg-gradient-to-b from-emerald-400/50 via-slate-700 to-transparent" />
          {jobs.map((job, i) => (
            <JobCard key={job.company} job={job} index={i} />
          ))}
        </div>

        {/* Education */}
        <Reveal delay={0.1}>
          <div className="mt-10 rounded-2xl border border-slate-800/90 bg-[#0B111E]/90 p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 glass-panel-hover">
            <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center text-cyan-400">
              <GraduationCap size={22} />
            </div>
            <div className="flex-1">
              <span className="text-xs font-mono font-medium uppercase tracking-[0.14em] text-cyan-400">
                July 2021 — December 2025
              </span>
              <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-slate-50 tracking-tight">
                Bachelor&apos;s Degree — Informatics Engineering
              </h3>
              <p className="text-sm text-slate-300 mt-0.5">Universitas Gunadarma, Depok</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
