import React from 'react';

interface SeparatorProps {
  height?: number;
  width?: number;
}

export const Separator = ({ height, width }: SeparatorProps) => {
  const separatorStyle: React.CSSProperties = {
    height: height ? `${height}px` : "",
    width: width ? `${width}px` : "undefined",
  };

  return <div style={separatorStyle} />;
};