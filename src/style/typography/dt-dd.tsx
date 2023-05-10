import { colors } from '../colors';
import { components } from './typography';

export const fontWeightBold = components.fontWeight.bold;
export const Dt = ({ children }: { children: React.ReactNode }) => {
  return (
    <dt
      style={{
        fontSize: components.fontSize.medium,
        fontWeight: components.fontWeight.regular,
        lineHeight: components.lineHeight.large,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </dt>
  );
};
