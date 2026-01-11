"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ModeToggle = dynamic(
  () => import("./mode-toggle").then((mod) => mod.ModeToggle),
  { ssr: false }
);
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const NAVBAR_HEIGHT = 80;

export function NavBar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scrollspy and scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Always highlight the section whose top is closest to the navbar, even if all are below
      let closestIdx = 0;
      let minDist = Number.POSITIVE_INFINITY;
      navItems.forEach((item, idx) => {
        const el = document.getElementById(item.href.replace("#", ""));
        if (el) {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top - NAVBAR_HEIGHT - 10);
          if (dist < minDist) {
            minDist = dist;
            closestIdx = idx;
          }
        }
      });
      setActiveSection(navItems[closestIdx].href);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", throttledHandleScroll);
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
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        )}
        style={{ height: NAVBAR_HEIGHT }}
      >
        <div className="flex items-center w-full max-w-6xl mx-auto px-6 md:px-8 h-full">
          {/* Mobile nav button - now on the left for mobile */}
          <div className="md:hidden flex-shrink-0 flex justify-start mr-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 hover:bg-primary/10 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
              aria-label="Toggle mobile menu"
            >
              <svg
                className={cn(
                  "w-6 h-6 transition-transform duration-300",
                  isMobileMenuOpen ? "rotate-90" : "rotate-0"
                )}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop nav - centered with floating pill design */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full">
              {navItems.map((item) => (
                <div key={item.href} className="relative">
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:scale-105",
                      activeSection === item.href
                        ? "text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {activeSection === item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-full shadow-lg animate-in fade-in-0 zoom-in-95 duration-300" />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </div>
              ))}
              {/* ModeToggle moved here */}
              <div className="ml-2">
                <ModeToggle />
              </div>
            </div>
          </nav>

          {/* Remove ModeToggle's separate container on desktop */}
        </div>
      </div>

      {/* Mobile nav with full screen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300 ease-out",
          isMobileMenuOpen
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-4 pointer-events-none"
        )}
      >
        {/* Full screen background with blur */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Spacer for navbar */}
          <div style={{ height: NAVBAR_HEIGHT }} />

          {/* Navigation items - top left positioned */}
          <div className="px-8 pt-8 flex-1">
            <div className="space-y-4 w-full">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "block px-6 py-4 text-xl font-medium transition-all duration-200 rounded-xl hover:scale-[1.02] active:scale-[0.98] text-left",
                    activeSection === item.href
                      ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  )}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Mode toggle for mobile - bottom left */}
          <div className="px-8 pb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-border/30 bg-background/50 hover:bg-primary/10 hover:border-primary/30 transition-all duration-200">
              <ModeToggle
                className="bg-transparent hover:bg-transparent"
                iconSize="h-6 w-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ height: NAVBAR_HEIGHT }} />
    </>
  );
}
