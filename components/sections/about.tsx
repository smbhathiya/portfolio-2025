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
} from "@tabler/icons-react";
import { workExperience, education } from "@/data/aboutData";

export function AboutSection() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden bg-mesh"
      id="about"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <div className="text-[15vw] font-black text-primary/5 tracking-tighter leading-none whitespace-nowrap opacity-50">
          JOURNEY
        </div>
      </div>

      <div className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-6 text-center mb-24">
          <h2 className="font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter">
            Career <span className="text-primary italic">Milestones</span>
          </h2>
          <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl leading-relaxed">
            A chronological timeline of my professional growth, leadership
            roles, and academic foundations in software engineering.
          </p>
        </div>

        <div className="mx-auto mt-16 md:max-w-[64rem]">
          <div className="relative">
            {/* Elegant Timeline Track - Centered on desktop */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent rounded-full" />

            {/* Work Experience Section Header */}
            <div className="text-center mb-24 relative z-10">
              <div className="inline-flex items-center gap-4 glass px-10 py-5 rounded-full shadow-2xl shadow-primary/5 border-primary/20">
                <IconBriefcase className="h-7 w-7 text-primary" />
                <h3 className="text-3xl font-black tracking-tight">
                  Professional History
                </h3>
              </div>
            </div>

            {workExperience.map((exp, idx) => (
              <div
                className="relative mb-24 group"
                key={exp.title + exp.company}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-0 md:left-1/2 md:top-12 transform md:-translate-x-1/2 w-10 h-10 rounded-full glass border border-primary/30 flex items-center justify-center z-20 transition-all duration-500 group-hover:scale-125 group-hover:border-primary shadow-xl shadow-primary/10">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>

                <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-24">
                  {/* Left Column Card (Idx 0, 2, 4...) */}
                  <div
                    className={`w-full ${
                      idx % 2 === 0 ? "block" : "hidden md:hidden"
                    }`}
                  >
                    <ExperienceCard exp={exp} side="left" />
                  </div>
                  {/* Right Column Card (Idx 1, 3, 5...) */}
                  <div
                    className={`w-full ${
                      idx % 2 === 1 ? "block" : "hidden md:hidden"
                    } md:col-start-2`}
                  >
                    <ExperienceCard exp={exp} side="right" />
                  </div>
                </div>
              </div>
            ))}

            {/* Academic Foundation header */}
            <div className="text-center mb-24 mt-32 relative z-10">
              <div className="inline-flex items-center gap-4 glass px-10 py-5 rounded-full shadow-2xl shadow-primary/5 border-primary/20">
                <IconSchool className="h-7 w-7 text-primary" />
                <h3 className="text-3xl font-black tracking-tight">
                  Academic Foundation
                </h3>
              </div>
            </div>

            {education.map((edu, idx) => (
              <div className="relative mb-24 group" key={edu.title}>
                <div className="absolute left-0 top-0 md:left-1/2 md:top-12 transform md:-translate-x-1/2 w-10 h-10 rounded-full glass border border-primary/30 flex items-center justify-center z-20 transition-all duration-500 group-hover:scale-125 group-hover:border-primary shadow-xl shadow-primary/10">
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                </div>

                <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-24">
                  {/* Left Column Card */}
                  <div
                    className={`w-full ${
                      idx % 2 === 0 ? "block" : "hidden md:hidden"
                    }`}
                  >
                    <ExperienceCard exp={edu} side="left" />
                  </div>
                  {/* Right Column Card */}
                  <div
                    className={`w-full ${
                      idx % 2 === 1 ? "block" : "hidden md:hidden"
                    } md:col-start-2`}
                  >
                    <ExperienceCard exp={edu} side="right" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, side }: { exp: any; side: "left" | "right" }) {
  const isLeft = side === "left";
  return (
    <Card
      className={`border-0 glass shadow-2xl shadow-black/5 hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 rounded-[2.5rem] overflow-hidden group/card relative w-full`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

      <CardHeader
        className={`p-8 pb-4 relative z-10 flex flex-col ${
          isLeft ? "md:items-end md:text-right" : "md:items-start md:text-left"
        }`}
      >
        <div
          className={`flex flex-wrap items-center gap-2 mb-4 ${
            isLeft ? "md:justify-end" : "md:justify-start"
          }`}
        >
          <Badge
            variant="outline"
            className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 bg-primary/5 border-primary/20 text-primary"
          >
            {exp.duration}
          </Badge>
          {(exp.badge || exp.badgeMobile) && (
            <Badge className="font-black text-[9px] uppercase tracking-widest px-3 py-1 bg-primary text-primary-foreground rounded-md shadow-lg shadow-primary/30">
              {exp.badge || exp.badgeMobile}
            </Badge>
          )}
        </div>
        <CardTitle className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-2">
          {exp.title}
        </CardTitle>
        <CardDescription
          className={`flex items-center gap-2 text-lg font-bold text-muted-foreground ${
            isLeft ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {!isLeft && (
            <IconBuildingSkyscraper className="h-5 w-5 text-primary/60" />
          )}
          {exp.company || exp.institution}
          {isLeft && (
            <IconBuildingSkyscraper className="h-5 w-5 text-primary/60" />
          )}
        </CardDescription>
      </CardHeader>
      <CardContent
        className={`p-8 pt-0 relative z-10 ${
          isLeft ? "md:text-right" : "text-left"
        }`}
      >
        <p className="text-muted-foreground text-lg leading-relaxed font-medium">
          {exp.description}
        </p>
      </CardContent>
    </Card>
  );
}
