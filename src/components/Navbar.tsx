"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { site } from "@/lib/site";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070B12]/85 backdrop-blur-lg border-b border-slate-800/80 py-3.5 shadow-lg shadow-black/20"
            : "bg-transparent py-5"
        }`}
      >
        {/* Reading progress bar for HR scannability */}
        <motion.div
          style={{ scaleX }}
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 origin-left"
        />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-950 flex items-center justify-center font-extrabold text-sm tracking-tighter group-hover:bg-cyan-400 transition-colors duration-200">
              MF
            </div>
            <div className="flex flex-col">
              <span className="text-slate-50 font-bold text-xs tracking-wider leading-none">
                M. FATHI FARHAT
              </span>
              <span className="text-[11px] text-slate-400 font-mono mt-1 leading-none">
                BACKEND / FULLSTACK
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1 bg-slate-900/70 border border-slate-800/80 px-2 py-1.5 rounded-full backdrop-blur-md"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-[13px] font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 relative ${
                    isActive ? "text-slate-50" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-slate-800/90 border border-slate-700/80 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* HR Quick Actions */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            <a
              href={site.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-cyan-400 px-3.5 py-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-cyan-400/40 transition-colors duration-200"
            >
              <Download size={14} />
              Resume / CV
            </a>
            <a
              href="#contact"
              className="bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs px-4 py-2.5 rounded-lg flex items-center gap-1.5 transition-colors duration-200 shadow-sm shadow-cyan-500/10 group"
            >
              Hire / Contact
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 transition-colors"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#070B12]/95 backdrop-blur-xl md:hidden flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col gap-5 text-center w-full max-w-xs">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold tracking-wide py-1.5 ${
                    activeSection === item.href.substring(1)
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.04 }}
                className="mt-4 pt-5 border-t border-slate-800 flex flex-col gap-3"
              >
                <a
                  href={site.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="border border-slate-700 bg-slate-900 text-slate-100 font-semibold text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:border-cyan-400/40 transition-colors"
                >
                  <Download size={16} />
                  Download CV (PDF)
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-cyan-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-300 transition-colors"
                >
                  Hire / Contact
                  <ArrowUpRight size={16} />
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
