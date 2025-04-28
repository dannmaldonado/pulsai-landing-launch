
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
    <section id="benefits" className="section-padding bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="section-heading text-center">Benefícios tangíveis</h2>
        <p className="section-subheading text-center">
          Veja como a PulsAI transforma concretamente o atendimento e produtividade do seu negócio
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="card hover-card">
              <div className="bg-primary-50 p-4 inline-flex rounded-lg mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary">
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
