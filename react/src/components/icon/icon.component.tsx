import { IconContainer } from "./icon.styles";

interface IconProps {
  IconComponent: React.FC
  onClick?: () => void
  width?: string
  height?: string
  color?: string
  style?: React.CSSProperties
}

const Icon = ({ IconComponent, onClick, width='70px', height='70px', color, style }: IconProps) => {
  return (
    <IconContainer onClick={onClick} $width={width} $height={height} $color={color}>
      <IconComponent style={style} />
    </IconContainer>
  );
};

export default Icon;
