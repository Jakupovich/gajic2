import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProjectShowcase />
      <FAQSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
