import React from "react";
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
  MDBSelect,
  MDBTypography,
} from "mdbreact";
import {
  formatGradeLvl,
  fullAddress,
  fullName,
  getAge,
} from "../../../../services/utilities";
import generateSY from "../../../../services/utilities/generateSY";
import { School } from "../../../../services/fakeDb";
import AddressSelect from "../../../../components/addressSelect";
import CustomSelect from "../../../../components/customSelect";

const address = {
  region: "REGION III (CENTRAL LUZON)",
  province: "NUEVA ECIJA",
  city: "CABANATUAN CITY",
  barangay: "",
  zip: "",
  street: "",
};

const status = [
  { text: "Single", value: "single" },
  { text: "inRelationship", value: "inrelationship" },
  { text: "Married", value: "married" },
  { text: "Divorced", value: "divorced" },
];

export default function EmploymentForm() {
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
          <h5>Personal Information</h5>
          <form>
            <div className="row">
              <div className="col-5">
                <MDBInput label="Applying Position" />
              </div>
              <div className="col-7">
                <MDBInput
                  label="Mobile No. +63 (Home)"
                  //   maxLength={10}
                  //   value={mobile}
                  //   onChange={(e) =>
                  //     handleChange("mobile", e.target.value.replace(/\D/g, ""))
                  //   }
                />
              </div>
            </div>
            <div className="row">
              <div className="col-5 border-right border-top border-left">
                <MDBInput label="Last Name" />
              </div>
              <div className="col-7">
                <CustomSelect
                  label="Status"
                  choices={status}
                  texts={"text"}
                  values={"value"}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-5 border-left border-right">
                <MDBInput label="First Name" />
              </div>
              <div className="col-2">
                <label className="mb-0">Birthdate</label>
                <MDBDatePicker
                  className="mt-1"
                  autoOk
                  //   value={dob}
                  //   getValue={(e) => handleChange("dob", e)}
                />
              </div>
              <div className="col-1">
                <MDBInput
                  label="Age"
                  readOnly
                  //   value={getAge(dob.toDateString())}
                />
              </div>
              <div className="col-4">
                <MDBInput label="Mother Tongue (ex: Tagalog, English)" />
              </div>
            </div>
            <div className="row">
              <div className="col-3 border-left border-bottom">
                <MDBInput label="Middle Name" />
              </div>
              <div className="col-2 border-right border-bottom">
                <MDBInput label="Extension Name" />
              </div>
              <div className="col-2">
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
              </div>
              <div className="col-5">
                <MDBInput label="Place of Birth (Municipality/City)" />
              </div>
            </div>
            <div className="mt-2 border px-5">
              <AddressSelect
                address={address}
                // handleChange={(_, value) => handleChange("current", value)}
                // uniqueId="current"
              />
            </div>
            <hr color="primray" />
            <h6>In case of Emergency, Notify:</h6>
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

            <MDBBtn style={{ float: "right" }} color="primary" type="submit">
              Submit
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
