import { colors } from '../colors'
import { components } from './typography';
interface LabelProps {
  children: React.ReactNode;
  weight?: "bold" | "regular" | "semiBold";
  color?: "dark" | "white";
  size?: "medium" | "large";
};

export const Label = ({ children, weight, color, size }: LabelProps) => {
  return (
    <label
      style={{
        fontFamily: components.family.primary,
        fontSize: size === "large" ? components.fontSize.medium : components.fontSize.large,
        fontWeight: weight === "bold" ? components.fontWeight.semiBold : components.fontWeight.regular,
        color: color === "dark" ? colors.brand.primary.dark : colors.neutral.white,
      }}
    >
      {children}
    </label>
  );
};
