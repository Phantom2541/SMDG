import React, { useState } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBModalBody,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact";
import Faculty from "../faculty";

const navs = ["faculty", "courses"];

export default function Basic() {
  const [activeTab, setActiveTab] = useState("faculty");

  return (
    <>
      <h2>Elementary Department</h2>
      <MDBBtnGroup>
        {navs.map((nav) => (
          <MDBBtn
            className="m-0"
            color="primary"
            onClick={() => setActiveTab(nav)}
            outline={nav !== activeTab}
            key={nav}
          >
            {nav}
          </MDBBtn>
        ))}
      </MDBBtnGroup>
      <MDBTabContent activeItem={activeTab} className="py-0 border border-dark">
        <MDBTabPane tabId="faculty">
          <MDBModalBody className="mx-0">
            <Faculty />
          </MDBModalBody>
        </MDBTabPane>
        <MDBTabPane tabId="courses">
          <MDBModalBody className="mx-0">{/* <Tab /> */}Test</MDBModalBody>
        </MDBTabPane>
      </MDBTabContent>
    </>
  );
}
