import { colors } from '../colors';
import { components } from './typography';

export const Caption = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.small,
        fontWeight: components.fontWeight.regular,
        color: colors.neutral.neutralXDark,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
};
