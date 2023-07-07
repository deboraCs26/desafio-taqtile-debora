import { colors } from '../colors';
import { components } from './typography';

interface Body2Props {
  children: React.ReactNode;
  weight?: "regular" | "bold";
  color?: "dark" | "white";
};

export const Body2 = ({ children, color, weight }: Body2Props) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: weight === "bold" ? components.fontWeight.bold : components.fontWeight.regular,
        color: color === "dark" ? colors.brand.primaryXDark : colors.neutral.white,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};