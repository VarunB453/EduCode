
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Workflow from "@/components/Workflow";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-educode-dark">
      <AnimatedBackground />
      <Navigation />
      <Hero />
      <Features />
      <Workflow />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
