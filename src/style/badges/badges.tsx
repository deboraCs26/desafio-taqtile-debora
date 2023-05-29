import React, { useState } from 'react';
import './badges.css';
import { colors } from '../colors';
import { components } from '../typography/typography';

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
}

export const fontBadges = {
  fontFamily: components.family.primary,
  fontSize: components.fontSize.large,
}

export const Badge = ({ icon, text }: BadgeProps) => {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleClick = () => {
    setSelected(!selected);
  };
  
  const badgeStyle = {
    backgroundColor: selected ? colors.cta : '',
    color: selected ? colors.neutral.white : '',
    cursor: 'pointer',
    ...(hovered && { backgroundColor: '#29D6E733' }),
    border: `1px solid ${colors.neutral.neutralMedium}`
  };

  return (
    <div
      className="style-badge"
      style={{...badgeStyle, ...fontBadges}}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
       {icon}
      <span>{text}</span>
    </div>
  );
};
