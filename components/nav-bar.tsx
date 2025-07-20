"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ModeToggle = dynamic(() => import("./mode-toggle").then(mod => mod.ModeToggle), { ssr: false });
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
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

      // Update navbar background based on scroll
      setIsScrolled(scrollY > 50);

      // Scrollspy logic
      const sections = navItems.map(({ href }) => {
        const el = document.getElementById(href.replace("#", ""));
        if (!el) return { href, offsetTop: Number.POSITIVE_INFINITY };
        return { href, offsetTop: el.offsetTop };
      });

      let current = sections[0];
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (scrollY + NAVBAR_HEIGHT + 100 >= section.offsetTop) {
          current = section;
        } else {
          break;
        }
      }

      setActiveSection(current.href);
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
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
        )}
        style={{ height: NAVBAR_HEIGHT }}
      >
        <div className="flex items-center w-full max-w-6xl mx-auto px-6 md:px-8 h-full">
          {/* Logo/Brand */}

          {/* Desktop nav - centered with floating pill design */}
          <nav className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-md rounded-full border border-border/30 shadow-lg">
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
            </div>
          </nav>

          {/* Mobile nav button */}
          <div className="md:hidden flex-1 flex justify-end mr-4">
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

          {/* ModeToggle with enhanced styling */}
          <div className="flex-shrink-0">
            <div className="p-1 bg-background/20 backdrop-blur-md rounded-full border border-border/30">
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav with modern sliding animation */}
      <div
        className={cn(
          "fixed inset-x-0 top-[80px] z-40 md:hidden transition-all duration-300 ease-out",
          isMobileMenuOpen
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform -translate-y-4 pointer-events-none"
        )}
      >
        <div className="mx-4 mt-2 bg-background/95 backdrop-blur-xl rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
          <div className="px-6 py-6 space-y-2">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "block px-4 py-3 text-sm font-medium transition-all duration-200 rounded-xl hover:scale-[1.02] active:scale-[0.98]",
                  activeSection === item.href
                    ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                )}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden animate-in fade-in-0 duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Spacer */}
      <div style={{ height: NAVBAR_HEIGHT }} />
    </>
  );
}
