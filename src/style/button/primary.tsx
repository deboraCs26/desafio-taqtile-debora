import { colors } from "../colors";
import { components } from "../typography/typography";
import { styleButton } from "../button/style-button"
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  backgroundColor?: "dark" | "neutralLight"
};

export const Button = ({ children, backgroundColor, onClick}: ButtonProps) => {
  return (
    <button
      
      onClick={onClick}
      
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.bold,
        borderRadius: styleButton.primary.borderRadius,
        padding: styleButton.primary.padding,
        height: styleButton.primary.height,
        backgroundColor: backgroundColor === "dark" ? colors.brand.primary.dark : colors.neutral.neutralLight,
        color: colors.neutral.white,
      }}
    >     
      {children}
    </button>
  );
};



