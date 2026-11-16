"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Maximize2, X, Layers, Check } from "lucide-react";
import { Reveal, GlossyBubble, type BubbleTone } from "./MotionPrimitives";

type ProjectItem = {
  no: string;
  name: string;
  subtitle?: string;
  category: string;
  description: string;
  highlights: string[];
  meta?: { role?: string; year?: string };
  href?: string;
  images: { src: string; alt: string; label: string }[];
  tone: BubbleTone;
};

const PROJECTS: ProjectItem[] = [
  {
    no: "01",
    name: "flowgo.id",
    category: "SaaS / Workflow Automation",
    description:
      "A No-Code Workflow Automation platform that enables teams to create custom workflows without coding.",
    highlights: [
      "Dynamic forms",
      "Multi-step approval flows",
      "Real-time workflow tracking",
      "Customizable business processes",
    ],
    meta: {
      role: "Founder & Fullstack Developer",
      year: "2026 — Present",
    },
    href: "https://flowgo.id",
    images: [
      {
        src: "/projects/flowgo-workflows.png",
        alt: "flowgo.id workflow builder workspace showing configurable multi-step flows",
        label: "Workflows",
      },
      {
        src: "/projects/flowgo-landing.png",
        alt: "flowgo.id product landing page",
        label: "Overview",
      },
    ],
    tone: "lime",
  },
  {
    no: "02",
    name: "CRMS",
    subtitle: "Car Rental Management System",
    category: "Enterprise Application",
    description:
      "A centralized car rental management system designed to support enterprise-scale operations and approval workflows.",
    highlights: ["1,000+ users", "Approval workflow", "Go / GoFiber", "Next.js", "SQL Server"],
    images: [
      {
        src: "/projects/crms-dashboard.png",
        alt: "CRMS enterprise dashboard with fleet and approval navigation",
        label: "Dashboard",
      },
    ],
    tone: "aqua",
  },
  {
    no: "03",
    name: "CRMS Business Intelligence",
    category: "Business Intelligence",
    description:
      "An automated reporting platform that transforms operational data into actionable management insights.",
    highlights: [
      "10,000+ records",
      "Automated reporting",
      "ASP.NET",
      "Redis",
      "SQL Server",
    ],
    images: [
      {
        src: "/projects/crms-bi-monitoring.png",
        alt: "CRMS Business Intelligence monitoring dashboard with KPI metrics",
        label: "Monitoring",
      },
      {
        src: "/projects/crms-bi-assistant.png",
        alt: "CRMS Business Intelligence reporting assistant view",
        label: "Assistant",
      },
    ],
    tone: "lavender",
  },
  {
    no: "04",
    name: "webset.id",
    category: "Domain Platform",
    description: "A domain-selling platform built with modern fullstack technologies.",
    highlights: ["Domain purchasing", "RESTful APIs", "Next.js", "React", "MongoDB"],
    href: "https://webset.id",
    images: [
      {
        src: "/projects/webset-landing.png",
        alt: "webset.id domain platform landing page",
        label: "Platform",
      },
    ],
    tone: "pink",
  },
];

function InteractivePreview({
  project,
  aspectClass = "aspect-[16/10]",
  onInspect,
}: {
  project: ProjectItem;
  aspectClass?: string;
  onInspect: () => void;
}) {
  const [imgIdx, setImgIdx] = useState(0);
  const prefersReduced = useReducedMotion();
  const currentImg = project.images[imgIdx] ?? project.images[0];

  return (
    <div className="space-y-3">
      <motion.div
        whileHover={prefersReduced ? undefined : { y: -4 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group relative rounded-[1.75rem] overflow-hidden border border-[#17191C]/12 bg-[#17191C] shadow-[0_24px_48px_-16px_rgba(23,25,28,0.18)]"
      >
        <div className={`relative w-full ${aspectClass} overflow-hidden`}>
          <Image
            src={currentImg.src}
            alt={currentImg.alt}
            fill
            sizes="(max-width: 1024px) 95vw, 680px"
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#17191C]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        <button
          type="button"
          onClick={onInspect}
          aria-label={`Inspect ${project.name} details`}
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass-dock text-[#17191C] text-xs font-display font-bold tracking-tight shadow-lg transition-transform duration-200 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6FF62]"
        >
          <Maximize2 size={13} aria-hidden="true" />
          <span>Inspect</span>
        </button>
      </motion.div>

      {project.images.length > 1 && (
        <div className="flex items-center gap-2">
          {project.images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setImgIdx(i)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all min-h-[34px] ${
                i === imgIdx
                  ? "bg-[#17191C] text-[#F8FAF7] font-semibold"
                  : "bg-[#17191C]/6 text-[#4A515A] hover:text-[#17191C]"
              }`}
            >
              {img.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const p1 = PROJECTS[0];
  const p2 = PROJECTS[1];
  const p3 = PROJECTS[2];
  const p4 = PROJECTS[3];

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 bg-[#F8FAF7] border-t border-[#17191C]/8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <Reveal className="grid lg:grid-cols-12 gap-6 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#4A515A]">
              <span className="w-2 h-2 rounded-full bg-[#C9B8FF] ring-2 ring-[#17191C]/15" />
              03 / Featured Projects
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-[#17191C] leading-[1.03]">
              Selected products &amp; systems.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-16 lg:space-y-24">
          {/* PROJECT 01 — Full-width Hero Product Showcase (flowgo.id) */}
          <Reveal>
            <article className="relative rounded-[2.5rem] p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-[#EFF9E8] via-[#F8FAF7] to-[#E6F8FC] border border-[#17191C]/10 shadow-[0_28px_60px_-20px_rgba(23,25,28,0.1)] overflow-hidden">
              <GlossyBubble
                tone="lime"
                interactive={false}
                floatDuration={9}
                className="hidden lg:block absolute -top-12 -right-12 w-44 h-44 opacity-80 pointer-events-none"
              />
              <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#17191C] text-[#D6FF62]">
                      {p1.no}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#4A515A]">
                      {p1.category}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17191C]">
                    {p1.name}
                  </h3>

                  <p className="text-base sm:text-[17px] text-[#4A515A] leading-relaxed">
                    {p1.description}
                  </p>

                  {p1.meta && (
                    <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-xs font-mono text-[#17191C]">
                      <span>Role: {p1.meta.role}</span>
                      <span>Year: {p1.meta.year}</span>
                    </div>
                  )}

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {p1.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm font-medium text-[#17191C]"
                      >
                        <Check size={14} aria-hidden="true" className="text-[#17191C] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    {p1.href && (
                      <a
                        href={p1.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full glossy-pill-lime text-[#17191C] font-display font-bold text-sm min-h-[44px]"
                      >
                        Visit flowgo.id
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setSelected(p1)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#17191C]/15 bg-white/70 hover:bg-white text-[#17191C] font-semibold text-sm transition-colors min-h-[44px]"
                    >
                      Project Details
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <InteractivePreview
                    project={p1}
                    aspectClass="aspect-[16/10]"
                    onInspect={() => setSelected(p1)}
                  />
                </div>
              </div>
            </article>
          </Reveal>

          {/* PROJECT 02 — Deep Ink Contrast Split (CRMS) */}
          <Reveal>
            <article className="relative rounded-[2.5rem] p-6 sm:p-10 lg:p-12 bg-[#17191C] text-[#F8FAF7] shadow-[0_32px_64px_-20px_rgba(23,25,28,0.3)] overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <InteractivePreview
                    project={p2}
                    aspectClass="aspect-[16/10.5]"
                    onInspect={() => setSelected(p2)}
                  />
                </div>

                <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#A5E8F5] text-[#17191C]">
                      {p2.no}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#A5E8F5]">
                      {p2.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
                      {p2.name}
                    </h3>
                    {p2.subtitle && (
                      <p className="mt-1 text-sm font-mono text-[#F8FAF7]/65">{p2.subtitle}</p>
                    )}
                  </div>

                  <p className="text-base text-[#F8FAF7]/80 leading-relaxed">{p2.description}</p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {p2.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-[#F8FAF7]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSelected(p2)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#F8FAF7] text-[#17191C] hover:bg-[#D6FF62] font-display font-bold text-sm transition-colors min-h-[44px]"
                    >
                      Explore Architecture
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* PROJECT 03 & 04 — Asymmetrical Editorial Pairing (Different sizes & ratios) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Project 03: CRMS Business Intelligence (7 cols) */}
            <Reveal className="lg:col-span-7 flex">
              <article className="w-full rounded-[2.25rem] p-6 sm:p-9 bg-gradient-to-br from-[#F3EFFF] via-[#F8FAF7] to-[#E8FAF3] border border-[#17191C]/10 flex flex-col justify-between gap-7">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#C9B8FF] text-[#17191C]">
                        {p3.no}
                      </span>
                      <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#4A515A]">
                        {p3.category}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-white/80 border border-[#17191C]/10 text-xs font-mono font-semibold text-[#17191C]">
                      10,000+ records
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#17191C]">
                    {p3.name}
                  </h3>
                  <p className="text-[15px] sm:text-base text-[#4A515A] leading-relaxed">
                    {p3.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p3.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 rounded-full bg-white/80 border border-[#17191C]/8 text-xs font-mono text-[#17191C]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <InteractivePreview
                  project={p3}
                  aspectClass="aspect-[16/10]"
                  onInspect={() => setSelected(p3)}
                />
              </article>
            </Reveal>

            {/* Project 04: webset.id (5 cols, taller editorial frame) */}
            <Reveal delay={0.08} className="lg:col-span-5 flex">
              <article className="w-full rounded-[2.25rem] p-6 sm:p-9 bg-gradient-to-b from-[#FFF0F6] via-[#F8FAF7] to-[#E9F6FF] border border-[#17191C]/10 flex flex-col justify-between gap-7">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-[#FFB8D5] text-[#17191C]">
                      {p4.no}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#4A515A]">
                      {p4.category}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#17191C]">
                      {p4.name}
                    </h3>
                    {p4.href && (
                      <a
                        href={p4.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit webset.id"
                        className="w-10 h-10 rounded-full bg-[#17191C] text-[#F8FAF7] hover:bg-[#D6FF62] hover:text-[#17191C] flex items-center justify-center transition-colors shrink-0"
                      >
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <p className="text-[15px] sm:text-base text-[#4A515A] leading-relaxed">
                    {p4.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p4.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-3 py-1 rounded-full bg-white/80 border border-[#17191C]/8 text-xs font-mono text-[#17191C]"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <InteractivePreview
                  project={p4}
                  aspectClass="aspect-[4/3]"
                  onInspect={() => setSelected(p4)}
                />
              </article>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Interactive Project Inspection Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-[#17191C]/70 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[2rem] bg-[#F8FAF7] text-[#17191C] p-6 sm:p-8 shadow-2xl border border-white"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-[#4A515A]">
                    <Layers size={13} aria-hidden="true" />
                    {selected.no} &bull; {selected.category}
                  </span>
                  <h3
                    id="project-modal-title"
                    className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight"
                  >
                    {selected.name}
                    {selected.subtitle ? ` — ${selected.subtitle}` : ""}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close project details"
                  className="w-10 h-10 rounded-full bg-[#17191C]/8 hover:bg-[#17191C] hover:text-[#F8FAF7] flex items-center justify-center transition-colors shrink-0"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="mt-4 text-base text-[#4A515A] leading-relaxed">
                {selected.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {selected.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-3.5 py-1.5 rounded-full bg-[#EFF4EE] border border-[#17191C]/10 text-xs font-mono font-medium text-[#17191C]"
                  >
                    {h}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {selected.images.map((img) => (
                  <div
                    key={img.src}
                    className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#17191C]/12 bg-[#17191C]"
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
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full glossy-pill-lime text-[#17191C] font-display font-bold text-sm"
                  >
                    Open Live Site
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
