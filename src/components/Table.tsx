import { FC } from "react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  DOB: string;
  course: string;
  hours: string;
  price: any;
}

interface TableProps {
  rows?: Array<String>;
  tableData: Array<User>;
  formOpen?: Boolean;
  setFormOpen: (data: any) => void;
  editHandler: (data: User) => void;
  deleteHandler: (data: User) => void;
}

const Table: FC<TableProps> = ({
  rows,
  tableData,
  setFormOpen,
  editHandler,
  deleteHandler,
}: TableProps) => {
  const handleEdit = (row: User) => {
    row.price = parseInt(row.price?.replace(/,/g, ""));
    editHandler(row);
    setFormOpen(true);
  };
  const handleDelete = (row: User) => {
    deleteHandler(row);
    setFormOpen(true);
  };
  return (
    <table>
      <thead>
        <tr>{rows && rows.map((row, index) => <th key={index}>{row}</th>)}</tr>
      </thead>
      <tbody>
        {tableData && tableData.length ? (
          tableData.map((row) => (
            <tr key={row.id}>
              <td data-label={row.firstName}>{row.firstName}</td>
              <td data-label={row.lastName}>{row.lastName}</td>
              <td data-label={row.DOB}>{row.DOB}</td>
              <td data-label={row.course}>{row.course}</td>
              <td data-label={row.hours}>{row.hours}</td>
              <td data-label={row.price}>{row.price}</td>
              <td>
                <div className="action-wrapper">
                  <button
                    className="action-btn"
                    id={row.id}
                    onClick={() => handleEdit(row)}
                  >
                    Edit
                  </button>
                  <button
                    className="action-btn"
                    id={row.id}
                    onClick={() => handleDelete(row)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td>No Data Found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
