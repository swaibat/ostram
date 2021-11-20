import React from "react";
import Modal from "./components/Model";
import Table from "./components/Table";

function App() {
  const rows = ["First Name", "Last Name", "DOB", "Course", "Hours", "Price"];
  const tableData = [
    {
      id: "122",
      firstName: "john",
      lastName: "doe",
      DOB: new Date("2015.03.25").toDateString(),
      course: "Python",
      hours: "100H",
      price: "$1160",
    },
  ];
  return (
    <div className="content-wrapper">
      <div className="container">
        <div className="page-content">
          <Modal />
          <div className="table">
            <Table
              rows={rows}
              tableData={tableData}
              bordered
              // editHandler={(e) => console.log("edit", e)}
              // deleteHandler={(e) => console.log("delete", e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
