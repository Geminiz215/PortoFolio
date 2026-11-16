"use client";

import React from "react";
import Image from "next/image";
import { Reveal, GlossyBubble, type BubbleTone } from "./MotionPrimitives";

const STAT_BUBBLES: {
  value: string;
  label: string;
  tone: BubbleTone;
  size: string;
  offset: string;
  floatDuration: number;
}[] = [
  {
    value: "3+",
    label: "Years Experience",
    tone: "lime",
    size: "w-36 h-36 sm:w-44 sm:h-44",
    offset: "translate-y-0",
    floatDuration: 6.2,
  },
  {
    value: "1,000+",
    label: "Users Supported",
    tone: "aqua",
    size: "w-40 h-40 sm:w-48 sm:h-48",
    offset: "sm:translate-y-8",
    floatDuration: 7.4,
  },
  {
    value: "10,000+",
    label: "Records Processed",
    tone: "lavender",
    size: "w-36 h-36 sm:w-44 sm:h-44",
    offset: "sm:-translate-y-4",
    floatDuration: 6.8,
  },
  {
    value: "Fullstack",
    label: "Development",
    tone: "pink",
    size: "w-32 h-32 sm:w-40 sm:h-40",
    offset: "sm:translate-y-5",
    floatDuration: 7.9,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#F8FAF7] border-t border-[#17191C]/8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Editorial Section Header */}
        <Reveal className="grid lg:grid-cols-12 gap-6 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#4A515A]">
              <span className="w-2 h-2 rounded-full bg-[#D6FF62] ring-2 ring-[#17191C]/15" />
              01 / About Me
            </span>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.035em] text-[#17191C] leading-[1.03]">
              Beyond writing code.
            </h2>
          </div>
        </Reveal>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Editorial Portrait + Statement */}
          <Reveal delay={0.08} className="lg:col-span-5 space-y-6">
            <div className="relative rounded-[2.25rem] overflow-hidden bg-[#EFF4EE] border border-[#17191C]/10 shadow-[0_24px_48px_-16px_rgba(23,25,28,0.12)] aspect-[4/4.5] group">
              <Image
                src="/about-personal.jpg"
                alt="Muhammad Fathi Farhat"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#17191C]/60 via-[#17191C]/15 to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#F8FAF7]">
                <div>
                  <p className="font-display font-bold text-base tracking-tight">
                    Muhammad Fathi Farhat
                  </p>
                  <p className="text-xs font-mono uppercase tracking-widest text-[#F8FAF7]/80">
                    Jakarta, Indonesia
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#D6FF62] text-[#17191C] text-[11px] font-mono font-semibold uppercase tracking-wider">
                  Since 2022
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Narrative + Floating Statistic Bubbles */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-12">
            <Reveal delay={0.14} className="space-y-6">
              <p className="font-display text-2xl sm:text-3xl font-semibold text-[#17191C] leading-[1.28] tracking-tight">
                I&apos;m Muhammad Fathi Farhat, a Backend &amp; Fullstack Developer with 3+ years of
                experience building scalable web applications and enterprise systems.
              </p>
              <p className="text-base sm:text-lg text-[#4A515A] leading-relaxed max-w-2xl">
                I enjoy transforming complex business requirements into reliable software solutions,
                from designing backend architectures and RESTful APIs to developing complete web
                applications.
              </p>
            </Reveal>

            {/* Floating Statistic Bubbles — Staggered Organic Cluster */}
            <Reveal delay={0.2}>
              <div
                aria-label="Key career highlights"
                className="relative pt-2 pb-6 flex flex-wrap items-center justify-center sm:justify-start gap-5 sm:gap-7"
              >
                {STAT_BUBBLES.map((stat) => (
                  <GlossyBubble
                    key={stat.label}
                    tone={stat.tone}
                    floatDuration={stat.floatDuration}
                    floatY={8}
                    className={`${stat.size} ${stat.offset} flex flex-col items-center justify-center text-center p-4 cursor-pointer`}
                  >
                    <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#17191C]">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-[11px] sm:text-xs font-mono uppercase tracking-[0.12em] text-[#17191C]/80 leading-snug max-w-[110px]">
                      {stat.label}
                    </span>
                  </GlossyBubble>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
