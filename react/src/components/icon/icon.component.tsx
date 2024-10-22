import { MouseEventHandler } from "react";
import { IconContainer } from "./icon.styles";

interface IconProps {
  IconComponent: React.FC;
  onClick: MouseEventHandler;
}

const Icon = ({ IconComponent, onClick }: IconProps) => {
  return (
    <IconContainer onClick={onClick}>
      <IconComponent />
    </IconContainer>
  );
};

export default Icon;
