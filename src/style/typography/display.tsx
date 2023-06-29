import { colors } from '../colors';
import { components } from './typography';

interface DisplayProps {
  children: React.ReactNode;
  color?: "dark" | "cta" | "white";
};


export const Display = ({ children, color}: DisplayProps) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.xxxxLarge,
        fontWeight: components.fontWeight.bold,
        color: color === "cta" ? colors.cta : colors.brand.primaryXDark  ? colors.neutral.white : "",
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};
