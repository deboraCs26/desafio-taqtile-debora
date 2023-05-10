import { colors } from '../colors';
import { components } from './typography';

export const Body1 = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontSize: components.fontSize.xLarge,
        fontWeight: components.fontWeight.regular,
        lineHeight: components.lineHeight.large,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </p>
  );
};
