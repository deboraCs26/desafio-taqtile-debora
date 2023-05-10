import { colors } from '../colors';
import { components } from './typography';

export const Body3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <p
      style={{
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.bold,
        color: colors.neutral.neutralXDark,
      }}
    >
      {children}
    </p>
  );
};
