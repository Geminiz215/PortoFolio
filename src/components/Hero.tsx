"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles, Download } from "lucide-react";
import { GlossyBubble, Magnetic } from "./MotionPrimitives";
import { site } from "@/lib/site";

const FLOATING_LABELS = [
  {
    text: "Go / GoFiber",
    sub: "Backend Core",
    dot: "#D6FF62",
    pos: "top-6 -left-3 sm:-left-10",
    delay: 0.35,
  },
  {
    text: "Next.js & React",
    sub: "Fullstack UI",
    dot: "#83CFFF",
    pos: "top-[42%] -right-3 sm:-right-8",
    delay: 0.45,
  },
  {
    text: "1,000+ Users",
    sub: "Production Scale",
    dot: "#FFB8D5",
    pos: "bottom-12 -left-2 sm:-left-8",
    delay: 0.55,
  },
];

export default function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-10 sm:pt-32 lg:pt-36 overflow-hidden bg-[#F8FAF7]"
    >
      {/* Subtle atmospheric color washes — non-generic, airy mint/aqua/lavender */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 w-[560px] h-[560px] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(165,232,245,0.55) 0%, rgba(201,184,255,0.28) 45%, transparent 72%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-32 w-[480px] h-[480px] rounded-full opacity-45 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(183,245,218,0.6) 0%, rgba(214,255,98,0.25) 50%, transparent 75%)",
        }}
      />

      <div className="relative max-w-7xl w-full mx-auto px-5 sm:px-8 my-auto">
        {/* Top Editorial Metadata Strip */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 lg:mb-10 text-xs font-mono uppercase tracking-[0.14em] text-[#4A515A]"
        >
          <span className="inline-flex items-center gap-2 text-[#17191C] font-medium">
            <MapPin size={13} aria-hidden="true" className="text-[#17191C]" />
            {site.location}
          </span>
          <span className="hidden sm:inline text-[#17191C]/20">/</span>
          <span>3+ Years of Development Experience</span>
          <span className="hidden sm:inline text-[#17191C]/20">/</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#B7F5DA]/60 text-[#17191C] font-semibold">
            <Sparkles size={11} aria-hidden="true" />
            Backend &amp; Fullstack
          </span>
        </motion.div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid lg:grid-cols-[1.22fr_0.78fr] gap-12 lg:gap-10 items-center">
          {/* Left: Oversized Expressive Typography */}
          <div className="relative z-10">
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#17191C] mb-3"
            >
              Hi, I&apos;m{" "}
              <span className="relative inline-block px-3 py-0.5 rounded-full bg-[#D6FF62] shadow-[inset_0_2px_1px_rgba(255,255,255,0.85),0_8px_20px_-6px_rgba(182,232,42,0.5)]">
                Fathi.
              </span>
            </motion.p>

            <motion.h1
              initial={prefersReduced ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.65rem,6.4vw,5.4rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#17191C]"
            >
              Building digital systems that{" "}
              <span className="relative inline-block">
                <span className="relative z-10">work beautifully.</span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-3 sm:h-4 rounded-full bg-gradient-to-r from-[#A5E8F5] via-[#B7F5DA] to-[#D6FF62] -z-0 opacity-80"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-xl text-base sm:text-[18px] text-[#4A515A] leading-relaxed"
            >
              I&apos;m a Backend &amp; Fullstack Developer focused on building scalable
              applications, reliable backend systems, and thoughtful digital experiences.
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3.5"
            >
              <Magnetic>
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full glossy-pill-lime text-[#17191C] font-display font-bold text-sm sm:text-[15px] tracking-tight transition-transform duration-200 active:scale-[0.98] min-h-[48px]"
                >
                  Explore My Work
                  <ArrowDownRight
                    size={18}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
              </Magnetic>

              <Magnetic strength={0.16}>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#17191C] text-[#F8FAF7] hover:bg-[#272B30] font-display font-semibold text-sm sm:text-[15px] tracking-tight transition-all duration-200 shadow-[0_12px_28px_-8px_rgba(23,25,28,0.28)] active:scale-[0.98] min-h-[48px]"
                >
                  Let&apos;s Connect
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                    className="text-[#D6FF62] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </Magnetic>

              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-sm font-medium text-[#4A515A] hover:text-[#17191C] hover:bg-[#17191C]/5 transition-colors min-h-[44px]"
              >
                <Download size={15} aria-hidden="true" />
                <span>Resume PDF</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Glossy 3D Bubble Sculpture + Portrait Focal Point */}
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none"
          >
            <div className="relative aspect-[4/4.6] flex items-center justify-center">
              {/* Sculptural 3D Glossy Bubbles */}
              <GlossyBubble
                tone="iridescent"
                floatDuration={7.5}
                floatY={12}
                className="absolute -top-4 right-2 sm:right-6 w-28 h-28 sm:w-36 sm:h-36 z-0"
              />
              <GlossyBubble
                tone="lime"
                floatDuration={6.2}
                floatY={9}
                className="absolute bottom-8 -left-4 sm:-left-6 w-20 h-20 sm:w-24 sm:h-24 z-20"
              />
              <GlossyBubble
                tone="pink"
                floatDuration={8.2}
                floatY={11}
                className="hidden sm:block absolute bottom-2 right-0 w-16 h-16 z-20"
              />
              <GlossyBubble
                tone="aqua"
                floatDuration={5.8}
                floatY={7}
                className="absolute top-1/4 -left-3 w-12 h-12 z-0"
              />

              {/* Organic Glossy Capsule Framing the Portrait */}
              <div className="relative z-10 w-[84%] h-[88%] rounded-[3.25rem] chrome-border shadow-[0_32px_64px_-16px_rgba(23,25,28,0.16)] animate-bubble-morph overflow-hidden">
                <div
                  className="relative w-full h-full rounded-[3.15rem] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(155deg, #E8FAF3 0%, #D9F2FA 48%, #EFEAFF 100%)",
                  }}
                >
                  {/* Glossy top-left reflection inside capsule */}
                  <div
                    aria-hidden="true"
                    className="absolute top-4 left-6 w-2/3 h-20 rounded-full bg-white/55 blur-xl pointer-events-none z-20"
                  />
                  <Image
                    src="/profile.png"
                    alt="Portrait of Muhammad Fathi Farhat"
                    fill
                    priority
                    sizes="(max-width: 1024px) 80vw, 420px"
                    className="object-cover object-top scale-[1.03]"
                  />
                </div>
              </div>

              {/* Floating Technical Labels */}
              {FLOATING_LABELS.map((item) => (
                <motion.div
                  key={item.text}
                  initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: item.delay }}
                  whileHover={prefersReduced ? undefined : { y: -3, scale: 1.03 }}
                  className={`hidden sm:flex absolute ${item.pos} z-30 glass-badge rounded-2xl px-3.5 py-2.5 items-center gap-2.5`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]"
                    style={{ backgroundColor: item.dot }}
                    aria-hidden="true"
                  />
                  <div className="leading-tight">
                    <p className="text-xs font-display font-bold text-[#17191C] whitespace-nowrap">
                      {item.text}
                    </p>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-[#4A515A]">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={prefersReduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="relative max-w-7xl w-full mx-auto px-5 sm:px-8 pt-6 flex items-center justify-between text-xs font-mono uppercase tracking-[0.16em] text-[#4A515A]"
      >
        <a
          href="#about"
          className="inline-flex items-center gap-3 hover:text-[#17191C] transition-colors group"
        >
          <span className="w-5 h-8 rounded-full border border-[#17191C]/25 flex items-start justify-center p-1">
            <motion.span
              animate={prefersReduced ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-[#17191C]"
            />
          </span>
          <span>Scroll to explore</span>
        </a>
        <span className="hidden sm:inline">Portfolio &mdash; 2026 Edition</span>
      </motion.div>
    </section>
  );
}
