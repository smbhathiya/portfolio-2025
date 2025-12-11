"use client";

import Link from "next/link";
import { IconHeart } from "@tabler/icons-react";
import { ScrollToTopButton } from "../ui/scroll-to-top-button";
import { WhatsAppMessageButton } from "../ui/whatsapp-message-button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-12 md:py-16 border-t border-border/40 relative">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Footer left */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Bhathiya Lakshan</h3>
            <p className="text-muted-foreground max-w-xs">
              Full Stack Developer passionate about creating user-friendly,
              performant web applications with modern technologies.
            </p>
          </div>

          {/* Footer center - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Teck Stack
              </Link>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Footer right */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <a
                href="mailto:info@bhathiya.dev"
                className="hover:text-primary transition-colors"
              >
                info@bhathiya.dev
              </a>
              <p>Kadawatha, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col items-center mt-12 pt-6 border-t border-border/20">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Bhathiya Lakshan. All rights reserved. Made with{" "}
            <IconHeart className="inline h-4 w-4 text-red-500" /> and modern web
            tech.
          </p>
        </div>

        {/* Subtle decorative element */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
      {/* Scroll to top and WhatsApp buttons */}
      <ScrollToTopButton />
      <WhatsAppMessageButton />
    </footer>
  );
}
