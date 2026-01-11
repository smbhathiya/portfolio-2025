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
    <section
      id="projects"
      className="py-24 md:py-32 relative overflow-hidden bg-mesh/50"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center mb-24">
          <h2 className="font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter">
            Selected <span className="text-primary italic">Works</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
            Architecting specialized applications for enterprise lifecycle
            management and scalable consumer platforms.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {mainProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col items-start p-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 h-full"
            >
              <div className="flex flex-col h-full w-full p-8 rounded-[2.3rem] glass relative overflow-hidden">
                {/* Background decorative blob */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-all duration-1000" />

                {/* Image Section for Non-Internal Main Projects */}
                {!project.isInternal &&
                  project.images &&
                  project.images.length > 0 && (
                    <div className="w-full aspect-video rounded-[1.5rem] overflow-hidden mb-8 border border-border/40 shadow-sm relative group/img">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500" />
                    </div>
                  )}

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight group-hover:text-primary transition-colors duration-300 leading-tight pr-4">
                    {project.title}
                  </h3>
                  {project.isInternal && (
                    <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[9px] font-black uppercase tracking-wider text-primary">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Proprietary
                    </div>
                  )}
                </div>

                <div className="relative flex-grow mb-10 z-10">
                  <p className="text-muted-foreground text-lg leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-6 relative z-10">
                  <div className="flex gap-4">
                    {project.gitUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-full px-5 hover:bg-primary/10 hover:text-primary transition-all font-bold group/btn"
                        asChild
                      >
                        <a
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconBrandGithub className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                          Codebase
                        </a>
                      </Button>
                    )}
                    {project.previewUrl && project.previewUrl !== "#" && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-full px-5 hover:bg-primary/10 hover:text-primary transition-all font-bold group/btn"
                        asChild
                      >
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          Interactive
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <h3 className="text-2xl md:text-4xl font-black tracking-tight">
              Personal <span className="text-primary italic">Projects</span>
            </h3>
            <div className="w-24 h-1 bg-primary/20 rounded-full" />
          </div>

          {/* Other Projects Grid with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="group border-border/40 bg-background/40 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 flex flex-col h-full overflow-hidden rounded-[2rem]"
              >
                {!project.isInternal &&
                  project.images &&
                  project.images.length > 0 && (
                    <div className="aspect-video relative overflow-hidden m-2 rounded-[1.5rem]">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700" />
                    </div>
                  )}
                <CardHeader className="p-8">
                  <CardTitle className="text-xl font-black group-hover:text-primary transition-colors tracking-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-4 text-muted-foreground/90 leading-relaxed pt-2">
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
      </div>
    </section>
  );
}
