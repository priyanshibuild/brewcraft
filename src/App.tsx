import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import StorySection from "./components/StorySection";
import BeveragesSection from "./components/BeveragesSection";
import DessertsSection from "./components/DessertsSection";
import SpecialOffer from "./components/SpecialOffer";
import TestimonialsSection from "./components/TestimonialsSection";
import ReserveSection from "./components/ReserveSection";
import Footer from "./components/Footer";

export default function App() {
  // Setup global IntersectionObserver to handle scroll triggered animations natively
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.12, // 12% visible to trigger smooth cinematic entry
    };

    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    // Dynamic scanner to find any elements with animation classes
    const scanAndObserve = () => {
      const animatedElements = document.querySelectorAll(
        ".fade-up, .fade-left, .fade-right, .scale-in, .line-draw"
      );
      animatedElements.forEach((el) => animObserver.observe(el));
    };

    // Run initial scan
    scanAndObserve();

    // Since React renders dynamically, re-run scan after a tiny timeout to ensure all components are fully bound
    const timer = setTimeout(scanAndObserve, 500);

    return () => {
      clearTimeout(timer);
      animObserver.disconnect();
    };
  }, []);

  return (
    <div id="brewcraft-web-app" className="relative bg-brand-bg min-h-screen text-brand-cream overflow-hidden">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Sections Body */}
      <main id="app-main-content">
        {/* Section 1: Hero Particle Spotlight */}
        <HeroSection />

        {/* Section 2: Features Grid */}
        <FeaturesSection />

        {/* Section 3: Brands Story */}
        <StorySection />

        {/* Section 4: Hot & Iced Beverages */}
        <BeveragesSection />

        {/* Section 5: Signature Patisseries Dessert Bar */}
        <DessertsSection />

        {/* Section 6: Special Count-up Promo Banner */}
        <SpecialOffer />

        {/* Section 7: Fluid Swaying Testimonials Arc */}
        <TestimonialsSection />

        {/* Section 8: Reserve a VIP Table + pulsing custom radar map */}
        <ReserveSection />
      </main>

      {/* Section 9: Signature Footer details */}
      <Footer />
    </div>
  );
}
