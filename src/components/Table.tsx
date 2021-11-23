import { FC, Key } from "react";
import { Student, rows } from "../modal/Student";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteStudent,
  getStudents,
  setModalOpen,
  setEditMode,
  setStudent,
} from "./studentSlice";
import styles from "../app.module.scss";

const Table: FC = () => {
  const dispatch = useDispatch();
  const tableData = useSelector(getStudents);

  const handleEdit = (student: Student) => {
    dispatch(setStudent(student));
    dispatch(setModalOpen())
    dispatch(setEditMode(true))
  };

  const handleDelete = (id: String) => {
    dispatch(deleteStudent(id));
  };

  const handleAdd = () => {
    dispatch(setEditMode(false))
    dispatch(setModalOpen());
  };

  return (
    <>
      <button className={styles.btn} onClick={handleAdd}>
        Add Student
      </button>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              {rows.map((row: any, index: Key) => (
                <th key={index}>{row}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.length ? (
              tableData.map((row: Student, index: Key) => (
                <tr key={index}>
                  <td data-label={row.firstName}>{row.firstName}</td>
                  <td data-label={row.lastName}>{row.lastName}</td>
                  <td data-label={row.DOB}>{row.DOB}</td>
                  <td data-label={row.course}>{row.course}</td>
                  <td data-label={row.hours}>{row.hours}</td>
                  <td data-label={row.price}>
                    {parseInt(row.price).toLocaleString()}
                  </td>
                  <td>
                    <div className={styles.actionWrapper}>
                      <button
                        className={styles.actionBtn}
                        id={row.id}
                        onClick={() => handleEdit(row)}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.actionBtn}
                        id={row.id}
                        onClick={() => handleDelete(row.id)}
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
      </div>
    </>
  );
};

export default Table;
