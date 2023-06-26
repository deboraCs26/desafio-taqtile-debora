import React from 'react';

interface SeparatorProps {
  size: "small" | "medium" | "large";
  horizontal?: boolean;
  
}

export const Separator = ({ size, horizontal }: SeparatorProps) => {
  const dimension = horizontal ? 'width' : 'height';
  const height = size === 'small' ? '16px' : size === 'large' ? '40px' : '8px' ;
  
  return <div style={{ [dimension]: height }} />;
};

