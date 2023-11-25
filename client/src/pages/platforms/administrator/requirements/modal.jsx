import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBIcon,
  MDBModalHeader,
  MDBInput,
} from "mdbreact";

import CustomSelect from "../../../../components/customSelect";
import { Departments } from "../../../../services/fakeDb";

export default function Modal({ show, toggle }) {
  const [showGrade, setShowGrade] = useState(true);

  // used for rerendering MDBSelect
  useEffect(() => {
    if (!showGrade) {
      setTimeout(() => setShowGrade(true), 1);
    }
  }, [showGrade]);

  return (
    <MDBModal isOpen={show} toggle={toggle} backdrop disableFocusTrap={false}>
      <MDBModalHeader
        toggle={toggle}
        className="light-blue darken-3 white-text"
      >
        <MDBIcon icon="user" className="mr-2" />
        Add a Requirement
      </MDBModalHeader>
      <MDBModalBody className="mb-0">
        <form>
          <MDBInput type="text" label="Title" required />

          <CustomSelect
            choices={Departments.collections}
            label="Department"
            // preValue={department}
            values="key"
            texts="name"
            // onChange={(e) => {
            //   setForm({
            //     ...form,
            //     department: e,
            //     gradeLvl: getGradeLevels(e)[0],
            //   });
            //   setShowGrade(false);
            // }}
          />

          <div className="text-center mb-1-half">
            <MDBBtn
              type="submit"
              //   disabled={isLoading}
              color="primary"
              className="mb-2 float-right"
            >
              Submit
            </MDBBtn>
          </div>
        </form>
      </MDBModalBody>
    </MDBModal>
  );
}
