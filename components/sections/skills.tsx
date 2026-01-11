"use client";

import * as React from "react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandGraphql,
  IconCode,
  IconBrandMongodb,
  IconBrandMysql,
  IconDatabase,
  IconBrandReddit,
  IconBrandDocker,
  IconBrandAws,
  IconBrandVercel,
  IconGitMerge,
  IconBrandFigma,
  IconPalette,
  IconBrandGit,
  IconBrandGithub,
  IconBrandVscode,
  IconBraces,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandSass,
  IconBrandFirebase,
  IconBrandStripe,
} from "@tabler/icons-react";
import { useRef } from "react";

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Frontend skills
  const frontendSkills = [
    { name: "React", icon: <IconBrandReact className="h-8 w-8" /> },
    { name: "Next.js", icon: <IconBrandNextjs className="h-8 w-8" /> },
    { name: "JavaScript", icon: <IconBrandJavascript className="h-8 w-8" /> },
    { name: "TypeScript", icon: <IconBrandTypescript className="h-8 w-8" /> },
    { name: "TailwindCSS", icon: <IconBrandTailwind className="h-8 w-8" /> },
    { name: "HTML5", icon: <IconBrandHtml5 className="h-8 w-8" /> },
    { name: "CSS3", icon: <IconBrandCss3 className="h-8 w-8" /> },
    { name: "SASS", icon: <IconBrandSass className="h-8 w-8" /> },
  ];

  // Backend skills
  const backendSkills = [
    { name: ".NET / C#", icon: <IconCode className="h-8 w-8" /> },
    { name: "Node.js", icon: <IconBrandNodejs className="h-8 w-8" /> },
    { name: "Express", icon: <IconCode className="h-8 w-8" /> },
    { name: "Python", icon: <IconBrandPython className="h-8 w-8" /> },
    { name: "PostgreSQL", icon: <IconDatabase className="h-8 w-8" /> },
    { name: "MySQL", icon: <IconBrandMysql className="h-8 w-8" /> },
    { name: "MongoDB", icon: <IconBrandMongodb className="h-8 w-8" /> },
    { name: "Firebase", icon: <IconBrandFirebase className="h-8 w-8" /> },
  ];

  // DevOps, Infrastructure and Tools
  const devopsTools = [
    { name: "Vercel", icon: <IconBrandVercel className="h-8 w-8" /> },
    { name: "Cloudflare", icon: <IconCode className="h-8 w-8" /> }, // Cloudflare icon not in tabler, using IconCode for now
    { name: "Neon", icon: <IconDatabase className="h-8 w-8" /> }, // Neon icon use Database
    { name: "PostgreSQL", icon: <IconDatabase className="h-8 w-8" /> },
    { name: "Git", icon: <IconBrandGit className="h-8 w-8" /> },
    { name: "GitHub", icon: <IconBrandGithub className="h-8 w-8" /> },
    { name: "Docker", icon: <IconBrandDocker className="h-8 w-8" /> },
    { name: "AWS", icon: <IconBrandAws className="h-8 w-8" /> },
    { name: "VS Code", icon: <IconBrandVscode className="h-8 w-8" /> },
  ];

  // Other skills
  const otherSkills = [
    { name: "Figma", icon: <IconBrandFigma className="h-8 w-8" /> },
    { name: "UI/UX", icon: <IconPalette className="h-8 w-8" /> },
    { name: "Stripe", icon: <IconBrandStripe className="h-8 w-8" /> },
    { name: "RESTful API", icon: <IconBraces className="h-8 w-8" /> },
  ];

  // Create three rows of skills for the marquee effect moving in opposite directions
  const rowOneSkills = [...frontendSkills, ...frontendSkills];
  const rowTwoSkills = [...backendSkills, ...backendSkills];
  const rowThreeSkills = [
    ...devopsTools,
    ...otherSkills,
    ...devopsTools,
    ...otherSkills,
  ];

  return (
    <section id="skills" className="py-32 md:py-44 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-muted-foreground/3 leading-none whitespace-nowrap">
          SKILLS
        </div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        {/* Section header matching the about section style */}
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-8 text-center mb-16">
          <div className="space-y-4">
            {/* <p className="text-lg font-medium text-muted-foreground">
              My Technical Arsenal
            </p> */}
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              A curated collection of technologies I&apos;ve mastered and
              regularly use to build exceptional digital experiences
            </p>
          </div>
        </div>

        {/* Skills section with responsive layout */}
        <div className="mt-16 space-y-8">
          {/* Mobile: Animated marquee layout */}
          <div className="md:hidden space-y-4">
            {/* First row - Frontend */}
            <div className="relative w-full overflow-hidden group">
              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-background to-transparent" />

              <div className="flex items-center gap-3 py-2.5 animate-marquee-mobile group-hover:pause">
                {rowOneSkills.map((skill, index) => (
                  <div
                    key={`mobile-row1-${index}`}
                    className="flex flex-col items-center gap-1 p-2.5 rounded-lg bg-background/80 shadow-sm backdrop-blur-sm border border-border/50 
                      hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 min-w-[60px] flex-shrink-0"
                  >
                    <span className="text-primary/90">
                      {React.cloneElement(skill.icon, { className: "h-4 w-4" })}
                    </span>
                    <span className="text-xs font-medium text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - Backend (opposite direction) */}
            <div className="relative w-full overflow-hidden group">
              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-background to-transparent" />

              <div className="flex items-center gap-3 py-2.5 animate-marquee-mobile-reverse group-hover:pause">
                {rowTwoSkills.map((skill, index) => (
                  <div
                    key={`mobile-row2-${index}`}
                    className="flex flex-col items-center gap-1 p-2.5 rounded-lg bg-background/80 shadow-sm backdrop-blur-sm border border-border/50 
                      hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 min-w-[60px] flex-shrink-0"
                  >
                    <span className="text-primary/90">
                      {React.cloneElement(skill.icon, { className: "h-4 w-4" })}
                    </span>
                    <span className="text-xs font-medium text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Third row - Tools & DevOps */}
            <div className="relative w-full overflow-hidden group">
              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-background to-transparent" />

              <div className="flex items-center gap-3 py-2.5 animate-marquee-mobile group-hover:pause">
                {rowThreeSkills.map((skill, index) => (
                  <div
                    key={`mobile-row3-${index}`}
                    className="flex flex-col items-center gap-1 p-2.5 rounded-lg bg-background/80 shadow-sm backdrop-blur-sm border border-border/50 
                      hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 min-w-[60px] flex-shrink-0"
                  >
                    <span className="text-primary/90">
                      {React.cloneElement(skill.icon, { className: "h-4 w-4" })}
                    </span>
                    <span className="text-xs font-medium text-center leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Marquee layout */}
          <div className="hidden md:block">
            {/* Top row - Skills infinite scroll marquee effect */}
            <div
              ref={containerRef}
              className="relative w-full overflow-hidden group mb-8"
            >
              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

              {/* Pause on hover functionality with smoother animation */}
              <div className="flex items-center gap-6 py-4 animate-marquee-infinite group-hover:pause">
                {rowOneSkills.map((skill, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-background/80 shadow-lg backdrop-blur-sm border border-border/50 
                      whitespace-nowrap hover:border-primary/50 hover:bg-primary/5 hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-primary/90 group-hover:text-primary transition-colors">
                      {React.cloneElement(skill.icon, { className: "h-8 w-8" })}
                    </span>
                    <span className="text-lg font-medium group-hover:text-primary/90 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row - Opposite direction */}
            <div className="relative w-full overflow-hidden group">
              {/* Gradient fade effects */}
              <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />

              {/* Second row moving in opposite direction */}
              <div className="flex items-center gap-6 py-4 animate-marquee-infinite-reverse group-hover:pause">
                {rowTwoSkills.map((skill, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-background/80 shadow-lg backdrop-blur-sm border border-border/50 
                      whitespace-nowrap hover:border-primary/50 hover:bg-primary/5 hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-primary/90 group-hover:text-primary transition-colors">
                      {React.cloneElement(skill.icon, { className: "h-8 w-8" })}
                    </span>
                    <span className="text-lg font-medium group-hover:text-primary/90 transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements matching the about section style */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-primary/5 to-primary/10 rounded-full blur-3xl opacity-40 -z-10" />
      </div>
    </section>
  );
}
