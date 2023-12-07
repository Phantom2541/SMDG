import React, { useEffect, useState } from "react";
import {
  MDBModal,
  MDBModalBody,
  MDBIcon,
  MDBModalHeader,
  MDBBtn,
  MDBInput,
} from "mdbreact";
import CustomSelect from "../../../../../components/customSelect";
import { fullName } from "../../../../../services/utilities";

// declare your expected items
const _form = {
  position: "",
  access: "",
  isEnrollmentTeacher: false,
};

export default function Modal({ show, toggle, selected }) {
  const [form, setForm] = useState(_form);

  useEffect(() => {
    setForm(selected);
  }, [selected]);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { user, position, access, isEnrollmentTeacher = false } = form;

  return (
    <MDBModal isOpen={show} toggle={toggle} backdrop disableFocusTrap={false}>
      <MDBModalHeader
        toggle={toggle}
        className="light-blue darken-3 white-text"
      >
        <MDBIcon icon="user" className="mr-2" />
        {fullName(user?.fullName)}
      </MDBModalHeader>
      <MDBModalBody className="mb-0">
        <form>
          <MDBInput label="Position" value={position} />
          <CustomSelect label="Access" preValue={access} />
          {["TEACHER", "MASTER", "HEAD"].includes(selected.access) && (
            <div className="d-flex">
              <label>Give access to Enrollment teacher?</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isEnrollmentTeacher}
                  onChange={() => handleChange("isEnrollmentTeacher", true)}
                  id="EnrollmentTeacherYes"
                />
                <label
                  className="form-check-label"
                  htmlFor="EnrollmentTeacherYes"
                >
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={!isEnrollmentTeacher}
                  onChange={() => handleChange("isEnrollmentTeacher", false)}
                  id="EnrollmentTeacherNo"
                />
                <label
                  className="form-check-label"
                  htmlFor="EnrollmentTeacherNo"
                >
                  No
                </label>
              </div>
            </div>
          )}
          <MDBBtn className="float-right" type="submit" color="primary">
            Submit
          </MDBBtn>
        </form>
      </MDBModalBody>
    </MDBModal>
  );
}
