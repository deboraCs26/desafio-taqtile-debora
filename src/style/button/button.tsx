import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { colors } from "../colors";
import { components } from "../typography/typography";
import { styleButton } from "./style-button";
import { Separator } from "../separator/separator";

interface ButtonProps {
  variant: "primary" | "secondary" | "cta";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: IconDefinition;
  compact?: boolean;
  expand?: boolean
  style?: React.CSSProperties;
};

export const Button = ({ variant, children, icon, disabled = false, onClick, compact, expand}: ButtonProps) => {

  const buttonConstantStyle = {
    ...styleButton.style,
    fontFamily: components.family.primary,
    fontSize: components.fontSize.large,
    fontWeight: components.fontWeight.bold,
    borderColor: colors.accessory.secondary,
  };

  let backgroundColor
  let color
  let border

  if (variant === "primary") {
    backgroundColor = disabled
      ? colors.neutral.neutralLight
      : colors.brand.primaryXDark;
    color = colors.neutral.white;
    border = styleButton.style.border
  } else if (variant === "secondary") {
    backgroundColor = colors.neutral.white;
    color = colors.accessory.secondary;
    border = `1px solid ${colors.accessory.secondary}`;
  } else if (variant === "cta") {
    backgroundColor = colors.cta;
    color = colors.neutral.white;
    border = styleButton.style.border
  };

  const styleDoButton = {
    width: expand ? "100%" : "",
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
      {!!icon && <>
        <FontAwesomeIcon icon={icon} className="icon" />
        <Separator size="small" horizontal />
      </>}
      {children}
    </button>
  );
};
