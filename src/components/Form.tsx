import { FC, useState } from "react";
import TextField from "./textField";
import CloseBtn from "./CloseBtn";
import { fields } from "../modal/Student";
import styles from "../app.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setModalOpen,
  getEditMode,
  updateStudent,
  addStudent,
  getStudent,
} from "./studentSlice";

const Form: FC = () => {
  const dispatch = useDispatch();
  const edit = useSelector(getEditMode);
  const formData = useSelector(getStudent) as any;
  const [student, setStudent] = useState(formData as any);

  const handleChange = (e: { target: { name: any; value: String } }) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setModalOpen());
    edit ? dispatch(updateStudent(student)) : dispatch(addStudent(student));
  };

  return (
    <>
      <div className={styles.modalDialog}>
        <div className={styles.modalContainer}>
          <div className={styles.modalHeader}>
            <span className={styles.modalLabel}>Add Student</span>
            <CloseBtn />
          </div>
          <form onSubmit={handleSubmit}>
            <div className={styles.modalBody}>
              <div className={styles.formRow}>
                {fields.map((field, index) => (
                  <TextField
                    key={index}
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    value={student[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </div>
            <div className={styles.modalFooter}>
              <button id="save" type="submit" className={styles.btnSm}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
