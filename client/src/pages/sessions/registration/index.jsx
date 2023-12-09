import React, { useState } from "react";
import { MDBCard, MDBCardBody, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import Student from "./student";
import View from "./view";
import Basic from "./basic";
import { School } from "../../../services/fakeDb";
import { fullAddress, getAge } from "../../../services/utilities";
import Images from "./images";
import Agreement from "./agreement";
import Swal from "sweetalert2";
import Success from "./success";

const _form = {
  fullName: {
    fname: "",
    lname: "",
    mname: "",
    suffix: "",
  },
  email: "",
  password: "",
  cpassword: "",
  pob: undefined,
  dob: new Date(),
  isMale: false,
  mobile: "",
  civilStatus: undefined,
  address: {
    isSame: true,
    current: {
      region: "REGION III (CENTRAL LUZON)",
      province: "NUEVA ECIJA",
      city: "CABANATUAN CITY",
      barangay: undefined,
      street: "",
      zip: "",
    },
    permanent: {
      region: "REGION III (CENTRAL LUZON)",
      province: "NUEVA ECIJA",
      city: "CABANATUAN CITY",
      barangay: undefined,
      street: "",
      zip: "",
    },
  },
  disability: undefined,
  role: "student",
  lrn: undefined,
  psa: undefined,
  motherTounge: undefined,
  indigenousPeople: undefined,
  "4ps": undefined,
  guardians: {
    mother: {
      fname: undefined,
      lname: undefined,
      mname: undefined,
      suffix: undefined,
      mobile: undefined,
    },
    father: {
      fname: undefined,
      lname: undefined,
      mname: undefined,
      suffix: undefined,
      mobile: undefined,
    },
  },
};

const isSuccess = true;

export default function Registration() {
  const [form, setForm] = useState(_form),
    [view, setView] = useState(false);

  const handleError = (title, text) =>
    Swal.fire({
      title,
      text,
      icon: "error",
      showConfirmButton: false,
      timer: 5000,
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { password, cpassword, role, dob, mobile } = form;

    if (!mobile.startsWith("9"))
      return handleError("Invalid Mobile", "ex.: 9xx-xxx-xxxx");

    if (password !== cpassword)
      return handleError("Invalid Passwords", "Passwords does not match");

    if (role === "student" && getAge(dob, true) < 5)
      return handleError("Invalid Age", "Minimum age of 5 year old");

    if (role === "employee" && getAge(dob, true) < 18)
      return handleError("Invalid Age", "Minimum age of 18 year old");

    setView(true);
  };

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { name, logo, address: sAddress, id } = School;

  if (isSuccess) return <Success />;

  if (view) return <View goBack={() => setView(false)} />;

  return (
    <>
      <MDBCol md="8" className="offset-md-2 py-5">
        <MDBCard>
          <MDBCardBody className="px-0">
            <div className="text-center">
              <h1 className="font-weight-bold text-primary mb-0">{name}</h1>
              <p className="mt-0 font-weight-bold">{fullAddress(sAddress)}</p>
            </div>
            <div
              className="d-flex align-items-center justify-content-between mb-5 bg-primary"
              style={{
                height: "80px",
                paddingLeft: "10rem",
                paddingRight: "10rem",
              }}
            >
              <div className="text-white">
                <img
                  src={logo}
                  alt={id}
                  height="150"
                  className="bg-white rounded-circle"
                />
              </div>
              <div className="text-white h1">REGISTRATION FORM</div>
              <div className="text-white invisible">REGISTRATION FORM</div>
            </div>
            <form onSubmit={handleSubmit}>
              <Basic handleChange={handleChange} form={form} />
              <MDBRow>
                {form.role === "employee" && (
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
              {form.role === "student" && (
                <Student handleChange={handleChange} form={form} />
              )}
              <Images />
              <Agreement School={School} />
              <MDBBtn color="primary" type="submit" className="mt-3 mx-5">
                Proceed to Submit
              </MDBBtn>
            </form>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  );
}
