"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Maximize2, X, Check } from "lucide-react";
import { Reveal, StickerBadge } from "./MotionPrimitives";

type ProjectData = {
  no: string;
  name: string;
  category: string;
  description: string;
  items: string[];
  role?: string;
  href?: string;
  images: { src: string; alt: string; label: string }[];
};

const PROJECTS: ProjectData[] = [
  {
    no: "01",
    name: "flowgo.id",
    category: "SAAS / WORKFLOW AUTOMATION",
    description:
      "A No-Code Workflow Automation platform that enables teams to create custom workflows without coding.",
    items: [
      "Dynamic forms",
      "Multi-step approval flows",
      "Real-time workflow tracking",
      "Customizable business processes",
    ],
    role: "Founder & Fullstack Developer",
    href: "https://flowgo.id",
    images: [
      {
        src: "/projects/flowgo-workflows.png",
        alt: "flowgo.id workflow automation builder view",
        label: "Workflows",
      },
      {
        src: "/projects/flowgo-landing.png",
        alt: "flowgo.id landing overview",
        label: "Landing",
      },
    ],
  },
  {
    no: "02",
    name: "CRMS",
    category: "ENTERPRISE SOFTWARE",
    description: "A centralized car rental management system serving 1,000+ users.",
    items: ["Go", "GoFiber", "Next.js", "SQL Server"],
    images: [
      {
        src: "/projects/crms-dashboard.png",
        alt: "CRMS enterprise dashboard interface",
        label: "Dashboard",
      },
    ],
  },
  {
    no: "03",
    name: "CRMS BI",
    category: "BUSINESS INTELLIGENCE",
    description: "An automated reporting platform processing 10,000+ records.",
    items: ["ASP.NET", "Vite", "SQL Server", "Redis"],
    images: [
      {
        src: "/projects/crms-bi-monitoring.png",
        alt: "CRMS BI monitoring and KPI dashboard",
        label: "Monitoring",
      },
      {
        src: "/projects/crms-bi-assistant.png",
        alt: "CRMS BI automated reporting assistant",
        label: "Assistant",
      },
    ],
  },
  {
    no: "04",
    name: "webset.id",
    category: "DOMAIN PLATFORM",
    description: "A domain-selling platform built with React, Next.js, and MongoDB.",
    items: ["React", "Next.js", "MongoDB"],
    href: "https://webset.id",
    images: [
      {
        src: "/projects/webset-landing.png",
        alt: "webset.id domain platform landing page",
        label: "Platform",
      },
    ],
  },
];

function ScreenshotStage({
  project,
  aspect = "aspect-[16/10]",
  onInspect,
}: {
  project: ProjectData;
  aspect?: string;
  onInspect: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const prefersReduced = useReducedMotion();
  const img = project.images[idx] ?? project.images[0];

  return (
    <div className="space-y-3">
      <motion.div
        whileHover={prefersReduced ? undefined : { y: -4 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="group relative bg-[#171717] border-[2.5px] border-[#171717] shadow-[6px_6px_0_#171717] rounded-2xl overflow-hidden"
      >
        <div className={`relative w-full ${aspect} overflow-hidden`}>
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 1024px) 94vw, 680px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          />
        </div>

        <button
          type="button"
          onClick={onInspect}
          aria-label={`Inspect ${project.name} screenshots`}
          className="brutal-btn absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#D7FF45] text-[#171717] font-mono text-xs font-bold uppercase tracking-wider min-h-[40px]"
        >
          <Maximize2 size={13} aria-hidden="true" />
          <span>Inspect</span>
        </button>
      </motion.div>

      {project.images.length > 1 && (
        <div className="flex flex-wrap gap-2">
          {project.images.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setIdx(i)}
              className={`px-3.5 py-1.5 rounded-md border-2 border-[#171717] font-mono text-xs font-bold uppercase tracking-wider transition-colors min-h-[36px] ${
                i === idx
                  ? "bg-[#171717] text-[#D7FF45]"
                  : "bg-[#FAF9F6] text-[#171717] hover:bg-[#D7FF45]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const [p1, p2, p3, p4] = PROJECTS;

  return (
    <section
      id="work"
      className="py-24 sm:py-32 bg-[#FAF9F6] border-b-[2.5px] border-[#171717] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <Reveal clip className="grid lg:grid-cols-12 gap-6 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-4">
            <StickerBadge bg="#FF7545" rotate={-2}>
              03 // SELECTED WORK
            </StickerBadge>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heavy text-4xl sm:text-5xl lg:text-[4.25rem] leading-[0.95] tracking-[-0.04em] text-[#171717] lowercase">
              stuff i&apos;ve{" "}
              <span className="inline-block bg-[#D7FF45] px-3 py-0.5 border-2 border-[#171717] shadow-[4px_4px_0_#171717] rounded-lg">
                shipped.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-14 lg:space-y-20">
          {/* PROJECT 01 — Electric Lime & Deep Black Editorial Spread */}
          <Reveal>
            <article className="bg-[#D7FF45] text-[#171717] brutal-box-lg rounded-[1.75rem] p-6 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-1 bg-[#171717] text-[#D7FF45] font-mono text-xs font-bold rounded-sm">
                      {p1.no}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.14em]">
                      {p1.category}
                    </span>
                  </div>

                  <h3 className="font-heavy text-4xl sm:text-5xl tracking-tight leading-none">
                    {p1.name}
                  </h3>

                  {p1.role && (
                    <p className="inline-block px-3 py-1 bg-[#FAF9F6] border-2 border-[#171717] rounded-md font-mono text-xs font-bold uppercase tracking-wider">
                      Role: {p1.role}
                    </p>
                  )}

                  <p className="text-base sm:text-lg font-medium leading-relaxed">
                    {p1.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {p1.items.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-sm font-bold">
                        <Check size={15} strokeWidth={3} aria-hidden="true" className="shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 flex flex-wrap gap-3">
                    {p1.href && (
                      <a
                        href={p1.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="brutal-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#171717] text-[#FAF9F6] hover:bg-[#526BFF] font-display font-bold text-sm min-h-[46px]"
                      >
                        <span>visit flowgo.id</span>
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelected(p1)}
                      className="brutal-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FAF9F6] text-[#171717] font-display font-bold text-sm min-h-[46px]"
                    >
                      <span>case details</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <ScreenshotStage
                    project={p1}
                    aspect="aspect-[16/10]"
                    onInspect={() => setSelected(p1)}
                  />
                </div>
              </div>
            </article>
          </Reveal>

          {/* PROJECT 02 — Cobalt Blue Asymmetric Block */}
          <Reveal>
            <article className="bg-[#526BFF] text-[#FAF9F6] brutal-box-lg rounded-[1.75rem] p-6 sm:p-10 lg:p-12">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <ScreenshotStage
                    project={p2}
                    aspect="aspect-[16/10.5]"
                    onInspect={() => setSelected(p2)}
                  />
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-1 bg-[#D7FF45] text-[#171717] border-2 border-[#171717] font-mono text-xs font-bold rounded-sm">
                      {p2.no}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#D7FF45]">
                      {p2.category}
                    </span>
                  </div>

                  <h3 className="font-heavy text-4xl sm:text-5xl tracking-tight leading-none">
                    {p2.name}
                  </h3>

                  <p className="text-base sm:text-lg text-[#FAF9F6]/90 font-medium leading-relaxed">
                    {p2.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p2.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#FAF9F6] text-[#171717] border-2 border-[#171717] rounded-md font-mono text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSelected(p2)}
                      className="brutal-btn inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#D7FF45] text-[#171717] font-display font-bold text-sm min-h-[46px]"
                    >
                      <span>inspect crms</span>
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* PROJECT 03 & 04 — Asymmetric Magazine Pair */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Project 03 — Vivid Orange (7 cols) */}
            <Reveal className="lg:col-span-7 flex">
              <article className="w-full bg-[#FF7545] text-[#171717] brutal-box-lg rounded-[1.75rem] p-6 sm:p-9 flex flex-col justify-between gap-7">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 bg-[#171717] text-[#FAF9F6] font-mono text-xs font-bold rounded-sm">
                        {p3.no}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.14em]">
                        {p3.category}
                      </span>
                    </div>
                    <StickerBadge bg="#FAF9F6" rotate={1}>
                      10,000+ RECORDS
                    </StickerBadge>
                  </div>

                  <h3 className="font-heavy text-3xl sm:text-4xl tracking-tight leading-none">
                    {p3.name}
                  </h3>
                  <p className="text-base font-medium leading-relaxed">{p3.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {p3.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#FAF9F6] border-2 border-[#171717] rounded-md font-mono text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ScreenshotStage
                  project={p3}
                  aspect="aspect-[16/10]"
                  onInspect={() => setSelected(p3)}
                />
              </article>
            </Reveal>

            {/* Project 04 — Bubblegum Pink (5 cols) */}
            <Reveal delay={0.08} className="lg:col-span-5 flex">
              <article className="w-full bg-[#FF91C8] text-[#171717] brutal-box-lg rounded-[1.75rem] p-6 sm:p-9 flex flex-col justify-between gap-7">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="px-2.5 py-1 bg-[#171717] text-[#FAF9F6] font-mono text-xs font-bold rounded-sm">
                      {p4.no}
                    </span>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.14em]">
                      {p4.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-heavy text-3xl sm:text-4xl tracking-tight leading-none">
                      {p4.name}
                    </h3>
                    {p4.href && (
                      <a
                        href={p4.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit webset.id"
                        className="brutal-btn w-11 h-11 rounded-lg bg-[#D7FF45] flex items-center justify-center shrink-0"
                      >
                        <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <p className="text-base font-medium leading-relaxed">{p4.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {p4.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#FAF9F6] border-2 border-[#171717] rounded-md font-mono text-xs font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ScreenshotStage
                  project={p4}
                  aspect="aspect-[4/3]"
                  onInspect={() => setSelected(p4)}
                />
              </article>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-[#171717]/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#FAF9F6] text-[#171717] brutal-box-lg rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#526BFF]">
                    {selected.no} {"//"} {selected.category}
                  </span>
                  <h3
                    id="project-dialog-title"
                    className="mt-1 font-heavy text-3xl sm:text-4xl tracking-tight"
                  >
                    {selected.name}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close project modal"
                  className="brutal-btn w-10 h-10 rounded-lg bg-[#FF91C8] flex items-center justify-center shrink-0"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              <p className="mt-4 text-base font-medium text-[#171717]/85 leading-relaxed">
                {selected.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {selected.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-[#D7FF45] border-2 border-[#171717] rounded-md font-mono text-xs font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {selected.images.map((img) => (
                  <div
                    key={img.src}
                    className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border-[2.5px] border-[#171717] bg-[#171717]"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 768px) 95vw, 720px"
                      className="object-cover object-top"
                    />
                  </div>
                ))}
              </div>

              {selected.href && (
                <div className="mt-6 flex justify-end">
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="brutal-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D7FF45] text-[#171717] font-display font-bold text-sm min-h-[44px]"
                  >
                    <span>visit live site</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
