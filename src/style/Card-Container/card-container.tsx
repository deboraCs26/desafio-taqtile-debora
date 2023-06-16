import './card-container.css'
import { components } from '../typography/typography';
import { colors } from '../colors';

interface ContainerProps{
children: React.ReactNode;
};

export const ContainerCards = ({ children}: ContainerProps) => {
  return (
    <div
      style={{
        boxShadow: colors.boxShadow.boxShadow,
        borderRadius: components.borderRadius.smallRadius,
      }}
    >
      {children}
    </div>
  );
};
