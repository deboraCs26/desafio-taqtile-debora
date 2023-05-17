import React from "react";
import "./button.css";
import { colors } from "../colors";
import { components } from "../typography/typography";
import { styleButton } from "./style-button";


interface ButtonProps {
  variant: 'primary' | 'secondary' | 'cta';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  height?: "default" | "defaultCompact";
  style?: React.CSSProperties;
};

export const Button = ({ variant, children, icon, disabled = false, onClick, height }: ButtonProps) => {
  return (
    <button
      className={`button ${height}`}
      disabled={disabled}
      onClick={onClick}
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.bold,
        width: styleButton.style.minWidth,
        alignItems: styleButton.style.alignItems,
        borderRadius: styleButton.style.borderRadius,
        borderColor: colors.accessory.banner,
        background: variant === "secondary" ? colors.neutral.white : variant === "cta" ? colors.cta : variant === "primary" ? disabled ?  colors.neutral.neutralLight : colors.brand.primary.primayXDark : "",
        color: variant === "primary" ? colors.neutral.white : variant === "secondary" ? colors.accessory.banner : variant === "cta" ? colors.neutral.white : "",
        border: variant === "secondary" ? `1px solid ${colors.accessory.banner}` : "none",
        cursor: "pointer",
      }}

    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
