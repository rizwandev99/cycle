import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import FeedbackDrop from "./components/FeedbackDrop";
import DashboardSection from "./components/DashboardSection";
import LogoCarousel from "./components/LogoCarousel";
import TestimonialSection from "./components/TestimonialSection";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <div className="bg-[#f5f8fc] font-sans min-h-screen">
      {/* Navigation Bar */}
      <div className="min-h-screen">
        <Navigation />

        <HeroSection />
        <div className="w-full flex justify-center mt-4">
          <FeedbackDrop />
        </div>
      </div>

      {/* </section> */}

      {/* Dashboard Section */}
      <DashboardSection />

      {/* Logo Carousel Section */}
      <LogoCarousel />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Features Section */}
      <FeaturesSection />
    </div>
  );
}
