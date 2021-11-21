import { FC, useState } from "react";
import TextField from "./textField";
import CloseBtn from "./CloseBtn";
import "./model.scss";

interface FormProps {
  fields: Array<{
    name: string;
    label: string;
    type: string;
  }>;
  formData?: any;
  isOpen: Boolean;
  setIsOpen: (values: any) => void;
  onSubmit: (values: any) => void;
}

const Form: FC<FormProps> = ({
  formData,
  fields,
  isOpen,
  onSubmit,
  setIsOpen
}: FormProps) => {
  const [values, setValues] = useState({});

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: name === "price" ? parseInt(value).toLocaleString() : value,
    });
    console.log(values);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(values);
    setIsOpen(!isOpen);
  };

  const handleOpenForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="modalDialog">
        <div className="model-container">
          <div className="model-header">
            <span className="modal-label">Add Student</span>
            <CloseBtn onClick={handleOpenForm} />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="model-body">
              <div className="form-row">
                {fields.map((field) => (
                  <TextField
                    label={field.label}
                    name={field.name}
                    type={field.type}
                    value={formData && formData[field.name]}
                    onChange={handleChange}
                  />
                ))}
              </div>
            </div>
            <div className="model-footer">
              <button type="submit" className="btn-sm">
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
