import { colors } from "../colors";
import { components } from "../typography/typography";
import { styleButton } from "../button/style-button"
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'neutral';
};
export const PrimayButton = ({ children, variant, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.bold,
        borderRadius: styleButton.style.borderRadius,
        border: styleButton.style.border,
        background: variant === "primary" ? colors.brand.primary.primayXDark : colors.neutral.neutralLight,
        color: colors.neutral.white,
      }}
    >
      {children}
    </button>
  );
};
