import { IconContainer } from "./icon.styles";

interface IconProps {
  IconComponent: React.FC;
  width?: string
  height?: string
  color?: string
  style?: React.CSSProperties
}

const Icon = ({ IconComponent, width='70px', height='70px', color, style }: IconProps) => {
  return (
    <IconContainer $width={width} $height={height} $color={color}>
      <IconComponent style={style} />
    </IconContainer>
  );
};

export default Icon;
