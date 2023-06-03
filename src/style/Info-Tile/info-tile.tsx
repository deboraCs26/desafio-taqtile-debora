import React from 'react';
import './info-tile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { H4 } from '../typography/h4';

interface InfoTileProps {
  icon?: IconDefinition;
  text?: string;
}

export const InfoTile = ({ text }: InfoTileProps) => {
  return (
    <div className="style-info-tile">
      <FontAwesomeIcon icon={faCar} size="xl" className='style-icon' />
      <H4>{text}</H4>
    </div>
  );
};
