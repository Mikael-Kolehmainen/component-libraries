import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${(props) => props.theme.buttonColor};
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  font-weight: bold;
  padding: 6px 10px;
  height: fit-content;
  width: fit-content;
  border-radius: 5px;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.buttonBackgroundHoverColor};
  }
`;
