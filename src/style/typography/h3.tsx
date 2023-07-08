import { colors } from '../colors';
import { components } from './typography';

interface H3Props {
  children: React.ReactNode;
  weight?: "regular" | "bold";
  color?: "XDark" | "white";
};

export const H3 = ({ children, color, weight}: H3Props) => {
  return (
    <h3
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.XLarge,
        fontWeight: weight === "bold" ? components.fontWeight.bold : components.fontWeight.regular,
        color: color === "XDark" ? colors.neutral.neutralXDark : colors.neutral.white,
        margin: 0,
      }}
    >
      {children}
    </h3>
  );
};