"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.slice(1));

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="text-sm font-semibold text-white transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded"
          aria-label="Back to top"
        >
          jh.dev
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 sm:flex" role="list">
          {navLinks.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <a
                  href={href}
                  className={cn(
                    "relative text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded",
                    isActive ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-white"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile: simple text links */}
        <ul className="flex items-center gap-4 sm:hidden" role="list">
          {navLinks.slice(0, 3).map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-xs text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
