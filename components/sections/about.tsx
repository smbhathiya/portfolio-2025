"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IconSchool, IconBriefcase, IconBuildingSkyscraper, IconCircle } from "@tabler/icons-react"

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/20" id="about">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-[68rem] flex-col items-center justify-center gap-5 text-center mb-12">
          {/* <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl">
            About Me
          </h2>
          <p className="max-w-[85%] text-muted-foreground text-lg md:text-xl">
            My journey in education and professional experience
          </p> */}
        </div>

        <div className="mx-auto mt-16 grid justify-center gap-6 md:max-w-[64rem]">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/30 rounded-full" />

            {/* Work Experience Section */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold inline-block bg-muted/80 backdrop-blur px-6 py-2 rounded-full">
                <IconBriefcase className="inline-block mr-2 h-7 w-7" />
                Work Experience
              </h3>
            </div>

            {/* Software Engineer & IT Manager */}
            <div className="relative mb-16">
              {/* Circle on timeline */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <IconCircle className="h-3 w-3 text-white" />
              </div>

              <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                {/* Date on left for desktop, hidden on mobile */}
                <div className="md:text-right hidden md:block">
                  <Badge
                    variant="outline"
                    className="text-lg px-3 py-1 md:mr-8"
                  >
                    April 2025 - Present
                  </Badge>
                </div>

                {/* Content */}
                <Card className="shadow-lg border-l-4 border-l-primary md:border-l-0 w-full">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl">
                        Software Engineer & IT Manager
                      </CardTitle>
                      {/* Date shown only on mobile */}
                      <Badge
                        variant="outline"
                        className="font-normal text-base px-3 py-1 md:hidden"
                      >
                        Current
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-2 mt-2 text-base">
                      <IconBuildingSkyscraper className="h-5 w-5" />
                      <span>IMOS</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">
                      Managing IT infrastructure and developing software
                      solutions for business processes. Leading development
                      projects and implementing modern technologies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Software Engineering Intern */}
            <div className="relative mb-16">
              {/* Circle on timeline */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <IconCircle className="h-3 w-3 text-white" />
              </div>

              <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                {/* Content first on desktop (opposite side) */}
                <Card className="shadow-lg border-l-4 border-l-primary md:border-l-0 w-full md:order-1">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl">
                        Software Engineering Intern
                      </CardTitle>
                      {/* Date shown only on mobile */}
                      <Badge
                        variant="outline"
                        className="font-normal text-base px-3 py-1 md:hidden"
                      >
                        8 months
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center gap-2 mt-2 text-base">
                      <IconBuildingSkyscraper className="h-5 w-5" />
                      <span>Nanosoft Global</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">
                      Worked on developing and maintaining web applications.
                      Collaborated with cross-functional teams and gained
                      hands-on experience with industry-standard tools and
                      practices.
                    </p>
                  </CardContent>
                </Card>

                {/* Date on right for desktop, hidden on mobile */}
                <div className="md:text-left hidden md:block md:order-2">
                  <Badge
                    variant="outline"
                    className="text-lg px-3 py-1 md:ml-8"
                  >
                    August 2024 - April 2025
                  </Badge>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold inline-block bg-muted/80 backdrop-blur px-6 py-2 rounded-full">
                <IconSchool className="inline-block mr-2 h-7 w-7" />
                Education
              </h3>
            </div>

            {/* BSc in Software Engineering */}
            <div className="relative mb-16">
              {/* Circle on timeline */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <IconCircle className="h-3 w-3 text-white" />
              </div>

              <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                {/* Date on left for desktop, hidden on mobile */}
                <div className="md:text-right hidden md:block">
                  <Badge
                    variant="outline"
                    className="text-lg px-3 py-1 md:mr-8"
                  >
                    2022 - 2025
                  </Badge>
                </div>

                {/* Content */}
                <Card className="shadow-lg border-l-4 border-l-primary md:border-l-0 w-full">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl">
                        BSc in Software Engineering
                      </CardTitle>
                      {/* Date shown only on mobile */}
                      <Badge
                        variant="outline"
                        className="font-normal text-base px-3 py-1 md:hidden"
                      >
                        2025
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">
                      Completed a Bachelor&apos;s degree in Software Engineering
                      with a focus on modern web development, software
                      architecture, and project management.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Higher Diploma */}
            <div className="relative mb-16">
              {/* Circle on timeline */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -top-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <IconCircle className="h-3 w-3 text-white" />
              </div>

              <div className="ml-12 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
                {/* Content first on desktop (opposite side) */}
                <Card className="shadow-lg border-l-4 border-l-primary md:border-l-0 w-full md:order-1">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-2xl">
                        Higher Diploma in Computing and Software Engineering
                      </CardTitle>
                      {/* Date shown only on mobile */}
                      <Badge
                        variant="outline"
                        className="font-normal text-base px-3 py-1 md:hidden"
                      >
                        2024
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-lg">
                      Completed coursework in algorithms, data structures,
                      software design patterns, and full-stack development.
                    </p>
                  </CardContent>
                </Card>

                {/* Date on right for desktop, hidden on mobile */}
                <div className="md:text-left hidden md:block md:order-2">
                  <Badge
                    variant="outline"
                    className="text-lg px-3 py-1 md:ml-8"
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
