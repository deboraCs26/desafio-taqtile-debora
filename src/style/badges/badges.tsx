import React, { useState } from 'react';
import './badges.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { colors } from '../colors';

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
    color: selected ? colors.neutral.white : '',
    backgroundColor: selected ? colors.cta : '',
    cursor: 'pointer',
    ...(hovered && { backgroundColor: '#29D6E733' }),
    border: `1px solid ${colors.neutral.neutralMedium}`
  };

  return (
    <div className='style-badges'>
      <div
        className='badges'
        style={badgeStyle}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className='icon'>
          {!!icon && <FontAwesomeIcon icon={icon} />}
        </div>
        <div className='text'>
          <p color={selected ? colors.neutral.neutralXDark : ''}>{text}</p>
        </div>
      </div>
    </div>
  );
};
