import { IconContainer, IconLinkContainer } from "./icon.styles";

interface IconProps {
  IconComponent: React.FC;
  link?: string;
  target?: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  color?: string;
  style?: React.CSSProperties;
}

const Icon = ({ IconComponent, link, target, onClick, width = "70px", height = "70px", color, style }: IconProps) => {
  return link ? (
    <IconLinkContainer href={link} target={target ? target : "_self"} $width={width} $height={height} $color={color}>
      <IconComponent style={style} />
    </IconLinkContainer>
  ) : (
    <IconContainer onClick={onClick} $width={width} $height={height} $color={color}>
      <IconComponent style={style} />
    </IconContainer>
  );
};

export default Icon;
