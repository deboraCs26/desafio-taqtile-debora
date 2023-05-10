import { colors } from '../colors';
import { components } from './typography';

export const labelLargeSemibold = ({ children }: { children: React.ReactNode }) => {
  return (
    <label
      style={{
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.semibold,
        lineHeight: components.lineHeight.large,
        color: colors.brand.primary.dark,
      }}
    >
      {children}
    </label>
  );
};
