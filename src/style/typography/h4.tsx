import { colors } from '../colors';
import { components } from './typography';

export const H4 = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.extraBold,
        lineHeight: components.lineHeight.large,
        color: colors.brand.medium,
      }}
    >
      {children}
    </p>
  );
};
