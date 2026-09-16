"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

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


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section indicator on scroll
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-zinc-950/75 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-black text-sm tracking-tighter group-hover:bg-brand-cyan transition-colors duration-300">
              MF
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xs tracking-wider leading-none">M. FATHI FARHAT</span>
              <span className="text-[9px] text-zinc-500 font-mono mt-0.5">BACKEND / FULLSTACK</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-zinc-900/40 border border-white/5 px-2.5 py-1.5 rounded-full backdrop-blur-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-xs font-medium px-4 py-1.5 rounded-full transition-all duration-300 relative ${
                    isActive
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-zinc-900 border border-white/10 hover:border-brand-cyan/40 text-white font-sans font-bold text-xs px-5 py-2.5 rounded-lg flex items-center gap-1.5 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(255,255,255,0.02)] hover:shadow-[0_0_15px_-3px_rgba(6,182,212,0.15)] group"
            >
              Let&apos;s Talk
              <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-brand-cyan transition-colors" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
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
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-lg md:hidden flex flex-col justify-center items-center px-6"
          >
            <nav className="flex flex-col gap-6 text-center">
              {NAV_ITEMS.map((item, index) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold tracking-wide font-sans ${
                    activeSection === item.href.substring(1)
                      ? "text-brand-cyan"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                className="mt-6 pt-6 border-t border-white/5"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-brand-cyan text-black font-sans font-bold text-sm px-8 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-cyan/95 transition-colors"
                >
                  Let&apos;s Talk
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
