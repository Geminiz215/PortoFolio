"use client";

import React from "react";
import { Mail, MapPin, MessageCircle, ArrowUpRight, Download } from "lucide-react";
import { Reveal, Github, Linkedin } from "./ui";
import { site } from "@/lib/site";

const channels = [
  { icon: MapPin, label: "Location", value: site.location, href: null },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: site.whatsappLabel, href: site.whatsapp },
  { icon: Linkedin, label: "LinkedIn", value: "muhammad-farhat", href: site.linkedin },
  { icon: Github, label: "GitHub", value: "View profile", href: site.github },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className="relative py-24 lg:py-32 border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] radial-glow opacity-[0.07] blur-3xl pointer-events-none" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-zinc-300">
                Open to opportunities
              </span>
            </div>

            <h2 className="mt-7 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Have a project or opportunity
              <br className="hidden sm:block" /> in mind?
            </h2>

            <p className="mt-5 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto leading-relaxed">
              Let&apos;s build something useful, scalable, and well-engineered.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-xl hover:bg-brand-cyan transition-colors duration-300"
              >
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-white/10 bg-white/[0.02] text-white font-semibold text-sm px-6 py-3 rounded-xl hover:border-brand-cyan/40 hover:bg-white/[0.05] transition-all duration-300"
              >
                <Linkedin size={16} />
                LinkedIn
                <ArrowUpRight
                  size={14}
                  className="text-zinc-500 group-hover:text-brand-cyan transition-colors"
                />
              </a>
              <a
                href={site.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 px-4 py-3 hover:text-brand-cyan transition-colors"
              >
                <Download size={15} />
                Download CV
              </a>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px rounded-2xl overflow-hidden border border-white/[0.07] bg-white/[0.06] text-left">
            {channels.map((c, i) => {
              const Inner = (
                <div className="h-full p-5 bg-[#050506] hover:bg-white/[0.03] transition-colors duration-300">
                  <c.icon size={15} className="text-brand-cyan" />
                  <p className="mt-3 text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-500">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm text-zinc-200 truncate">{c.value}</p>
                </div>
              );
              return (
                <Reveal key={c.label} delay={i * 0.06}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer className="border-t border-white/5 bg-white/[0.012]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-black text-sm tracking-tighter">
                  MF
                </div>
                <div>
                  <p className="text-white font-bold text-sm tracking-tight uppercase">
                    {site.name}
                  </p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-0.5">{site.role}</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm text-zinc-500 leading-relaxed">
                Building scalable software from backend to interface.
              </p>
            </div>

            <div className="flex md:justify-end">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-500">
                  Elsewhere
                </p>
                <div className="mt-4 flex gap-2">
                  {[
                    { href: site.linkedin, icon: Linkedin, label: "LinkedIn" },
                    { href: site.github, icon: Github, label: "GitHub" },
                    { href: site.whatsapp, icon: MessageCircle, label: "WhatsApp" },
                    { href: `mailto:${site.email}`, icon: Mail, label: "Email" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.02] flex items-center justify-center text-zinc-400 hover:text-brand-cyan hover:border-brand-cyan/30 transition-all duration-300"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-zinc-600">&copy; 2026 {site.name}</p>
            <p className="text-[11px] font-mono text-zinc-700">
              Built with Next.js, Tailwind CSS &amp; Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
