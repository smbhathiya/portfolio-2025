"use client";

import React, { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const NAVBAR_HEIGHT = 64;

export function NavBar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const offsets = navItems.map(({ href }) => {
        const el = document.getElementById(href.replace("#", ""));
        if (!el) return { href, offset: Number.POSITIVE_INFINITY };
        const rect = el.getBoundingClientRect();
        return { href, offset: Math.abs(rect.top - NAVBAR_HEIGHT - 10) };
      });
      const current = offsets.reduce(
        (prev, curr) => (curr.offset < prev.offset ? curr : prev),
        offsets[0]
      );
      setActiveSection(current.href);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(href.replace("#", ""));
    if (el) {
      window.scrollTo({
        top: el.offsetTop - NAVBAR_HEIGHT,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-background border-b shadow-sm"
        style={{ height: NAVBAR_HEIGHT }}
      >
        <div className="flex items-center w-full max-w-4xl mx-auto px-6 md:px-8 h-full">
          {/* Desktop nav - centered */}
          <nav className="hidden md:flex flex-1 justify-center gap-6 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-3 py-2 transition-colors hover:text-primary",
                  activeSection === item.href
                    ? "font-bold text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
          {/* Mobile nav button */}
          <div className="md:hidden flex-1">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {/* ModeToggle always at right */}
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-[64px] left-0 right-0 z-50 bg-background border-b shadow-lg md:hidden">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "block px-3 py-2 hover:text-primary transition-colors rounded-lg hover:bg-primary/10",
                    activeSection === item.href
                      ? "font-bold text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
      <div style={{ height: NAVBAR_HEIGHT }} />
    </>
  );
}
