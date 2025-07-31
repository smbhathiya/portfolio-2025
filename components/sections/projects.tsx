"use client"

import projectsData from "@/data/projects"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react"

export function ProjectsSection() {
  const mainProjects = projectsData.slice(0, 3);
  const otherProjects = projectsData.slice(3);

  return (
    <section id="projects" className="py-6 md:py-6 relative overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-6 text-center mb-20">
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="relative">
            <p className="max-w-[75%] text-muted-foreground text-lg md:text-xl mt-8 mx-auto">
              Showcasing my best work and technical capabilities with a focus on
              user experience
            </p>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Main Projects */}
        <div className="mb-24">
          {mainProjects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 mb-32 last:mb-0 items-center`}
            >
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-border/40 shadow-xl relative group">
                  <Image
                    src={project.images[0].replace(
                      "/source/projects/",
                      "/projects/"
                    )} // Use public/projects
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                  {/* <div className="absolute top-4 right-4 flex flex-wrap gap-2 max-w-[70%] justify-end">
                    {project.tag.slice(0, 3).map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-background/80 backdrop-blur-sm text-foreground border border-primary/20 shadow-sm"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div> */}
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-primary/5 blur-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-secondary/5 blur-2xl -z-10"></div>
              </div>
              <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                  {project.title}
                </h3>
                <div className="relative p-6 bg-muted/50 backdrop-blur-sm rounded-xl mb-6 border border-border/40 shadow-sm">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-5">
                  {project.gitUrl && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full border-primary/40 hover:border-primary shadow-sm"
                      asChild
                    >
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <IconBrandGithub className="h-5 w-5" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.previewUrl && project.previewUrl !== "#" && (
                    <Button
                      size="lg"
                      className="rounded-full shadow-md bg-primary/90 hover:bg-primary"
                      asChild
                    >
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
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
          </div>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
            Other Projects
          </h3>
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border/40 bg-background/80 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/30 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="aspect-[16/9] relative">
                <Image
                  src={project.images[0].replace(
                    "/source/projects/",
                    "/projects/"
                  )}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* <div className="absolute top-3 right-3 z-20 flex flex-wrap gap-1.5 justify-end">
                  {project.tag.slice(0, 2).map((tag, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="bg-background/80 backdrop-blur-sm text-xs border border-primary/20 shadow-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div> */}
              </div>
              <CardHeader className="p-6 pb-3 relative z-20">
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3 mt-3 text-muted-foreground/90">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 flex-grow">
                {/* <div className="flex flex-wrap gap-2 mt-4">
                  {project.tag.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="px-2 py-0.5 text-xs border-primary/20 text-muted-foreground/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div> */}
              </CardContent>
              <CardFooter className="p-6 pt-2 flex justify-between border-t border-border/30 bg-muted/20">
                <div className="flex space-x-3">
                  {project.gitUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full h-9 w-9 p-0"
                      asChild
                    >
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View code on GitHub"
                      >
                        <IconBrandGithub className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.previewUrl && project.previewUrl !== "#" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="rounded-full h-9 w-9 p-0"
                      asChild
                    >
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View live demo"
                      >
                        <IconExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs"
                  asChild
                >
                  <a
                    href={project.gitUrl || project.previewUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
