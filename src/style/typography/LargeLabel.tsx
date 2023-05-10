import { colors } from '../colors';
import { components } from './typography';

export const LargeLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <label
      style={{
        fontSize: components.fontSize.medium,
        fontWeight: components.fontWeight.regular,
        lineHeight: components.lineHeight.large,
        color: colors.neutral.white,
      }}
    >
      {children}
    </label>
  );
};
