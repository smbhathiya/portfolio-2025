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
      {/* Background large text "WORKS" - Similar to Skills section */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h2 className="text-[16vw] font-black text-foreground/[0.03] tracking-tighter leading-none whitespace-nowrap transform -translate-y-80">
          MY WORKS
        </h2>
      </div>

      <div className="container px-4 md:px-6 max-w-8xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          className="flex flex-col items-center mb-32"
        >
          <h2 className="font-black text-5xl md:text-8xl tracking-tighter uppercase text-center leading-none">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-48"
        >
          {mainProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative flex flex-col h-full"
            >
              {/* Index & Metadata Header */}
              <div className="flex items-center gap-4 mb-6 opacity-30 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-black tracking-widest leading-none">
                  0{index + 1}
                </span>
                <div className="h-px flex-grow bg-foreground/10" />
                <div className="flex gap-3">
                  {project.tag?.slice(1, 3).map((t: string) => (
                    <span
                      key={t}
                      className="text-[9px] font-black uppercase tracking-[0.3em]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col h-full w-full p-4 md:p-6 rounded-[2.5rem] glass-card border border-foreground/10 bg-foreground/[0.02] shadow-sm dark:shadow-none transition-all duration-700 hover:border-foreground/20 hover:shadow-2xl hover:shadow-foreground/5">
                {/* Image Section */}
                {!project.isInternal &&
                  project.images &&
                  project.images.length > 0 && (
                    <div className="w-full aspect-[16/10] rounded-[1.8rem] overflow-hidden mb-8 border border-foreground/5 relative">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover grayscale brightness-[0.8] transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                <div className="px-2 md:px-4 flex flex-col flex-grow">
                  <h3 className="text-3xl md:text-3xl font-black tracking-tighter uppercase mb-4 leading-[1.1]">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground font-medium text-lg leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-6 pt-6 border-t border-foreground/5 mt-auto">
                    {project.gitUrl && (
                      <a
                        href={project.gitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] hover:text-primary transition-colors group/link"
                      >
                        <IconBrandGithub className="h-5 w-5 transition-transform group-hover/link:-translate-y-1" />
                        Source
                      </a>
                    )}
                    {project.previewUrl && project.previewUrl !== "#" && (
                      <a
                        href={project.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] px-8 py-4 bg-foreground text-background rounded-full hover:opacity-90 transition-all shadow-xl shadow-foreground/10"
                      >
                        <IconExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    {project.isInternal && (
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-20">
                        Internal System
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Projects Section */}
        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <h3 className="text-3xl md:text-5xl font-black tracking-tighter uppercase">
              Personal Projects
            </h3>
            <p className="text-muted-foreground font-medium tracking-[0.2em] uppercase text-[10px]">
              Selected previous works and experiments
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="h-full"
              >
                <div className="group glass-card transition-all duration-700 flex flex-col h-full overflow-hidden rounded-[2rem] border border-foreground/5 bg-foreground/[0.01] hover:border-foreground/20 p-4 shadow-sm dark:shadow-none hover:scale-[1.02]">
                  {!project.isInternal &&
                    project.images &&
                    project.images.length > 0 && (
                      <div className="aspect-[16/10] relative overflow-hidden rounded-[1.2rem] mb-6">
                        <Image
                          src={project.images[0]}
                          alt={project.title}
                          fill
                          className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                        />
                      </div>
                    )}

                  <div className="px-2 flex flex-col flex-grow">
                    <h4 className="text-lg font-black uppercase tracking-tight mb-3 transition-colors">
                      {project.title}
                    </h4>
                    <p className="line-clamp-3 text-muted-foreground font-medium text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="pt-6 border-t border-foreground/5 flex items-center gap-4 transition-opacity mt-auto">
                      {project.gitUrl && (
                        <a
                          href={project.gitUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/40 hover:text-foreground transition-colors"
                        >
                          <IconBrandGithub className="h-5 w-5" />
                        </a>
                      )}
                      {project.previewUrl && project.previewUrl !== "#" && (
                        <a
                          href={project.previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/40 hover:text-foreground transition-colors"
                        >
                          <IconExternalLink className="h-5 w-5" />
                        </a>
                      )}
                      {project.isInternal && (
                        <span className="text-[9px] font-black uppercase tracking-widest opacity-20 ml-auto">
                          Internal
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
