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
          <MDBCol className="px-1" md="5">
            <MDBInput
              label="Learner Reference No. (LRN)"
              type="number"
              required
              value={lrn}
              outline
              onChange={(e) => handleChange("lrn", e.target.value)}
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="PSA Birth Certificate No. (if available upon registration)"
              type="number"
              value={psa}
              outline
              onChange={(e) => handleChange("psa", e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol className="px-1">
            <MDBInput
              label="Are you part of any Indigenous or Cultural Community?"
              type="text"
              outline
              value={indigenousPeople}
              onChange={(e) => handleChange("indigenousPeople", e.target.value)}
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Are you a beneficiary of 4Ps?"
              type="text"
              outline
              value={fourPs}
              onChange={(e) => handleChange("4ps", e.target.value)}
            />
          </MDBCol>
        </MDBRow>
        <label>
          6. <b>Mother's Maiden Information</b>
        </label>
        <MDBRow>
          <MDBCol className="px-1">
            <MDBInput
              label="First name"
              type="text"
              outline
              value={mother?.fname}
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...mother, fname: e.target.value.toUpperCase() },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Middle name"
              type="text"
              outline
              value={mother?.mname}
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...mother, mname: e.target.value.toUpperCase() },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Last name"
              type="text"
              outline
              value={mother?.lname}
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...mother, lname: e.target.value.toUpperCase() },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Suffix"
              type="text"
              outline
              value={mother?.suffix}
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: { ...mother, suffix: e.target.value.toUpperCase() },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Mobile No. (+63)"
              maxLength={10}
              outline
              value={mother?.mobile}
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  mother: {
                    ...mother,
                    mobile: e.target.value.replace(/\D/g, ""),
                  },
                })
              }
            />
          </MDBCol>
        </MDBRow>

        <label>
          7. <b>Father's Information</b>
        </label>
        <MDBRow>
          <MDBCol className="px-1">
            <MDBInput
              label="First name"
              type="text"
              outline
              value={father?.fname}
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  father: { ...father, fname: e.target.value.toUpperCase() },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Middle name"
              type="text"
              outline
              value={father?.mname}
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  father: { ...father, mname: e.target.value.toUpperCase() },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Last name"
              type="text"
              outline
              value={father?.lname}
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  father: { ...father, lname: e.target.value.toUpperCase() },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Suffix"
              type="text"
              outline
              maxLength={10}
              value={father?.suffix}
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  father: { ...father, suffix: e.target.value.toUpperCase() },
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Mobile No. (+63)"
              maxLength={10}
              outline
              value={father?.mobile}
              onChange={(e) =>
                handleChange("guardians", {
                  ...guardians,
                  father: {
                    ...father,
                    father: e.target.value.replace(/\D/g, ""),
                  },
                })
              }
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
