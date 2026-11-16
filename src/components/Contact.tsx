"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Download,
  Copy,
  Check,
  Send,
  CheckCircle2,
  RotateCcw,
  AlertCircle,
} from "lucide-react";
import { Reveal, Github, Linkedin } from "./ui";
import { site } from "@/lib/site";

const INQUIRY_TYPES = [
  "Full-Time Role",
  "Technical Interview",
  "Contract / Project",
  "General Inquiry",
] as const;

type InquiryType = (typeof INQUIRY_TYPES)[number];

type FormState = {
  name: string;
  company: string;
  email: string;
  role: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM: FormState = {
  name: "",
  company: "",
  email: "",
  role: "",
  message: "",
};

const channels = [
  { icon: MapPin, label: "Location", value: site.location, href: null },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: site.whatsappLabel, href: site.whatsapp },
  { icon: Linkedin, label: "LinkedIn", value: "muhammad-farhat", href: site.linkedin },
  { icon: Github, label: "GitHub", value: "Geminiz215", href: site.github },
];

export default function Contact() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("Full-Time Role");
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${site.email}`;
    }
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.company.trim()) next.company = "Please enter your company or team name.";
    if (!form.email.trim()) {
      next.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = "Please include a brief note (at least 10 characters).";
    }
    return next;
  };

  const buildMailtoHref = () => {
    const subject = `[${inquiryType}] ${form.role ? `${form.role} — ` : ""}${form.company}`;
    const body = [
      `Hi Farhat,`,
      ``,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      form.role ? `Role / Opportunity: ${form.role}` : null,
      `Inquiry Type: ${inquiryType}`,
      ``,
      `Message:`,
      form.message,
    ]
      .filter((line) => line !== null)
      .join("\n");

    return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const buildWhatsappHref = () => {
    const text = `Hi Farhat, I'm ${form.name} from ${form.company} (${inquiryType}${
      form.role ? ` — ${form.role}` : ""
    }).\n\n${form.message}`;
    return `${site.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitted(true);
    window.location.href = buildMailtoHref();
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    setSubmitted(false);
  };

  const inputBase =
    "w-full h-12 px-4 rounded-xl bg-[#070B12] border text-[15px] text-slate-100 placeholder:text-slate-500 transition-colors duration-200 focus:outline-none focus:ring-2";

  return (
    <>
      <section id="contact" className="relative py-24 lg:py-32 border-t border-slate-800/70">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[640px] h-[320px] radial-glow opacity-[0.08] blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <Reveal className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-medium uppercase tracking-[0.14em] text-emerald-300">
                Open to Opportunities
              </span>
            </div>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-slate-50 leading-[1.15]">
              Let&apos;s discuss how I can contribute to your team.
            </h2>

            <p className="mt-4 text-base sm:text-[17px] text-slate-300 leading-relaxed">
              Whether you&apos;re hiring for a Backend / Fullstack Engineer role or scheduling a
              technical interview, send a quick note below or reach out directly.
            </p>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-start">
            {/* ---- Left: HR Quick Actions & Direct Channels ---- */}
            <Reveal delay={0.05} className="space-y-5">
              <div className="rounded-2xl border border-slate-800/90 bg-[#0B111E]/90 p-6 sm:p-7">
                <h3 className="text-lg font-bold text-slate-50 tracking-tight">
                  Quick HR Actions
                </h3>
                <p className="mt-1.5 text-sm text-slate-300 leading-relaxed">
                  Download my latest resume or copy my email for your ATS / interview invite.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row gap-3">
                  <a
                    href={site.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm px-5 py-3 rounded-xl transition-colors duration-200"
                  >
                    <Download size={16} />
                    Download CV (PDF)
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex-1 min-h-[48px] inline-flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/80 hover:border-cyan-400/50 hover:bg-slate-800/80 text-slate-100 font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200"
                  >
                    {copiedEmail ? (
                      <>
                        <Check size={16} className="text-emerald-400" />
                        <span className="text-emerald-300">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} className="text-cyan-400" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Channels Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {channels.map((c) => {
                  const content = (
                    <div className="flex items-center justify-between gap-4 p-4 rounded-xl border border-slate-800/90 bg-[#0B111E]/80 hover:border-cyan-400/35 hover:bg-[#0E1523] transition-all duration-200">
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                          <c.icon size={17} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-mono uppercase tracking-[0.12em] text-slate-400">
                            {c.label}
                          </p>
                          <p className="text-sm font-medium text-slate-100 truncate mt-0.5">
                            {c.value}
                          </p>
                        </div>
                      </div>
                      {c.href && <ArrowUpRight size={16} className="text-slate-400 shrink-0" />}
                    </div>
                  );

                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={c.label}>{content}</div>
                  );
                })}
              </div>
            </Reveal>

            {/* ---- Right: Interactive HR Inquiry Form ---- */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-slate-800/90 bg-[#0B111E]/95 p-6 sm:p-8 shadow-2xl shadow-black/30">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="submitted"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="py-6 text-center"
                    >
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 className="mt-5 text-2xl font-bold text-slate-50 tracking-tight">
                        Inquiry Ready to Send
                      </h3>
                      <p className="mt-2.5 text-[15px] text-slate-300 max-w-md mx-auto leading-relaxed">
                        Your email client should open with your pre-filled message for{" "}
                        <span className="text-slate-100 font-semibold">{inquiryType}</span>. You
                        can also send it directly via WhatsApp.
                      </p>

                      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={buildMailtoHref()}
                          className="min-h-[48px] inline-flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition-colors"
                        >
                          <Mail size={16} />
                          Open Email Client
                        </a>
                        <a
                          href={buildWhatsappHref()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="min-h-[48px] inline-flex items-center gap-2 border border-emerald-500/35 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-semibold text-sm px-5 py-3 rounded-xl transition-colors"
                        >
                          <MessageCircle size={16} />
                          Send via WhatsApp
                        </a>
                      </div>

                      <button
                        type="button"
                        onClick={handleReset}
                        className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
                      >
                        <RotateCcw size={13} />
                        Edit or send another inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-slate-50 tracking-tight">
                          Send an HR / Hiring Inquiry
                        </h3>
                        <p className="mt-1 text-sm text-slate-400">
                          Select an inquiry type and share role or interview details.
                        </p>
                      </div>

                      {/* Inquiry Type Segmented Pills */}
                      <div>
                        <span className="block text-sm font-medium text-slate-200 mb-2.5">
                          Inquiry Type
                        </span>
                        <div
                          role="radiogroup"
                          aria-label="Inquiry Type"
                          className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2"
                        >
                          {INQUIRY_TYPES.map((type) => {
                            const active = inquiryType === type;
                            return (
                              <button
                                key={type}
                                type="button"
                                role="radio"
                                aria-checked={active}
                                onClick={() => setInquiryType(type)}
                                className={`relative px-3.5 py-2.5 rounded-xl text-xs sm:text-[13px] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                                  active
                                    ? "text-slate-950 font-semibold"
                                    : "text-slate-300 bg-slate-900/70 border border-slate-800 hover:border-slate-700 hover:text-white"
                                }`}
                              >
                                {active && (
                                  <motion.span
                                    layoutId="inquiryTypePill"
                                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                    className="absolute inset-0 rounded-xl bg-cyan-400 -z-0"
                                  />
                                )}
                                <span className="relative z-10">{type}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Name & Company */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="hr-name"
                            className="block text-sm font-medium text-slate-200 mb-2"
                          >
                            Your Name <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            id="hr-name"
                            type="text"
                            autoComplete="name"
                            placeholder="e.g. Sarah Wijaya"
                            value={form.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            aria-invalid={Boolean(errors.name)}
                            aria-describedby={errors.name ? "hr-name-error" : undefined}
                            className={`${inputBase} ${
                              errors.name
                                ? "border-rose-500/70 focus:border-rose-400 focus:ring-rose-500/20"
                                : "border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20"
                            }`}
                          />
                          {errors.name && (
                            <p
                              id="hr-name-error"
                              className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                            >
                              <AlertCircle size={12} />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="hr-company"
                            className="block text-sm font-medium text-slate-200 mb-2"
                          >
                            Company / Organization <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            id="hr-company"
                            type="text"
                            autoComplete="organization"
                            placeholder="e.g. PT Tech Nusantara"
                            value={form.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            aria-invalid={Boolean(errors.company)}
                            aria-describedby={errors.company ? "hr-company-error" : undefined}
                            className={`${inputBase} ${
                              errors.company
                                ? "border-rose-500/70 focus:border-rose-400 focus:ring-rose-500/20"
                                : "border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20"
                            }`}
                          />
                          {errors.company && (
                            <p
                              id="hr-company-error"
                              className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                            >
                              <AlertCircle size={12} />
                              {errors.company}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Work Email & Role */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="hr-email"
                            className="block text-sm font-medium text-slate-200 mb-2"
                          >
                            Work Email <span className="text-cyan-400">*</span>
                          </label>
                          <input
                            id="hr-email"
                            type="email"
                            autoComplete="email"
                            placeholder="sarah@company.com"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            aria-invalid={Boolean(errors.email)}
                            aria-describedby={errors.email ? "hr-email-error" : undefined}
                            className={`${inputBase} ${
                              errors.email
                                ? "border-rose-500/70 focus:border-rose-400 focus:ring-rose-500/20"
                                : "border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20"
                            }`}
                          />
                          {errors.email && (
                            <p
                              id="hr-email-error"
                              className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                            >
                              <AlertCircle size={12} />
                              {errors.email}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="hr-role"
                            className="block text-sm font-medium text-slate-200 mb-2"
                          >
                            Role / Position{" "}
                            <span className="text-xs font-normal text-slate-400">(Optional)</span>
                          </label>
                          <input
                            id="hr-role"
                            type="text"
                            placeholder="e.g. Backend Engineer (Go)"
                            value={form.role}
                            onChange={(e) => handleChange("role", e.target.value)}
                            className={`${inputBase} border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20`}
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label
                            htmlFor="hr-message"
                            className="block text-sm font-medium text-slate-200"
                          >
                            Message / Interview Details <span className="text-cyan-400">*</span>
                          </label>
                          <span className="text-xs font-mono text-slate-400">
                            {form.message.length}/1000
                          </span>
                        </div>
                        <textarea
                          id="hr-message"
                          rows={4}
                          maxLength={1000}
                          placeholder="Share the role overview, work arrangement (onsite/hybrid/remote), or preferred interview schedule..."
                          value={form.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          aria-invalid={Boolean(errors.message)}
                          aria-describedby={errors.message ? "hr-message-error" : undefined}
                          className={`w-full p-4 rounded-xl bg-[#070B12] border text-[15px] text-slate-100 placeholder:text-slate-500 leading-relaxed resize-y transition-colors duration-200 focus:outline-none focus:ring-2 ${
                            errors.message
                              ? "border-rose-500/70 focus:border-rose-400 focus:ring-rose-500/20"
                              : "border-slate-800 focus:border-cyan-400 focus:ring-cyan-400/20"
                          }`}
                        />
                        {errors.message && (
                          <p
                            id="hr-message-error"
                            className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
                          >
                            <AlertCircle size={12} />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <p className="text-xs text-slate-400">
                          Usually responds within <span className="text-slate-200">24 hours</span>.
                        </p>
                        <button
                          type="submit"
                          className="min-h-[48px] inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 active:scale-[0.99] text-slate-950 font-bold text-sm px-7 py-3 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/15"
                        >
                          <Send size={16} />
                          Send Inquiry
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer className="border-t border-slate-800/80 bg-[#05080E]">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-10">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-950 flex items-center justify-center font-extrabold text-sm tracking-tighter">
                  MF
                </div>
                <div>
                  <p className="text-slate-50 font-bold text-sm tracking-tight uppercase">
                    {site.name}
                  </p>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">{site.role}</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm text-slate-400 leading-relaxed">
                Building scalable software from backend to interface.
              </p>
            </div>

            <div className="flex md:justify-end">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.14em] text-slate-400">
                  Elsewhere
                </p>
                <div className="mt-4 flex gap-2.5">
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
                      className="w-11 h-11 rounded-lg border border-slate-800 bg-slate-900/70 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/40 transition-all duration-200"
                    >
                      <Icon size={17} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-400">&copy; 2026 {site.name}</p>
            <p className="text-xs font-mono text-slate-400">
              Built with Next.js, Tailwind CSS &amp; Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
