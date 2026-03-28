import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Benefits from "../Components/Benefits";
import HowItWorks from "../Components/HowItWorks";
import VideoDemo from "../Components/VideoDemo";
import Carousel from "../Components/Carousel";
import TabsSection from "../Components/TabsSection";
import Testimonials from "../Components/Testimonials";
import FAQ from "../Components/FAQ";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

export default function StudentLandingPage() {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <VideoDemo />
      <Carousel />
      <TabsSection />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

