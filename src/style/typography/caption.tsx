import { colors } from '../colors';
import { components } from './typography';

interface CaptionProps{
  children: React.ReactNode;
  color?: "dark" | "white";
}

export const Caption = ({ children, color } : CaptionProps) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.small,
        fontWeight: components.fontWeight.regular,
        color: color === "dark" ? colors.neutral.neutralMedium : colors.neutral.white,
      }}
    >
      {children}
    </p>
  );
};
