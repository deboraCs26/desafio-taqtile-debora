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

}

export const Button = ({ variant, children, icon, disabled = false, onClick, compact}: ButtonProps) => {

  const buttonConstantStyle = {
    fontFamily: components.family.primary,
    fontSize: components.fontSize.large,
    fontWeight: components.fontWeight.bold,
    minWidth: styleButton.style.minWidth,
    alignItems: styleButton.style.alignItems,
    borderRadius: styleButton.style.borderRadius,
    borderColor: colors.accessory.banner,
    cursor: "pointer",
  };

  let backgroundColor, color, border;
  if (variant === "primary") {
    backgroundColor = disabled
      ? colors.neutral.neutralLight
      : colors.brand.primaryXDark;
    color = colors.neutral.white;
    border = styleButton.style.border
  } else if (variant === "secondary") {
    backgroundColor = colors.neutral.white;
    color = colors.accessory.banner;
    border = `1px solid ${colors.accessory.banner}`;
  } else if (variant === "cta") {
    backgroundColor = colors.cta;
    color = colors.neutral.white;
    border = styleButton.style.border
  }

  const styleDoButton = {
    ...buttonConstantStyle,
    backgroundColor,
    color,
    border,
    height: compact ? "40px" : "48px",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={styleDoButton}
    >
      {!!icon && <span>{icon}</span>}
      {children}
    </button>
  );
};