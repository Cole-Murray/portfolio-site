import { PageLoader } from "@/components/layout/PageLoader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { FeaturedExperienceSection } from "@/components/sections/FeaturedExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { IntroBandSection } from "@/components/sections/IntroBandSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechMarquee } from "@/components/ui/TechMarquee";

export default function Home() {
  return (
    <>
      <PageLoader />
      <SiteNav />
      <main id="main">
        <HeroSection />
        <IntroBandSection />
        <TechMarquee />
        <FeaturedExperienceSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
