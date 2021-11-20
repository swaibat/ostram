import React, { FunctionComponent, ReactNode } from "react";

interface IProps {
  id: string;
  firstName: string | ReactNode;
  lastName: string | ReactNode;
  DOB: string | ReactNode;
  course: string | ReactNode;
  hours: string | ReactNode;
  price: string | ReactNode;
}

interface TableProps {
  rows?: Array<String>;
  tableData: Array<IProps>;
  bordered?: Boolean;
  editHandler: (data: IProps) => void;
  deleteHandler: (data: IProps) => void;
}

const Table: FunctionComponent<TableProps> = ({
  rows,
  tableData,
  bordered,
  editHandler,
  deleteHandler,
}: TableProps) => (
  <table>
    <thead style={!bordered ? { border: "none" } : {}}>
      <tr>{rows && rows.map((row, index) => <th key={index}>{row}</th>)}</tr>
    </thead>
    <tbody>
      {tableData &&
        tableData.length &&
        tableData.map((row) => (
          <tr key={row.id}>
            <td data-label={row.firstName}>{row.firstName}</td>
            <td data-label={row.lastName}>{row.lastName}</td>
            <td data-label={row.DOB}>{row.DOB}</td>
            <td data-label={row.course}>{row.course}</td>
            <td data-label={row.hours}>{row.hours}</td>
            <td data-label={row.price}>{row.price}</td>
            <td>
              <button id={row.id} onClick={() => editHandler(row)}>
                edit
              </button>
              <button id={row.id} onClick={() => deleteHandler(row)}>
                delete
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  </table>
);

export default Table;
