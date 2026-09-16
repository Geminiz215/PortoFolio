"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/ui";
import { site } from "@/lib/site";

const floatingCards = [
  { label: "3+ Years Experience", className: "top-8 -left-4 sm:-left-10", delay: 0.6 },
  { label: "Go / Golang", className: "top-1/3 -right-4 sm:-right-8", delay: 0.75 },
  { label: "Fullstack Developer", className: "bottom-24 -left-4 sm:-left-12", delay: 0.9 },
  { label: "Enterprise Systems", className: "bottom-8 -right-2 sm:-right-6", delay: 1.05 },
];

const socials = [
  { href: site.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: site.github, icon: Github, label: "GitHub" },
  { href: site.whatsapp, icon: MessageCircle, label: "WhatsApp" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      {/* Background: grid + soft glows */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/4 w-[480px] h-[480px] radial-glow opacity-[0.07] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-20 right-0 w-[420px] h-[420px] radial-glow-blue opacity-[0.06] animate-pulse-slow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-12 items-center">
        {/* ---- Left: copy ---- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-300">
              Backend &amp; Fullstack Software Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-7 text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-white leading-[1.05]"
          >
            Building scalable software
            <br />
            from{" "}
            <span className="text-brand-cyan glow-text-cyan">backend</span> to{" "}
            <span className="text-brand-cyan glow-text-cyan">interface</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-6 text-sm sm:text-base font-mono text-zinc-500"
          >
            Backend systems. Fullstack products. Business solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-6 max-w-xl text-base text-zinc-400 leading-relaxed"
          >
            Backend &amp; Fullstack Developer with 3+ years of experience building scalable web
            applications and internal enterprise systems. Experienced with Go, Next.js, React,
            ASP.NET, SQL Server, MongoDB, and Redis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-xl hover:bg-brand-cyan transition-colors duration-300"
            >
              View My Work
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:border-brand-cyan/40 hover:bg-white/[0.05] transition-all duration-300"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} className="text-zinc-500 group-hover:text-brand-cyan transition-colors" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-9 flex items-center gap-5"
          >
            <div className="flex items-center gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <span className="h-5 w-px bg-white/10" />
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500">
              <MapPin size={13} />
              {site.location}
            </span>
          </motion.div>
        </div>

        {/* ---- Right: portrait composition ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          {/* Glow sits behind the cut-out silhouette */}
          <div className="absolute inset-x-6 top-10 bottom-16 radial-glow opacity-[0.16] blur-3xl animate-glow pointer-events-none" />
          {/* Ring behind the subject, grounding the floating portrait */}
          <div className="absolute inset-x-4 top-12 bottom-20 rounded-[2.5rem] border border-white/[0.07] bg-white/[0.015] backdrop-blur-[2px] pointer-events-none" />

          <div className="relative aspect-[1095/1600] [mask-image:linear-gradient(to_bottom,#000_80%,transparent_97%)]">
            <Image
              src="/profile.png"
              alt="Portrait of Muhammad Fathi Farhat"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 440px"
              className="object-contain object-bottom drop-shadow-[0_24px_50px_rgba(0,0,0,0.85)]"
            />
          </div>

          {/* Floating cards */}
          {floatingCards.map((card) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: card.delay }}
              className={`hidden sm:flex absolute ${card.className} animate-float items-center gap-2 px-3 py-2 rounded-xl glass-panel shadow-xl`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
              <span className="text-[11px] font-medium text-zinc-200 whitespace-nowrap">
                {card.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
