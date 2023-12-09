import React from "react";
import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact";

export default function Student({ handleChange, form }) {
  const { lrn, psa, indigenousPeople, "4ps": fourPs, guardians } = form,
    { mother, father } = guardians;
  return (
    <>
      <div className="blue darken-3 px-5 py-2 text-white font-weight-bold h5-responsive">
        IV. STUDENT ADDITIONAL INFORMATION
      </div>
      <MDBContainer className="px-5" fluid>
        <label className="mb-0 pb-0 mt-4">
          5. <b>LRN & PSA</b> -<i>Enter your LRN & PSA correctly</i>
        </label>
        <MDBRow>
          <MDBCol className="px-1" md="3">
            <MDBInput
              label="Learner Reference No. (LRN)"
              type="number"
              outline
              onChange={(e) => handleChange("lrn", e.target.value)}
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="PSA Birth Certificate No. (if available upon registration)"
              type="number"
              outline
              onChange={(e) => handleChange("psa", e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBInput
              label="Are you part of any Indigenous or Cultural Community? If yes, please specify."
              type="text"
              outline
              onChange={(e) => handleChange("indigenousPeople", e.target.value)}
            />
          </MDBCol>
          <MDBCol>
            <MDBInput
              label="Are you a beneficiary of 4Ps? If Yes, write the 4Ps Household ID"
              type="text"
              outline
              onChange={(e) => handleChange("4ps", e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <label>
          6. <b>Mother's Maiden Name</b>
        </label>
        <MDBRow className="border">
          <MDBCol className="px-1">
            <MDBInput
              label="First name"
              type="text"
              outline
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...mother, fname: e.target.value },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Middle name"
              type="text"
              outline
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...mother, mname: e.target.value },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Last name"
              type="text"
              outline
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...mother, lname: e.target.value },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="suffix"
              type="text"
              outline
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...mother, suffix: e.target.value },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Mobile No."
              type="number"
              outline
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...mother, mobile: e.target.value },
                })
              }
            />
          </MDBCol>
        </MDBRow>

        <label>
          7. <b>Father's Name</b>
        </label>
        <MDBRow className="border">
          <MDBCol className="px-1">
            <MDBInput
              label="First name"
              type="text"
              outline
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...father, fname: e.target.value },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Middle name"
              type="text"
              outline
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...father, mname: e.target.value },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Last name"
              type="text"
              outline
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...father, lname: e.target.value },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="suffix"
              type="text"
              outline
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...father, suffix: e.target.value },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Mobile No."
              type="number"
              outline
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...father, mobile: e.target.value },
                })
              }
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
