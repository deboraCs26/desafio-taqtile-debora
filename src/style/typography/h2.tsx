import { colors } from '../colors';
import { components } from './typography';

interface H2Props {
  children: React.ReactNode;
  color?: "Xdark" | "neutralMedium";
};

export const H2 = ({ children, color }: H2Props) => {
  return (
    <h2
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.xxLarge,
        fontWeight: components.fontWeight.regular,
        lineHeight: components.lineHeight.large,
        color: color === "Xdark" ? colors.neutral.neutralXDark : colors.neutral.neutralMedium,
      }}
    >
      {children}
    </h2>
  );
};
