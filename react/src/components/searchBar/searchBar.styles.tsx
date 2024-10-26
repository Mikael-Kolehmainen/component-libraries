import styled from "styled-components";

export const SearchBarContainer = styled.div`
  position: relative;
  margin: 10px 0;
  width: fit-content;
  height: fit-content;
`;

export const SearchBarIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 94%;
  transform: translate(-50%, -50%);
  color: ${(props) => props.theme.buttonBackgroundColor};
`;

interface SearchBarInputProps {
  width: string;
}

export const SearchBarInput = styled.input<SearchBarInputProps>`
  padding: 10px 45px 10px 15px;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.buttonBackgroundColor};
  border-radius: 10px;
  outline: none;
  width: ${(props) => props.width};

  &:focus-visible {
    border: 2px solid ${(props) => props.theme.buttonBackgroundHoverColor};
  }
`;
