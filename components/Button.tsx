import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-tight transition-all duration-300 ease-out transform disabled:opacity-50 disabled:cursor-not-allowed";
  
  // FlyHyer inspiration: Rounded full (pill), subtle shadow, lift on hover
  const variants = {
    primary: "bg-brand-teal text-white shadow-lg shadow-brand-teal/30 hover:shadow-brand-teal/50 hover:-translate-y-0.5 rounded-full border border-transparent",
    secondary: "bg-brand-navy text-white shadow-lg shadow-brand-navy/30 hover:shadow-brand-navy/50 hover:-translate-y-0.5 rounded-full border border-transparent",
    outline: "bg-transparent text-brand-navy border-2 border-brand-navy/10 hover:border-brand-navy/30 hover:bg-brand-navy/5 rounded-full",
    ghost: "bg-transparent text-brand-navy hover:bg-brand-navy/5 rounded-lg"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const width = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;