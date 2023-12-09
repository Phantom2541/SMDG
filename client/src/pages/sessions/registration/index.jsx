import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBContainer,
} from "mdbreact";
import Student from "./student";
import View from "./view";
import Basic from "./basic";
import { School } from "../../../services/fakeDb";
import { fullAddress } from "../../../services/utilities";
import Images from "./images";

const _form = {
  fullName: {
    fname: "",
    lname: "",
    mname: "",
    suffix: "",
  },
  email: "",
  password: "",
  pob: undefined,
  dob: new Date(),
  isMale: false,
  mobile: "",
  civilStatus: "",
  address: {
    isSame: true,
    current: {
      region: undefined,
      province: undefined,
      city: undefined,
      barangay: undefined,
      street: "",
      zip: "",
    },
    permanent: {
      region: undefined,
      province: undefined,
      city: undefined,
      barangay: undefined,
      street: "",
      zip: "",
    },
  },
  disability: "",
  role: "student",
  lrn: 0,
  psa: 0,
  motherTounge: "",
  indigenousPeople: "",
  "4ps": "",
  guardians: {
    mother: {
      fname: "",
      lname: "",
      mname: "",
      suffix: "",
      mobile: 0,
    },
    father: {
      fname: "",
      lname: "",
      mname: "",
      suffix: "",
      mobile: 0,
    },
  },
};

export default function Registration() {
  const [form, setForm] = useState(_form),
    [view, setView] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setView(true);
    console.log(form);
  };

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { name, logo, address: sAddress, id } = School;

  const { isMale, address, role } = form;

  if (view) return <View user={form} />;

  return (
    <>
      <MDBCol md="10" className="offset-md-1 pt-5">
        <MDBCard>
          <MDBCardBody className="px-0">
            <div className="text-center mt-5">
              <h1 className="font-weight-bold text-primary mb-0">{name}</h1>
              <p className="mt-0 font-weight-bold">
                {fullAddress(sAddress, false)}
              </p>
            </div>
            <div
              className=" d-flex align-items-center mb-5 bg-primary"
              style={{ height: "80px" }}
            >
              <img
                src={logo}
                alt={id}
                height="150"
                style={{ marginLeft: "150px" }}
                className="bg-white rounded-circle"
              />
              <h1 className="ml-5 text-white">REGISTRATION FORM</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <Basic handleChange={handleChange} form={form} />
              <MDBRow>
                {role === "employee" && (
                  <MDBCol>
                    <label className="mb-0">Civil Status</label>
                    <select
                      className="form-control"
                      onChange={(e) =>
                        handleChange("civilStatus", e.target.value)
                      }
                    >
                      <option value="single">Single</option>
                      <option value="live-in">Live in</option>
                      <option value="married">Married</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </MDBCol>
                )}
              </MDBRow>
              {role === "student" && (
                <Student handleChange={handleChange} form={form} />
              )}
              <Images />
              <MDBBtn color="primary" type="submit" className="float-right">
                REGISTER
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
}
