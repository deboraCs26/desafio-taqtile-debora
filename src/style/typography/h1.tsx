import { colors } from '..//colors';
import { components} from './typography';

export const H1= ({ children }:  {children: React.ReactNode}) => {
  return (
    <h1
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.xxxxLarge,
        fontWeight: components.fontWeight.semibold,
        lineHeight: components.lineHeight.large,
        color: colors.brand.primary.medium,
      }}
    >
      {children}
    </h1>
  );
};