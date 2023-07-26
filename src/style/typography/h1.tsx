import { colors } from '../colors';
import { components } from './typography';

interface H1Props {
  children: React.ReactNode;
  color?: "XDark" | "white";
};

export const H1 = ({ children, color }: H1Props) => {
  return (
    <h1
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.xxxxLarge,
        fontWeight: components.fontWeight.semiBold,
        lineHeight: components.lineHeight.large,
        color: color === "XDark" ? colors.neutral.neutralXDark : colors.neutral.neutralMedium,
        margin: 0,
      }}
    >
      {children}
    </h1>
  );
};
