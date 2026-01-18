"use client";

import Link from "next/link";
import { ScrollToTopButton } from "../ui/scroll-to-top-button";
import { WhatsAppMessageButton } from "../ui/whatsapp-message-button";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-24 relative overflow-hidden bg-background border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-md"
          >
            <h3 className="text-3xl font-black tracking-tighter">
              Bhathiya<span className="text-primary">.</span>
            </h3>
            <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed">
              Software Engineer building modern web applications with clean code
              and scalable architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-12 md:gap-24"
          >
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary/60">
                Sitemap
              </h4>
              <nav className="flex flex-col space-y-4">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 font-bold hover:translate-x-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-primary/60">
                Contact
              </h4>
              <div className="flex flex-col space-y-4">
                <a
                  href="mailto:info@bhathiya.dev"
                  className="text-muted-foreground hover:text-primary transition-colors font-bold"
                >
                  info@bhathiya.dev
                </a>
                <p className="text-muted-foreground font-bold">
                  Colombo, Sri Lanka
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center gap-6">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-muted-foreground/30">
            © {currentYear} Bhathiya Lakshan &bull; Handcrafted with Precision
          </p>
        </div>
      </div>

      <ScrollToTopButton />
      <WhatsAppMessageButton />
    </footer>
  );
}
