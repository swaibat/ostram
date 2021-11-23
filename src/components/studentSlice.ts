import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Student {
  student: {
    id: string;
    firstName: string;
    lastName: string;
    DOB: string;
    course: string;
    hours: string;
    price: string;
  };
  students: any;
  modalOpen: Boolean;
  editMode: Boolean;
}

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
  students: [],
  modalOpen: false,
  editMode: false,
};

export const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    addStudent: (state, { payload }) => {
      state.students = [
        ...state.students,
        { ...payload, id: Math.random().toString(36).slice(2) },
      ];
    },
    deleteStudent: (state, { payload }) => {
      const students = state.students.filter(
        (user: { id: String }) => user.id !== payload
      );
      state.students = students;
      state.student = initialState.student;
    },
    updateStudent: (state, { payload }) => {
      const updatedStudents = state.students.map((user: any) => {
        if (user.id === payload.id) {
          user = payload;
        }
        return user;
      });
      state.students = updatedStudents;
      state.student = initialState.student;
    },
    setStudents: (state) => {
      return state.students;
    },
    setStudent: (state, { payload }) => {
      state.student = payload;
    },
    setModalOpen: (state) => {
      state.modalOpen = !state.modalOpen;
    },
    setEditMode: (state, { payload }) => {
      state.editMode = payload;
    },
  },
});

export const getModalOpen = (state: RootState) => state.students.modalOpen;
export const getEditMode = (state: RootState) => state.students.editMode;
export const getStudents = (state: RootState) => state.students.students;
export const getStudent = (state: RootState) => state.students.student;

export const {
  addStudent,
  deleteStudent,
  setStudents,
  setStudent,
  setModalOpen,
  updateStudent,
  setEditMode,
} = studentSlice.actions;

export default studentSlice.reducer;
