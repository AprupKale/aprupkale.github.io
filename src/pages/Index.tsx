import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ResearchSection from "@/components/ResearchSection";
import PublicationsSection from "@/components/PublicationsSection";
import ProjectsSection from "@/components/ProjectsSection";
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
          content="Aprup Kale is a Research Assistant at the National University of Singapore, working on algorithms and theory, specifically in Quantum Property Testing and Fair Division." 
        />
        <meta name="keywords" content="Aprup Kale, Quantum Property Testing, Quantum Algorithms, Algorithmic Game Theory, Fair Division, Theoretical Computer Science, Explainable AI, Fair AI" />
        <link rel="canonical" href="https://aprupkale.github.io/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ResearchSection />
          <PublicationsSection />
          <ProjectsSection />
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
