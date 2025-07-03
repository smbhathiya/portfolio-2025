"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  IconBrandReact, IconBrandNodejs, IconBrandFigma, 
  IconBrandGit, IconDatabase, IconCloud
} from "@tabler/icons-react"

export function SkillsSection() {
  const skills = [
    {
      category: "Frontend",
      icon: <IconBrandReact className="h-10 w-10" />,
      items: ["React", "Next.js 14", "TypeScript", "TailwindCSS", "Framer Motion", "Redux", "HTML5/CSS3"]
    },
    {
      category: "Backend",
      icon: <IconBrandNodejs className="h-10 w-10" />,
      items: ["Node.js", "Express", "Python", "REST API", "GraphQL", "tRPC", "WebSockets"]
    },
    {
      category: "Database",
      icon: <IconDatabase className="h-10 w-10" />,
      items: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Prisma ORM", "Firebase"]
    },
    {
      category: "DevOps",
      icon: <IconCloud className="h-10 w-10" />,
      items: ["Docker", "CI/CD", "AWS", "Vercel", "Netlify", "GitHub Actions", "Linux"]
    },
    {
      category: "Design",
      icon: <IconBrandFigma className="h-10 w-10" />,
      items: ["UI/UX", "Figma", "Responsive Design", "Design Systems", "Wireframing", "Prototyping"]
    },
    {
      category: "Tools",
      icon: <IconBrandGit className="h-10 w-10" />,
      items: ["Git", "GitHub", "VS Code", "Jira", "Notion", "Postman", "Testing Libraries"]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/20 relative" id="skills">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-5 text-center mb-16">
          <Badge className="px-3.5 py-1.5 text-base font-medium mb-2" variant="outline">Professional Skills</Badge>
          <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight">My Technical Expertise</h2>
          <p className="max-w-[85%] text-muted-foreground text-lg md:text-xl mt-4">
            Technologies and tools I&apos;ve mastered throughout my career
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-border/40 bg-background shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:translate-y-[-2px]"
            >
              <div className="p-6 relative">
                {/* Abstract background pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                
                <div className="flex items-center gap-4 mb-5 relative">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight">{skill.category}</h3>
                </div>
                
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-2.5">
                    {skill.items.map((item, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="px-3 py-1.5 text-sm font-medium transition-all hover:bg-primary/20"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Subtle decorative elements */}
        <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-70 -z-10"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-70 -z-10"></div>
        
        {/* Call to action */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">
            Want to discuss a project or technical challenges? Feel free to reach out.
          </p>
          <Button asChild variant="default" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
