"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandFacebook,
  IconArrowRight,
} from "@tabler/icons-react";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const floatingTags = [
    { text: "Scalable Apps", top: "15%", right: "10%" },
    { text: "+5 Years Experience", top: "10%", right: "-5%" },
    { text: "Infrastructure", bottom: "15%", right: "15%" },
    { text: "Full Stack", bottom: "25%", right: "-5%" },
  ];

  return (
    <section
      id="home"
      className="pt-32 pb-16 md:pt-48 md:pb-24 flex flex-col items-center justify-center min-h-screen relative overflow-hidden bg-background"
    >
      {/* Background Section Title - Unified positioning */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[19vw] font-black text-foreground/[0.03] tracking-tighter leading-none whitespace-nowrap transform -translate-y-5">
          BHATHIYA
        </h2>
      </div>

      {/* Background Orbs - Neutralized */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-foreground/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-foreground/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-10 text-center lg:text-left items-center lg:items-start">
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.05] uppercase"
              >
                I&apos;m a{" "}
                <span className="text-highlight">Full Stack Engineer</span> that
                your system needs
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-xl md:text-2xl font-medium max-w-[500px] mx-auto lg:mx-0 uppercase tracking-tight opacity-70"
              >
                Hi, I&apos;m Bhathiya Lakshan. I architect and build resilient
                digital solutions for growth-focused companies
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start items-center w-full md:w-auto"
            >
              <Button
                size="lg"
                className="w-full md:w-auto rounded-full h-14 px-10 text-[11px] font-black uppercase tracking-[0.3em] bg-foreground text-background hover:opacity-90 transition-all shadow-2xl shadow-foreground/10 border-0"
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
              <div className="w-[90%] md:w-auto flex items-center justify-center gap-4 px-6 h-14 rounded-full border border-foreground/10 bg-foreground/[0.01] backdrop-blur-sm transition-all hover:bg-foreground/[0.03] hover:border-foreground/20 relative z-20 shadow-2xl shadow-foreground/5">
                <a
                  href="https://github.com/smbhathiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-foreground/40 hover:text-foreground transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <IconBrandGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhathiya-lakshan-91579722a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-foreground/40 hover:text-foreground transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <IconBrandLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/smbhathiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-foreground/40 hover:text-foreground transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <IconBrandTwitter className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/smbhathiya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-foreground/40 hover:text-foreground transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <IconBrandFacebook className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Glowing Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[480px] md:h-[480px] flex items-center justify-center group">
              {/* Animated Ring Waves */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0, 0.15, 0],
                    scale: [0.8, 1.8 + i * 0.2],
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 1.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                  className={cn(
                    "absolute inset-0 rounded-full border border-foreground/20 shadow-[0_0_80px_rgba(255,255,255,0.05)] transition-opacity duration-1000",
                    "group-hover:opacity-40 group-hover:scale-110",
                  )}
                />
              ))}

              {/* Central Photo Container */}
              <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]">
                {/* Main Glowing Border - Silver */}
                <div className="absolute inset-0 rounded-full border-2 md:border-4 border-foreground/10 bg-foreground/[0.02] backdrop-blur-3xl shadow-[0_0_60px_rgba(255,255,255,0.05)] group-hover:border-foreground/20 transition-colors duration-700" />

                {/* Image Container */}
                <div className="absolute inset-4 rounded-full overflow-hidden border border-foreground/10 bg-black/40 z-10">
                  <Image
                    src="/bhathiya-lakshan-2.png"
                    alt="Bhathiya Lakshan"
                    fill
                    className="object-cover transition-all duration-1000 brightness-100 hover:scale-105"
                    priority
                  />
                </div>

                {/* Name Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="px-6 py-2 rounded-full glass-card border border-foreground/20 bg-background/80 backdrop-blur-xl text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-foreground shadow-2xl whitespace-nowrap">
                    Bhathiya Lakshan
                  </div>
                </motion.div>
              </div>

              {/* Floating Tags - Realigned to match new design */}
              {[
                { text: "Scalable Apps", top: "15%", right: "8%" },
                { text: "+2 Years Experience", top: "8%", right: "-8%" },
                { text: "Infrastructure", bottom: "12%", right: "12%" },
                { text: "Full Stack", bottom: "22%", right: "-8%" },
              ].map((tag, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 1 + i * 0.1,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1] as any,
                  }}
                  style={{ top: tag.top, right: tag.right, bottom: tag.bottom }}
                  className="absolute z-20 pointer-events-none hidden md:block"
                >
                  <div className="px-5 py-2.5 rounded-full glass-card border border-foreground/10 bg-foreground/[0.02] text-[10px] font-black uppercase tracking-[0.25em] text-foreground/80 shadow-2xl">
                    {tag.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Scroll indicator - Refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <p className="text-[9px] font-black uppercase tracking-[0.6em] text-foreground/20 rotate-90 origin-left translate-x-[5px]">
          SCROLL
        </p>
        <div className="w-px h-16 bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent" />
      </motion.div>
    </section>
  );
}
