import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'budget' | 'insight';
}

export function Card({ children, className = '', variant = 'default', ...props }: CardProps) {
  const variantClasses = {
    default: 'rounded-lg border bg-white p-4 shadow transition-all duration-300 hover:shadow-lg',
    budget: 'rounded-lg border-l-4 border-blue-500 bg-white p-4 shadow transition-all duration-300 hover:shadow-lg',
    insight: 'rounded-lg border-l-4 border-green-500 bg-white p-4 shadow transition-all duration-300 hover:shadow-lg'
  };

  return (
    <div {...props} className={`${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`space-y-2 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`flex items-center justify-between border-b pb-2 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className={`flex items-center justify-between pt-2 border-t ${className}`}>
      {children}
    </div>
  );
}