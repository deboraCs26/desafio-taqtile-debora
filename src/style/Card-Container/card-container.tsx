import './card-container.css'
import { components } from '../typography/typography';
import { colors } from '../colors';

interface ContainerProps{
children: React.ReactNode
margin?: boolean;
};

export const ContainerCards = ({ children, margin }: ContainerProps) => {
  return (
    <div
      style={{
        boxShadow: colors.boxShadow.boxShadow,
        borderRadius: components.borderRadius.smallRadius,
        margin: margin ? "14px" : "",
      }}
    >
      {children}
    </div>
  );
};
