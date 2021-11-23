import { render, fireEvent } from "@testing-library/react";
import Form from "./Form";
import { Provider } from "react-redux";
import { store } from "../store";
import studentReducer, {
  Student,
  deleteStudent,
  updateStudent,
  addStudent,
  setStudents,
  setModalOpen,
  setEditMode,
  setStudent,
} from "./studentSlice";
import Table from "./Table";
import { ReactChild } from "react";

const student = {
  firstName: "doe",
  lastName: "john",
  DOB: "doe",
  course: "java",
  hours: "1200",
  price: "200",
} as any;

const TestProvider = (child: ReactChild) => (
  <Provider store={store}>{child}</Provider>
);

describe("student reducer", () => {
  const initialState: Student = {
    student: {
      id: "",
      firstName: "",
      lastName: "",
      DOB: "",
      course: "",
      hours: "",
      price: "",
    } as any,
    students: [
      {
        id: "testId",
        firstName: "doe",
        lastName: "john",
        DOB: "13.02.1988",
        course: "java",
        hours: "1200",
        price: "200",
      },
    ],
    modalOpen: false,
    editMode: false,
  };

  it("should handle increment", () => {
    const actual = studentReducer(initialState, setEditMode(true));
    expect(actual.editMode).toEqual(true);
  });

  it("should handle increment", () => {
    const actual = studentReducer(initialState, setModalOpen());
    expect(actual.modalOpen).toEqual(true);
  });

  it("should handle increment", () => {
    const actual = studentReducer(initialState, addStudent(student));
    expect(actual.students.length).toEqual(2);
  });

  it("should update student", () => {
    const actual = studentReducer(
      initialState,
      updateStudent({ ...student, id: "testId", lastName: "jane" })
    );
    expect(actual.students[0]).toEqual(
      expect.objectContaining({ lastName: "jane" })
    );
  });

  it("should test student results", () => {
    const actual = studentReducer(
      initialState,
      setStudent({
        id: "erreer",
        firstName: "doe",
        lastName: "john",
        DOB: "doe",
        course: "java",
        hours: "1200",
        price: "200",
      })
    );

    expect(actual.student).toEqual({
      id: "erreer",
      firstName: "doe",
      lastName: "john",
      DOB: "doe",
      course: "java",
      hours: "1200",
      price: "200",
    });
  });

  it("should get all students", () => {
    const actual = studentReducer(initialState, setStudents());
    expect(actual).toEqual([
      {
        id: "testId",
        firstName: "doe",
        lastName: "john",
        DOB: "13.02.1988",
        course: "java",
        hours: "1200",
        price: "200",
      },
    ]);
  });

  it("should delete students", () => {
    const actual = studentReducer(initialState, deleteStudent("testId"));
    expect(actual.students).toEqual([]);
  });

  it("simulates input change", () => {
    const { getByLabelText, getByText } = render(TestProvider(<Form />));
    const input = getByLabelText("First Name");
    fireEvent.change(input);
    fireEvent.click(getByText("Save"));
    expect(getByText(/Add Student/i)).toBeInTheDocument();
  });

  it("simulates click event for add student", () => {
    const { getByText } = render(TestProvider(<Table />));
    const button = getByText(/Add Student/i);
    fireEvent.click(button);
    expect(getByText(/Add Student/i)).toBeInTheDocument();
  });
});
