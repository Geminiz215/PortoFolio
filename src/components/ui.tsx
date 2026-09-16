"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

/** Fade + slide-up on scroll. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Counts up to `to` once scrolled into view. */
export function Counter({ to, duration = 1600 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      setValue(Math.round(to * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return <span ref={ref}>{value.toLocaleString("en-US")}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      <div
        className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-brand-cyan/60" />
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-brand-cyan">
          {eyebrow}
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base sm:text-lg text-zinc-400 leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  );
}

/** Small pill used for tech stacks. */
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.07] text-[11px] font-mono text-zinc-400">
      {children}
    </span>
  );
}

/* Brand marks — lucide-react no longer ships company logos. */
type IconProps = { size?: number; className?: string };

export function Linkedin({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.4 8.75 21 11.1 21 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.03-3.32-2.03 0-2.34 1.58-2.34 3.21V21H9z" />
    </svg>
  );
}

export function Github({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.38-3.88-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  );
}

/** Real product screenshot in browser chrome matching the Mockups frame. */
export function Screenshot({
  src,
  alt,
  label,
  fit = "cover",
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  /** "cover" fills the frame (cards); "contain" shows the whole screen (lightbox). */
  fit?: "cover" | "contain";
  priority?: boolean;
}) {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden flex flex-col shadow-2xl select-none">
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between gap-3 border-b border-zinc-800 shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 block" />
          </div>
          <span className="text-zinc-500 text-[10px] font-mono ml-2 truncate">{label}</span>
        </div>
        <span className="hidden sm:block shrink-0 px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[9px] font-mono uppercase tracking-wider text-brand-cyan">
          Live system
        </span>
      </div>
      <div className={`relative flex-1 min-h-0 ${fit === "cover" ? "bg-white" : "bg-zinc-900"}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 760px"
          className={fit === "cover" ? "object-cover object-top" : "object-contain object-top"}
        />
      </div>
    </div>
  );
}
