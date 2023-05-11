import { colors } from '..//colors';
import { components } from './typography';

export const Caption = ({ children }: { children: React.ReactNode }) => {
  return (
    <caption
      style={{
        fontFamily: components.family.primary,
        fontSize: components.fontSize.small,
        fontWeight: components.fontWeight.regular,
        lineHeight: components.lineHeight.large,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </caption>
  );
};
