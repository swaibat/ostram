import { FunctionComponent } from "react";
import TextField from "./textField";

interface FormProps {
  fields: Array<{
    name: string;
    label: string;
  }>;
  formData?: any;
}

const Form: FunctionComponent<FormProps> = ({
  formData,
  fields,
}: FormProps) => (
  <form>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
      className="form-row"
    >
      {fields.map((field) => (
        <TextField
          label={field.label}
          name={field.name}
          value={formData[field.name]}
        />
      ))}
    </div>
  </form>
);
export default Form;
