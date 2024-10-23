import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: fit-content;
`;

export const DropdownIconContainer = styled.div`
  position: absolute;
  top: 52.5%;
  left: 87.5%;
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

export const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 4px 30px 4px 8px;
  width: fit-content;
  border: 2px solid ${(props) => props.theme.buttonBackgroundColor};
  background-color: ${(props) => props.theme.buttonBackgroundColor};
  color: ${(props) => props.theme.buttonColor};
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledOption = styled.option``;
