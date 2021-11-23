import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../components/studentSlice";

export const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
