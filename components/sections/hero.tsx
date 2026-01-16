"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
} from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="py-16 md:py-24 flex items-center justify-center min-h-screen relative overflow-hidden bg-mesh"
    >
      {/* Background name text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="text-[12rem] md:text-[16rem] lg:text-[20rem] xl:text-[24rem] font-bold text-muted-foreground/5 leading-none whitespace-nowrap">
          BHATHIYA
        </div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 xl:gap-32 place-items-center">
          <div className="flex flex-col justify-center space-y-8 mx-auto w-full max-w-2xl">
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  <span className="text-primary">Bhathiya Lakshan</span>
                </h1>
                <p className="text-xl font-semibold text-muted-foreground/80 mt-2">
                  Full Stack Engineer & Infrastructure Specialist
                </p>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-[600px]">
                I specialize in architecting high-performance web applications
                and managing mission-critical digital infrastructure. Currently,
                I lead technical operations at Ishara Madhushan Online School,
                delivering robust full-stack solutions for over 50+ employees
                and thousands of students.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 active:scale-95"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el)
                    window.scrollTo({
                      top: el.offsetTop - 80,
                      behavior: "smooth",
                    });
                }}
              >
                Let&apos;s Connect
              </Button>

              <div className="flex gap-4">
                {[
                  {
                    icon: <IconBrandTwitter className="h-5 w-5" />,
                    href: "https://x.com/smbhathiya",
                    label: "Twitter",
                  },
                  {
                    icon: <IconBrandLinkedin className="h-5 w-5" />,
                    href: "https://www.linkedin.com/in/bhathiya-lakshan-91579722a/",
                    label: "LinkedIn",
                  },
                  {
                    icon: <IconBrandGithub className="h-5 w-5" />,
                    href: "https://github.com/smbhathiya",
                    label: "GitHub",
                  },
                  {
                    icon: <IconBrandFacebook className="h-5 w-5" />,
                    href: "https://www.facebook.com/smbhathiya",
                    label: "Facebook",
                  },
                ].map((social, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    size="icon"
                    className="rounded-full border border-border/50 hover:border-primary/50"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:justify-end">
            <div className="relative group">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 to-yellow-900/10 rounded-[3rem] blur-2xl scale-110 opacity-60 rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-900/40 to-transparent rounded-[3rem] blur-xl opacity-40 rotate-2" />

              {/* Main image container */}
              <div className="relative z-10 w-80 h-96 md:w-96 md:h-[28rem] lg:w-[400px] lg:h-[500px] overflow-hidden rounded-[3rem] border border-white/10 glass shadow-2xl rotate-3 hover:rotate-1 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-10" />

                <Image
                  src="/bhathiya-lakshan-2.png"
                  alt="Profile image"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 320px, 400px"
                />
              </div>

              {/* Additional glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-[4rem] blur-3xl opacity-30 rotate-1" />
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}
