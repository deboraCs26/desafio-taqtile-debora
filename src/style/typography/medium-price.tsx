import { colors } from '../colors';
import { components } from './typography';

export const MediumPrice = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontSize: components.fontSize.xLarge,
        fontWeight: components.fontWeight.bold,
        lineHeight: components.lineHeight.large,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </p>
  );
};
