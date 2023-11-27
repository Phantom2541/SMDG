import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBDatePicker,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdbreact";
import { fullAddress } from "../../../../services/utilities";
import generateSY from "../../../../services/utilities/generateSY";
import { School } from "../../../../services/fakeDb";
import AddressSelect from "../../../../components/addressSelect";
import CustomSelect from "../../../../components/customSelect";
import UploadPDF from "./uploadPDF";

const address = {
  region: "REGION III (CENTRAL LUZON)",
  province: "NUEVA ECIJA",
  city: "CABANATUAN CITY",
  barangay: "",
  zip: "",
  street: "",
};

const _form = {
  isSame: true,
};

export default function EmploymentForm() {
  const [form, setForm] = useState(_form);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { isSame } = form;
  const { logo, id, name, address: sAddress } = School;
  return (
    <MDBContainer fluid>
      <MDBCard>
        <MDBCardTitle className="mb-0 pt-4 pl-5 pr-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img
                style={{ height: "100px" }}
                className="rounded-circle"
                src={logo}
                alt={id}
              />

              <div className="ml-2">
                <p
                  className="mb-0"
                  style={{ fontWeight: "bolder", fontSize: "23px" }}
                >
                  {name}
                </p>
                <p style={{ fontSize: "15px" }}>
                  {fullAddress(sAddress, false)}
                </p>

                <p className="font-weight-bold" style={{ fontSize: "20px" }}>
                  EMPLOYMENT FORM
                </p>
              </div>
            </div>
            <div className="text-right">
              <p style={{ fontSize: "20px" }} className="mb-0">
                SY {generateSY(true)}
              </p>
            </div>
          </div>
        </MDBCardTitle>

        <MDBCardBody>
          <MDBTypography
            className="mb-0"
            noteColor="info"
            note
            noteTitle="DRAFT: "
          >
            text
          </MDBTypography>
        </MDBCardBody>

        <MDBCardBody className="mx-5">
          <h5 className="mb-0">Personal Information</h5>
          <form>
            <MDBRow>
              <MDBCol md="6">
                <MDBInput label="Applying Position" />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  label="Mobile No. +63"
                  //   maxLength={10}
                  //   value={mobile}
                  //   onChange={(e) =>
                  //     handleChange("mobile", e.target.value.replace(/\D/g, ""))
                  //   }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" className="border-right border-top border-left">
                <MDBInput label="Last Name" />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput label="Mother Tongue (ex: Tagalog, English)" />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="6" className="border-left border-right">
                <MDBInput label="First Name" />
              </MDBCol>
              <MDBCol md="3">
                <label className="mb-0">Birthdate</label>
                <MDBDatePicker
                  className="mt-1"
                  autoOk
                  //   value={dob}
                  //   getValue={(e) => handleChange("dob", e)}
                />
              </MDBCol>
              <MDBCol md="1">
                <MDBInput
                  label="Age"
                  readOnly
                  //   value={getAge(dob.toDateString())}
                />
              </MDBCol>
              <MDBCol md="2">
                <CustomSelect
                  label="Civil Status"
                  choices={[
                    { text: "Single", value: "single" },
                    { text: "Married", value: "married" },
                    { text: "Live in", value: "live-in" },
                    { text: "Divorced", value: "divorced" },
                  ]}
                  texts="text"
                  values="value"
                />
              </MDBCol>
            </MDBRow>

            <MDBRow className="mb-3">
              <MDBCol md="4" className="border-left border-bottom">
                <MDBInput label="Middle Name" />
              </MDBCol>
              <MDBCol md="2" className="border-right border-bottom">
                <MDBInput label="Extension Name" />
              </MDBCol>
              <MDBCol md="2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    // checked={isMale}
                    // onChange={() => handleChange("isMale", true)}
                    id="Male"
                  />
                  <label className="form-check-label" htmlFor="Male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    // checked={!isMale}
                    // onChange={() => handleChange("isMale", false)}
                    id="Female"
                  />
                  <label className="form-check-label" htmlFor="Female">
                    Female
                  </label>
                </div>
              </MDBCol>
              <MDBCol md="4">
                <MDBInput label="Place of Birth (Municipality/City)" />
              </MDBCol>
            </MDBRow>

            <AddressSelect
              label="Permanent Address"
              address={address}
              // handleChange={(_, value) => handleChange("current", value)}
              // uniqueId="current"
            />
            <div className="d-flex mt-3">
              <div className="">
                <label>
                  Is your permanent address is same with your current address?
                </label>
              </div>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={isSame}
                    onChange={() => handleChange("isSame", true)}
                    id="yes"
                  />
                  <label className="form-check-label" htmlFor="yes">
                    Yes
                  </label>
                </div>
              </div>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={!isSame}
                    onChange={() => handleChange("isSame", false)}
                    id="no"
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>

            {!isSame && (
              <div className="mt-3">
                <AddressSelect
                  label="Current Address"
                  address={address}
                  // handleChange={(_, value) => handleChange("current", value)}
                  // uniqueId="current"
                />
              </div>
            )}
            <hr color="primray" />
            <h6 className="mb-0">In case of Emergency, Notify:</h6>
            <div className="border px-4">
              <MDBRow>
                <MDBCol md="4">
                  <MDBInput label="Primary Name of Contact" />
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput label="Relationship" />
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput label="Mobile No. (+63)" />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="4">
                  <MDBInput label="Secondary Name of Contact" />
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput label="Relationship" />
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput label="Mobile No. (+63)" />
                </MDBCol>
              </MDBRow>
            </div>
            <hr color="primray" />
            <MDBContainer>
              <p>Upload PDFS (Required*)</p>
              <UploadPDF />
            </MDBContainer>

            <MDBBtn style={{ float: "right" }} color="primary" type="submit">
              Submit
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
