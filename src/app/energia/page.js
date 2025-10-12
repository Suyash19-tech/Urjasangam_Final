"use client"
import  Navbar  from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { CosmicBackground } from "@/components/shared/Cosmicbackground";

// Import the Energia section components
import { HeroSection } from "@/components/energia/HeroSection";
import { AboutSection } from "@/components/energia/AboutSection";
import { StatsSection } from "@/components/energia/StatsSection";
import { EventsSection } from "@/components/energia/EventsSection";
import { PastEventsSection } from "@/components/energia/PastEventsSection";
import { GallerySection } from "@/components/energia/GallerySection";
import FestWeekSection  from "@/components/energia/FestWeekSection";

export default function EnergiaPage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Cosmic Background */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-gradient-to-b from-black via-[#11011E] to-black">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 1.5]} fov={75} />
          <CosmicBackground />
        </Canvas>
      </div>

      <Navbar />

      {/* Main content - removed flex-grow */}
      <main className="relative z-10 text-white">
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <EventsSection />
        <PastEventsSection />
        
        {/* "Visual Memories" Header for Gallery */}
        <section className="py-24 text-center bg-transparent font-sans">
          <div className="container mx-auto px-6">
            <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 bg-clip-text text-transparent"
                style={{ filter: 'drop-shadow(0 0 30px rgba(167, 139, 250, 0.5))' }}>
              Visual Memories
            </h2>
            <p className="text-lg md:text-xl text-purple-200/80 max-w-3xl mx-auto">
              Experience the electrifying moments of Energia through our gallery.
            </p>
          </div>
        </section>
        
        <GallerySection />
        <FestWeekSection />
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
}