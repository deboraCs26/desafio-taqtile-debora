import { colors } from '..//colors'
import { components } from './typography';
interface LargeLabelProps {
  children: React.ReactNode;
  weight?: "bold" | "regular" | "semibold";
  color?: "dark" | "white";
  size?: "medium" | "large";
  fontFamily?: "Poppins";
};

export const LargeLabel = ({ children, weight, color, size }: LargeLabelProps) => {
  return (
    <label
      style={{
        fontFamily: components.family.primary,
        fontSize: size === "large" ? components.fontSize.medium : components.fontSize.large,
        fontWeight: weight === "bold" ? components.fontWeight.semibold : components.fontWeight.regular,
        lineHeight: components.lineHeight.large,
        color: color === "dark" ? colors.brand.primary.dark : colors.neutral.white,
      }}
    >
      {children}
    </label>
  );
};
