"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
  IconBrandTwitter,
  IconBrandGithub,
} from "@tabler/icons-react";

export function ContactSection() {
  const handleEmailClick = () => {
    window.location.href = "mailto:info@bhathiya.dev";
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-mesh"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="text-[15vw] font-black text-primary/5 tracking-tighter leading-none whitespace-nowrap opacity-50">
          CONNECT
        </div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center mb-24">
          <h2 className="font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter">
            Get In <span className="text-primary italic">Touch</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
            Interested in collaboration or have a project that needs specialized
            expertise? Reach out via my professional channels.
          </p>
        </div>

        <div className="mx-auto flex flex-col md:flex-row gap-10 items-stretch justify-center mb-16 max-w-5xl">
          {/* Email Card */}
          <Card className="flex-1 p-10 border-0 glass shadow-2xl shadow-black/5 hover:shadow-primary/5 transition-all duration-500 group hover:-translate-y-2 rounded-[2.5rem] flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center p-4 border border-primary/20 mb-8 transition-transform duration-500 group-hover:scale-110">
              <IconMail className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-black tracking-tight mb-4">
              Professional Email
            </h3>
            <p className="text-muted-foreground mb-10 leading-relaxed font-medium">
              For project inquiries, architecture reviews, and high-impact role
              discussions.
            </p>
            <Button
              size="lg"
              onClick={handleEmailClick}
              className="rounded-full w-full h-14 text-lg font-black bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 transition-all active:scale-95"
            >
              info@bhathiya.dev
            </Button>
          </Card>

          {/* WhatsApp Card */}
          <Card className="flex-1 p-10 border-0 glass shadow-2xl shadow-black/5 hover:shadow-green-500/5 transition-all duration-500 group hover:-translate-y-2 rounded-[2.5rem] flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center p-4 border border-green-500/20 mb-8 transition-transform duration-500 group-hover:scale-110">
              <IconBrandWhatsapp className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="text-2xl font-black tracking-tight mb-4">
              Direct Message
            </h3>
            <p className="text-muted-foreground mb-10 leading-relaxed font-medium">
              Available for quick consultations and urgent technical support.
            </p>
            <Button
              size="lg"
              asChild
              className="rounded-full w-full h-14 text-lg font-black bg-green-500 hover:bg-green-600 shadow-xl shadow-green-500/20 transition-all active:scale-95"
            >
              <a
                href="https://wa.me/94723095865"
                target="_blank"
                rel="noopener noreferrer"
              >
                Message Now
              </a>
            </Button>
          </Card>
        </div>

        {/* Social Links Summary */}
        <div className="mx-auto max-w-2xl mt-24 p-1 rounded-[3rem] bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20">
          <div className="glass rounded-[2.8rem] p-10 flex flex-col items-center">
            <h3 className="text-lg font-black uppercase tracking-[0.2em] mb-10 text-primary/60">
              Digital Presence
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                {
                  icon: <IconBrandLinkedin className="h-8 w-8" />,
                  href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
                },
                {
                  icon: <IconBrandGithub className="h-8 w-8" />,
                  href: "https://github.com/smbhathiya",
                },
                {
                  icon: <IconBrandTwitter className="h-8 w-8" />,
                  href: "https://x.com/smbhathiya",
                },
                {
                  icon: <IconBrandFacebook className="h-8 w-8" />,
                  href: "https://www.facebook.com/smbhathiya",
                },
              ].map((social, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full w-16 h-16 border-border/40 hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 hover:scale-110 shadow-lg"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {React.cloneElement(
                      social.icon as React.ReactElement<any>,
                      {
                        className:
                          "text-muted-foreground hover:text-primary transition-colors h-8 w-8",
                      }
                    )}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Location & Copyright */}
        <div className="mt-24 pb-8 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-border/40 bg-background/50 text-sm font-bold text-muted-foreground shadow-sm">
            <IconMapPin className="h-4 w-4 text-primary" />
            <span>Kadawatha, Sri Lanka</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/30">
            &copy; 2025 Bhathiya Lakshan &bull; All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
}
