
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {
  return (
    <img 
      src="/lovable-uploads/1be5415a-406b-4292-8b59-a4dee9b66214.png" 
      alt="PulsAI Logo" 
      className={`h-8 md:h-10 ${className}`}
    />
  );
};

export default Logo;
