import React from 'react';
import './infoTile.css';
import { colors } from '../colors';
import { components } from '../typography/typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { H4 } from '../typography/h4';

interface InfoTileProps {
  icon?: IconDefinition;
  text?: string;
}

export const styleIcon ={
fontSize: components.fontSize.XLarge,
color: colors.neutral.neutralXDark,
}

export const InfoTile = ({text }: InfoTileProps) => {
  return (
      <div className="style-info-tile">
        <FontAwesomeIcon icon={faCar} style={ styleIcon}/>
        <H4>{text}</H4>
      </div>
  );
};
