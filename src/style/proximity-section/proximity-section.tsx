import React from "react";
import './proximity.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { colors } from "../colors";
import { Body2 } from "../typography/body2";
import { H4 } from "../typography/h4";
import { H2 } from "../typography/h2";

interface Item {
  icon: IconProp;
  text: string;
  title: String;
  color?: string;
};

interface ItemsListProps {
  title?: string;
  itemsNeutral?: Item[];
};

const styleItems = {
  neutralLight: colors.neutral.neutralLight,
};

export const ProximitySection = ({ title, itemsNeutral }: ItemsListProps) => {

  return (
    <div className="items-proximity-container">
      <H2 color="XDark">{title}</H2>
      <div className="proximity-section">
        <ul>
          {itemsNeutral && itemsNeutral.map((item, id) => (
            <li key={id} className="proximity-item">
              <FontAwesomeIcon icon={item.icon} style={{ color: styleItems.neutralLight }} size="lg" />
              <div>
                <H4 color="XDark">{item.title}</H4>
                <Body2 color="XDark">{item.text}</Body2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};