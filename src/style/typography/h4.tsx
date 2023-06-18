import { colors } from '../colors';
import { components } from './typography';

export const H4 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h4
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.extraBold,
        color: colors.brand.medium,
        margin: 0,
      }}
    >
      {children}
    </h4>
  );
};
