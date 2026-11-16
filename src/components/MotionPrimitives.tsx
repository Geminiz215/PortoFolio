"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  yOffset?: number;
  clip?: boolean;
}

/**
 * Viewport-triggered reveal with optional clip-path entrance.
 */
export function Reveal({
  children,
  delay = 0,
  yOffset = 22,
  clip = false,
  className = "",
  ...rest
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  const initial = prefersReduced
    ? { opacity: 1 }
    : clip
      ? { opacity: 0, y: yOffset, clipPath: "inset(0 0 100% 0)" }
      : { opacity: 0, y: yOffset };

  const whileInView = prefersReduced
    ? { opacity: 1 }
    : clip
      ? { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }
      : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Cursor-reactive magnetic pull for primary interactive controls.
 */
export function Magnetic({ children, className = "", strength = 0.2 }: MagneticProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 20 });
  const sy = useSpring(y, { stiffness: 280, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  durationMs?: number;
}

/**
 * Viewport-triggered numeric counter with instant reduced-motion fallback.
 */
export function AnimatedCounter({
  target,
  suffix = "",
  durationMs = 1100,
}: AnimatedCounterProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (prefersReduced || !inView) return;

    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, durationMs, prefersReduced]);

  const displayed = prefersReduced ? target : value;

  return (
    <span ref={ref}>
      {displayed.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

interface StickerBadgeProps {
  children: React.ReactNode;
  bg?: string;
  textColor?: string;
  rotate?: number;
  className?: string;
}

/**
 * Die-cut neo-brutalist sticker badge with tactile hover wiggle.
 */
export function StickerBadge({
  children,
  bg = "#D7FF45",
  textColor = "#171717",
  rotate = -2,
  className = "",
}: StickerBadgeProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.span
      initial={{ rotate }}
      whileHover={prefersReduced ? undefined : { rotate: rotate * -1, scale: 1.06, y: -2 }}
      transition={{ type: "spring", stiffness: 360, damping: 18 }}
      style={{ backgroundColor: bg, color: textColor }}
      className={`sticker-tag inline-flex items-center gap-1.5 px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em] select-none ${className}`}
    >
      {children}
    </motion.span>
  );
}

interface MarqueeStripProps {
  items: string[];
  bg?: string;
  textColor?: string;
  separator?: string;
  className?: string;
}

/**
 * Kinetic scrolling ticker strip with CSS marquee and reduced-motion wrap fallback.
 */
export function MarqueeStrip({
  items,
  bg = "#171717",
  textColor = "#D7FF45",
  separator = "✦",
  className = "",
}: MarqueeStripProps) {
  const track = [...items, ...items, ...items, ...items];

  return (
    <div
      style={{ backgroundColor: bg, color: textColor }}
      className={`w-full overflow-hidden border-y-[2.5px] border-[#171717] py-3 select-none ${className}`}
    >
      <div className="flex w-max animate-marquee-x motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:w-full motion-reduce:gap-y-2">
        {track.map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center shrink-0">
            <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.16em] px-4 sm:px-6 whitespace-nowrap">
              {item}
            </span>
            <span aria-hidden="true" className="text-sm opacity-80">
              {separator}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
