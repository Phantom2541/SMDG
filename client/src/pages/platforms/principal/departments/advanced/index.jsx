import React, { useState } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBModalBody,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact";
import Faculty from "./faculty";
import { Departments } from "../../../../../services/fakeDb";
import Courses from "./courses";

export default function Advanced({ departmentKey }) {
  const [activeTab, setActiveTab] = useState("faculty");

  const department = Departments.getName(departmentKey),
    courseTxt = departmentKey === "college" ? "Courses" : "Strands";

  return (
    <>
      <h2>{department} Department</h2>
      <MDBBtnGroup>
        <MDBBtn
          className="m-0 rounded-top"
          color="primary z-depth-0"
          onClick={() => setActiveTab("faculty")}
          outline={"faculty" !== activeTab}
        >
          Faculty
        </MDBBtn>
        <MDBBtn
          className="m-0 rounded-top"
          color="primary z-depth-0"
          onClick={() => setActiveTab("courses")}
          outline={"courses" !== activeTab}
        >
          {courseTxt}
        </MDBBtn>
      </MDBBtnGroup>
      <MDBTabContent
        activeItem={activeTab}
        style={{
          border: "2px solid",
          borderBottomRadius: "5px",
        }}
        className="p-0 border-primary z-depth-1"
      >
        <MDBTabPane tabId="faculty">
          <MDBModalBody className="pt-1 p-0 bg-primary">
            <Faculty department={departmentKey} />
          </MDBModalBody>
        </MDBTabPane>
        <MDBTabPane tabId="courses">
          <MDBModalBody className="mx-0">
            <Courses departmentKey={departmentKey} />
          </MDBModalBody>
        </MDBTabPane>
      </MDBTabContent>
    </>
  );
}
