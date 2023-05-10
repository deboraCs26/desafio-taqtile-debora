import { colors } from '../colors';
import { components } from './typography';

export const LabelLargeBold = ({ children }: { children: React.ReactNode }) => {
  return (
    <label
      style={{
        fontSize: components.fontSize.large,
        fontWeight: components.fontWeight.bold,
        lineHeight: components.lineHeight.large,
        color: colors.brand.primary.dark,
      }}
    >
      {children}
    </label>
  );
};
