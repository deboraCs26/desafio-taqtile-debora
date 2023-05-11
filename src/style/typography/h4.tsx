import { colors } from '..//colors';
import { components } from './typography';

export const H4 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.extraBold,
        lineHeight: components.lineHeight.large,
        color: colors.brand.primary.medium,
      }}
    >
      {children}
    </h4>
  );
};
