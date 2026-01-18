"use client";

import * as React from "react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPython,
  IconCode,
  IconBrandMongodb,
  IconBrandMysql,
  IconDatabase,
  IconBrandDocker,
  IconBrandAws,
  IconBrandVercel,
  IconBrandFigma,
  IconBrandGit,
  IconBrandGithub,
  IconBrandVscode,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandSass,
  IconBrandFirebase,
  IconBrandStripe,
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function SkillsSection() {
  // Row 1: Frontend & Core
  const row1 = [
    { name: "TypeScript", icon: <IconBrandTypescript className="h-6 w-6" /> },
    { name: "React", icon: <IconBrandReact className="h-6 w-6" /> },
    { name: "Next.js", icon: <IconBrandNextjs className="h-6 w-6" /> },
    { name: "TailwindCSS", icon: <IconBrandTailwind className="h-6 w-6" /> },
    { name: "JavaScript", icon: <IconBrandJavascript className="h-6 w-6" /> },
    { name: "HTML5", icon: <IconBrandHtml5 className="h-6 w-6" /> },
    { name: "CSS3", icon: <IconBrandCss3 className="h-6 w-6" /> },
    { name: "SASS", icon: <IconBrandSass className="h-6 w-6" /> },
  ];

  // Row 2: Backend & Systems
  const row2 = [
    { name: ".NET / C#", icon: <IconCode className="h-6 w-6" /> },
    { name: "Node.js", icon: <IconBrandNodejs className="h-6 w-6" /> },
    { name: "Python", icon: <IconBrandPython className="h-6 w-6" /> },
    { name: "PostgreSQL", icon: <IconDatabase className="h-6 w-6" /> },
    { name: "MySQL", icon: <IconBrandMysql className="h-6 w-6" /> },
    { name: "MongoDB", icon: <IconBrandMongodb className="h-6 w-6" /> },
    { name: "Firebase", icon: <IconBrandFirebase className="h-6 w-6" /> },
  ];

  // Row 3: DevOps & Infrastructure
  const row3 = [
    { name: "Docker", icon: <IconBrandDocker className="h-6 w-6" /> },
    { name: "AWS", icon: <IconBrandAws className="h-6 w-6" /> },
    { name: "Vercel", icon: <IconBrandVercel className="h-6 w-6" /> },
    { name: "Stripe", icon: <IconBrandStripe className="h-6 w-6" /> },
    { name: "GIT", icon: <IconBrandGit className="h-6 w-6" /> },
    { name: "GitHub", icon: <IconBrandGithub className="h-6 w-6" /> },
    { name: "VS Code", icon: <IconBrandVscode className="h-6 w-6" /> },
    { name: "Figma", icon: <IconBrandFigma className="h-6 w-6" /> },
  ];

  const MarqueeRow = ({
    skills,
    direction = "normal",
  }: {
    skills: any[];
    direction?: "normal" | "reverse";
  }) => {
    return (
      <div className="relative w-full overflow-hidden py-4">
        <div
          className={`flex items-center gap-6 px-4 whitespace-nowrap ${
            direction === "normal"
              ? "animate-marquee-infinite"
              : "animate-marquee-infinite-reverse"
          }`}
        >
          {/* Double the items for seamless loop */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex items-center gap-4 px-8 py-5 rounded-[2rem] glass-card  hover:shadow-primary/20 transition-all duration-300 hover:scale-105"
            >
              <span className="text-foreground/70">{skill.icon}</span>
              <span className="text-sm font-black tracking-[0.2em] uppercase">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      {/* Background large text "STACK" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[18vw] font-black text-foreground/[0.03] tracking-tighter leading-none whitespace-nowrap transform -translate-y-12">
          TEC STACK
        </h2>
      </div>

      <div className=" px-4 md:px-6 max-w-8xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="flex flex-col items-center mb-32"
        >
          {/* <Badge className="mb-6 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            My Capabilities
          </Badge> */}
          <h2 className="font-black text-5xl md:text-8xl tracking-tighter uppercase text-center leading-none">
            Technical Stack
          </h2>
        </motion.div>

        {/* Infinite scrolling marquee rows */}
        <div className="relative">
          {/* Gradient masks for smooth fade */}
          <div className="absolute left-0 top-0 z-20 h-full w-20 md:w-40 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-20 h-full w-20 md:w-40 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none" />

          <div className="space-y-8 md:space-y-10">
            <MarqueeRow skills={row1} direction="normal" />
            <MarqueeRow skills={row2} direction="reverse" />
            <MarqueeRow skills={row3} direction="normal" />
          </div>
        </div>
      </div>
    </section>
  );
}
