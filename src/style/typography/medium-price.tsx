import { colors } from '../colors';
import { components } from './typography';
interface PriceProps {
  children: React.ReactNode;
  weight?: "bold" | "regular";
  size?: "xxxLarge" | "XLarge" | "medium";
  color?: "Xdark" | "cta";
};

export const Price = ({ children, weight, size, color }: PriceProps) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: size === "xxxLarge" ? components.fontSize.XLarge : components.fontSize.medium,
        fontWeight: weight === "bold" ? components.fontWeight.bold : components.fontWeight.regular,
        color: color === "Xdark" ? colors.neutral.neutralXDark : colors.cta,
        margin:0,
      }}
    >
      {children}
    </p>
  );
};
