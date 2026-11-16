"use client";

import React, { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";

export type BubbleTone =
  | "lime"
  | "mint"
  | "aqua"
  | "sky"
  | "lavender"
  | "pink"
  | "iridescent";

const BUBBLE_GRADIENTS: Record<BubbleTone, string> = {
  lime: "radial-gradient(circle at 32% 28%, #F4FFCC 0%, #D6FF62 46%, #A8DE2A 100%)",
  mint: "radial-gradient(circle at 30% 26%, #ECFFF6 0%, #B7F5DA 52%, #7ADDB3 100%)",
  aqua: "radial-gradient(circle at 32% 28%, #E6FBFF 0%, #A5E8F5 50%, #5FC8E3 100%)",
  sky: "radial-gradient(circle at 30% 26%, #E3F4FF 0%, #83CFFF 52%, #47A7EB 100%)",
  lavender: "radial-gradient(circle at 32% 28%, #F1ECFF 0%, #C9B8FF 52%, #9B82F5 100%)",
  pink: "radial-gradient(circle at 32% 28%, #FFEBF3 0%, #FFB8D5 52%, #EE84B0 100%)",
  iridescent:
    "radial-gradient(circle at 28% 24%, #FFFFFF 0%, #A5E8F5 28%, #C9B8FF 58%, #FFB8D5 85%, #D6FF62 100%)",
};

interface GlossyBubbleProps extends HTMLMotionProps<"div"> {
  tone?: BubbleTone;
  interactive?: boolean;
  floatDuration?: number;
  floatY?: number;
}

/**
 * Tactile 3D glossy sphere with specular highlights and optional cursor-spring response.
 */
export function GlossyBubble({
  tone = "aqua",
  interactive = true,
  floatDuration = 6.5,
  floatY = 10,
  className = "",
  style,
  children,
  ...rest
}: GlossyBubbleProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.16;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.16;
    x.set(dx);
    y.set(dy);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={
        prefersReduced
          ? undefined
          : {
              y: [0, -floatY, 0],
              rotate: [0, 1.8, 0, -1.2, 0],
            }
      }
      transition={
        prefersReduced
          ? undefined
          : {
              duration: floatDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }
      }
      whileHover={interactive && !prefersReduced ? { scale: 1.04 } : undefined}
      whileTap={interactive && !prefersReduced ? { scale: 0.96 } : undefined}
      style={{
        background: BUBBLE_GRADIENTS[tone],
        x: springX,
        y: springY,
        ...style,
      }}
      className={`glossy-sphere select-none ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  yOffset?: number;
}

/**
 * Viewport-triggered editorial reveal that respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  yOffset = 20,
  className = "",
  ...rest
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-64px" }}
      transition={{
        duration: 0.55,
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
 * Subtle magnetic pull on pointer hover for primary CTAs.
 */
export function Magnetic({ children, className = "", strength = 0.22 }: MagneticProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 20 });
  const sy = useSpring(y, { stiffness: 260, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
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
