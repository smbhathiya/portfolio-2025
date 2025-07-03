import { NavBar } from "@/components/nav-bar";
import { AboutSection } from "@/components/sections/about";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </main>
    </div>
  );
}
