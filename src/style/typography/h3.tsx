import { colors } from '../colors';
import { components } from './typography';

export const H3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.XLarge,
        fontWeight: components.fontWeight.semiBold,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </h3>
  );
};