import { StyledTable, TableBody, TableColumn, TableHead, TableRow } from "./table.styles";

interface TableProps {
  columnNames: Array<string>
  tableData: Array<{ [key: string]: string|number|boolean }>
}

// TODO: Add filter by search value
// TODO: Add sorting by column
const Table = ({ columnNames, tableData }: TableProps) => {
  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          {columnNames.map((columnName, i) => {
            return (
              <TableColumn key={i}>{columnName}</TableColumn>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row, i) => {
          return (
            <TableRow key={i}>
              {Object.keys(row).map((key, j) => {
                return (
                  <TableColumn key={j}>{row[key] ?? "-"}</TableColumn>
                );
              })}
            </TableRow>
          );
        })}
      </TableBody>
    </StyledTable>
  );
};

export default Table;
