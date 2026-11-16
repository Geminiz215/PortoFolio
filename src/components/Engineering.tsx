"use client";

import React from "react";
import { Server, Layers, Database, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const pillars = [
  {
    no: "01",
    icon: Server,
    title: "Backend Engineering",
    body: "REST APIs, business logic, authentication, integrations, scalable services.",
  },
  {
    no: "02",
    icon: Layers,
    title: "Fullstack Development",
    body: "React, Next.js, Vite, responsive interfaces, API integration.",
  },
  {
    no: "03",
    icon: Database,
    title: "Data & Infrastructure",
    body: "SQL Server, MySQL, MongoDB, Redis, Docker, performance optimization.",
  },
  {
    no: "04",
    icon: Sparkles,
    title: "AI-Assisted Development",
    body: "Claude and GitHub Copilot used to accelerate development, identify logic errors, and iterate faster.",
  },
];

export default function Engineering() {
  return (
    <section className="relative py-24 lg:py-32 border-t border-slate-800/70">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Process"
          title="How I Build"
          subtitle="Four things every system I ship has to get right."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.no} delay={i * 0.06}>
              <div className="group relative h-full rounded-2xl border border-slate-800/90 bg-[#0B111E]/90 p-7 overflow-hidden transition-all duration-300 hover:border-cyan-400/35 hover:bg-[#0E1523]">
                <span className="absolute top-5 right-6 text-4xl font-bold text-slate-800/90 tracking-tighter leading-none select-none">
                  {p.no}
                </span>
                <div className="w-11 h-11 rounded-xl bg-cyan-400/10 border border-cyan-400/25 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform duration-300">
                  <p.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-50 tracking-tight">{p.title}</h3>
                <p className="mt-2.5 text-[15px] text-slate-300 leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
