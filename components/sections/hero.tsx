"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left items-center lg:items-start">
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tight leading-[1.1] uppercase"
              >
                I&apos;m a{" "}
                <span className="text-highlight">Full Stack Engineer</span> that
                your system needs<span className="text-primary">.</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-xl md:text-2xl font-medium max-w-[500px] mx-auto lg:mx-0"
              >
                Hi! I&apos;m Bhathiya Lakshan. I architect and build resilient
                digital solutions for growth-focused companies.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="rounded-full h-14 px-10 text-lg font-black uppercase tracking-widest bg-primary text-primary-foreground hover:opacity-90 transition-all shadow-xl shadow-primary/20"
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
            </motion.div>
          </div>

          {/* Right Content - Glowing Orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] flex items-center justify-center">
              {/* Single Subtle Amber Wave */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0.1, 0],
                  scale: [0.8, 1.8],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border border-orange-500/20 shadow-[0_0_60px_rgba(249,115,22,0.1)]"
              />

              {/* Central Photo Container */}
              <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full flex items-center justify-center">
                {/* Main Glowing Border - Amber/Gold */}
                <div className="absolute inset-0 rounded-full border-4 border-orange-400/20 shadow-[0_0_40px_rgba(251,146,60,0.15)]" />

                {/* Image Container */}
                <div className="absolute inset-4 rounded-full overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl z-10">
                  <Image
                    src="/bhathiya-lakshan-2.png"
                    alt="Bhathiya Lakshan"
                    fill
                    className="object-cover transition-all duration-1000"
                    priority
                  />
                </div>
              </div>

              {/* Floating Tags */}
              {floatingTags.map((tag, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  style={{ top: tag.top, right: tag.right, bottom: tag.bottom }}
                  className="absolute z-20"
                >
                  <div className="px-5 py-2 rounded-full border border-white/5 bg-black/60 backdrop-blur-xl text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap text-white/90 shadow-2xl">
                    {tag.text === "+5 Years Experience"
                      ? "+2 Years Experience"
                      : tag.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Scroll indicator - Simplified */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
}
