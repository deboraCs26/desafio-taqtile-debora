import React from "react";
import "./button.css";
import { colors } from "../colors";
import { components } from "../typography/typography";
import { styleButton } from "./style-button";

interface ButtonProps {
  variant: "primary" | "secondary" | "cta";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  compact?: boolean;
  style?: React.CSSProperties;
};

export const Button = ({ variant, children, icon, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
    >
      {!!icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
