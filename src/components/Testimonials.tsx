
import React from 'react';

type TestimonialProps = {
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
  stats?: string;
};

const TestimonialCard = ({ name, position, company, quote, image, stats }: TestimonialProps) => (
  <div className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full relative">
    {/* Dots decoration */}
    <div className="mb-6 text-primary">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.33334 17.3333C10.0697 17.3333 10.6667 16.7363 10.6667 16C10.6667 15.2636 10.0697 14.6666 9.33334 14.6666C8.59697 14.6666 8 15.2636 8 16C8 16.7363 8.59697 17.3333 9.33334 17.3333Z" fill="currentColor"/>
        <path d="M16 17.3333C16.7364 17.3333 17.3334 16.7363 17.3334 16C17.3334 15.2636 16.7364 14.6666 16 14.6666C15.2636 14.6666 14.6667 15.2636 14.6667 16C14.6667 16.7363 15.2636 17.3333 16 17.3333Z" fill="currentColor"/>
        <path d="M22.6667 17.3333C23.4031 17.3333 24 16.7363 24 16C24 15.2636 23.4031 14.6666 22.6667 14.6666C21.9303 14.6666 21.3334 15.2636 21.3334 16C21.3334 16.7363 21.9303 17.3333 22.6667 17.3333Z" fill="currentColor"/>
      </svg>
    </div>
    <blockquote className="mb-8 text-secondary-500/90 flex-grow text-lg">
      "{quote}"
    </blockquote>
    <div className="flex items-center mt-auto">
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-bold text-secondary">{name}</h4>
        <p className="text-sm text-secondary-500/70">{position}, {company}</p>
      </div>
    </div>
    {stats && (
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="font-bold text-primary">{stats}</p>
      </div>
    )}
    {/* Círculo decorativo */}
    <div className="absolute -right-3 -bottom-3 w-10 h-10 rounded-full border-4 border-primary/20 -z-10"></div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ana Carolina',
      position: 'Gerente de Marketing',
      company: 'Tech Solutions',
      quote: 'A implementação do chatbot da PulsAI foi surpreendentemente rápida. Em menos de um mês, vimos um aumento de 40% na captura de leads e nosso time agora dedica mais tempo a estratégias ao invés de responder perguntas repetitivas.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80',
      stats: 'Aumento de 40% em leads qualificados'
    },
    {
      name: 'Ricardo Mendes',
      position: 'Diretor',
      company: 'Clínica Saúde Total',
      quote: 'Nossos pacientes adoraram o assistente virtual. Ele agenda consultas, tira dúvidas sobre planos e envia lembretes automáticos. A satisfação do cliente aumentou visivelmente e nossa recepção está menos sobrecarregada.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&auto=format&fit=crop&q=80',
      stats: 'Redução de 60% no tempo de espera'
    },
    {
      name: 'Fernanda Oliveira',
      position: 'CEO',
      company: 'Agência Digital FO',
      quote: 'Como agência, implementamos a solução da PulsAI para nós e para vários clientes. O ROI foi claro em todos os casos. A capacidade de personalizar o assistente para cada negócio é impressionante e o suporte técnico é excelente.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&auto=format&fit=crop&q=80',
      stats: 'ROI positivo em menos de 3 meses'
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Círculos decorativos */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-2xl -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">O que nossos clientes dizem</h2>
          <p className="text-lg md:text-xl text-center max-w-2xl text-secondary-500/80">
            Empresas de diversos segmentos já transformaram seus resultados com a PulsAI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              position={testimonial.position}
              company={testimonial.company}
              quote={testimonial.quote}
              image={testimonial.image}
              stats={testimonial.stats}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
