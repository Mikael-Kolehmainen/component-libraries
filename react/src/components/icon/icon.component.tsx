import { IconContainer } from "./icon.styles";

interface IconProps {
  IconComponent: React.FC;
  width?: string
  height?: string
}

const Icon = ({ IconComponent, width='70px', height='70px' }: IconProps) => {
  return (
    <IconContainer $width={width} $height={height}>
      <IconComponent />
    </IconContainer>
  );
};

export default Icon;
