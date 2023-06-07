import React, { ReactNode } from 'react';
import './card-container.css'

interface CardContainerProps {
  children: ReactNode;
}

export const CardContainer = ({ children }: CardContainerProps) => {
  return (
    <div className="card-container">{children}</div>
  );
};
