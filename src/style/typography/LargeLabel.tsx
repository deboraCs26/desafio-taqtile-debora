import { colors } from '../colors'
import { components } from './typography';
interface LargeLabelProps {
  children: React.ReactNode;
  weight?: "bold" | "regular" | "semiBold";
  color?: "dark" | "white";
  size?: "medium" | "large";
};

export const LargeLabel = ({ children, weight, color, size }: LargeLabelProps) => {
  return (
    <label
      style={{
        fontFamily: components.family.primary,
        fontSize: size === "large" ? components.fontSize.medium : components.fontSize.large,
        fontWeight: weight === "bold" ? components.fontWeight.semiBold : components.fontWeight.regular,
        lineHeight: components.lineHeight.large,
        color: color === "dark" ? colors.brand.primaryXDark : colors.neutral.white,
      }}
    >
      {children}
    </label>
  );
};
