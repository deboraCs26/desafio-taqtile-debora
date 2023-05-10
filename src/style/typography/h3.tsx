import { colors } from '../colors';
import { components } from './typography';

export const H3= ({ children }:  {children: React.ReactNode}) => {
  return (
    <h3
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.xLarge,
        fontWeight: components.fontWeight.semibold,
        lineHeight: components.lineHeight.large,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </h3>
  );
};
