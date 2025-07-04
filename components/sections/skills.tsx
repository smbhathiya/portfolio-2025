"use client"

import { Badge } from "@/components/ui/badge"
import { 
  IconBrandReact, IconBrandNextjs, IconBrandTypescript, IconBrandTailwind,
  IconBrandNodejs, IconBrandPython, IconBrandGraphql, IconCode,  
  IconBrandMongodb, IconBrandMysql, IconDatabase, IconBrandReddit, 
  IconBrandDocker, IconBrandAws, IconBrandVercel, IconGitMerge,
  IconBrandFigma, IconPalette, IconBrandGit, IconBrandGithub, IconBrandVscode
} from "@tabler/icons-react"

export function SkillsSection() {
  // All skills in a single array for the infinite scroll effect with icons
  const allSkills = [
    { name: "React", icon: <IconBrandReact className="h-6 w-6" /> },
    { name: "Next.js", icon: <IconBrandNextjs className="h-6 w-6" /> },
    { name: "TypeScript", icon: <IconBrandTypescript className="h-6 w-6" /> },
    { name: "TailwindCSS", icon: <IconBrandTailwind className="h-6 w-6" /> },
    { name: "Node.js", icon: <IconBrandNodejs className="h-6 w-6" /> },
    { name: "Express", icon: <IconCode className="h-6 w-6" /> },
    { name: "Python", icon: <IconBrandPython className="h-6 w-6" /> },
    { name: "GraphQL", icon: <IconBrandGraphql className="h-6 w-6" /> },
    { name: "MongoDB", icon: <IconBrandMongodb className="h-6 w-6" /> },
    { name: "PostgreSQL", icon: <IconDatabase className="h-6 w-6" /> },
    { name: "MySQL", icon: <IconBrandMysql className="h-6 w-6" /> },
    { name: "Redis", icon: <IconBrandReddit className="h-6 w-6" /> },
    { name: "Docker", icon: <IconBrandDocker className="h-6 w-6" /> },
    { name: "AWS", icon: <IconBrandAws className="h-6 w-6" /> },
    { name: "Vercel", icon: <IconBrandVercel className="h-6 w-6" /> },
    { name: "CI/CD", icon: <IconGitMerge className="h-6 w-6" /> },
    { name: "Figma", icon: <IconBrandFigma className="h-6 w-6" /> },
    { name: "UI/UX", icon: <IconPalette className="h-6 w-6" /> },
    { name: "Git", icon: <IconBrandGit className="h-6 w-6" /> },
    { name: "GitHub", icon: <IconBrandGithub className="h-6 w-6" /> },
    { name: "VS Code", icon: <IconBrandVscode className="h-6 w-6" /> }
  ];
  
  // Duplicate the array for seamless infinite scroll effect
  const scrollSkills = [...allSkills, ...allSkills];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/30 relative" id="skills">
      <div className="w-full mx-auto">
        {/* Section header with modern design */}
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-5 text-center mb-16 px-4">
          <div className="inline-flex items-center justify-center p-1 bg-primary/10 backdrop-blur-sm rounded-full mb-3">
            <Badge className="px-4 py-1.5 text-base font-medium bg-primary text-primary-foreground rounded-full">Skills & Expertise</Badge>
          </div>
          
          <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Tech Stack
          </h2>
          
          <p className="max-w-[70%] text-muted-foreground text-lg md:text-xl mt-6">
            A curated collection of technologies I&apos;ve mastered and regularly use in my projects
          </p>
        </div>
        
        {/* Skills infinite scroll marquee effect - single line */}
        <div className="relative overflow-hidden w-full py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 after:bg-gradient-to-l after:from-background after:to-transparent">
          <div className="flex items-center animate-marquee-infinite gap-4 py-6">
            {scrollSkills.map((skill, index) => (
              <div 
                key={`scroll-${index}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 backdrop-blur-sm border border-border/30 whitespace-nowrap transition-all hover:bg-primary/10 hover:border-primary/30"
              >
                {skill.icon && <span className="text-primary">{skill.icon}</span>}
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements with modern design */}
        <div className="hidden lg:block absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl opacity-50 -z-10 animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="hidden lg:block absolute bottom-40 right-10 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-primary/10 rounded-full blur-3xl opacity-40 -z-10 animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}
