import { colors } from '../colors';
import { components } from './typography';
interface Body2Props {
  children: React.ReactNode;
  weight?: "regular" | "bold";
};

export const Body2 = ({ children, weight }: Body2Props) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: weight === "bold" ? components.fontWeight.bold : components.fontWeight.regular,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </p>
  );
};