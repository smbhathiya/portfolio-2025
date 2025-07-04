"use client"

import * as React from "react"
import { 
  IconBrandReact, IconBrandNextjs, IconBrandTypescript, IconBrandTailwind,
  IconBrandNodejs, IconBrandPython, IconBrandGraphql, IconCode,  
  IconBrandMongodb, IconBrandMysql, IconDatabase, IconBrandReddit, 
  IconBrandDocker, IconBrandAws, IconBrandVercel, IconGitMerge,
  IconBrandFigma, IconPalette, IconBrandGit, IconBrandGithub, IconBrandVscode,
  IconBraces, IconBrandJavascript, IconBrandHtml5, 
  IconBrandCss3, IconBrandSass, IconBrandFirebase, IconBrandStripe
} from "@tabler/icons-react"
import { useRef } from "react"

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
    { name: "Node.js", icon: <IconBrandNodejs className="h-8 w-8" /> },
    { name: "Express", icon: <IconCode className="h-8 w-8" /> },
    { name: "Python", icon: <IconBrandPython className="h-8 w-8" /> },
    { name: "GraphQL", icon: <IconBrandGraphql className="h-8 w-8" /> },
    { name: "MongoDB", icon: <IconBrandMongodb className="h-8 w-8" /> },
    { name: "PostgreSQL", icon: <IconDatabase className="h-8 w-8" /> },
    { name: "MySQL", icon: <IconBrandMysql className="h-8 w-8" /> },
    { name: "Redis", icon: <IconBrandReddit className="h-8 w-8" /> },
    { name: "Firebase", icon: <IconBrandFirebase className="h-8 w-8" /> },
  ];
  
  // DevOps and tools
  const devopsTools = [
    { name: "Docker", icon: <IconBrandDocker className="h-8 w-8" /> },
    { name: "AWS", icon: <IconBrandAws className="h-8 w-8" /> },
    { name: "Vercel", icon: <IconBrandVercel className="h-8 w-8" /> },
    { name: "CI/CD", icon: <IconGitMerge className="h-8 w-8" /> },
    { name: "Git", icon: <IconBrandGit className="h-8 w-8" /> },
    { name: "GitHub", icon: <IconBrandGithub className="h-8 w-8" /> },
    { name: "VS Code", icon: <IconBrandVscode className="h-8 w-8" /> },
  ];
  
  // Other skills
  const otherSkills = [
    { name: "Figma", icon: <IconBrandFigma className="h-8 w-8" /> },
    { name: "UI/UX", icon: <IconPalette className="h-8 w-8" /> },
    { name: "Stripe", icon: <IconBrandStripe className="h-8 w-8" /> },
    { name: "RESTful API", icon: <IconBraces className="h-8 w-8" /> },
  ];
  
  // Create two rows of skills for the marquee effect moving in opposite directions
  const rowOneSkills = [...frontendSkills, ...backendSkills, ...frontendSkills, ...backendSkills];
  const rowTwoSkills = [...devopsTools, ...otherSkills, ...devopsTools, ...otherSkills];

  return (
    <section className="py-28 md:py-36 bg-gradient-to-b from-background to-muted/30 relative" id="skills">
      <div className="w-full mx-auto">
        {/* Section header with enhanced modern design */}
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-6 text-center mb-14 px-4">
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary-foreground">
            Tech Stack
          </h2>
          
          <div className="relative">
            <p className="max-w-[75%] text-muted-foreground text-lg md:text-xl mx-auto">
              A curated collection of technologies I&apos;ve mastered and regularly use in my projects
            </p>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full animate-scale-pulse"></div>
          </div>
        </div>
        
        {/* Removed interactive indicator */}
        
        {/* Top row - Skills infinite scroll marquee effect */}
        <div ref={containerRef} className="relative w-full py-2 overflow-hidden group">
          {/* Removed gradient fade effect */}
          
          {/* Pause on hover functionality with smoother animation */}
          <div className="flex items-center gap-8 py-3 animate-marquee-infinite group-hover:pause">
            {rowOneSkills.map((skill, index) => (
              <div 
                key={`row1-${index}`}
                className="skill-item flex items-center gap-5 px-7 py-5 rounded-2xl bg-background/80 shadow-sm backdrop-blur-sm border-2 border-border/50 
                  whitespace-nowrap hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-primary/90 group-hover:text-primary transition-colors">
                  {React.cloneElement(skill.icon, { className: "h-9 w-9" })}
                </span>
                <span className="text-xl font-medium group-hover:text-primary/90 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom row - Opposite direction - Made closer to top row */}
        <div className="relative w-full py-2 overflow-hidden group -mt-4">
          {/* Removed gradient fade effect */}
          
          {/* Second row moving in opposite direction */}
          <div className="flex items-center gap-8 py-3 animate-marquee-infinite-reverse group-hover:pause">
            {rowTwoSkills.map((skill, index) => (
              <div 
                key={`row2-${index}`}
                className="skill-item flex items-center gap-5 px-7 py-5 rounded-2xl bg-background/80 shadow-sm backdrop-blur-sm border-2 border-border/50 
                  whitespace-nowrap hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-primary/90 group-hover:text-primary transition-colors">
                  {React.cloneElement(skill.icon, { className: "h-9 w-9" })}
                </span>
                <span className="text-xl font-medium group-hover:text-primary/90 transition-colors">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Removed interactive floating indicator at the bottom */}
        
        {/* Removed animated indicator arrows */}
        
        {/* Enhanced decorative elements with modern design */}
        <div className="hidden lg:block absolute top-20 left-10 w-[30rem] h-[30rem] bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="hidden lg:block absolute bottom-40 right-10 w-[25rem] h-[25rem] bg-gradient-to-tl from-primary/5 to-secondary/5 rounded-full blur-3xl opacity-40 -z-10 animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="hidden lg:block absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl opacity-40 -z-10 animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}
