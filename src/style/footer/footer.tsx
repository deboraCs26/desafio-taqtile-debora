import React from "react";
import './style.css';
import { Body2 } from "../typography/body2";
import { H3 } from "../typography/h3";

interface FooterBlockProps {
  title?: string;
  items: string[];
};

export const FooterBlock = ({ title, items }: FooterBlockProps) => {
  return (
    <div className="footer-block">
      <div className="title">
        <H3>{title}</H3>
      </div>
      <ul>
        <Body2 weight="regular">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Body2>
      </ul>
    </div>
  );
};