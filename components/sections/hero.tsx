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
      className="py-16 md:py-24 flex items-center justify-center min-h-screen relative overflow-hidden"
    >
      {/* Large background text */}
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
                {/* <p className="text-xl font-medium text-muted-foreground">
                  I&apos;M BHATHIYA
                </p> */}
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                  <span className="text-primary">Bhathiya Lakshan</span>
                </h1>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-[600px]">
                Hi, I&apos;m Bhathiya Lakshan - passionate about breaking down
                complex user experience problems to craft integrity-focused
                solutions. I specialize in creating impactful digital
                experiences that connect and inspire people worldwide.
              </p>
            </div>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              {/* <Button size="lg" variant="outline" className="w-fit">
                <IconDownload className="mr-2 h-4 w-4" />
                Download CV
              </Button> */}

              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-border/50 hover:border-primary/50"
                  asChild
                >
                  <a
                    href="https://x.com/smbhathiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <IconBrandTwitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-border/50 hover:border-primary/50"
                  asChild
                >
                  <a
                    href="https://www.facebook.com/smbhathiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <IconBrandFacebook className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-border/50 hover:border-primary/50"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/in/bhathiya-lakshan-91579722a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <IconBrandLinkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full border border-border/50 hover:border-primary/50"
                  asChild
                >
                  <a
                    href="https://github.com/smbhathiya"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <IconBrandGithub className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full lg:justify-end">
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-[3rem] blur-2xl scale-110 opacity-60 rotate-3" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-transparent rounded-[3rem] blur-xl opacity-40 rotate-2" />

              {/* Main image container with rotation */}
              <div className="relative z-10 w-80 h-96 md:w-96 md:h-[28rem] lg:w-[400px] lg:h-[500px] overflow-hidden rounded-[3rem] border border-white/10 bg-background shadow-2xl rotate-3 hover:rotate-1 transition-transform duration-300">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-10" />

                <Image
                  src="/me.jpg"
                  alt="Profile image"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 400px"
                />
              </div>

              {/* Additional subtle glow effects */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-[4rem] blur-3xl opacity-30 rotate-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
