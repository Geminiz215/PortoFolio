"use client";

import React from "react";
import { Code2, MonitorSmartphone, Server, Database, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";

const groups = [
  {
    icon: Code2,
    title: "Programming",
    items: [
      { name: "Golang", color: "#00ADD8" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "Python", color: "#3776AB" },
      { name: "Node.js", color: "#5FA04E" },
    ],
  },
  {
    icon: MonitorSmartphone,
    title: "Frontend",
    items: [
      { name: "React.js", color: "#61DAFB" },
      { name: "Next.js", color: "#FFFFFF" },
      { name: "Tailwind CSS", color: "#38BDF8" },
      { name: "Vite", color: "#A855F7" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      { name: "Gin", color: "#00A29C" },
      { name: "GoFiber", color: "#00ADD8" },
      { name: "Express.js", color: "#A1A1AA" },
      { name: "ASP.NET", color: "#7E4DD2" },
      { name: "Laravel", color: "#FF2D20" },
    ],
  },
  {
    icon: Database,
    title: "Database & Cache",
    items: [
      { name: "MySQL", color: "#00758F" },
      { name: "MongoDB", color: "#47A248" },
      { name: "SQL Server", color: "#CC2927" },
      { name: "Redis", color: "#FF4438" },
      { name: "Elasticsearch", color: "#FED10A" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "Git", color: "#F05032" },
      { name: "Docker", color: "#2496ED" },
      { name: "Claude", color: "#D97757" },
      { name: "GitHub Copilot", color: "#A1A1AA" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dot-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="The stack I reach for."
          subtitle="Languages, frameworks and infrastructure I use day to day in production systems."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.05}>
              <div className="h-full rounded-2xl border border-slate-800/90 bg-[#0B111E]/90 p-6 sm:p-7 transition-colors duration-300 hover:border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                    <group.icon size={17} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-50">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="group/tag inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-800 bg-slate-900/70 text-[13px] font-medium text-slate-200 hover:text-white hover:border-cyan-400/40 hover:bg-slate-800/80 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
