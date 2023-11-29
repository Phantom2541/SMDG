import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBIcon,
  MDBModalHeader,
  MDBInput,
} from "mdbreact";
import CustomSelect from "../../../../components/customSelect";
import { Roles } from "../../../../services/fakeDb";

const _form = {
  fullName: "",
  position: "",
  access: "",
};

export default function Modal({ show, toggle, selected }) {
  const [form, setForm] = useState(_form);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { fullName, position } = form;

  return (
    <MDBModal isOpen={show} toggle={toggle} backdrop disableFocusTrap={false}>
      <MDBModalHeader
        toggle={toggle}
        className="light-blue darken-3 white-text"
      >
        <MDBIcon icon="user" className="mr-2" />
        Approve a Employment
      </MDBModalHeader>
      <MDBModalBody className="mb-0">
        <form onSubmit={handleSubmit}>
          <MDBInput
            type="text"
            label="Fullname"
            value={fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
          <MDBInput
            type="text"
            label="Position"
            value={position}
            onChange={(e) => handleChange("position", e.target.value)}
          />
          <CustomSelect
            choices={Roles.map((role) => ({ str: role }))}
            label="Access"
            texts="str"
            values="str"
            onChange={(e) => handleChange("access", e)}
          />
          <MDBBtn className="float-right" type="submit" color="primary">
            Approve
          </MDBBtn>
        </form>
      </MDBModalBody>
    </MDBModal>
  );
}
