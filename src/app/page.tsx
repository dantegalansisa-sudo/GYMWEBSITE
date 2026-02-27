import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsCounter from "@/components/home/StatsCounter";
import AboutSection from "@/components/home/AboutSection";
import CEOSection from "@/components/home/CEOSection";
import ClassesSection from "@/components/home/ClassesSection";
import ScheduleSection from "@/components/home/ScheduleSection";
import TrainersSection from "@/components/home/TrainersSection";
import NutritionSection from "@/components/home/NutritionSection";
import CommunityGallery from "@/components/home/CommunityGallery";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PricingSection from "@/components/home/PricingSection";
import CTASection from "@/components/home/CTASection";
import ContactSection from "@/components/home/ContactSection";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsCounter />
        <AboutSection />
        <CEOSection />
        <ClassesSection />
        <ScheduleSection />
        <TrainersSection />
        <NutritionSection />
        <CommunityGallery />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
