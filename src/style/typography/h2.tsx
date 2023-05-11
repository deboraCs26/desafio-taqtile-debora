import { colors } from '..//colors';
import { components } from './typography';

export const H2= ({ children }:  {children: React.ReactNode}) => {
  return (
    <h2
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.xxLarge,
        fontWeight: components.fontWeight.regular,
        lineHeight: components.lineHeight.large,
        color: colors.brand.primary.medium,
      }}
    >
      {children}
    </h2>
  );
};
