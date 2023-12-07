import React from 'react';

interface ButtonProps {
    text?: string
}

const Button: React.FC<ButtonProps> = ({text = "Click Me"}) => {
  return (
    <div className="flex items-center justify-center ">
      <button className="relative px-2 py-2 font-bold text-white bg-transparent border-none group overflow-hidden">
        <span className="z-10 relative group-hover:text-black transition-colors duration-300 ease-linear font-syne font-thin">{text}</span>
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white group-hover:h-full transition-all duration-300 ease-linear"></span>
      </button>
    </div>
  );
};

export default Button;

