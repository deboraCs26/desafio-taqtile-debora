import { colors } from '..//colors';
import { components } from './typography';

interface Body2Props {
  children: React.ReactNode;
  weight?: "regular" | "bold";
};
export const Body2 = ({ children, weight }: Body2Props) => {
 const fontWeight = weight ? components.fontWeight.bold : components.fontWeight.regular;
  return (
    <p
      style={{
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.regular,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </p>
  );
};
