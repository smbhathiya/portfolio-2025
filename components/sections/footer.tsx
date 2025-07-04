"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IconArrowUp, IconHeart } from "@tabler/icons-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

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
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Footer right */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="flex flex-col space-y-2 text-muted-foreground">
              <a href="mailto:your-email@example.com" className="hover:text-primary transition-colors">
                your-email@example.com
              </a>
              <a href="tel:+94777123456" className="hover:text-primary transition-colors">
                +94 777 123 456
              </a>
              <p>Colombo, Sri Lanka</p>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-6 border-t border-border/20">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Bhathiya Lakshan. All rights reserved. Made with <IconHeart className="inline h-4 w-4 text-red-500" /> and modern web tech.
          </p>
          <div className="mt-4 md:mt-0">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollToTop}
              className="rounded-full"
              aria-label="Scroll to top"
            >
              <IconArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Subtle decorative element */}
        <div className="hidden md:block absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      </div>
    </footer>
  )
}
