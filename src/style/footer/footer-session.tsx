import React from "react";
import './style.css';
import { Body2 } from "../typography/body2";
import { H3 } from "../typography/h3";

interface FooterSessionProps {
  title?: string;
  items: string[];
};

export const FooterSession = ({ title, items }: FooterSessionProps) => {
  return (
    <div className="footer-session">
      <H3>{title}</H3>
      <ul>
        {items.map((item, index) => (
          <li key={item}>
            <Body2 weight="regular">{item}</Body2>
          </li>
        ))}
      </ul>
    </div>
  );
};
