import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Examples from "@/components/Examples";
import Capabilities from "@/components/Capabilities";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutUs />
      <Examples />
      <Capabilities />
      <Features />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;

