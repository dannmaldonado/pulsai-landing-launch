
import React from 'react';
import { MessageSquare, FileText } from 'lucide-react';

// Services component - updated to show service options

const HowItWorks = () => {
  const services = [
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
      title: 'Consult',
      icon: <FileText className="h-8 w-8 text-primary" />,
      description: 'Consultoria estratégica para implementar soluções de IA que transformam seu negócio.',
      feature: 'Planejamento personalizado',
      cta: 'Saiba mais'
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-white relative">
      {/* Círculo decorativo */}
      <div className="absolute left-0 top-1/3 w-48 h-48 rounded-full bg-primary/5 filter blur-xl -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Nossos Serviços</h2>
          <p className="text-lg md:text-xl text-center max-w-2xl text-secondary-500/80">
            Oferecemos soluções de IA personalizadas para diferentes necessidades do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary">
                  {service.title}
                </h3>
              </div>
              <p className="mb-4 text-secondary-500/80 flex-grow">
                {service.description}
              </p>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-primary font-medium mb-3">{service.feature}</p>
                <a 
                  href="#contact-form"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  }} 
                  className="text-primary font-medium hover:underline inline-flex items-center"
                >
                  {service.cta} <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-secondary-500/80 max-w-2xl mx-auto">
            <strong>Nossa abordagem:</strong> Oferecemos assistentes virtuais inteligentes para 
            atendimento automatizado e consultoria estratégica para maximizar o potencial da IA no seu negócio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
