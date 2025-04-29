
import React from 'react';
import { Clock, Users, Calculator, FileText, MessageSquare, Calendar } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Atendimento 24/7',
      description: 'Responda clientes a qualquer hora, sem interrupções ou espera'
    },
    {
      id: 2,
      icon: <Calculator className="h-6 w-6 text-primary" />,
      title: 'Redução de custos',
      description: 'Economize até 70% em custos operacionais de atendimento'
    },
    {
      id: 3,
      icon: <Users className="h-6 w-6 text-primary" />,
      title: 'Equipe mais produtiva',
      description: 'Libere seus colaboradores para tarefas de maior valor'
    },
    {
      id: 4,
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: 'Integração com CRM',
      description: 'Conecte-se facilmente com suas ferramentas existentes'
    },
    {
      id: 5,
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: 'Personalização total',
      description: 'Assistente treinado com o tom de voz da sua marca'
    },
    {
      id: 6,
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: 'Implementação rápida',
      description: 'Resultados em até 30 dias sem interromper operações'
    }
  ];

  return (
    <section id="benefits" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Efeito de fundo com círculos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-2xl -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Benefícios tangíveis</h2>
          <p className="text-lg md:text-xl text-center max-w-2xl text-secondary-500/80">
            Veja como a PulsAI transforma concretamente o atendimento e produtividade do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="bg-primary/10 p-4 inline-flex rounded-lg mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">
                {benefit.title}
              </h3>
              <p className="text-secondary-500/80">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
