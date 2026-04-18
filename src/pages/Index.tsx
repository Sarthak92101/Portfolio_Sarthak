import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { PhotoCarousel } from "@/components/PhotoCarousel";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import YouTubeSection from "@/components/YouTubeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              My <span className="text-gradient">Photo</span> Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A continuous stream of my personal moments and memories
            </p>
          </div>
          <PhotoCarousel />
        </div>
      </section> */}
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <YouTubeSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
