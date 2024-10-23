import { MouseEventHandler, ReactNode } from "react";
import { ButtonContainer } from "./button.styles"

interface ButtonProps {
  onClick: MouseEventHandler;
  children: ReactNode;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
