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
import { workExperience, education } from "@/data/aboutData";

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="about">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold text-muted-foreground/3 leading-none whitespace-nowrap">
          BHATHIYA
        </div>
      </div>
      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-8 text-center mb-16">
          <div className="space-y-4">
            <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl">
              My <span className="text-primary">Journey</span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground text-lg md:text-xl leading-relaxed">
              From academic foundations to hands-on campaigns, my journey in
              digital marketing has been a blend of strategy, creativity, and
              constant learning. Each project sharpened my skills and deepened
              my understanding of how to connect brands with the right audience
              online.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 grid justify-center gap-6 md:max-w-[64rem]">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/50 via-primary/30 to-primary/10 rounded-full" />
            {/* Work Experience Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-primary/20 px-8 py-4 rounded-full shadow-lg">
                <IconBriefcase className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Work Experience</h3>
              </div>
            </div>
            {workExperience.map((exp, idx) => (
              <div className="relative mb-20" key={exp.title + exp.company}>
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                  <IconCircle className="h-4 w-4 text-white fill-current" />
                </div>
                <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                  {/* Desktop badge left/right */}
                  {idx % 2 === 0 ? (
                    <div className="md:text-right hidden md:block md:flex md:items-center md:justify-end">
                      <Badge
                        variant="outline"
                        className="text-base px-4 py-2 md:mr-12 border-primary/30 bg-primary/5"
                      >
                        {exp.duration}
                      </Badge>
                    </div>
                  ) : null}
                  <Card
                    className={`shadow-xl border-0 bg-background/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 md:border-l-0 ${
                      idx % 2 === 1 ? "md:order-1" : ""
                    } relative`}
                  >
                    <div
                      className="absolute inset-0 rounded-xl border-2 border-primary/10 pointer-events-none"
                      style={{ zIndex: 0 }}
                    />
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-2xl font-bold">
                          {exp.title}
                        </CardTitle>
                        {exp.badgeMobile && (
                          <Badge
                            variant="outline"
                            className="font-normal text-sm px-3 py-1 md:hidden bg-primary/10 border-primary/30"
                          >
                            {exp.badge}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="flex items-center gap-2 text-base font-medium">
                        <IconBuildingSkyscraper className="h-5 w-5 text-primary" />
                        <span>{exp.company}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                  {/* Desktop badge right/left */}
                  {idx % 2 === 1 ? (
                    <div className="md:text-left hidden md:block md:order-2 md:flex md:items-center">
                      <Badge
                        variant="outline"
                        className="text-base px-4 py-2 md:ml-12 border-primary/30 bg-primary/5"
                      >
                        {exp.duration}
                      </Badge>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
            {/* Education Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-background/80 backdrop-blur-sm border border-primary/20 px-8 py-4 rounded-full shadow-lg">
                <IconSchool className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
            </div>
            {education.map((edu, idx) => (
              <div
                className={`relative ${
                  idx === education.length - 1 ? "mb-16" : "mb-20"
                }`}
                key={edu.title}
              >
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg border-4 border-background">
                  <IconCircle className="h-4 w-4 text-white fill-current" />
                </div>
                <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-12">
                  {/* Desktop badge left/right */}
                  {idx % 2 === 0 ? (
                    <div className="md:text-right hidden md:block md:flex md:items-center md:justify-end">
                      <Badge
                        variant="outline"
                        className="text-base px-4 py-2 md:mr-12 border-primary/30 bg-primary/5"
                      >
                        {edu.duration}
                      </Badge>
                    </div>
                  ) : null}
                  <Card
                    className={`shadow-xl border-0 bg-background/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:scale-105 md:border-l-0 ${
                      idx % 2 === 1 ? "md:order-1" : ""
                    } relative`}
                  >
                    <div
                      className="absolute inset-0 rounded-xl border-2 border-primary/10 pointer-events-none"
                      style={{ zIndex: 0 }}
                    />
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-2xl font-bold">
                          {edu.title}
                        </CardTitle>
                        <Badge
                          variant="outline"
                          className="font-normal text-sm px-3 py-1 md:hidden bg-primary/10 border-primary/30"
                        >
                          {edu.badge}
                        </Badge>
                      </div>
                      <CardDescription className="flex items-center gap-2 text-base font-medium">
                        <IconSchool className="h-5 w-5 text-primary" />
                        <span>{edu.institution}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-lg leading-relaxed">
                        {edu.description}
                      </p>
                    </CardContent>
                  </Card>
                  {/* Desktop badge right/left */}
                  {idx % 2 === 1 ? (
                    <div className="md:text-left hidden md:block md:order-2 md:flex md:items-center">
                      <Badge
                        variant="outline"
                        className="text-base px-4 py-2 md:ml-12 border-primary/30 bg-primary/5"
                      >
                        {edu.duration}
                      </Badge>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
