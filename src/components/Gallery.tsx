"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHeading, Screenshot } from "./ui";
import {
  NewsletterMockup,
  KlipMockup,
  ApiMockup,
  DatabaseMockup,
  CodeMockup,
  MobileUiMockup,
} from "./Mockups";

type Item = {
  title: string;
  category: string;
  span?: string;
  /** Real product screenshot. */
  shot?: { src: string; alt: string; label: string };
  /** Illustrative mockup, for products that can't be captured. */
  mockup?: React.ReactNode;
};

const items: Item[] = [
  {
    title: "CRMS Dashboard",
    category: "Enterprise Application",
    span: "md:col-span-2",
    shot: {
      src: "/projects/crms-dashboard.png",
      alt: "CRMS home dashboard with fleet approval navigation",
      label: "CRMS — Home Dashboard",
    },
  },
  {
    title: "BI Monitoring",
    category: "Business Intelligence",
    shot: {
      src: "/projects/crms-bi-monitoring.png",
      alt: "CRMS BI body repair monitoring dashboard with KPI cards and filters",
      label: "CRMS BI — Monitoring Body Repair",
    },
  },
  {
    title: "BI Assistant",
    category: "Business Intelligence",
    shot: {
      src: "/projects/crms-bi-assistant.png",
      alt: "CRMS BI assistant screen for querying dashboard data",
      label: "CRMS BI — Assistant",
    },
  },
  {
    title: "HRIS Dashboard",
    category: "Enterprise HR System",
    span: "md:col-span-2",
    shot: {
      src: "/projects/hris-dashboard.png",
      alt: "HRIS dashboard showing attendance and leave statistics",
      label: "HRIS — Employee Dashboard",
    },
  },
  {
    title: "Permit Requests",
    category: "Approval Workflow",
    shot: {
      src: "/projects/hris-permission.png",
      alt: "HRIS permit request list with validation status",
      label: "HRIS — Pengajuan Ijin",
    },
  },
  {
    title: "Company Internal Portal",
    category: "Enterprise Portal",
    span: "md:col-span-2",
    shot: {
      src: "/projects/portal-dashboard.png",
      alt: "Internal company portal with mission, values and quick access modules",
      label: "Internal Portal — Dashboard",
    },
  },
  {
    title: "FlowGo Workflows",
    category: "SaaS Product",
    span: "md:col-span-2",
    shot: {
      src: "/projects/flowgo-workflows.png",
      alt: "FlowGo workspace listing configurable request workflows with versions and step counts",
      label: "FlowGo — Workflows",
    },
  },
  {
    title: "FlowGo Landing",
    category: "SaaS Product",
    shot: {
      src: "/projects/flowgo-landing.png",
      alt: "FlowGo marketing landing page with live approval board preview",
      label: "FlowGo — Landing",
    },
  },
  {
    title: "Webset.id",
    category: "Fullstack Platform",
    shot: {
      src: "/projects/webset-landing.png",
      alt: "Webset.id landing page with microsite builder marketplace and pricing navigation",
      label: "Webset.id — Landing",
    },
  },
  { title: "Newsletter Analytics", category: "Marketing Technology", mockup: <NewsletterMockup /> },
  { title: "Klip Twibbon Editor", category: "Web Platform", mockup: <KlipMockup /> },
  { title: "API Architecture", category: "Backend Engineering", mockup: <ApiMockup /> },
  { title: "Relational Schema", category: "Data & Infrastructure", mockup: <DatabaseMockup /> },
  {
    title: "Service Handler",
    category: "Backend Engineering",
    span: "md:col-span-2",
    mockup: <CodeMockup />,
  },
  { title: "Responsive Interface", category: "Fullstack Development", mockup: <MobileUiMockup /> },
];

/** Cards crop to fill; the lightbox shows the whole screen. */
const visual = (item: Item, fit: "cover" | "contain") =>
  item.shot ? <Screenshot {...item.shot} fit={fit} /> : item.mockup;

export default function Gallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const open = (i: number) => {
    setActive(i);
    dialogRef.current?.showModal();
  };

  const step = useCallback((dir: number) => {
    setActive((i) => (i === null ? i : (i + dir + items.length) % items.length));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!dialogRef.current?.open) return;
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  return (
    <section className="relative py-24 lg:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Gallery"
          title="Behind the Interfaces"
          subtitle="A closer look at the screens, schemas, and services behind the work."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.06} className={item.span}>
              <button
                onClick={() => open(i)}
                className="group relative w-full h-[260px] sm:h-[300px] rounded-2xl border border-white/[0.07] bg-zinc-950 overflow-hidden text-left transition-all duration-500 hover:border-brand-cyan/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan"
              >
                <div className="absolute inset-0 p-2 transition-transform duration-700 group-hover:scale-[1.02]">
                  {visual(item, "cover")}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity duration-400" />
                <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                  <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-cyan">
                    {item.category}
                  </p>
                  <div className="mt-1.5 flex items-center justify-between gap-3">
                    <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                    <span className="inline-flex items-center gap-1.5 shrink-0 px-2.5 py-1 rounded-md bg-white/10 border border-white/15 text-[11px] font-semibold text-white">
                      <Expand size={12} />
                      View
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox — native <dialog> gives Escape, focus trap and backdrop for free */}
      <dialog
        ref={dialogRef}
        onClose={() => setActive(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        className="lightbox"
        aria-label="Project visual preview"
      >
        {active !== null && (
          <div className="w-[92vw] max-w-6xl">
            <div className="flex items-end justify-between gap-4 mb-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-cyan">
                  {items[active].category}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white tracking-tight">
                  {items[active].title}
                </h3>
              </div>
              <button
                onClick={() => dialogRef.current?.close()}
                aria-label="Close preview"
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-300 hover:text-white hover:border-white/25 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="h-[70vh] rounded-2xl border border-white/10 bg-zinc-950 p-2">
              {visual(items[active], "contain")}
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-[11px] font-mono text-zinc-500">
                {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => step(-1)}
                  aria-label="Previous visual"
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-300 hover:text-brand-cyan hover:border-brand-cyan/30 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => step(1)}
                  aria-label="Next visual"
                  className="w-9 h-9 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-zinc-300 hover:text-brand-cyan hover:border-brand-cyan/30 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
