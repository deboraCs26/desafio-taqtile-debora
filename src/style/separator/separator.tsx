import React from 'react';

interface SeparatorProps {
  width?: number;
  height?: number;
}

export const Separator = ({ width, height }: SeparatorProps) => {
  const separatorStyle = {
    width: `${width}px`,
    height: height ? `${height}px` : undefined,
  };

  return <div style={separatorStyle} />;
};
