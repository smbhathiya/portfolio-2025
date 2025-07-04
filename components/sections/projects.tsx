"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      title: "Modern E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js 14, TypeScript, and Tailwind CSS. Features include user authentication, product filtering, cart functionality, and payment processing.",
      image: "/projects/ecommerce.jpg", // You'll need to add project images
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Stripe"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Task Management Dashboard",
      description: "An intuitive task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Built with React and Firebase.",
      image: "/projects/task-manager.jpg",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: true
    },
    {
      title: "Social Media Analytics Tool",
      description: "A data visualization dashboard for social media analytics, featuring customizable charts and reports. Built with Next.js and Chart.js.",
      image: "/projects/analytics.jpg",
      tags: ["Next.js", "Chart.js", "TypeScript", "API Integration"],
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "Real Estate Listing Platform",
      description: "A modern real estate platform with property listings, search functionality, and interactive maps. Utilizes server components and API routes.",
      image: "/projects/real-estate.jpg",
      tags: ["Next.js", "MongoDB", "Google Maps API", "Authentication"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
    {
      title: "Fitness Tracking Application",
      description: "A mobile-first fitness tracking app that allows users to record workouts, track progress, and set goals. Features a clean UI and interactive charts.",
      image: "/projects/fitness.jpg",
      tags: ["React Native", "TypeScript", "Firebase", "Health API"],
      githubUrl: "https://github.com",
      featured: false
    },
    {
      title: "AI-Powered Content Generator",
      description: "A web application that uses AI to generate content for various platforms. Features include template selection, tone adjustment, and export options.",
      image: "/projects/ai-generator.jpg",
      tags: ["Next.js", "OpenAI API", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      featured: false
    },
  ];

  // Separate featured projects from regular ones
  const featuredProjects = projects.filter(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-28 md:py-36 bg-gradient-to-b from-background to-muted/30 relative">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-6 text-center mb-20">

          
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary-foreground">
            Featured Projects
          </h2>
          
          <div className="relative">
            <p className="max-w-[75%] text-muted-foreground text-lg md:text-xl mt-8 mx-auto">
              Showcasing my best work and technical capabilities with a focus on user experience
            </p>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Featured Projects (Enhanced Layout) */}
        <div className="mb-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 mb-32 last:mb-0 items-center`}
            >
              {/* Project Image - Enhanced with modern effects */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border/40 shadow-xl relative group">
                  {/* Background decoration for the card */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
                  
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                  
                  {/* Floating tags on the image */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[70%] justify-end">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="secondary" className="bg-background/80 backdrop-blur-sm text-foreground border border-primary/20 shadow-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-primary/5 blur-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-secondary/5 blur-2xl -z-10"></div>
              </div>

              {/* Project Details - Enhanced with modern typography and layout */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                
                <h3 className="text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">{project.title}</h3>
                
                <div className="relative p-6 bg-muted/50 backdrop-blur-sm rounded-xl mb-6 border border-border/40 shadow-sm">
                  <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="px-3 py-1 text-sm font-medium border-primary/30 hover:border-primary/60 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-5">
                  {project.githubUrl && (
                    <Button variant="outline" size="lg" className="rounded-full border-primary/40 hover:border-primary shadow-sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <IconBrandGithub className="h-5 w-5" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="lg" className="rounded-full shadow-md bg-primary/90 hover:bg-primary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <IconExternalLink className="h-5 w-5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-16">
          <div className="inline-flex items-center justify-center p-1.5 bg-secondary/10 backdrop-blur-sm rounded-full mb-2 border border-secondary/20">
            <Badge variant="secondary" className="px-4 py-1 text-base font-medium rounded-full shadow-sm">More Work</Badge>
          </div>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Other Notable Projects</h3>
        </div>

        {/* Regular Projects (Enhanced Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-border/40 bg-background/80 backdrop-blur-sm transition-all duration-500 
                hover:shadow-xl hover:border-primary/30 flex flex-col h-full
                hover:-translate-y-1"
            >
              <div className="aspect-[16/9] relative">
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90 z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Top tags */}
                <div className="absolute top-3 right-3 z-20 flex flex-wrap gap-1.5 justify-end">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-background/80 backdrop-blur-sm text-xs border border-primary/20 shadow-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <CardHeader className="p-6 pb-3 relative z-20">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3 mt-3 text-muted-foreground/90">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-6 pt-0 flex-grow">
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="px-2 py-0.5 text-xs border-primary/20 text-muted-foreground/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-2 flex justify-between border-t border-border/30 bg-muted/20">
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" className="rounded-full h-9 w-9 p-0" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="View code on GitHub">
                        <IconBrandGithub className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="ghost" size="sm" className="rounded-full h-9 w-9 p-0" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="View live demo">
                        <IconExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <Button variant="outline" size="sm" className="rounded-full text-xs" asChild>
                  <a href={project.githubUrl || project.liveUrl || "#"} target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Enhanced decorative elements */}
        <div className="hidden md:block absolute top-40 right-10 w-[28rem] h-[28rem] bg-gradient-to-br from-primary/10 to-secondary/5 rounded-full blur-3xl opacity-40 -z-10 animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="hidden md:block absolute bottom-60 left-10 w-[25rem] h-[25rem] bg-gradient-to-tl from-primary/5 to-secondary/5 rounded-full blur-3xl opacity-30 -z-10 animate-pulse" style={{ animationDuration: '20s' }}></div>
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-gradient-to-tr from-background via-primary/5 to-background rounded-full blur-3xl opacity-20 -z-10"></div>
        
        {/* Enhanced Call to action */}
        <div className="mt-32 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-30 -z-10 blur-xl"></div>
          
          <div className="max-w-2xl mx-auto px-6 py-12 rounded-2xl border border-border/40 bg-background/50 backdrop-blur-sm shadow-lg">
            <h4 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">Interested in My Work?</h4>
            <p className="text-muted-foreground text-lg mb-8">
              Check out more of my projects and contributions on GitHub
            </p>
            <Button asChild variant="default" size="lg" className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 shadow-md flex items-center gap-2 group">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <IconBrandGithub className="h-6 w-6" />
                <span>Explore My GitHub</span>
                <IconExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
