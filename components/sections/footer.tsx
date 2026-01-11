"use client";

import Link from "next/link";
import { IconHeart } from "@tabler/icons-react";
import { ScrollToTopButton } from "../ui/scroll-to-top-button";
import { WhatsAppMessageButton } from "../ui/whatsapp-message-button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-20 border-t border-border/40 relative bg-mesh/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h3 className="text-3xl font-black tracking-tighter">
              Bhathiya <span className="text-primary">Lakshan</span>
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
              Architecting high-performance digital ecosystems with a focus on
              scalability, security, and exceptional user experience.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary/60">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Home", href: "#home" },
                { name: "Journey", href: "#about" },
                { name: "Tech Stack", href: "#skills" },
                { name: "Portfolio", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:translate-x-1 inline-block"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-primary/60">
              Connect
            </h4>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:info@bhathiya.dev"
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                info@bhathiya.dev
              </a>
              <p className="text-muted-foreground font-medium">
                Kadawatha, Sri Lanka
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border/20 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
              © {currentYear} Bhathiya Lakshan &bull; All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to top and WhatsApp buttons */}
      <ScrollToTopButton />
      <WhatsAppMessageButton />
    </footer>
  );
}
