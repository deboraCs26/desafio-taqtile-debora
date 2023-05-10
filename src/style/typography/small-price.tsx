import { colors } from '../colors';
import { components } from './typography';

export const SmallPrice = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontSize: components.fontSize.medium,
        fontWeight: components.fontWeight.regular,
        lineHeight: components.lineHeight.large,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </p>
  );
};
