
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import ResultsSection from '@/components/ResultsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatwootFloat from '@/components/ChatwootFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ResultsSection />
      <ContactSection />
      <Footer />
      <ChatwootFloat />
    </div>
  );
};

export default Index;
