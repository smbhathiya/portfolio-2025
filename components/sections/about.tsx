"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IconCode, IconSchool, IconBriefcase, IconCalendarEvent, IconBuildingSkyscraper } from "@tabler/icons-react"

export function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30" id="about">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl">About Me</h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg">
            My educational background and professional experience
          </p>
        </div>
        
        <div className="mx-auto mt-12 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="skills">
                <IconCode className="mr-2 h-4 w-4" />
                Skills
              </TabsTrigger>
              <TabsTrigger value="education">
                <IconSchool className="mr-2 h-4 w-4" />
                Education
              </TabsTrigger>
              <TabsTrigger value="experience">
                <IconBriefcase className="mr-2 h-4 w-4" />
                Experience
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="skills" className="space-y-4 mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Skills</CardTitle>
                  <CardDescription>Technologies I work with</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">Frontend</span>
                      <span className="text-sm text-muted-foreground">React, Next.js, TypeScript</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">Backend</span>
                      <span className="text-sm text-muted-foreground">Node.js, Express, Python</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">Database</span>
                      <span className="text-sm text-muted-foreground">MongoDB, PostgreSQL</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-medium">DevOps</span>
                      <span className="text-sm text-muted-foreground">Docker, AWS</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="education" className="space-y-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>BSc in Software Engineering</CardTitle>
                    <Badge variant="outline" className="font-normal">2025</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <IconCalendarEvent className="h-4 w-4" />
                    <span>2022 - 2025</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Completed a Bachelor&apos;s degree in Software Engineering with a focus on modern web development,
                    software architecture, and project management.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="mt-4">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Higher Diploma in Computing and Software Engineering</CardTitle>
                    <Badge variant="outline" className="font-normal">2024</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <IconCalendarEvent className="h-4 w-4" />
                    <span>2022 - 2024</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Completed coursework in algorithms, data structures, software design patterns, 
                    and full-stack development.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="experience" className="space-y-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Software Engineer & IT Manager</CardTitle>
                    <Badge variant="outline" className="font-normal">Current</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <IconBuildingSkyscraper className="h-4 w-4" />
                    <span>IMOS</span>
                  </CardDescription>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <IconCalendarEvent className="h-4 w-4" />
                    <span>April 2025 - Present</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Managing IT infrastructure and developing software solutions for business processes. 
                    Leading development projects and implementing modern technologies.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="mt-4">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle>Software Engineering Intern</CardTitle>
                    <Badge variant="outline" className="font-normal">8 months</Badge>
                  </div>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <IconBuildingSkyscraper className="h-4 w-4" />
                    <span>Nanosoft Global</span>
                  </CardDescription>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <IconCalendarEvent className="h-4 w-4" />
                    <span>August 2024 - April 2025</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Worked on developing and maintaining web applications. Collaborated with 
                    cross-functional teams and gained hands-on experience with industry-standard tools and practices.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
