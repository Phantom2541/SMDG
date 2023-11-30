import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBIcon,
  MDBModalHeader,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdbreact";
import { abbreviate } from "../../../../services/utilities";
import CustomSelect from "../../../../components/customSelect";
import { Departments } from "../../../../services/fakeDb";
import { formatGradeLvl } from "../../../../services/utilities";

const { collections, getGradeLevels } = Departments;

const _form = {
  department: "grade",
  title: "",
  abbreviation: "",
};

export default function Modal({ show, toggle, selected, willCreate }) {
  const [form, setForm] = useState(_form),
    [showGrade, setShowGrade] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { department, title, abbreviation } = form;
  return (
    <MDBModal isOpen={show} toggle={toggle} backdrop disableFocusTrap={false}>
      <MDBModalHeader
        toggle={toggle}
        className="light-blue darken-3 white-text"
      >
        <MDBIcon icon="user" className="mr-2" />
        Create a Course
      </MDBModalHeader>
      <MDBModalBody className="mb-0">
        <form onSubmit={handleSubmit}>
          <MDBRow>
            <MDBCol md="7">
              <MDBInput
                type="text"
                label="Title"
                required
                value={title}
                onChange={(e) => {
                  const title = e.target.value.toUpperCase();

                  setForm({
                    ...form,
                    title,
                    abbreviation: abbreviate(title),
                  });
                }}
              />
            </MDBCol>
            <MDBCol md="5">
              <MDBInput
                label="Abbreviation"
                type="text"
                value={abbreviation}
                onChange={(e) => handleChange("abbreviation", e.target.value)}
              />
            </MDBCol>
          </MDBRow>

          <div className="row">
            <div className="col-6">
              <CustomSelect
                choices={collections}
                label="Department"
                preValue={department}
                values="key"
                texts="name"
                onChange={(e) => {
                  setForm({
                    ...form,
                    department: e,
                    gradeLvl: getGradeLevels(e)[0],
                  });
                  setShowGrade(false);
                }}
              />
            </div>
          </div>

          <MDBBtn color="primary" type="submit" className="float-right">
            Submit
          </MDBBtn>
        </form>
      </MDBModalBody>
    </MDBModal>
  );
}
