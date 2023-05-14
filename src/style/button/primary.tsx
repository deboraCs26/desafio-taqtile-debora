import { colors } from "../colors";
import { components } from "../typography/typography";
import { styleButton } from "../button/style-button"

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'neutral';
  height?: "default" | "defaultCompact";
  color?: string;
};

export const PrimayButton = ({ children, variant, onClick, height, color }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.bold,
        borderRadius: styleButton.style.borderRadius,
        backgroundColor: backgroundColor === "dark" ? colors.brand.primaryXDark : colors.neutral.neutralLight,
        color: colors.neutral.white,
      }}
    >
      {children}
    </button>
  );
};



