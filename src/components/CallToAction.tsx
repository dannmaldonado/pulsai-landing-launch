
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const CallToAction = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    webhookUrl: '' // URL do webhook será definida internamente
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de envio para webhook/Zapier
    try {
      // Em produção, esta seria a URL real do webhook do Zapier/Make
      const webhookUrl = "https://hooks.zapier.com/hooks/catch/YOUR-WEBHOOK-ID";
      
      console.log("Enviando dados para webhook:", formData);
      
      // Simular delay de rede
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Como estamos apenas simulando, mostraremos sucesso sem realmente enviar dados
      // Em produção, você usaria fetch() para enviar os dados para o webhook
      
      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Um especialista entrará em contato em breve.",
      });
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        webhookUrl: ''
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        variant: "destructive",
        title: "Erro ao enviar solicitação",
        description: "Por favor, tente novamente ou entre em contato pelo WhatsApp.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact-form" className="section-padding bg-primary text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Pronto para transformar seu atendimento com IA?
          </h2>
          <p className="text-lg opacity-90">
            Agende uma avaliação gratuita com nossos especialistas e descubra como a PulsAI pode ajudar sua empresa a economizar tempo e dinheiro.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl p-6 md:p-8 shadow-lg">
          <form onSubmit={handleSubmit} id="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-secondary">Nome completo</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                  className="bg-gray-50 border-gray-200 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-secondary">Email profissional</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                  className="bg-gray-50 border-gray-200 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-secondary">Telefone/WhatsApp</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(00) 00000-0000"
                  className="bg-gray-50 border-gray-200 focus:border-primary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-secondary">Empresa</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  placeholder="Nome da empresa"
                  className="bg-gray-50 border-gray-200 focus:border-primary"
                />
              </div>
            </div>
            <div className="space-y-2 mt-4 md:mt-6">
              <Label htmlFor="message" className="text-secondary">Mensagem (opcional)</Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                placeholder="Como podemos ajudar sua empresa?"
                className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-secondary resize-none"
              ></textarea>
            </div>
            <div className="mt-6">
              <Button 
                type="submit" 
                disabled={isLoading}
                className="btn-cta w-full"
              >
                {isLoading ? 'Enviando...' : 'Quero minha avaliação gratuita'}
              </Button>
              <p className="text-center text-sm text-gray-500 mt-3">
                Ao enviar, você concorda com nossa{' '}
                <a href="#" className="text-primary hover:underline">Política de Privacidade</a>
              </p>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
              </svg>
              <span className="text-sm text-secondary-500/70">
                Resposta em até 24h úteis
              </span>
            </div>
            <div>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Ou agende diretamente na agenda <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
