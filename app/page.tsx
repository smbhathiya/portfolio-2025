export const metadata = {
  title: "Home | Bhathiya Lakshan Portfolio",
  description:
    "Welcome to the portfolio of Bhathiya Lakshan, Full Stack Developer. Explore projects, skills, and experience at IMOS, Ishara Madhushan Online School, Digi Pro Solutions.",
  keywords: [
    "Bhathiya Lakshan",
    "portfolio",
    "full stack",
    "web development",
    "frontend",
    "backend",
    "IMOS",
    "Ishara Madhushan Online School",
    "Digi Pro Solutions",
  ],
  openGraph: {
    title: "Home | Bhathiya Lakshan Portfolio",
    description:
      "Welcome to the portfolio of Bhathiya Lakshan, Full Stack Developer. Explore projects, skills, and experience at IMOS, Ishara Madhushan Online School, Digi Pro Solutions.",
    url: "https://bhathiya.dev",
    images: [
      {
        url: "/me.jpg",
        width: 800,
        height: 600,
        alt: "Bhathiya Lakshan profile photo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Bhathiya Lakshan Portfolio",
    description:
      "Welcome to the portfolio of Bhathiya Lakshan, Full Stack Developer. Explore projects, skills, and experience at IMOS, Ishara Madhushan Online School, Digi Pro Solutions.",
    site: "@smbhathiya",
    creator: "@smbhathiya",
    images: ["/me.jpg"],
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
