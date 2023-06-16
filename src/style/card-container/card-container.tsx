import './card-container.css'
import { components } from '../typography/typography';
import { colors } from '../colors';

interface ContainerProps {
  children: React.ReactNode;
};

export const ContainerCard = ({ children}: ContainerProps) => {
  return (
    <div
      className='card-container'
      style={{
        boxShadow: colors.boxShadow.boxShadow,
        borderRadius: components.borderRadius.smallRadius,
      }}
    >
      {children}
    </div>
  );
};
