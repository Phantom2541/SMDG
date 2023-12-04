import React, { useState } from "react";
import CustomSelect from "../../../../../../components/customSelect";
import { Departments } from "../../../../../../services/fakeDb";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBModalBody,
  MDBTabContent,
  MDBTabPane,
} from "mdbreact";
import Sections from "./sections";
import Subjects from "./subjects";

const navs = ["sections", "subjects"];

export default function Elem() {
  const [gradeLvl, setGradeLvl] = useState(1),
    [activeTab, setActiveTab] = useState("sections");

  return (
    <>
      <CustomSelect
        choices={Departments.getGradeLevels("grade").map((id) => ({
          value: id,
          str: `Grade ${id}`,
        }))}
        texts="str"
        values="value"
        className="w-25"
        preValue={gradeLvl}
        onChange={(lvl) => setGradeLvl(lvl)}
        label="Select Grade Levels"
      />
      <MDBBtnGroup>
        {navs.map((nav) => (
          <MDBBtn
            style={{ borderBottom: "none" }}
            className="m-0 rounded-top rotate-btn"
            data-card="card-1"
            color="primary z-depth-0"
            onClick={() => setActiveTab(nav)}
            outline={nav !== activeTab}
            key={nav}
          >
            {nav}
          </MDBBtn>
        ))}
      </MDBBtnGroup>
      <MDBTabContent activeItem={activeTab} className="p-0 z-depth-1">
        <MDBTabPane tabId="sections">
          <MDBModalBody className="pt-1 p-0 bg-white">
            <Sections gradeLvl={gradeLvl} />
          </MDBModalBody>
        </MDBTabPane>
        <MDBTabPane tabId="subjects">
          <MDBModalBody className="mx-0">
            <Subjects />
          </MDBModalBody>
        </MDBTabPane>
      </MDBTabContent>
    </>
  );
}
