import { useState } from "react";
import Form from "./components/Model";
import Table from "./components/Table";

const fields = [
  { label: "First Name", name: "firstName", type: "text" },
  { label: "Last Name", name: "lastName", type: "text" },
  { label: "Date Of Birth", name: "DOB", type: "date" },
  { label: "Course", name: "course", type: "text" },
  { label: "Hours", name: "hours", type: "number" },
  { label: "price", name: "price", type: "number" },
];
const rows = [
  "First Name",
  "Last Name",
  "Date Of Birth",
  "Course",
  "Hours",
  "Price",
];

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  DOB: string;
  course: string;
  hours: string;
  price: string;
}

function App() {
  const [student, setStudent] = useState<IUser>({} as IUser);
  const [students, setStudents] = useState([] as Array<IUser>);
  const [formOpen, setFormOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleDelete = (id: any) => {
    console.log(id);
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleEdit = (data: any) => {
    setStudent(data);
    setEditMode(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormOpen(!formOpen);
    if (editMode) {
      const updatedStudents = students.map((user) => {
        if (user.id === student.id) {
          user = student;
        }
        return user;
      });
      setStudents([...updatedStudents]);
      setEditMode(false);
      return;
    }
    student.id = Math.random().toString(36).slice(2);
    setStudents([...students, student]);
  };

  const handleOpenForm = () => {
    setFormOpen(!formOpen);
  };

  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="page-content">
          <button className="btn" onClick={handleOpenForm}>
            Add Student
          </button>
          {formOpen ? (
            <Form
              isOpen={formOpen}
              fields={fields}
              setIsOpen={setFormOpen}
              onSubmit={handleSubmit}
              formData={student}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          ) : (
            <div className="table">
              <Table
                rows={rows}
                tableData={students}
                formOpen={formOpen}
                editHandler={handleEdit}
                deleteHandler={handleDelete}
                setFormOpen={setFormOpen}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
