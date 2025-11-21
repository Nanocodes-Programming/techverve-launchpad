import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import LearningEnvironment from "@/components/LearningEnvironment";
import CoursesSection from "@/components/CoursesSection";
import SpecialOffer from "@/components/SpecialOffer";
import SuccessStories from "@/components/SuccessStories";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <LearningEnvironment />
      <CoursesSection />
      <SpecialOffer />
      <SuccessStories />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
