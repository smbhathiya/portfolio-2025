"use client";

import projectsData from "@/data/projects";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconBrandGithub,
  IconExternalLink,
  IconBuildingSkyscraper,
} from "@tabler/icons-react";

export function ProjectsSection() {
  const mainProjects = projectsData.slice(0, 5);
  const otherProjects = projectsData.slice(5);

  return (
    <section id="projects" className="py-6 md:py-6 relative overflow-hidden">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-6 text-center mb-20">
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="relative">
            <p className="max-w-[800px] text-muted-foreground text-lg md:text-xl mt-8 mx-auto">
              A selection of high-impact applications ranging from internal
              enterprise systems to highly scalable consumer platforms.
            </p>
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {mainProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col items-start p-6 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/50 transition-all duration-500" />

              <div className="flex flex-col h-full w-full">
                {/* Image Section for Non-Internal Main Projects */}
                {!project.isInternal &&
                  project.images &&
                  project.images.length > 0 && (
                    <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 border border-border/40 shadow-sm relative">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  )}

                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-primary/80 transition-all duration-300">
                    {project.title}
                  </h3>
                  {project.isInternal && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-[10px] font-bold uppercase tracking-wider text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                      Proprietary
                    </div>
                  )}
                </div>

                <div className="relative flex-grow mb-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-4">
                    {project.gitUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-full hover:bg-primary/10 hover:text-primary transition-all underline decoration-primary/20 hover:decoration-primary"
                        asChild
                      >
                        <a
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <IconBrandGithub className="h-4 w-4" />
                          Source
                        </a>
                      </Button>
                    )}
                    {project.previewUrl && project.previewUrl !== "#" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-full hover:bg-primary/10 hover:text-primary transition-all underline decoration-primary/20 hover:decoration-primary"
                        asChild
                      >
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <IconExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Removed Confidential label as requested */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
            Personal Projects & Experiments
          </h3>
        </div>

        {/* Other Projects Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <Card
              key={project.id}
              className="group border-border/40 bg-background/40 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:border-primary/20 flex flex-col h-full overflow-hidden"
            >
              {!project.isInternal &&
                project.images &&
                project.images.length > 0 && (
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                  </div>
                )}
              <CardHeader className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="line-clamp-4 text-muted-foreground/90 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-6 pt-0 mt-auto flex justify-between items-center">
                <div className="flex space-x-2">
                  {project.gitUrl && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8 hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconBrandGithub className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.previewUrl && project.previewUrl !== "#" && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full h-8 w-8 hover:bg-primary/10 hover:text-primary"
                      asChild
                    >
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <IconExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                {project.isInternal && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
                    Internal
                  </span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
