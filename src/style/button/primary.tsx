import { colors } from "../colors";
import { components } from "../typography/typography";
import { styleButton } from "../button/style-button"
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'neutral';
  height?: "default" | "defaultCompact";
};
export const PrimayButton = ({ children, variant, onClick, height }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.bold,
        borderRadius: styleButton.primary.borderRadius,
        border: styleButton.primary.border,
        padding: styleButton.primary.padding,
        height: height === "default" ? styleButton.height.default: styleButton.height.defaultCompact,
        width: styleButton.primary.width,
        display: styleButton.primary.display,
        alignItems: styleButton.primary.alignItems,
        justifyContent: styleButton.primary.justifyContent,
        background: variant === "primary" ? colors.brand.primary.primayXDark : colors.neutral.neutralLight,
        color: colors.neutral.white,
      }}
    >
      {children}
    </button>
  );
};



