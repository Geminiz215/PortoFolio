"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Mail,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { Magnetic, MarqueeStrip, Reveal, StickerBadge } from "./MotionPrimitives";
import { site } from "@/lib/site";

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || message.trim().length < 6) {
      setError("Drop your name, email, and a short note (6+ chars).");
      return;
    }
    setError("");
    const subject = `Hey Fathi — Inquiry from ${name.trim()}`;
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section
        id="contact"
        className="relative bg-[#D7FF45] text-[#171717] overflow-hidden"
      >
        {/* Top Kinetic Marquee */}
        <MarqueeStrip
          items={[
            "LET'S BUILD SOMETHING",
            "OPEN FOR COLLAB",
            "JAKARTA / REMOTE",
            "BACKEND & FULLSTACK",
          ]}
          bg="#171717"
          textColor="#FAF9F6"
          separator="//"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-28">
          <div className="bg-[#FAF9F6] brutal-box-lg rounded-[2rem] p-7 sm:p-12 lg:p-16">
            <Reveal className="max-w-4xl">
              <StickerBadge bg="#FF91C8" rotate={-2}>
                06 // CONTACT
              </StickerBadge>

              <h2 className="mt-6 font-heavy text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.92] tracking-[-0.04em] text-[#171717] lowercase">
                got something{" "}
                <span className="inline-block bg-[#FF7545] px-3 py-0.5 border-[2.5px] border-[#171717] shadow-[5px_5px_0_#171717] rounded-xl italic">
                  cooking?
                </span>
              </h2>

              <p className="mt-6 font-display text-xl sm:text-2xl font-bold text-[#171717]/85 max-w-xl">
                Let&apos;s turn that idea into something real.
              </p>

              {/* Primary CTA + Quick Copy / CV */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="brutal-btn inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#171717] text-[#D7FF45] hover:bg-[#526BFF] hover:text-[#FAF9F6] font-display font-bold text-base tracking-tight cursor-pointer min-h-[54px]"
                  >
                    <span>let&apos;s make it happen</span>
                    <ArrowUpRight size={19} strokeWidth={2.5} aria-hidden="true" />
                  </button>
                </Magnetic>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="brutal-btn inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-[#D7FF45] text-[#171717] font-mono text-xs font-bold uppercase tracking-wider min-h-[54px]"
                >
                  {copied ? (
                    <>
                      <Check size={16} strokeWidth={2.5} aria-hidden="true" />
                      <span>copied {site.email}</span>
                    </>
                  ) : (
                    <>
                      <Copy size={15} aria-hidden="true" />
                      <span>{site.email}</span>
                    </>
                  )}
                </button>

                <a
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-white text-[#171717] font-mono text-xs font-bold uppercase tracking-wider min-h-[54px]"
                >
                  <FileText size={15} aria-hidden="true" />
                  <span>CV.PDF</span>
                </a>
              </div>

              {/* Verified Contact Channels */}
              <div className="mt-12 pt-8 border-t-2 border-[#171717] grid sm:grid-cols-3 gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="brutal-btn bg-white hover:bg-[#D7FF45] rounded-xl p-4 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#171717]/60">
                      Email
                    </p>
                    <p className="mt-1 font-display font-bold text-sm text-[#171717] truncate">
                      {site.email}
                    </p>
                  </div>
                  <Mail size={18} aria-hidden="true" className="shrink-0" />
                </a>

                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn bg-white hover:bg-[#526BFF] hover:text-[#FAF9F6] rounded-xl p-4 flex items-center justify-between gap-3 group"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-widest opacity-60">
                      LinkedIn
                    </p>
                    <p className="mt-1 font-display font-bold text-sm truncate">
                      muhammad-farhat
                    </p>
                  </div>
                  <ArrowUpRight size={18} aria-hidden="true" className="shrink-0" />
                </a>

                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn bg-white hover:bg-[#FF91C8] rounded-xl p-4 flex items-center justify-between gap-3"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#171717]/60">
                      WhatsApp
                    </p>
                    <p className="mt-1 font-display font-bold text-sm text-[#171717] truncate">
                      {site.whatsappLabel}
                    </p>
                  </div>
                  <MessageCircle size={18} aria-hidden="true" className="shrink-0" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] text-[#FAF9F6] border-t-[2.5px] border-[#171717] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 bg-[#D7FF45] text-[#171717] border-2 border-[#FAF9F6] rounded-md flex items-center justify-center font-heavy text-xs">
              FF
            </span>
            <p className="font-display font-bold text-sm sm:text-base tracking-tight">
              made with curiosity &amp; lots of coffee.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs font-bold uppercase tracking-[0.14em]">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF9F6]/75 hover:text-[#D7FF45] transition-colors"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FAF9F6]/75 hover:text-[#FF91C8] transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-[#D7FF45]">&copy; Fathi 2026</span>
          </div>
        </div>
      </footer>

      {/* Interactive Message Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-dialog-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            className="fixed inset-0 z-50 bg-[#171717]/80 backdrop-blur-sm p-4 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg bg-[#FAF9F6] text-[#171717] brutal-box-lg rounded-2xl p-6 sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#526BFF]">
                    DIRECT LINE
                  </span>
                  <h3
                    id="contact-dialog-title"
                    className="mt-1 font-heavy text-2xl sm:text-3xl tracking-tight lowercase"
                  >
                    let&apos;s make it happen.
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  aria-label="Close message dialog"
                  className="brutal-btn w-10 h-10 rounded-lg bg-[#FF91C8] flex items-center justify-center shrink-0"
                >
                  <X size={18} strokeWidth={2.5} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="m-name"
                    className="block font-mono text-xs font-bold uppercase tracking-wider mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="m-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Rivera"
                    className="w-full h-12 px-4 bg-white border-2 border-[#171717] rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#526BFF]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="m-email"
                    className="block font-mono text-xs font-bold uppercase tracking-wider mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="m-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@studio.co"
                    className="w-full h-12 px-4 bg-white border-2 border-[#171717] rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#526BFF]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="m-msg"
                    className="block font-mono text-xs font-bold uppercase tracking-wider mb-1.5"
                  >
                    What are we building?
                  </label>
                  <textarea
                    id="m-msg"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the project, role, or timeline..."
                    className="w-full p-4 bg-white border-2 border-[#171717] rounded-xl text-sm font-medium resize-y focus:outline-none focus:ring-2 focus:ring-[#526BFF]"
                  />
                </div>

                {error && <p className="text-xs font-bold text-[#FF7545]">{error}</p>}

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#171717] underline decoration-[#526BFF] decoration-2 underline-offset-4"
                  >
                    <MessageCircle size={14} aria-hidden="true" />
                    <span>WhatsApp instead</span>
                  </a>

                  <button
                    type="submit"
                    className="brutal-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D7FF45] text-[#171717] font-display font-bold text-sm min-h-[46px]"
                  >
                    <Send size={15} aria-hidden="true" />
                    <span>send note</span>
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
