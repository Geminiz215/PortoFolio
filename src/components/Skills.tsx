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
            <Reveal key={group.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 sm:p-7 transition-colors duration-500 hover:border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-brand-cyan">
                    <group.icon size={16} />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item.name}
                      className="group/tag inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.07] bg-white/[0.02] text-[13px] text-zinc-300 hover:text-white hover:border-white/20 hover:bg-white/[0.05] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
                    >
                      <span
                        className="w-2 h-2 rounded-full shrink-0 transition-shadow duration-300"
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
