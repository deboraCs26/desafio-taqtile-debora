import { colors } from '..//colors'
import { components } from './typography';

interface labelProps  {
  children: React.ReactNode;
  weight?: "bold" | "regular" | "semibold";
  color?: "dark" | "white";
  size?: "medium" | "large";
};

export const Label = ({ children, weight, color, size }: labelProps) => {
  let fontWeight = components.fontWeight.regular;
  let fontColor = colors.brand.primary.dark;
  const fontSize = size === "large" ? components.fontSize.large : components.fontSize.medium;

  if (weight === "bold") {
    fontWeight = components.fontWeight.bold;
  } else if (weight === "semibold") {
    fontWeight = components.fontWeight.semibold;
  }

  if (color === "white") {
    fontColor = colors.neutral.white;
  }

  return (
    <label
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        lineHeight: components.lineHeight.large,
        color: fontColor,
      }}
    >
      {children}
    </label>
  );
};

