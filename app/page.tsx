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
      <Navigation />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-20 text-center px-4">
        {/* Hero Section with Heading and Subtitle */}
        <HeroSection />

        {/* Feedback Drop Area */}
        <FeedbackDrop />
      </main>

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
