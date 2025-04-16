import React from 'react';
import { getCategoryColor } from '@/lib/utils';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  category: string;
}

export function Tag({ category, className = '', ...props }: TagProps) {
  const colorClass = getCategoryColor(category);
  return (
    <span 
      {...props} 
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass} ${className}`}
    >
      {category}
    </span>
  );
}