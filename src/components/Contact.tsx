"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageCircle,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  X,
  Download,
} from "lucide-react";
import { GlossyBubble, Magnetic, Reveal } from "./MotionPrimitives";
import { site } from "@/lib/site";

export default function Contact() {
  const [composerOpen, setComposerOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || message.trim().length < 6) {
      setError("Please fill in your name, email, and a short message.");
      return;
    }
    setError("");
    const subject = `Portfolio Inquiry from ${name.trim()}`;
    const body = `Hi Fathi,\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section
        id="contact"
        className="relative py-24 sm:py-36 bg-[#F8FAF7] overflow-hidden"
      >
        {/* Subtle luminous gradient wash */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] opacity-55"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(165,232,245,0.45), rgba(214,255,98,0.22), transparent 80%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="relative rounded-[2.75rem] bg-[#17191C] text-[#F8FAF7] p-8 sm:p-14 lg:p-20 overflow-hidden shadow-[0_36px_80px_-24px_rgba(23,25,28,0.35)]">
            {/* Large Glossy Liquid Bubble Centerpiece */}
            <GlossyBubble
              tone="iridescent"
              floatDuration={8.5}
              floatY={14}
              className="hidden md:flex absolute -right-12 -top-12 lg:right-8 lg:top-8 w-56 h-56 lg:w-72 lg:h-72 opacity-90 items-center justify-center animate-bubble-morph"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#17191C] font-semibold bg-white/65 backdrop-blur-sm px-3.5 py-1.5 rounded-full">
                Open to Talk
              </span>
            </GlossyBubble>

            <GlossyBubble
              tone="lime"
              floatDuration={6.4}
              floatY={8}
              className="hidden lg:block absolute right-64 bottom-10 w-20 h-20 opacity-90"
            />

            <Reveal className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-[#D6FF62]">
                <span className="w-2 h-2 rounded-full bg-[#D6FF62] animate-pulse" />
                06 / Contact
              </span>

              <h2 className="mt-5 font-display text-4xl sm:text-5xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.0] text-[#F8FAF7]">
                Have something interesting in mind?
              </h2>

              <p className="mt-5 text-lg sm:text-xl text-[#F8FAF7]/75 max-w-xl leading-relaxed">
                Let&apos;s build something meaningful together.
              </p>

              {/* Primary CTA + Quick Actions */}
              <div className="mt-10 flex flex-wrap items-center gap-3.5">
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => setComposerOpen(true)}
                    className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full glossy-pill-lime text-[#17191C] font-display font-bold text-sm sm:text-base tracking-tight cursor-pointer min-h-[50px]"
                  >
                    <span>Start a Conversation</span>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </button>
                </Magnetic>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white/10 hover:bg-white/16 border border-white/15 text-[#F8FAF7] text-sm font-medium transition-colors min-h-[50px]"
                >
                  {copied ? (
                    <>
                      <Check size={16} className="text-[#D6FF62]" aria-hidden="true" />
                      <span className="text-[#D6FF62]">Copied {site.email}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} aria-hidden="true" />
                      <span>{site.email}</span>
                    </>
                  )}
                </button>

                <a
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white/6 hover:bg-white/12 border border-white/10 text-[#F8FAF7]/90 text-sm font-medium transition-colors min-h-[50px]"
                >
                  <Download size={15} aria-hidden="true" />
                  <span>CV (PDF)</span>
                </a>
              </div>

              {/* Direct Verified Channels */}
              <div className="mt-12 pt-8 border-t border-white/12 grid sm:grid-cols-3 gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="group p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#F8FAF7]/55">
                      Email
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#F8FAF7] truncate">
                      {site.email}
                    </p>
                  </div>
                  <Mail
                    size={16}
                    aria-hidden="true"
                    className="text-[#D6FF62] shrink-0 transition-transform group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#F8FAF7]/55">
                      LinkedIn
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#F8FAF7] truncate">
                      muhammad-farhat
                    </p>
                  </div>
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="text-[#83CFFF] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>

                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 transition-colors flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#F8FAF7]/55">
                      WhatsApp
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#F8FAF7] truncate">
                      {site.whatsappLabel}
                    </p>
                  </div>
                  <MessageCircle
                    size={16}
                    aria-hidden="true"
                    className="text-[#B7F5DA] shrink-0 transition-transform group-hover:scale-110"
                  />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8FAF7] border-t border-[#17191C]/10 py-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#4A515A]">
          <div className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-full glossy-sphere flex items-center justify-center font-display font-bold text-[11px] text-[#17191C]"
              style={{
                background:
                  "radial-gradient(circle at 30% 28%, #F4FFCC 0%, #D6FF62 55%, #A5E8F5 100%)",
              }}
            >
              FF
            </span>
            <span className="font-medium text-[#17191C]">Designed &amp; Developed by Fathi.</span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-[0.12em]">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#17191C] transition-colors"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#17191C] transition-colors"
            >
              LinkedIn
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-[#17191C] transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Conversation Modal */}
      <AnimatePresence>
        {composerOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setComposerOpen(false)}
            className="fixed inset-0 z-50 bg-[#17191C]/65 backdrop-blur-md p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 14 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-[2rem] bg-[#F8FAF7] text-[#17191C] p-6 sm:p-8 shadow-2xl border border-white"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.15em] text-[#4A515A]">
                    Direct Note
                  </p>
                  <h3
                    id="contact-modal-title"
                    className="mt-1 font-display text-2xl font-bold tracking-tight"
                  >
                    Start a Conversation
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setComposerOpen(false)}
                  aria-label="Close message composer"
                  className="w-10 h-10 rounded-full bg-[#17191C]/8 hover:bg-[#17191C] hover:text-[#F8FAF7] flex items-center justify-center transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSend} className="mt-6 space-y-4">
                <div>
                  <label htmlFor="c-name" className="block text-xs font-mono uppercase tracking-wider text-[#4A515A] mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="c-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Rivera"
                    className="w-full h-12 px-4 rounded-2xl bg-white border border-[#17191C]/12 text-sm text-[#17191C] focus:outline-none focus:ring-2 focus:ring-[#17191C]"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs font-mono uppercase tracking-wider text-[#4A515A] mb-1.5">
                    Email
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full h-12 px-4 rounded-2xl bg-white border border-[#17191C]/12 text-sm text-[#17191C] focus:outline-none focus:ring-2 focus:ring-[#17191C]"
                  />
                </div>
                <div>
                  <label htmlFor="c-msg" className="block text-xs font-mono uppercase tracking-wider text-[#4A515A] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="c-msg"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your project, team, or idea..."
                    className="w-full p-4 rounded-2xl bg-white border border-[#17191C]/12 text-sm text-[#17191C] resize-y focus:outline-none focus:ring-2 focus:ring-[#17191C]"
                  />
                </div>

                {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#4A515A] hover:text-[#17191C]"
                  >
                    <MessageCircle size={14} aria-hidden="true" />
                    Or chat on WhatsApp
                  </a>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full glossy-pill-lime text-[#17191C] font-display font-bold text-sm min-h-[44px]"
                  >
                    <Send size={15} aria-hidden="true" />
                    Send via Email
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
