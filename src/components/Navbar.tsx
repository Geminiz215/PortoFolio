"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      Boolean
    ) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <nav
          aria-label="Primary Navigation"
          className={`pointer-events-auto w-full sm:w-auto flex items-center justify-between gap-3 sm:gap-6 px-3 sm:px-4 py-2 rounded-full glass-dock transition-all duration-300 ${
            scrolled ? "shadow-[0_16px_40px_-10px_rgba(23,25,28,0.14)]" : ""
          }`}
        >
          {/* Monogram FF */}
          <a
            href="#top"
            onClick={() => setActive("")}
            aria-label="Fathi Farhat — Back to top"
            className="flex items-center gap-2.5 pr-1 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17191C] rounded-full"
          >
            <span
              className="w-9 h-9 rounded-full glossy-sphere flex items-center justify-center font-display font-bold text-xs tracking-tight text-[#17191C] transition-transform duration-300 group-hover:scale-105"
              style={{
                background:
                  "radial-gradient(circle at 30% 28%, #F4FFCC 0%, #D6FF62 55%, #A5E8F5 100%)",
              }}
            >
              FF
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`relative px-3.5 py-2 rounded-full text-[13px] font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17191C] ${
                      isActive ? "text-[#17191C] font-semibold" : "text-[#4A515A] hover:text-[#17191C]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navActiveIndicator"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-[#D6FF62] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] -z-10"
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Availability Indicator + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17191C] text-[#F8FAF7] text-xs font-medium tracking-tight hover:bg-[#262A30] transition-colors min-h-[36px]"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6FF62] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6FF62]" />
              </span>
              <span>Available</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-[#17191C] hover:bg-[#17191C]/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#17191C]"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 8, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto md:hidden w-full max-w-sm rounded-3xl glass-dock p-3 shadow-2xl"
            >
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between px-4 min-h-[44px] rounded-2xl text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[#D6FF62] text-[#17191C] font-semibold"
                            : "text-[#17191C] hover:bg-[#17191C]/5"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="text-[11px] font-mono uppercase tracking-widest opacity-50">
                          0{NAV_ITEMS.indexOf(item) + 1}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
