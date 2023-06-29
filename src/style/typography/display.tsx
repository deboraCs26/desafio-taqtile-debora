import { colors } from '../colors';
import { components } from './typography';

interface DisplayProps {
  children: React.ReactNode;
  color?: "dark" | "cta";
};


export const Display = ({ children, color}: DisplayProps) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.xxxxLarge,
        fontWeight: components.fontWeight.bold,
        color: color === "dark" ? colors.brand.primaryXDark : colors.cta,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};
