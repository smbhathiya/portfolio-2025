export const metadata = {
  title: "Home | Bhathiya Lakshan Portfolio",
  description:
    "Welcome to Bhathiya Lakshan's portfolio - Full Stack Developer and Software Engineer. Explore innovative projects including AI Image Generator, Weather App, Bliss Café, and more. Lead Software Engineer at Digi Pro Solutions with expertise in React, Next.js, and TypeScript.",
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
    "Cineplex Cinema",
    "Debra Event Management",
    "Digi Pro Solutions",
    "IMOS",
    "Cardiff Metropolitan University",
    "Sri Lanka developer",
    "modern web technologies",
    "responsive design",
    "progressive web app",
    "API development",
    "cloud computing",
    "GitHub projects",
    "open source",
    "web applications",
    "mobile-first design",
    "UI/UX design",
    "frontend development",
    "backend development",
    "database design",
    "authentication systems",
    "real-time applications",
    "weather API integration",
    "AI integration",
    "image generation",
    "e-commerce solutions",
    "ticket booking system",
    "event management",
    "coffee shop website",
    "cinema booking platform",
    "Ishara Madhushan Online School",
    "Digi Pro Solutions",
  ],
  openGraph: {
    title: "Bhathiya Lakshan | Full Stack Developer & Software Engineer Portfolio",
    description:
      "Welcome to Bhathiya Lakshan's portfolio - Full Stack Developer and Software Engineer. Explore innovative projects including AI Image Generator, Weather App, Bliss Café, and more. Lead Software Engineer at Digi Pro Solutions with expertise in React, Next.js, and TypeScript.",
    url: "https://bhathiya.dev",
    siteName: "Bhathiya Lakshan Portfolio",
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
