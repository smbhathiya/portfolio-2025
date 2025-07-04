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
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-5 text-center mb-16">
          <Badge className="px-3.5 py-1.5 text-base font-medium mb-2" variant="outline">Portfolio</Badge>
          <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight">Featured Projects</h2>
          <p className="max-w-[85%] text-muted-foreground text-lg md:text-xl mt-4">
            Showcasing my best work and technical capabilities
          </p>
        </div>

        {/* Featured Projects (Larger Layout) */}
        <div className="mb-20">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 mb-20 last:mb-0 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-border/40 shadow-lg relative group">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <Badge variant="outline" className="mb-3">Featured Project</Badge>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-lg">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <IconBrandGithub className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <IconExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">Other Projects</h3>

        {/* Regular Projects (Grid Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-border/40 bg-background shadow-md transition-all duration-300 hover:shadow-lg hover:border-primary/20 flex flex-col">
              <div className="aspect-[16/9] relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-6">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <Badge key={i} variant="secondary" className="px-2 py-1 text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="px-2 py-1 text-xs">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-between">
                {project.githubUrl && (
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <IconBrandGithub className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <IconExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Subtle decorative elements */}
        <div className="hidden md:block absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-60 -z-10"></div>
        <div className="hidden md:block absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl opacity-60 -z-10"></div>
        
        {/* Call to action */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button asChild variant="outline" size="lg">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <IconBrandGithub className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
