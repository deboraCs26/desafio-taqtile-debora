import React, { useState } from 'react';
import './badge.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { colors } from '../colors';
import { Caption } from '../typography/caption';
import { Separator } from '../Separator/separator';

interface BadgeProps {
  icon?: IconDefinition;
  text: string;
  selected: boolean;
  onClick: () => void;
}

export const Badge = ({ icon, text, selected, onClick }: BadgeProps) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const badgeStyle = {
    color: selected ? colors.neutral.white : "",
    backgroundColor: selected ? colors.cta : '',
    cursor: 'pointer',
    ...(hovered && { backgroundColor: '#29D6E733' }),
    border: `1px solid ${colors.neutral.neutralMedium}`
  };

  return (
    <div
      className='badge-container'
      style={badgeStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!!icon && <FontAwesomeIcon icon={icon} className='badge-icon' />}
      <Separator size="small" />
      <Caption color={selected ? "white" : "dark"}>{text}</Caption>
    </div>
  );
};
