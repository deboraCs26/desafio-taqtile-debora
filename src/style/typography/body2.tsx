import { colors } from '../colors';
import { components } from './typography';

interface Body2Props {
  children: React.ReactNode;
  weight?: "regular" | "bold";
  color?: "XDark" | "white";
};

export const Body2 = ({ children, color, weight }: Body2Props) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: weight === "bold" ? components.fontWeight.bold : components.fontWeight.regular,
        color: color === "XDark" ? colors.neutral.neutralXDark : colors.neutral.white,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};