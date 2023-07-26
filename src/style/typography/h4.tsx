import { colors } from '../colors';
import { components } from './typography';

interface H4Props {
  children: React.ReactNode;
  weight?: "bold" | "extraBold" | "semiBold";
  size?: "medium" | "large";
  color?: "XDark" | "white";
};

export const H4 = ({ children, color, size, weight}: H4Props) => {
  return (
    <h4
      style={{
        fontFamily: components.family.primary,
        fontSize: size === "large" ? components.fontSize.medium : components.fontSize.large,
        fontWeight: weight === "bold" ? components.fontWeight.semiBold : components.fontWeight.extraBold,
        color: color === "XDark" ? colors.neutral.neutralXDark : colors.neutral.white,
        margin: 0,
      }}
    >
      {children}
    </h4>
  );
};
