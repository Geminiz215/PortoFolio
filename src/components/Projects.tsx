"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading, Tag, Screenshot } from "./ui";
import { NewsletterMockup, KlipMockup } from "./Mockups";

type Project = {
  no: string;
  name: string;
  tagline?: string;
  category: string;
  description: string;
  stack: string[];
  badge?: string;
  href?: string;
  visual: React.ReactNode;
};

const featured: Project[] = [
  {
    no: "01",
    name: "CRMS",
    tagline: "Car Rental Management System",
    category: "Enterprise Application",
    description:
      "Enterprise car rental management system serving 1,000+ users, including company approval workflows.",
    stack: ["Go", "GoFiber", "Next.js", "SQL Server", "Redis"],
    badge: "1,000+ Users",
    visual: (
      <Screenshot
        src="/projects/crms-dashboard.png"
        alt="CRMS home dashboard with fleet approval navigation"
        label="CRMS — Home Dashboard"
      />
    ),
  },
  {
    no: "04",
    name: "FLOWGO.ID",
    category: "SaaS / Personal Project",
    description:
      "No-Code Workflow Automation SaaS enabling teams to create custom workflows without coding, featuring dynamic forms, multi-step approval flows, and real-time tracking.",
    stack: ["Go", "GoFiber", "Next.js", "React", "MySQL", "Redis"],
    badge: "Founder & Fullstack Developer",
    href: "https://flowgo.id",
    visual: (
      <Screenshot
        src="/projects/flowgo-workflows.png"
        alt="FlowGo workspace listing configurable request workflows with versions and step counts"
        label="FlowGo — Workflows"
      />
    ),
  },
];

const secondary: Project[] = [
  {
    no: "02",
    name: "CRMS BI",
    category: "Business Intelligence",
    description:
      "Business Intelligence platform designed to automate management reporting from CRMS data exceeding 10,000 records.",
    stack: ["ASP.NET", "Vite", "SQL Server", "Redis"],
    badge: "10K+ Records",
    visual: (
      <Screenshot
        src="/projects/crms-bi-monitoring.png"
        alt="CRMS BI body repair monitoring dashboard with KPI cards and filters"
        label="CRMS BI — Monitoring Body Repair"
      />
    ),
  },
  {
    no: "03",
    name: "HRIS",
    category: "Enterprise HR System",
    description:
      "Web-based HRIS for managing employee leave requests, permits, missed attendance, and internal correspondence.",
    stack: ["Go", "GoFiber", "Vite", "SQL Server"],
    visual: (
      <Screenshot
        src="/projects/hris-dashboard.png"
        alt="HRIS dashboard showing attendance and leave statistics"
        label="HRIS — Employee Dashboard"
      />
    ),
  },
  {
    no: "05",
    name: "WEBSET.ID",
    category: "Fullstack Platform",
    description:
      "Domain-selling platform built with React, Next.js, and MongoDB, including backend and frontend development.",
    stack: ["React", "Next.js", "MongoDB", "Node.js", "Go"],
    href: "https://webset.id",
    visual: (
      <Screenshot
        src="/projects/webset-landing.png"
        alt="Webset.id landing page with microsite builder marketplace and pricing navigation"
        label="Webset.id — Landing"
      />
    ),
  },
  {
    no: "06",
    name: "Newsletter Platform",
    category: "Marketing Technology",
    description:
      "Newsletter platform with tracking for email views and link clicks, providing insights for marketing strategies.",
    stack: ["Next.js", "TypeScript", "Node.js", "REST API"],
    visual: <NewsletterMockup />,
  },
  {
    no: "07",
    name: "Company Internal Portal",
    category: "Enterprise Portal",
    description:
      "Centralized internal company portal for document management and integration of multiple internal applications.",
    stack: ["Go", "GoFiber", "Vite", "MySQL"],
    visual: (
      <Screenshot
        src="/projects/portal-dashboard.png"
        alt="Internal company portal with mission, values and quick access modules"
        label="Internal Portal — Dashboard"
      />
    ),
  },
  {
    no: "08",
    name: "KLIP.ID",
    category: "Web Platform",
    description:
      "Custom Twibbon features designed to improve user engagement through interactive design implementations.",
    stack: ["React", "Next.js", "Backend APIs"],
    href: "https://klip.id",
    visual: <KlipMockup />,
  },
];

function ViewLink({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-brand-cyan transition-colors"
    >
      View Project
      <ArrowUpRight
        size={14}
        className="text-zinc-500 group-hover/link:text-brand-cyan group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all"
      />
    </a>
  );
}

function FeaturedRow({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <Reveal>
      <article className="group grid lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-12 items-center">
        {/* Visual */}
        <div className={flip ? "lg:order-2" : ""}>
          <div className="relative rounded-2xl border border-white/[0.07] bg-zinc-950 p-2 overflow-hidden transition-all duration-500 group-hover:border-brand-cyan/25">
            <div className="absolute -inset-10 radial-glow opacity-0 group-hover:opacity-[0.08] blur-3xl transition-opacity duration-700 pointer-events-none" />
            <div className="relative h-[300px] sm:h-[400px] lg:h-[440px] transition-transform duration-700 group-hover:scale-[1.02]">
              {project.visual}
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className={flip ? "lg:order-1" : ""}>
          <div className="flex items-center gap-3">
            <span className="text-5xl font-bold text-white/[0.07] tracking-tighter leading-none">
              {project.no}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-brand-cyan/10 border border-brand-cyan/20 text-[10px] font-mono uppercase tracking-[0.12em] text-brand-cyan">
              {project.category}
            </span>
          </div>

          <h3 className="mt-4 text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.name}
          </h3>
          {project.tagline && (
            <p className="mt-1 text-sm font-mono text-zinc-500">{project.tagline}</p>
          )}

          <p className="mt-4 text-base text-zinc-400 leading-relaxed">{project.description}</p>

          {project.badge && (
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-[11px] font-semibold text-zinc-200">{project.badge}</span>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          {project.href && (
            <div className="mt-7">
              <ViewLink href={project.href} />
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <article className="group h-full flex flex-col rounded-2xl border border-white/[0.07] bg-white/[0.015] overflow-hidden transition-all duration-500 hover:border-brand-cyan/25 hover:bg-white/[0.03]">
        <div className="relative p-3 pb-0">
          <div className="relative h-[240px] sm:h-[280px] overflow-hidden rounded-xl">
            <div className="h-full transition-transform duration-700 group-hover:scale-[1.03]">
              {project.visual}
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
          {project.badge && (
            <span className="absolute top-6 right-6 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-sm border border-brand-cyan/25 text-[10px] font-mono text-brand-cyan">
              {project.badge}
            </span>
          )}
        </div>

        <div className="flex-1 flex flex-col p-6 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-brand-cyan">
                {project.category}
              </span>
              <h3 className="mt-2 text-xl font-bold text-white tracking-tight">{project.name}</h3>
            </div>
            <span className="text-2xl font-bold text-white/[0.07] tracking-tighter leading-none">
              {project.no}
            </span>
          </div>

          <p className="mt-3 text-sm text-zinc-400 leading-relaxed flex-1">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          {project.href && (
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <ViewLink href={project.href} />
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Systems, products, and platforms I've built."
          subtitle="Enterprise systems are shown as real screenshots. Where a product can't be captured, the interface is an illustrative reconstruction rather than a real screen."
        />

        <div className="mt-16 space-y-20 lg:space-y-28">
          <FeaturedRow project={featured[0]} flip={false} />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {secondary.slice(0, 2).map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
          </div>

          <FeaturedRow project={featured[1]} flip />

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {secondary.slice(2).map((p, i) => (
              <ProjectCard key={p.name} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
