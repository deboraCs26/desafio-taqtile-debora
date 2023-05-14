import { colors } from "../colors";
import { components } from "../typography/typography";
import { styleButton } from "../button/style-button"
<<<<<<< HEAD

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
=======
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: "dark" | "neutralLight"
};

export const Button = ({ children, backgroundColor, onClick}: ButtonProps) => {
  return (
    <button
      
      onClick={onClick}
      
>>>>>>> 55b1634416994dec6057e110ed1b92013731110d
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.bold,
        borderRadius: styleButton.primary.borderRadius,
<<<<<<< HEAD
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
=======
        padding: styleButton.primary.padding,
        height: styleButton.primary.height,
        backgroundColor: backgroundColor === "dark" ? colors.brand.primary.dark : colors.neutral.neutralLight,
        color: colors.neutral.white,
      }}
    >     
>>>>>>> 55b1634416994dec6057e110ed1b92013731110d
      {children}
    </button>
  );
};



