
import React from 'react';
import { MessageSquare, Calculator, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Assistant',
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      description: 'Assistentes virtuais que atendem seus clientes 24/7, respondendo perguntas e coletando leads.',
      feature: 'Chatbots e voicebots personalizados',
      cta: 'Saiba mais'
    },
    {
      id: 2,
      title: 'Automate',
      icon: <Calculator className="h-8 w-8 text-primary" />,
      description: 'Automatizações que eliminam tarefas repetitivas e aumentam a produtividade da sua equipe.',
      feature: 'Workflows automatizados com IA',
      cta: 'Saiba mais'
    },
    {
      id: 3,
      title: 'Consult',
      icon: <FileText className="h-8 w-8 text-primary" />,
      description: 'Consultoria estratégica para implementar soluções de IA que transformam seu negócio.',
      feature: 'Planejamento personalizado',
      cta: 'Saiba mais'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading text-center">Como funciona</h2>
        <p className="section-subheading text-center">
          Nossa abordagem em 3 etapas garante implementação rápida e resultados consistentes para seu negócio
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step) => (
            <div key={step.id} className="card hover-card flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-50 p-3 rounded-lg">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary">
                  {step.title}
                </h3>
              </div>
              <p className="mb-4 text-secondary-500/80 flex-grow">
                {step.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-primary font-medium mb-3">{step.feature}</p>
                <a 
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  {step.cta} <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-secondary-500/80 max-w-2xl mx-auto">
            <strong>Nossa metodologia:</strong> Começamos com um assistente básico, evoluímos para automações 
            complexas e finalizamos com consultoria estratégica para maximizar o potencial da IA no seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
