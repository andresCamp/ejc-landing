import Link from 'next/link';
import React from 'react';

interface ButtonProps {
    text?: string
    url?: string
    type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text = "Click Me", type = "button", url = "/" }) => {
  const buttonContent = (
    <div className="flex items-center justify-center">
      <button 
        type={type}
        className="relative px-2 py-2 font-bold text-black bg-transparent border-none group overflow-hidden">
        <span className="z-10 relative group-hover:text-white transition-colors duration-300 ease-linear font-syne font-thin tracking-wide">{text}</span>
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black group-hover:h-full transition-all duration-300 ease-linear"></span>
      </button>
    </div>
  );

  if (type === 'button') {
      return <Link href={url}>{buttonContent}</Link>;
  }

  return buttonContent;
};

export default Button;

