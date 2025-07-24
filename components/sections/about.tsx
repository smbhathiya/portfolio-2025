"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconSchool,
  IconBriefcase,
  IconBuildingSkyscraper,
  IconCircle,
} from "@tabler/icons-react";

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="about">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-muted-foreground/3 leading-none whitespace-nowrap">
          ABOUT
        </div>
      </div>
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-8 text-center mb-16">
          <div className="space-y-4">
            {/* <p className="text-lg font-medium text-muted-foreground">
              Get to know me
            </p> */}
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
              My <span className="text-primary">Journey</span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              From education to professional experience, here&apos;s how
              I&apos;ve grown as a developer
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid justify-center gap-6 md:max-w-[64rem]">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 rounded-full" />
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-primary/20 px-8 py-4 rounded-full shadow-lg">
                <IconBriefcase className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
            </div>
            <div className="relative mb-20">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                <IconCircle className="h-4 w-4 text-white fill-current" />
              </div>
              <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                <div className="md:text-right hidden md:block md:flex md:items-center md:justify-end">
                  <Badge
                    variant="outline"
                    className="text-base px-4 py-2 md:mr-12 border-primary/30 bg-primary/5"
                  >
                    April 2025 - Present
                  </Badge>
                </div>
                <Card className="shadow-xl border-0 bg-background/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 md:border-l-0 relative">
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-primary/10 pointer-events-none"
                    style={{ zIndex: 0 }}
                  />
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl font-bold">
                        Software Engineer & IT Manager
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="font-normal text-sm px-3 py-1 md:hidden bg-primary/10 border-primary/30"
                      >
                        Current
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-2 text-base font-medium">
                      <IconBuildingSkyscraper className="h-5 w-5 text-primary" />
                      <span>IMOS</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Managing IT infrastructure and developing software
                      solutions for business processes. Leading development
                      projects and implementing modern technologies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative mb-20">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                <IconCircle className="h-4 w-4 text-white fill-current" />
              </div>
              <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                <Card className="shadow-xl border-0 bg-background/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 md:border-l-0 md:order-1 relative">
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-primary/10 pointer-events-none"
                    style={{ zIndex: 0 }}
                  />
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl font-bold">
                        Software Engineering Intern
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="font-normal text-sm px-3 py-1 md:hidden bg-primary/10 border-primary/30"
                      >
                        8 months
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-2 text-base font-medium">
                      <IconBuildingSkyscraper className="h-5 w-5 text-primary" />
                      <span>Nanosoft Global</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Worked on developing and maintaining web applications.
                      Collaborated with cross-functional teams and gained
                      hands-on experience with industry-standard tools and
                      practices.
                    </p>
                  </CardContent>
                </Card>
                <div className="md:text-left hidden md:block md:order-2 md:flex md:items-center">
                  <Badge
                    variant="outline"
                    className="text-base px-4 py-2 md:ml-12 border-primary/30 bg-primary/5"
                  >
                    August 2024 - April 2025
                  </Badge>
                </div>
              </div>
            </div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-primary/20 px-8 py-4 rounded-full shadow-lg">
                <IconSchool className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
            </div>
            <div className="relative mb-20">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                <IconCircle className="h-4 w-4 text-white fill-current" />
              </div>
              <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                <div className="md:text-right hidden md:block md:flex md:items-center md:justify-end">
                  <Badge
                    variant="outline"
                    className="text-base px-4 py-2 md:mr-12 border-primary/30 bg-primary/5"
                  >
                    2022 - 2025
                  </Badge>
                </div>
                <Card className="shadow-xl border-0 bg-background/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 md:border-l-0 relative">
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-primary/10 pointer-events-none"
                    style={{ zIndex: 0 }}
                  />
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl font-bold">
                        BSc in Software Engineering
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="font-normal text-sm px-3 py-1 md:hidden bg-primary/10 border-primary/30"
                      >
                        2025
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Completed a Bachelor&apos;s degree in Software Engineering
                      with a focus on modern web development, software
                      architecture, and project management.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative mb-16">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                <IconCircle className="h-4 w-4 text-white fill-current" />
              </div>
              <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                <Card className="shadow-xl border-0 bg-background/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 md:border-l-0 md:order-1 relative">
                  <div
                    className="absolute inset-0 rounded-xl border-2 border-primary/10 pointer-events-none"
                    style={{ zIndex: 0 }}
                  />
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl font-bold">
                        Higher Diploma in Computing and Software Engineering
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="font-normal text-sm px-3 py-1 md:hidden bg-primary/10 border-primary/30"
                      >
                        2024
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Completed coursework in algorithms, data structures,
                      software design patterns, and full-stack development.
                    </p>
                  </CardContent>
                </Card>
                <div className="md:text-left hidden md:block md:order-2 md:flex md:items-center">
                  <Badge
                    variant="outline"
                    className="text-base px-4 py-2 md:ml-12 border-primary/30 bg-primary/5"
                  >
                    2022 - 2024
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
