import styled from "styled-components";

interface IconContainerProps {
  $width: string;
  $height: string;
  $color?: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  svg {
    display: block;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    color: ${(props) => props.$color ?? props.theme.iconColor};
  }
`;

export const IconLinkContainer = styled.a<IconContainerProps>`
  svg {
    display: block;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    color: ${(props) => props.$color ?? props.theme.iconColor};
  }

  &:hover {
    cursor: pointer;

    svg {
      color: ${(props) => props.theme.iconHoverColor};
    }
  }
`;
