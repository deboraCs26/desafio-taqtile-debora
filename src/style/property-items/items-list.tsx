import React from "react";
import './items.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { colors } from "../colors";
import { H2 } from "../typography/h2";
import { Body2 } from "../typography/body2";
import { Separator } from "../separator/separator";

interface Item {
  icon: IconProp;
  text: string;
  color?: string;
};

interface ItemsListProps {
  title?: string;
  itemsCta?: Item[];
  itemsNeutral?: Item[];
};

const styleItems = {
  cta: {
    color: colors.cta,
  },
  neutralLight: colors.neutral.neutralLight,
};

export const Items = ({ title, itemsCta, itemsNeutral }: ItemsListProps) => {

  return (
    <section>
      <H2 color="XDark">{title}</H2>
      <div className="items-property-container  first-list">
        <ul>
          {itemsNeutral && itemsNeutral.map((item, id) => (
            <li key={id}>
              <FontAwesomeIcon icon={item.icon} style={{ color: styleItems.cta.color }} size="lg" className="icon" />
              <Body2 color="XDark">{item.text}</Body2>
            </li>
          ))}
        </ul>

        <Separator size="XLarge" horizontal />
        <ul style={{ textDecoration: "line-through" }}>
          {itemsCta && itemsCta.map((items, id) => (
            <li key={id}>
              <FontAwesomeIcon icon={items.icon} style={{ color: styleItems.neutralLight }} size="lg" className="icon" />
              <Body2 color="XDark">{items.text}</Body2>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
