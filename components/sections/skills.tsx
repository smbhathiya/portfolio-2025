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
    <section
      id="skills"
      className="py-24 md:py-32 relative overflow-hidden bg-mesh"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="text-[15vw] font-black text-primary/5 tracking-tighter leading-none whitespace-nowrap opacity-50">
          STACK
        </div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center mb-24">
          <h2 className="font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter">
            Technical <span className="text-primary italic">Arsenal</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
            A curated selection of modern technologies and industry-standard
            tools I leverage to engineer robust digital solutions.
          </p>
        </div>

        {/* Skills section with responsive layout */}
        <div className="mt-16 space-y-12">
          {/* Mobile: Animated marquee layout */}
          <div className="md:hidden space-y-6">
            {/* First row - Frontend */}
            <div className="relative w-full overflow-hidden group">
              <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent" />

              <div className="flex items-center gap-4 py-3 animate-marquee-mobile group-hover:pause">
                {rowOneSkills.map((skill, index) => (
                  <div
                    key={`mobile-row1-${index}`}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl glass shadow-xl border-white/5 min-w-[80px] flex-shrink-0"
                  >
                    <span className="text-primary">
                      {React.cloneElement(skill.icon, { className: "h-5 w-5" })}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Second row - Backend (opposite direction) */}
            <div className="relative w-full overflow-hidden group">
              <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent" />

              <div className="flex items-center gap-4 py-3 animate-marquee-mobile-reverse group-hover:pause">
                {rowTwoSkills.map((skill, index) => (
                  <div
                    key={`mobile-row2-${index}`}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl glass shadow-xl border-white/5 min-w-[80px] flex-shrink-0"
                  >
                    <span className="text-primary">
                      {React.cloneElement(skill.icon, { className: "h-5 w-5" })}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Third row - Tools & DevOps */}
            <div className="relative w-full overflow-hidden group">
              <div className="absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-background to-transparent" />

              <div className="flex items-center gap-4 py-3 animate-marquee-mobile group-hover:pause">
                {rowThreeSkills.map((skill, index) => (
                  <div
                    key={`mobile-row3-${index}`}
                    className="flex flex-col items-center gap-2 p-4 rounded-2xl glass shadow-xl border-white/5 min-w-[80px] flex-shrink-0"
                  >
                    <span className="text-primary">
                      {React.cloneElement(skill.icon, { className: "h-5 w-5" })}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Marquee layout */}
          <div className="hidden md:block space-y-10">
            {/* Top row - Skills infinite scroll marquee effect */}
            <div
              ref={containerRef}
              className="relative w-full overflow-hidden group"
            >
              <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

              <div className="flex items-center gap-8 py-6 animate-marquee-infinite group-hover:pause">
                {rowOneSkills.map((skill, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex items-center gap-5 px-8 py-5 rounded-[2rem] glass shadow-2xl shadow-black/5 border-white/10
                      whitespace-nowrap hover:border-primary/50 hover:bg-primary/5 hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 active:scale-95"
                  >
                    <span className="text-primary transition-transform duration-500 group-hover:scale-110">
                      {React.cloneElement(skill.icon, { className: "h-8 w-8" })}
                    </span>
                    <span className="text-xl font-black tracking-tight uppercase">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom row - Opposite direction */}
            <div className="relative w-full overflow-hidden group">
              <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
              <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

              <div className="flex items-center gap-8 py-6 animate-marquee-infinite-reverse group-hover:pause">
                {rowTwoSkills.map((skill, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex items-center gap-5 px-8 py-5 rounded-[2rem] glass shadow-2xl shadow-black/5 border-white/10
                      whitespace-nowrap hover:border-primary/50 hover:bg-primary/5 hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 active:scale-95"
                  >
                    <span className="text-primary transition-transform duration-500 group-hover:scale-110">
                      {React.cloneElement(skill.icon, { className: "h-8 w-8" })}
                    </span>
                    <span className="text-xl font-black tracking-tight uppercase">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
