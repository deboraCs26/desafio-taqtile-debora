import React from 'react';
import './infoTile.css';
import { colors } from '../colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { H4 } from '../typography/h4';

interface InfoTileProps {
  icon?: IconDefinition;
  text?: string;
}

export const styleIcon = {
  color: colors.neutral.neutralXDark,
}


export const InfoTile = ({ text }: InfoTileProps) => {
  return (
    <div className="style-info-tile">
      <FontAwesomeIcon className='styleIcon'  icon={faCar} size="xl" style={styleIcon} />
      <div className='style-text'>
        <H4>{text}</H4>
      </div>
    </div>
  );
};
