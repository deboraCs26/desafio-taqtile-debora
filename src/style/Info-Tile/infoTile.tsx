import React from 'react';
import './infoTile.css';
import { colors } from '../colors';
import {components} from '../typography/typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface InfoTileProps {
  children?: React.ReactNode;
  icon?: IconDefinition;
  text?: string;
}
export const styleInfoTile = {
  fontFamily: components.family.primary,
  fontSize: components.fontSize.medium,
  fontWeigth: components.fontWeight.semiBold,
  color: colors.neutral.neutralXDark,
  background: colors.neutral.neutralXLight,
  border: `1.5px solid ${colors.neutral.neutralXDark}`
}
export const InfoTile = ({ children, icon, text }: InfoTileProps) => {
  return (
      <div className="style-infoTile" style={styleInfoTile}>
        <FontAwesomeIcon icon={icon || faCar} style={{ color: colors.neutral.neutralXDark }} />
        <h4 className="info-tile-text">{text}</h4>
      </div>
  );
};
