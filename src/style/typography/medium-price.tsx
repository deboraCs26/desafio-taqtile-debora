import {colors} from '..//colors';
import { components } from './typography';

interface PriceProps {
  children: React.ReactNode;
  weight?: "bold" | "regular";
  size?: "xxxLarge" | "xLarge" | "medium";
};
export const Price = ({ children, weight, size }: PriceProps) => {
 const fontWeight = weight ? components.fontWeight.bold : components.fontWeight.regular;
 let fontSize = components.fontSize.medium;
 if (size === "xxxLarge") {
  fontSize = components.fontSize.xxxLarge;
} else if (size === "xLarge") {
  fontSize = components.fontSize.xLarge;
}
  return (
    <p
      style={{
        lineHeight: components.lineHeight.large,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </p>
  );
};
