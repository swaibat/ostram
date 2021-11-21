import { FC } from "react";
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
  handleChange: (values: any) => void;
  handleSubmit: (any: any) => void;
}

const Form: FC<FormProps> = ({
  formData,
  fields,
  isOpen,
  setIsOpen,
  handleChange,
  handleSubmit,
}: FormProps) => {

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
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="model-body">
              <div className="form-row">
                {fields.map((field, index) => (
                  <TextField
                    key={index}
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
