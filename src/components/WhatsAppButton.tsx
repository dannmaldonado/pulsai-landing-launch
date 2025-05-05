
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 h-96 md:w-96 md:h-[500px] rounded-lg shadow-xl overflow-hidden">
          <iframe 
            src="https://dash.superagentes.ai/agents/cm8x9k9uh005e29vudakl8h4m/iframe" 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            allow="clipboard-write"
            title="Chat com especialista"
          />
        </div>
      )}
      
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-600 hover:scale-110 transition-all duration-300 z-50"
        aria-label="Abrir chat com especialista"
      >
        <MessageSquare className="h-6 w-6" />
      </button>
    </>
  );
};

export default WhatsAppButton;
