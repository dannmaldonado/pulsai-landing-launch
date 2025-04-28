
import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo = ({ className = "", variant = 'dark' }: LogoProps) => {
  return (
    <img 
      src={variant === 'light' 
        ? "/lovable-uploads/4bd71e3a-43fd-4e16-a104-6bf0fe60b754.png"
        : "/lovable-uploads/1be5415a-406b-4292-8b59-a4dee9b66214.png"
      }
      alt="PulsAI Logo" 
      className={`h-8 md:h-10 ${className}`}
    />
  );
};

export default Logo;
