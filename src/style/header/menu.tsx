import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { Label } from '../typography/large-label';

interface MenuProps {
  label: string;
  to: string;
  isSelected: boolean;
}

export const MenuItem = ({ label, to }: MenuProps) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  const linkStyles = {
    textDecoration: 'none',
    borderBottom: 'none',
  };

  return (
    <li
      className={`${isHovered && 'menu-item-selected'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={to} style={linkStyles}>
        <Label weight="bold" color="Xdark">
          {label}
        </Label>
      </Link>
    </li>
  );
};
