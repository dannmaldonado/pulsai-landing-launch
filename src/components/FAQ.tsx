
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O que é o PulsAI Assistant?",
      answer: "O PulsAI Assistant é um assistente virtual baseado em IA que pode ser treinado com o conhecimento da sua empresa para atender clientes 24/7, responder perguntas, capturar leads e agendar compromissos. Ele se integra aos seus canais de atendimento, como site, WhatsApp e redes sociais."
    },
    {
      question: "Quanto tempo leva para implementar?",
      answer: "A implementação do PulsAI Assistant leva de 15 a 30 dias, dependendo da complexidade do seu negócio e da quantidade de informações que precisam ser treinadas. Nosso processo é estruturado para garantir resultados rápidos sem comprometer a qualidade."
    },
    {
      question: "É necessário conhecimento técnico para usar?",
      answer: "Não. Nossa equipe cuida de toda a implementação técnica e oferecemos um painel de controle intuitivo para que você possa acompanhar métricas e fazer ajustes simples. Não é necessário conhecimento em programação ou IA."
    },
    {
      question: "Como o assistente virtual é treinado?",
      answer: "Treinamos o assistente com documentos da sua empresa, como FAQs, manuais, políticas e até gravações de atendimentos anteriores. Além disso, realizamos entrevistas com sua equipe para captar conhecimento tácito e o tom de voz da marca."
    },
    {
      question: "O assistente se integra com outros sistemas?",
      answer: "Sim. O PulsAI Assistant se integra com os principais CRMs, plataformas de e-commerce, calendários e sistemas de gestão do mercado. Se você usa uma ferramenta específica, podemos discutir possibilidades de integração personalizada."
    },
    {
      question: "Qual é o investimento necessário?",
      answer: "O investimento varia conforme o tamanho da sua operação e necessidades específicas. Oferecemos planos a partir de R$ 497/mês para pequenas empresas. Para receber uma proposta personalizada, agende uma avaliação gratuita."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-primary"></div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Perguntas frequentes</h2>
          <p className="text-lg md:text-xl text-center max-w-2xl text-secondary-500/80">
            Respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="text-left font-bold text-secondary py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary-500/80 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-secondary-500/80">
            Não encontrou o que procurava?{' '}
            <a href="https://wa.me/5518991090670" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">
              Fale conosco pelo WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
