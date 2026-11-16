"use client";

import React from "react";
import Image from "next/image";
import { AnimatedCounter, Reveal, StickerBadge } from "./MotionPrimitives";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-[#FAF9F6] border-b-[2.5px] border-[#171717] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Asymmetric Header */}
        <Reveal clip className="grid lg:grid-cols-12 gap-6 items-end mb-14 lg:mb-20">
          <div className="lg:col-span-4">
            <StickerBadge bg="#D7FF45" rotate={-1}>
              01 // ABOUT ME
            </StickerBadge>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heavy text-4xl sm:text-5xl lg:text-[4.25rem] leading-[0.95] tracking-[-0.04em] text-[#171717] lowercase">
              not just another{" "}
              <span className="inline-block bg-[#FF91C8] px-3 py-0.5 border-2 border-[#171717] shadow-[4px_4px_0_#171717] rounded-lg italic">
                developer.
              </span>
            </h2>
          </div>
        </Reveal>

        {/* Asymmetric Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Photo with Vivid Orange Brutalist Offset */}
          <Reveal delay={0.06} className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 bg-[#FF7545] border-[2.5px] border-[#171717] rounded-2xl"
              />
              <div className="relative bg-[#171717] border-[2.5px] border-[#171717] rounded-2xl overflow-hidden aspect-[4/4.4] group">
                <Image
                  src="/about-personal.jpg"
                  alt="Muhammad Fathi Farhat"
                  fill
                  sizes="(max-width: 1024px) 92vw, 460px"
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute top-3 left-3">
                  <StickerBadge bg="#FAF9F6" rotate={-2}>
                    JKT // ID
                  </StickerBadge>
                </div>
                <div className="absolute bottom-3 left-3 right-3 bg-[#171717] text-[#FAF9F6] border-2 border-[#FAF9F6]/20 rounded-lg px-4 py-2.5 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">
                    Muhammad Fathi Farhat
                  </span>
                  <span className="font-mono text-[11px] text-[#D7FF45]">SINCE 2022</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Editorial Copy + Color-Blocked Bento Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0.12} className="space-y-5">
              <p className="font-display text-2xl sm:text-3xl font-bold text-[#171717] leading-[1.22] tracking-tight">
                I&apos;m Muhammad Fathi Farhat, a Backend &amp; Fullstack Developer with 3+ years of
                experience building scalable web applications and enterprise systems.
              </p>
              <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed font-medium max-w-2xl">
                I enjoy turning complex business requirements into reliable products, building
                backend architectures, designing APIs, and creating complete digital experiences.
              </p>
            </Reveal>

            {/* Color-Blocked Stat Grid — deliberately varied widths & colors */}
            <Reveal delay={0.18}>
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-5 bg-[#D7FF45] text-[#171717] brutal-box rounded-2xl p-6 flex flex-col justify-between min-h-[152px]">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
                    01 // TENURE
                  </span>
                  <div className="mt-4">
                    <p className="font-heavy text-4xl sm:text-5xl tracking-tight leading-none">
                      <AnimatedCounter target={3} suffix="+" />
                    </p>
                    <p className="mt-1.5 font-display font-bold text-sm uppercase tracking-wide">
                      years building software
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-7 bg-[#FF91C8] text-[#171717] brutal-box rounded-2xl p-6 flex flex-col justify-between min-h-[152px]">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
                    02 // REACH
                  </span>
                  <div className="mt-4">
                    <p className="font-heavy text-4xl sm:text-5xl tracking-tight leading-none">
                      <AnimatedCounter target={1000} suffix="+" />
                    </p>
                    <p className="mt-1.5 font-display font-bold text-sm uppercase tracking-wide">
                      users supported
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-7 bg-[#526BFF] text-[#FAF9F6] brutal-box rounded-2xl p-6 flex flex-col justify-between min-h-[152px]">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#D7FF45]">
                    03 // THROUGHPUT
                  </span>
                  <div className="mt-4">
                    <p className="font-heavy text-4xl sm:text-5xl tracking-tight leading-none">
                      <AnimatedCounter target={10000} suffix="+" />
                    </p>
                    <p className="mt-1.5 font-display font-bold text-sm uppercase tracking-wide">
                      records processed
                    </p>
                  </div>
                </div>

                <div className="sm:col-span-5 bg-[#FF7545] text-[#171717] brutal-box rounded-2xl p-6 flex flex-col justify-between min-h-[152px]">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.14em]">
                    04 // SCOPE
                  </span>
                  <div className="mt-4">
                    <p className="font-heavy text-3xl sm:text-4xl tracking-tight leading-none">
                      Fullstack
                    </p>
                    <p className="mt-1.5 font-display font-bold text-sm uppercase tracking-wide">
                      development
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
