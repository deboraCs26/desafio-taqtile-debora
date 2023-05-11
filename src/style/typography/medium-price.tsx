import { colors } from '..//colors';
import { components } from './typography';
interface PriceProps {
  children: React.ReactNode;
  weight?: "bold" | "regular";
  size?: "xxxLarge" | "xLarge" | "medium";
  color?: "neutralXDark";
  fontFamily?: "Poppins";
};

export const Price = ({ children, weight, size, color }: PriceProps) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        lineHeight: components.lineHeight.large,
        fontSize: size === "xxxLarge" ? components.fontSize.xLarge : components.fontSize.medium,
        fontWeight: weight === "bold" ? components.fontWeight.bold : components.fontWeight.regular,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </p>
  );
};
