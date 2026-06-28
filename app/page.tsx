import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import Hero from "@/app/components/sections/Hero";
import Services from "@/app/components/sections/Services";
import CaseStudies from "@/app/components/sections/CaseStudies";
import USPs from "@/app/components/sections/USPs";
import CTASection from "@/app/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <USPs />
        <Services />
        <CaseStudies />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
