import { MDBBtn, MDBInput } from "mdbreact";
import React from "react";

export default function Guardian({
  setActiveStep,
  handleForm,
  handleFinalSubmit,
}) {
  const { form, setForm } = handleForm;

  const handleChange = (obj, key, value) =>
    setForm({ ...form, [obj]: { ...form[obj], [key]: value } });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFinalSubmit();
  };

  const { father, mother, guardian } = form;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Father's Name</label>
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

      <div>
        <label>Mother's Maiden Name</label>
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

      <div>
        <label>Legal Guardian's Name</label>
        <div className="row">
          <div className="col-3">
            <MDBInput
              label="Last Name"
              value={guardian.lname}
              onChange={(e) =>
                handleChange("guardian", "lname", e.target.value)
              }
            />
          </div>
          <div className="col-3">
            <MDBInput
              label="First Name"
              value={guardian.fname}
              onChange={(e) =>
                handleChange("guardian", "fname", e.target.value)
              }
            />
          </div>
          <div className="col-3">
            <MDBInput
              label="Middle Name"
              value={guardian.mname}
              onChange={(e) =>
                handleChange("guardian", "mname", e.target.value)
              }
            />
          </div>
          <div className="col-1">
            <MDBInput
              label="Suffix"
              value={guardian.suffix}
              onChange={(e) =>
                handleChange("guardian", "suffix", e.target.value)
              }
            />
          </div>
          <div className="col-2">
            <MDBInput
              label="Mobile No. (+63)"
              maxLength={10}
              value={guardian.mobile}
              onChange={(e) =>
                handleChange(
                  "guardian",
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
        type="button"
        className="z-depth-0"
        outline
      >
        Return
      </MDBBtn>
      <MDBBtn style={{ float: "right" }} color="primary" type="submit">
        Submit
      </MDBBtn>
    </form>
  );
}
