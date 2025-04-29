
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import RoiCalculator from '@/components/RoiCalculator';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Atualiza o título da página quando o componente é montado
    document.title = "PulsAI | Assistentes Virtuais e Automação de IA para PMEs";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main>
        <Hero />
        <ProofBar />
        <HowItWorks />
        <Benefits />
        <RoiCalculator />
        <Testimonials />
        <FAQ />
        <CallToAction />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
