export const metadata = {
  title: "Bhathiya Lakshan | Full Stack Engineer & Infrastructure Specialist",
  description:
    "Professional portfolio of Bhathiya Lakshan - Full Stack Engineer specializing in scalable web architectures, infrastructure management, and technical leadership at IMOS.",
  keywords: [
    "Bhathiya Lakshan",
    "portfolio",
    "full stack developer",
    "software engineer",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
    "AI Image Generator",
    "Weather App",
    "Bliss Café",
    "Digi Pro Solutions",
    "IMOS",
    "Sri Lanka developer",
  ],
  openGraph: {
    title:
      "Bhathiya Lakshan | Full Stack Developer & Software Engineer Portfolio",
    description:
      "Welcome to Bhathiya Lakshan's portfolio - Full Stack Developer and Software Engineer. Explore innovative projects including AI Image Generator, Weather App, Bliss Café, and more.",
    url: "https://bhathiya.dev",
    siteName: "Bhathiya Lakshan",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 630,
        alt: "Bhathiya Lakshan - Full Stack Developer and Software Engineer Portfolio",
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://bhathiya.dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { NavBar } from "@/components/nav-bar";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
