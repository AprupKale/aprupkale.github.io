import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import TeachingSection from "@/components/TeachingSection";
import MiscellaneousSection from "@/components/MiscellaneousSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer"; 

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Aprup Kale | NUS</title>
        <meta 
          name="description" 
          content="Aprup Kale is an undergraduate researcher at the National University of Singapore specializing in algorithms and theory, and ML and AI." 
        />
        <meta name="keywords" content="Aprup Kale, Algorithmic Game Theory, Fair Division, Theoretical Computer Science, Explainable AI, Fair AI" />
        <link rel="canonical" href="https://aprupkale.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ResearchSection />
          <PublicationsSection />
          <TeachingSection />
          <MiscellaneousSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
