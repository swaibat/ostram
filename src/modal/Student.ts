export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  DOB: string;
  course: string;
  hours: string;
  price: string;
}

export interface FormProps {
  fields: Array<{
    name: string;
    label: string;
    type: string;
  }>;
  formData?: any;
}

export const fields = [
  { label: "First Name", name: "firstName", type: "text" },
  { label: "Last Name", name: "lastName", type: "text" },
  { label: "Date Of Birth", name: "DOB", type: "text" },
  { label: "Course", name: "course", type: "text" },
  { label: "Hours", name: "hours", type: "number" },
  { label: "price", name: "price", type: "number" },
];

export const rows = [
  "First Name",
  "Last Name",
  "Date Of Birth",
  "Course",
  "Hours",
  "Price",
];

