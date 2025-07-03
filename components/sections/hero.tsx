"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { IconArrowDown, IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 flex items-center justify-center">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_550px] place-items-center">
          <div className="flex flex-col justify-center space-y-5  mx-auto w-full">
            <div className="space-y-3">
              <Badge className="inline-block mx-auto" variant="secondary">Available for work</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I&apos;m <span className="text-primary">Bhathiya Lakshan</span>
              </h1>
              <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto">
                I build accessible, responsive, and performant web applications using modern technologies.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row ">
              <Button asChild size="lg">
                <Link href="#projects">
                  View Projects <IconArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <IconBrandGithub className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <IconBrandLinkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:your-email@example.com" aria-label="Email">
                  <IconMail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="relative md:w-[400px] lg:w-[450px] xl:w-[500px] aspect-square">
              {/* Multiple colored gradient backgrounds with animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary-600/60 rounded-full blur-xl opacity-70 animate-pulse" style={{ animationDuration: '6s' }} />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/40 to-primary-500/40 rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
              
              {/* Decorative circles */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary/30 rounded-full blur-lg" />
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/30 rounded-full blur-lg" />
              
              {/* Image container with subtle glow */}
              <div className="relative z-10 aspect-square overflow-hidden rounded-full border border-white/20 bg-background shadow-xl md:w-[400px] lg:w-[450px] xl:w-[500px]">
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/10 to-transparent z-10" />
                
                <Image
                  src="/me.jpg"
                  alt="Profile image"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 350px"
                />
              </div>
              
              {/* Additional animated decoration */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 via-primary-500/20 to-primary-600/30 rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDuration: '8s' }} />
              
              {/* Subtle orbiting dot */}
              <div className="absolute w-4 h-4 bg-primary rounded-full opacity-70 blur-sm"
                style={{
                  animation: 'orbit 8s linear infinite',
                  top: 'calc(50% - 20px)',
                  left: 'calc(50% - 20px)',
                  transformOrigin: '175px 20px'
                }} />
            </div>
            
            {/* Add keyframe animation for the orbit effect */}
            <style jsx>{`
              @keyframes orbit {
                from {
                  transform: rotate(0deg) translateX(175px) rotate(0deg);
                }
                to {
                  transform: rotate(360deg) translateX(175px) rotate(-360deg);
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}
