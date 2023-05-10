import { colors } from '../colors';
import { components } from './typography';

export const Body4 = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.regular,
        color: colors.neutral.neutralXDark
      }}
    >
      {children}
    </p>
  );
};
