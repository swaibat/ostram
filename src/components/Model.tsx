import React, { FunctionComponent } from "react";
import Table from "./Table";
import TextField from "./textField";
import CloseBtn from "./CloseBtn";
import "./model.scss";

const Modal: FunctionComponent = () => {
  const tableData = [
    {
      id: "122",
      firstName: <TextField label="First Name" name="firstName" />,
      lastName: <TextField label="Last Name" name="lastName" />,
      DOB: <TextField label="Date of Birth" name="DOB" />,
      course: <TextField label="course" name="course" />,
      hours: <TextField label="Hours" name="hours" />,
      price: <TextField label="Price" name="price" />,
    },
  ];
  return (
    <>
      <label className="btn" htmlFor="modal">
        Modal
      </label>
      <input id="modal" type="checkbox" />
      <div className="modalDialog">
        <div className="model-container">
          <div className="model-body">
            <div className="row">
              <span className="modal-label">Add Student</span>
              <CloseBtn />
            </div>
            <Table tableData={tableData} />
          </div>
          <div className="model-footer">
            <button className="btn-sm">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
