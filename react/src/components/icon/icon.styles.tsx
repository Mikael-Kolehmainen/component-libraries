import styled from "styled-components";

export const IconContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryColor};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: relative;

  svg {
    display: block;
    width: 40%;
    height: 40%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${(props) => props.theme.primaryColor};
  }
`;
