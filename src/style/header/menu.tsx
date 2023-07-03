import React, { useState } from 'react';
import './style.css';
import { Label } from '../typography/LargeLabel';

interface MenuProps {
  label: string;
}

export const ComponentizationMenu = ({ label }: MenuProps) => {
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <li
      className={`${isHovered ? 'menu-item-selected' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Label weight={isHovered ? 'bold' : 'semiBold'} color='Xdark'>{label}</Label>
    </li>


  );
};
