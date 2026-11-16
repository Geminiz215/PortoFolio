"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { Magnetic, MarqueeStrip, StickerBadge } from "./MotionPrimitives";
import { site } from "@/lib/site";

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const posterRef = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 160, damping: 18 });
  const sy = useSpring(py, { stiffness: 160, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReduced || !posterRef.current) return;
    const rect = posterRef.current.getBoundingClientRect();
    const dx = ((e.clientX - (rect.left + rect.width / 2)) / rect.width) * 14;
    const dy = ((e.clientY - (rect.top + rect.height / 2)) / rect.height) * 14;
    px.set(dx);
    py.set(dy);
  };

  const handleMouseLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-32 bg-[#FAF9F6] bg-swiss-grid overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 pb-12 my-auto">
        {/* Top Swiss Metadata Bar */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b-2 border-[#171717]"
        >
          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em]">
            <span className="px-2.5 py-1 bg-[#171717] text-[#D7FF45] rounded-sm">
              JAKARTA, INDONESIA
            </span>
            <span className="text-[#171717]">{"//"} 3+ YRS PRODUCTION EXP</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-[#171717]">
            <span className="hidden sm:inline">PORTFOLIO DROP</span>
            <span className="px-2 py-0.5 border-2 border-[#171717] bg-[#FF91C8] rounded-sm">
              ED. 2026
            </span>
          </div>
        </motion.div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left 7 Cols: Oversized Statement Typography */}
          <div className="lg:col-span-7 relative z-10">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 mb-4"
            >
              <StickerBadge bg="#FF7545" textColor="#171717" rotate={-3}>
                BACKEND &amp; FULLSTACK
              </StickerBadge>
              <StickerBadge bg="#526BFF" textColor="#FAF9F6" rotate={2}>
                GO / NEXT.JS / SQL
              </StickerBadge>
            </motion.div>

            <motion.h1
              initial={prefersReduced ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="font-heavy text-[clamp(3.1rem,8.5vw,6.8rem)] leading-[0.9] tracking-[-0.04em] text-[#171717] lowercase"
            >
              yo, i&apos;m
              <br />
              <span className="relative inline-flex items-center mt-2">
                <span className="relative z-10 inline-block bg-[#D7FF45] px-4 sm:px-6 py-1 sm:py-2 border-[3px] border-[#171717] shadow-[7px_7px_0_#171717] rounded-xl -rotate-1">
                  fathi.
                </span>
                {/* Rotating Stamp Graphic */}
                <svg
                  viewBox="0 0 80 80"
                  aria-hidden="true"
                  className="hidden sm:block w-16 h-16 ml-4 text-[#171717] animate-spin-slow shrink-0"
                >
                  <path
                    fill="#FF91C8"
                    stroke="#171717"
                    strokeWidth="2.5"
                    d="M40 4 L47 22 L66 14 L58 33 L76 40 L58 47 L66 66 L47 58 L40 76 L33 58 L14 66 L22 47 L4 40 L22 33 L14 14 L33 22 Z"
                  />
                  <circle cx="40" cy="40" r="8" fill="#171717" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-display text-2xl sm:text-3xl lg:text-[2.15rem] font-bold leading-[1.15] tracking-tight text-[#171717] max-w-2xl"
            >
              I build digital products,{" "}
              <span className="italic underline decoration-[#FF7545] decoration-[4px] underline-offset-4">
                scalable systems
              </span>{" "}
              &amp; experiences that just work.
            </motion.p>

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-base sm:text-lg text-[#171717]/80 max-w-xl leading-relaxed font-medium"
            >
              Backend &amp; Fullstack Developer based in Jakarta, Indonesia. Turning complex
              problems into clean, scalable digital solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <a
                  href="#work"
                  className="brutal-btn inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#D7FF45] text-[#171717] font-display font-bold text-base tracking-tight min-h-[52px]"
                >
                  <span>check my work</span>
                  <ArrowUpRight size={19} strokeWidth={2.5} aria-hidden="true" />
                </a>
              </Magnetic>

              <Magnetic strength={0.15}>
                <a
                  href="#contact"
                  className="brutal-btn inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#FF91C8] text-[#171717] font-display font-bold text-base tracking-tight min-h-[52px]"
                >
                  <span>let&apos;s talk :)</span>
                </a>
              </Magnetic>

              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#171717] hover:bg-[#171717] hover:text-[#D7FF45] rounded-lg border-2 border-[#171717] transition-colors min-h-[48px]"
              >
                <FileText size={15} aria-hidden="true" />
                <span>CV.PDF</span>
              </a>
            </motion.div>
          </div>

          {/* Right 5 Cols: Streetwear Editorial Portrait Poster */}
          <motion.div
            ref={posterRef}
            initial={prefersReduced ? false : { opacity: 0, scale: 0.94, rotate: 1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative mx-auto w-full max-w-[360px] sm:max-w-[420px] lg:max-w-none"
          >
            {/* Color-blocked Cobalt backdrop offset */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 bg-[#526BFF] border-[3px] border-[#171717] rounded-[1.75rem]"
            />

            <motion.div
              style={prefersReduced ? undefined : { x: sx, y: sy }}
              className="relative bg-[#FF91C8] border-[3px] border-[#171717] rounded-[1.75rem] overflow-hidden aspect-[4/4.7] shadow-[6px_6px_0_#171717]"
            >
              {/* Swiss Crop Marks */}
              <div
                aria-hidden="true"
                className="absolute top-3 left-3 z-20 px-2.5 py-1 bg-[#171717] text-[#FAF9F6] font-mono text-[10px] font-bold uppercase tracking-widest rounded-sm"
              >
                FIG.01 // FATHI
              </div>
              <div
                aria-hidden="true"
                className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-[#D7FF45] border-2 border-[#171717] flex items-center justify-center font-mono text-xs font-bold"
              >
                +
              </div>

              <Image
                src="/profile.png"
                alt="Portrait of Muhammad Fathi Farhat"
                fill
                priority
                sizes="(max-width: 1024px) 85vw, 440px"
                className="object-cover object-top"
              />

              {/* Bottom Streetwear Stamp Bar */}
              <div className="absolute bottom-3 left-3 right-3 z-20 bg-[#FAF9F6] border-2 border-[#171717] shadow-[3px_3px_0_#171717] rounded-lg px-3.5 py-2.5 flex items-center justify-between gap-2">
                <div>
                  <p className="font-display font-bold text-xs sm:text-sm text-[#171717] leading-tight">
                    Muhammad Fathi Farhat
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#171717]/70">
                    Systems &amp; Fullstack Craft
                  </p>
                </div>
                <span className="px-2.5 py-1 bg-[#D7FF45] border-2 border-[#171717] font-mono text-[10px] font-bold uppercase tracking-wider rounded-sm shrink-0">
                  1K+ USERS
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-10 flex items-center justify-between font-mono text-xs font-bold uppercase tracking-[0.14em] text-[#171717]/75">
          <a
            href="#about"
            className="inline-flex items-center gap-2 hover:text-[#171717] transition-colors group"
          >
            <span className="w-7 h-7 rounded-full border-2 border-[#171717] bg-[#D7FF45] flex items-center justify-center transition-transform group-hover:translate-y-0.5">
              <ArrowDown size={14} strokeWidth={2.5} aria-hidden="true" />
            </span>
            <span>scroll down</span>
          </a>
          <span className="hidden sm:inline">INDONESIA // UTC+7</span>
        </div>
      </div>

      {/* Kinetic Marquee Strip */}
      <MarqueeStrip
        items={[
          "BACKEND ARCHITECTURE",
          "FULLSTACK PRODUCTS",
          "GO & GOFIBER",
          "NEXT.JS & REACT",
          "ENTERPRISE SYSTEMS",
          "API DESIGN",
        ]}
      />
    </section>
  );
}
