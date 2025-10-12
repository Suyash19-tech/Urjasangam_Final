"use client"
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { CosmicBackground } from "@/components/shared/Cosmicbackground";
// import styles from './Souhardya.module.css';

// Import the Souhardya section components
import { HeroSection } from "@/components/Souhardya/HeroSection";
import { AboutSection } from "@/components/Souhardya/AboutSection";
import { StatsSection } from "@/components/Souhardya/StatsSection";
import { EventsSection } from "@/components/Souhardya/EventsSection";
import { PastEventsSection } from "@/components/Souhardya/PastEventsSection";
import { GallerySection } from "@/components/Souhardya/GallerySection";
import  FestWeekSection  from "@/components/Souhardya/FestWeekSection";

// Add the 'default' keyword here to fix the export error
export default function SouhardyaPage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Cosmic Background - Replace with your Canvas/CosmicBackground */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        {/* Your Canvas component goes here */}
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 1.5]} fov={75} />
          <CosmicBackground />
        </Canvas>
      </div>

      {/* Navbar - Replace with your Navbar component */}
      <Navbar />

      <main className="relative z-10 text-white">
        <HeroSection />
        <AboutSection />
        {/* <StatsSection /> */}
        <EventsSection />
        <PastEventsSection />
        
        <section className="py-16 text-center bg-transparent">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Visual Memories</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Immerse yourself in the visual journey of Souhardya.
            </p>
          </div>
        </section>
        
        <GallerySection />
        <FestWeekSection />
      </main>

      {/* Footer - Replace with your Footer component */}
      <Footer/>
    </div>
  );
}
