"use client";

import React from "react";
import Image from "next/image";
import { Building2, Boxes, BarChart3, Server, Layers, Database, Cloud } from "lucide-react";
import { Reveal, Counter, SectionHeading } from "./ui";

const focus = [
  { icon: Building2, label: "Enterprise applications" },
  { icon: Boxes, label: "Internal company systems" },
  { icon: BarChart3, label: "Business Intelligence" },
  { icon: Server, label: "RESTful APIs" },
  { icon: Layers, label: "Fullstack web applications" },
  { icon: Database, label: "Database optimization" },
  { icon: Cloud, label: "SaaS products" },
];

const stats = [
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 1000, suffix: "+", label: "CRMS Users" },
  { value: 10000, suffix: "+", label: "BI Records" },
  { text: "Multiple", label: "Enterprise Systems" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineering with a product mindset."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: workspace visual */}
          <Reveal>
            <div className="relative group">
              <div className="absolute -inset-4 radial-glow-blue opacity-[0.07] blur-2xl pointer-events-none" />
              <div className="relative rounded-2xl border border-white/10 overflow-hidden bg-zinc-950">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/about-personal.jpg"
                    alt="Muhammad Fathi Farhat at a golf driving range in Jakarta"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">Away from the keyboard</p>
                    <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                      Golf, and the occasional weekend side project
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-[10px] font-mono text-brand-cyan">
                    Jakarta, ID
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: copy */}
          <div>
            <Reveal delay={0.1}>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Backend &amp; Fullstack Developer with 3+ years of experience building scalable web
                applications, APIs, enterprise systems, dashboards, and SaaS products.
              </p>
              <p className="mt-5 text-base text-zinc-400 leading-relaxed">
                Most of my work lives inside real businesses — approval workflows used by a thousand
                people a day, reporting systems that turn raw operational data into decisions, and
                internal platforms that replace spreadsheets. I care about the parts users never see:
                clear data models, predictable APIs, and queries that stay fast as the table grows.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {focus.map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.07] bg-white/[0.02] text-xs text-zinc-300 hover:border-brand-cyan/30 hover:text-white transition-colors duration-300"
                  >
                    <Icon size={13} className="text-brand-cyan" />
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.06]">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-[#050506]">
              <div className="p-7 lg:p-8 h-full">
                <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                  {s.text ?? (
                    <>
                      <Counter to={s.value!} />
                      <span className="text-brand-cyan">{s.suffix}</span>
                    </>
                  )}
                </div>
                <p className="mt-2 text-[11px] font-mono uppercase tracking-[0.15em] text-zinc-500">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
