import { colors } from '../colors';
import { components } from './typography';

interface Body1Props {
  children: React.ReactNode;
  color?: "dark" | "white";
};

export const Body1 = ({ children, color}: Body1Props) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.XLarge,
        fontWeight: components.fontWeight.regular,
        color: color === "dark" ? colors.brand.primaryXDark : colors.neutral.white,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};