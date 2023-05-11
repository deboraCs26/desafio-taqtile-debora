import { colors } from '..//colors';
import { components } from './typography';

interface DTProps {
  children: React.ReactNode;
  weight?: "regular" | "bold";
};
export const DT = ({ children, weight }: DTProps) => {
 const fontWeight = weight ? components.fontWeight.bold : components.fontWeight.regular;
  return (
    <p
      style={{
        fontSize: components.fontSize.medium,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </p>
  );
};
