import React, { useState } from 'react';
import './style.css';
import { Label } from '../typography/large-label';

interface MenuProps {
  label: string;
  isSelected?: boolean;
  showHoverBorder?: boolean;
}

export const MenuItem = ({ label, isSelected, showHoverBorder }: MenuProps) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <li
      className={`${(isHovered || isSelected) && showHoverBorder ? 'menu-item-selected' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
    <Label weight="bold" color='Xdark'>{label}</Label>
    </li>
  );
};
