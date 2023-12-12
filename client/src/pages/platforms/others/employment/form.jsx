import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdbreact";
import React from "react";
import { Departments } from "../../../../services/fakeDb";

export default function Form({ form, setForm, handleChange, view = false }) {
  const { position, department, emergencyContact } = form,
    { primary, secondary } = emergencyContact;
  return (
    <>
      <div className="blue darken-3 px-5 py-2 text-white font-weight-bold h5-responsive">
        I. EMPLOYMENT INFORMATION
      </div>
      <MDBContainer className="px-5" fluid>
        <label className="mb-0 pb-0 mt-4">
          <b>Position & Department</b>
          &nbsp;-&nbsp;<i>Enter your Position & Department correctly</i>
        </label>
        <MDBRow>
          <MDBCol>
            {view ? (
              <>
                <h6 className="mb-0">Applying Postion:</h6>
                <h5 className="font-weight-bold">{position}</h5>
              </>
            ) : (
              <MDBInput
                label="Applying Position"
                type="text"
                outline
                value={position}
                onChange={(e) => handleChange("position", e.target.value)}
              />
            )}
          </MDBCol>
          <MDBCol>
            {view ? (
              <>
                <h6 className="mb-0">Department</h6>
                <h5 className="font-weight-bold">{department}</h5>
              </>
            ) : (
              <>
                <label className="mb-0">Department</label>
                <select
                  className="form-control"
                  onChange={(e) => handleChange("department", e.target.value)}
                >
                  {Departments.collections?.map(({ key, name }) => (
                    <option key={key} value={key}>
                      {name}
                    </option>
                  ))}
                </select>
              </>
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="blue darken-3 px-5 py-2 text-white font-weight-bold h5-responsive">
        II. EMERGENCY CONTACT
      </div>
      <MDBContainer className="px-5" fluid>
        <label className="mb-0 pb-0 mt-4">
          <b>Primary & Secondary Information</b>
          &nbsp;-&nbsp;<i>Enter your Primary & Secondary Contact correctly</i>
        </label>
        <h6 className="mb-0 mt-3 font-weight-bold">Primary Contact</h6>
        <MDBRow>
          <MDBCol>
            {view ? (
              <>
                <h6 className="mb-0">Fullname</h6>
                <h5 className="font-weight-bold">{primary.name}</h5>
              </>
            ) : (
              <MDBInput
                label="Fullname"
                type="text"
                outline
                value={primary.name}
                onChange={(e) =>
                  handleChange("emergencyContact", {
                    ...emergencyContact,
                    primary: { ...primary, name: e.target.value },
                  })
                }
              />
            )}
          </MDBCol>
          <MDBCol>
            {view ? (
              <>
                <h6 className="mb-0">Relationship</h6>
                <h5 className="font-weight-bold">{primary.relationship}</h5>
              </>
            ) : (
              <MDBInput
                label="Relationship"
                type="text"
                outline
                value={primary.relationship}
                onChange={(e) =>
                  handleChange("emergencyContact", {
                    ...emergencyContact,
                    primary: { ...primary, relationship: e.target.value },
                  })
                }
              />
            )}
          </MDBCol>
          <MDBCol>
            {view ? (
              <>
                <h6 className="mb-0">Mobile No.</h6>
                <h5 className="font-weight-bold">{primary.mobile}</h5>
              </>
            ) : (
              <MDBInput
                label="Mobile No."
                type="number"
                outline
                value={primary.mobile}
                onChange={(e) =>
                  handleChange("emergencyContact", {
                    ...emergencyContact,
                    primary: { ...primary, mobile: e.target.value },
                  })
                }
              />
            )}
          </MDBCol>
        </MDBRow>
        <h6 className="mb-0 mt-3 font-weight-bold">Secondary Contact</h6>
        <MDBRow>
          <MDBCol>
            {view ? (
              <>
                <h6 className="mb-0">Fullname</h6>
                <h5 className="font-weight-bold">{secondary.name}</h5>
              </>
            ) : (
              <MDBInput
                label="Fullname"
                outline
                value={secondary.name}
                onChange={(e) =>
                  handleChange("emergencyContact", {
                    ...emergencyContact,
                    secondary: { ...secondary, name: e.target.value },
                  })
                }
              />
            )}
          </MDBCol>
          <MDBCol>
            {view ? (
              <>
                <h6 className="mb-0">Relationship</h6>
                <h5 className="font-weight-bold">{secondary.relationship}</h5>
              </>
            ) : (
              <MDBInput
                label="Relationship"
                type="text"
                outline
                value={secondary.relationship}
                onChange={(e) =>
                  handleChange("emergencyContact", {
                    ...emergencyContact,
                    secondary: { ...secondary, relationship: e.target.value },
                  })
                }
              />
            )}
          </MDBCol>
          <MDBCol>
            {view ? (
              <>
                <h6 className="mb-0">Mobile No.</h6>
                <h5 className="font-weight-bold">{secondary.mobile}</h5>
              </>
            ) : (
              <MDBInput
                label="Mobile No."
                type="number"
                outline
                value={secondary.mobile}
                onChange={(e) =>
                  handleChange("emergencyContact", {
                    ...emergencyContact,
                    secondary: { ...secondary, mobile: e.target.value },
                  })
                }
              />
            )}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="blue darken-3 px-5 py-2 text-white font-weight-bold h5-responsive text-center">
        COFIRMATION TO ALLOW THE STORAGE AND USE OF MY PERSONAL DATA
      </div>
      <MDBContainer className="px-5 m-3" fluid>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="1" />
          <label className="form-check-label" htmlFor="1">
            The information entered above is true and correct.
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="1" />
          <label className="form-check-label" htmlFor="1">
            I have the full knowledge in providing the above information.
          </label>
        </div>
      </MDBContainer>
    </>
  );
}
