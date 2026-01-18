"use client";

import projectsData from "@/data/projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const mainProjects = projectsData.slice(0, 5);
  const otherProjects = projectsData.slice(5);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section
      id="projects"
      className="py-24 md:py-32 relative overflow-hidden bg-background"
    >
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="flex flex-col items-center mb-32"
        >
          <Badge className="mb-6 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
            My Creations
          </Badge>
          <h2 className="font-black text-5xl md:text-8xl tracking-tighter uppercase text-center leading-none">
            Featured <span className="text-highlight">Projects</span>
          </h2>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32"
        >
          {mainProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative flex flex-col h-full overflow-hidden"
            >
              <div className="flex flex-col h-full w-full p-2 rounded-[3.5rem] glass-card relative overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:scale-[1.01]">
                {/* Image Section */}
                {!project.isInternal &&
                  project.images &&
                  project.images.length > 0 && (
                    <div className="w-full aspect-[16/10] rounded-[3rem] overflow-hidden mb-8 border border-white/5 relative group/img">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover/img:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}

                <div className="px-8 pb-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-black tracking-tight uppercase group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground font-medium text-lg leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex gap-4">
                    {project.gitUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="rounded-full px-6 py-5 hover:bg-primary hover:text-primary-foreground transition-all duration-500 font-black uppercase tracking-widest text-[10px] border border-white/10"
                        asChild
                      >
                        <a
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconBrandGithub className="h-4 w-4 mr-2" />
                          Source
                        </a>
                      </Button>
                    )}
                    {project.previewUrl && project.previewUrl !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full px-6 py-5 bg-primary text-primary-foreground border-0 hover:opacity-90 transition-all duration-500 font-black uppercase tracking-widest text-[10px] shadow-xl shadow-primary/20"
                        asChild
                      >
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col items-center gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6 text-center mb-12"
          >
            <h3 className="text-3xl md:text-5xl font-black tracking-tight">
              More <span className="text-primary italic">Projects</span>
            </h3>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            {otherProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group glass-card transition-all duration-500 flex flex-col h-full overflow-hidden rounded-[2.5rem] border-0">
                  {!project.isInternal &&
                    project.images &&
                    project.images.length > 0 && (
                      <div className="aspect-video relative overflow-hidden m-2 rounded-[2rem]">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 transition-all duration-700" />
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
                  <CardFooter className="p-8 pt-0 mt-auto flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.gitUrl && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
                          asChild
                        >
                          <a
                            href={project.gitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconBrandGithub className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                      {project.previewUrl && project.previewUrl !== "#" && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full h-10 w-10 hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/20"
                          asChild
                        >
                          <a
                            href={project.previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <IconExternalLink className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                    {project.isInternal && (
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">
                        Internal
                      </span>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
