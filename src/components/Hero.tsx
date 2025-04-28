
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Hero = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex justify-center md:justify-start mb-12">
          <Logo />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary mb-6 leading-tight">
              IA prática. Resultados reais em 30 dias.
            </h1>
            <p className="text-xl mb-8 text-secondary-500/80">
              Assistentes virtuais que atendem seus clientes <span className="font-medium">24/7</span> e aumentam seu volume de leads em até <span className="font-medium">38%</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                onClick={scrollToForm}
                className="btn-cta text-lg"
              >
                Quero minha avaliação gratuita
              </Button>
              <a 
                href="https://wa.me/5518991090670"
                target="_blank"
                rel="noopener noreferrer" 
                className="btn-secondary"
              >
                Falar com especialista
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="relative rounded-xl bg-gray-50 p-6 shadow-card max-w-md mx-auto">
              <div className="flex gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 max-w-[85%]">
                  <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary-700 font-medium">T</span>
                  </div>
                  <div className="bg-primary-100 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">Olá! Sou a Tess, assistente virtual da PulsAI. Como posso te ajudar hoje?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 max-w-[85%] self-end">
                  <div className="bg-gray-100 p-3 rounded-l-lg rounded-br-lg">
                    <p className="text-sm">Preciso contratar um serviço de atendimento ao cliente.</p>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-gray-600 font-medium">C</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 max-w-[85%]">
                  <div className="w-8 h-8 bg-primary-200 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary-700 font-medium">T</span>
                  </div>
                  <div className="bg-primary-100 p-3 rounded-r-lg rounded-bl-lg">
                    <p className="text-sm">Ótimo! A PulsAI oferece assistentes de IA personalizados que podem atender clientes 24/7. Gostaria de agendar uma demonstração gratuita?</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="animate-pulse-soft w-2 h-2 bg-primary rounded-full"></div>
                  <div className="animate-pulse-soft w-2 h-2 bg-primary rounded-full animation-delay-200"></div>
                  <div className="animate-pulse-soft w-2 h-2 bg-primary rounded-full animation-delay-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
