import { MDBBtn, MDBInput } from "mdbreact";
import React from "react";

const _preset = {
  fname: undefined,
  lname: undefined,
  mname: undefined,
  suffix: undefined,
  mobile: undefined,
};

export default function Guardian({
  setActiveStep,
  handleForm,
  handleFinalSubmit,
}) {
  const { form, setForm } = handleForm;

  const handleChange = (obj, key, value) =>
    setForm({ ...form, [obj]: { ...form[obj], [key]: value.toUpperCase() } });

  const { father = _preset, mother = _preset, legal = _preset } = form;

  return (
    <>
      <div className="border p-2">
        <span>Legal Guardian's Name</span>
        <div className="row">
          <div className="col-3">
            <MDBInput
              label="Last Name"
              value={legal.lname}
              onChange={(e) => handleChange("legal", "lname", e.target.value)}
            />
          </div>
          <div className="col-3">
            <MDBInput
              label="First Name"
              value={legal.fname}
              onChange={(e) => handleChange("legal", "fname", e.target.value)}
            />
          </div>
          <div className="col-3">
            <MDBInput
              label="Middle Name"
              value={legal.mname}
              onChange={(e) => handleChange("legal", "mname", e.target.value)}
            />
          </div>
          <div className="col-1">
            <MDBInput
              label="Suffix"
              value={legal.suffix}
              onChange={(e) => handleChange("legal", "suffix", e.target.value)}
            />
          </div>
          <div className="col-2">
            <MDBInput
              label="Mobile No. (+63)"
              maxLength={10}
              value={legal.mobile}
              onChange={(e) =>
                handleChange(
                  "legal",
                  "mobile",
                  e.target.value.replace(/\D/g, "")
                )
              }
            />
          </div>
        </div>
      </div>

      <div className="border p-2 my-2">
        <span>Father's Name</span>
        <div className="row">
          <div className="col-3">
            <MDBInput
              label="Last Name"
              value={father.lname}
              onChange={(e) => handleChange("father", "lname", e.target.value)}
            />
          </div>
          <div className="col-3">
            <MDBInput
              label="First Name"
              value={father.fname}
              onChange={(e) => handleChange("father", "fname", e.target.value)}
            />
          </div>
          <div className="col-3">
            <MDBInput
              label="Middle Name"
              value={father.mname}
              onChange={(e) => handleChange("father", "mname", e.target.value)}
            />
          </div>
          <div className="col-1">
            <MDBInput
              label="Suffix"
              value={father.suffix}
              onChange={(e) => handleChange("father", "suffix", e.target.value)}
            />
          </div>
          <div className="col-2">
            <MDBInput
              label="Mobile No. (+63)"
              maxLength={10}
              value={father.mobile}
              onChange={(e) =>
                handleChange(
                  "father",
                  "mobile",
                  e.target.value.replace(/\D/g, "")
                )
              }
            />
          </div>
        </div>
      </div>

      <div className="border p-2">
        <span>Mother's Maiden Name</span>
        <div className="row">
          <div className="col-3">
            <MDBInput
              label="Last Name"
              value={mother.lname}
              onChange={(e) => handleChange("mother", "lname", e.target.value)}
            />
          </div>
          <div className="col-3">
            <MDBInput
              label="First Name"
              value={mother.fname}
              onChange={(e) => handleChange("mother", "fname", e.target.value)}
            />
          </div>
          <div className="col-3">
            <MDBInput
              label="Middle Name"
              value={mother.mname}
              onChange={(e) => handleChange("mother", "mname", e.target.value)}
            />
          </div>
          <div className="col-1">
            <MDBInput
              label="Suffix"
              value={mother.suffix}
              onChange={(e) => handleChange("mother", "suffix", e.target.value)}
            />
          </div>
          <div className="col-2">
            <MDBInput
              label="Mobile No. (+63)"
              maxLength={10}
              value={mother.mobile}
              onChange={(e) =>
                handleChange(
                  "mother",
                  "mobile",
                  e.target.value.replace(/\D/g, "")
                )
              }
            />
          </div>
        </div>
      </div>

      <MDBBtn
        onClick={() => setActiveStep(2)}
        style={{ float: "left" }}
        color="dark"
        className="z-depth-0"
        outline
      >
        Return
      </MDBBtn>
      <MDBBtn
        style={{ float: "right" }}
        color="primary"
        onClick={handleFinalSubmit}
      >
        Submit
      </MDBBtn>
    </>
  );
}
