"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

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
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <nav
          aria-label="Primary Navigation"
          className="pointer-events-auto w-full md:w-auto flex items-center justify-between gap-3 md:gap-5 px-3 py-2 bg-[#FAF9F6] brutal-box rounded-xl"
        >
          {/* FF Monogram */}
          <a
            href="#top"
            onClick={() => setActive("")}
            aria-label="Fathi Farhat — Back to top"
            className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
          >
            <span className="w-10 h-10 bg-[#D7FF45] border-2 border-[#171717] shadow-[2px_2px_0_#171717] rounded-md flex items-center justify-center font-heavy text-sm tracking-tighter text-[#171717] transition-transform duration-150 group-hover:-rotate-6">
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
                    className={`relative px-3.5 py-2 rounded-md font-mono text-xs uppercase tracking-[0.12em] font-bold transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717] ${
                      isActive ? "text-[#171717]" : "text-[#171717]/70 hover:text-[#171717]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navPill"
                        transition={{ type: "spring", stiffness: 420, damping: 30 }}
                        className="absolute inset-0 bg-[#D7FF45] border-2 border-[#171717] shadow-[2px_2px_0_#171717] rounded-md -z-10"
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Availability Sticker + Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#171717] text-[#FAF9F6] hover:bg-[#526BFF] transition-colors font-mono text-[11px] font-bold uppercase tracking-[0.12em] min-h-[40px]"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D7FF45] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D7FF45]" />
              </span>
              <span>AVAIL // JKT</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              className="md:hidden w-11 h-11 rounded-md border-2 border-[#171717] bg-[#FF91C8] text-[#171717] flex items-center justify-center shadow-[2px_2px_0_#171717] active:translate-x-[1px] active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Color-Blocked Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 10 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto md:hidden w-full max-w-sm bg-[#FAF9F6] brutal-box rounded-xl p-3"
            >
              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item, idx) => {
                  const isActive = active === item.id;
                  const colors = ["#D7FF45", "#FF91C8", "#526BFF", "#FF7545", "#D7FF45"];
                  const activeBg = colors[idx % colors.length];
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setMobileOpen(false)}
                        style={isActive ? { backgroundColor: activeBg } : undefined}
                        className={`flex items-center justify-between px-4 min-h-[48px] rounded-md border-2 border-[#171717] font-display font-bold text-base tracking-tight transition-colors ${
                          isActive
                            ? "text-[#171717] shadow-[3px_3px_0_#171717]"
                            : "bg-white text-[#171717] hover:bg-[#D7FF45]"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="font-mono text-xs opacity-60">0{idx + 1}</span>
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
