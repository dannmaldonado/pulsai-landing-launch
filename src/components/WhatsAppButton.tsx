
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '5518991090670';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-600 hover:scale-110 transition-all duration-300 z-50"
      aria-label="Abrir WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
