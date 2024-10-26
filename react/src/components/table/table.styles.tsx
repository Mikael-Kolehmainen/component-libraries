import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryFontColor};
  font-weight: bold;

  tr {
    border-bottom: 2px solid ${(props) => props.theme.primaryColor} !important;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 2px solid ${(props) => props.theme.primaryColor};

  &:last-child {
    border-bottom: none;
  }
`;

export const TableColumn = styled.td`
  border-right: 2px solid ${(props) => props.theme.primaryColor};
  padding: 5px 30px 5px 8px;
`;
