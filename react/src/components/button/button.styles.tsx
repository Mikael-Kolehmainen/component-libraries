import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${(props) => props.theme.buttonColor};
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  font-weight: bold;
  padding: 4px 8px;
  border: 2px solid ${(props) => props.theme.buttonBackgroundColor};
  height: fit-content;
  width: fit-content;
  border-radius: 5px;
  outline: none;

  &:focus-visible {
    border: 2px solid ${(props) => props.theme.buttonBackgroundHoverColor};
  }
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.buttonBackgroundHoverColor};
    border: 2px solid ${(props) => props.theme.buttonBackgroundHoverColor};
  }
`;
