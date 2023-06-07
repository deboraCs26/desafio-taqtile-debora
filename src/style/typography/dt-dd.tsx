import { colors } from '../colors';
import { components } from './typography';
interface DTProps {
  children: React.ReactNode;
  weight?: "regular" | "bold";
};

export const DT = ({ children, weight, }: DTProps) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.medium,
        fontWeight: weight === "bold" ? components.fontWeight.bold : components.fontWeight.regular,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </p>
  );
};