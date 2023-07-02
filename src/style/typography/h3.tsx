import { colors } from '../colors';
import { components } from './typography';

interface H3Props {
  children: React.ReactNode;
  weight?: "regular" | "bold";
  color?: "dark" | "white";
};


export const H3 = ({ children, color}: H3Props) => {
  return (
    <h3
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.XLarge,
        fontWeight: components.fontWeight.semiBold,
        color: color === "dark" ? colors.brand.primaryXDark : colors.neutral.white,
        margin: 0,
      }}
    >
      {children}
    </h3>
  );
};