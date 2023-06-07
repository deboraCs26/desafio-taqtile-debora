import React from 'react';

interface SeparatorProps {
  size: 'small' | 'medium' | 'large';
}

export const Separator = ({ size } : SeparatorProps) => {

  let spacing: string;

  if (size === 'small') {
    spacing = '8px';
  } else if (size === 'medium') {
    spacing = '16px';
  } else if (size === 'large') {
    spacing = '24px';
  } else {
    spacing = '16px'; 
  }

  return <div style={{ height: spacing }} />;
};
