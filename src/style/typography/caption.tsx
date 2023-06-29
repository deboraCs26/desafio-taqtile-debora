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
        color: color === "dark" ? colors.neutral.neutralDark : colors.neutral.white,
        opacity: 0.5,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};
