"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle, MapPin, Download, CheckCircle2 } from "lucide-react";
import { Github, Linkedin } from "@/components/ui";
import { site } from "@/lib/site";

const floatingCards = [
  { label: "3+ Years Experience", className: "top-8 -left-4 sm:-left-10", delay: 0.35 },
  { label: "Go / Golang & Node.js", className: "top-1/3 -right-4 sm:-right-8", delay: 0.45 },
  { label: "Fullstack (Next.js / React)", className: "bottom-24 -left-4 sm:-left-12", delay: 0.55 },
  { label: "Enterprise Systems", className: "bottom-8 -right-2 sm:-right-6", delay: 0.65 },
];

const socials = [
  { href: site.linkedin, icon: Linkedin, label: "LinkedIn" },
  { href: site.github, icon: Github, label: "GitHub" },
  { href: site.whatsapp, icon: MessageCircle, label: "WhatsApp" },
];

const hrSnapshot = [
  { label: "Experience", value: "3+ Years Production" },
  { label: "Core Stack", value: "Go, Next.js, ASP.NET, SQL" },
  { label: "Location", value: "Jakarta (Onsite / Hybrid / Remote)" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background: grid + soft executive glows */}
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <div className="absolute -top-40 left-1/4 w-[480px] h-[480px] radial-glow opacity-[0.08] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-20 right-0 w-[420px] h-[420px] radial-glow-blue opacity-[0.07] animate-pulse-slow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.08fr_0.92fr] gap-14 lg:gap-12 items-center">
        {/* ---- Left: copy ---- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono font-medium uppercase tracking-[0.14em] text-emerald-300">
              Open to Opportunities &bull; Backend &amp; Fullstack
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-slate-50 leading-[1.08]"
          >
            Building scalable software
            <br />
            from <span className="text-cyan-400 glow-text-cyan">backend</span> to{" "}
            <span className="text-cyan-400 glow-text-cyan">interface</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-5 max-w-xl text-base sm:text-[17px] text-slate-300 leading-relaxed"
          >
            I&apos;m <strong className="text-slate-100 font-semibold">{site.name}</strong>, a
            Backend &amp; Fullstack Developer with 3+ years of experience shipping enterprise
            approval systems, HRIS platforms, and Business Intelligence dashboards used by 1,000+
            daily users.
          </motion.p>

          {/* HR Quick-Scan Summary */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="mt-7 grid sm:grid-cols-3 gap-3 p-4 rounded-2xl border border-slate-800/90 bg-slate-900/55 backdrop-blur-sm"
          >
            {hrSnapshot.map((item) => (
              <div key={item.label} className="min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-[0.12em] text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-cyan-400 shrink-0" />
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-semibold text-slate-100 truncate">{item.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Primary & HR CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors duration-200 shadow-lg shadow-cyan-500/15"
            >
              Contact / Schedule Interview
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-700 bg-slate-900/80 hover:border-cyan-400/50 hover:bg-slate-800/80 text-slate-100 font-semibold text-sm px-5 py-3.5 rounded-xl transition-all duration-200"
            >
              <Download size={16} className="text-cyan-400" />
              Download CV (PDF)
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-cyan-400 px-3 py-3.5 transition-colors"
            >
              View Projects
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <div className="flex items-center gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-slate-800 bg-slate-900/70 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <span className="h-5 w-px bg-slate-800" />
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
              <MapPin size={14} className="text-cyan-400" />
              {site.location}
            </span>
          </motion.div>
        </div>

        {/* ---- Right: portrait composition ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute inset-x-6 top-10 bottom-16 radial-glow opacity-[0.16] blur-3xl animate-glow pointer-events-none" />
          <div className="absolute inset-x-4 top-12 bottom-20 rounded-[2.5rem] border border-slate-700/40 bg-slate-900/30 backdrop-blur-[2px] pointer-events-none" />

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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: card.delay }}
              className={`hidden sm:flex absolute ${card.className} animate-float items-center gap-2 px-3.5 py-2 rounded-xl glass-panel shadow-xl`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
              <span className="text-xs font-medium text-slate-100 whitespace-nowrap">
                {card.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
