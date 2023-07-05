import React from 'react';

interface SeparatorProps {
  size: "small" | "medium" | "large";
  horizontal?: boolean; 
}

export const Separator = ({ size, horizontal }: SeparatorProps) => {
  const dimension = horizontal ? 'width' : 'height';
  const height = size === 'small' ? '8px' : size === 'large' ? '16px' : '24px';

  return <div style={{ [dimension]: height }} />;
};
