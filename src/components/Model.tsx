import React, { FunctionComponent } from "react";
import Form from "./Form";

import CloseBtn from "./CloseBtn";
import "./model.scss";

const Modal: FunctionComponent = () => {
  const fields = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Date Of Birth", name: "DOB" },
    { label: "Course", name: "course" },
    { label: "Hours", name: "hours" },
    { label: "price", name: "price" },
  ];
  const formData = {
    id: "122",
    firstName: "john",
    lastName: "doe",
    DOB: new Date("2015.03.25").toDateString(),
    course: "Python",
    hours: "100H",
    price: "$1160",
  };

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
            <Form fields={fields} formData={formData} />
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
