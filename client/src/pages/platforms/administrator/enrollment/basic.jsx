import React from "react";
import { MDBBtn, MDBDatePicker, MDBInput } from "mdbreact";
import { getAge } from "../../../../services/utilities";

export default function Basic({ setActiveStep, handleForm }) {
  const { form, setForm } = handleForm;

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const {
    fname,
    mname,
    lname,
    suffix,
    PoB,
    ip,
    disability,
    psa,
    isMale,
    dob,
    motherTongue,
    mobile,
    "4ps": fourPs,
  } = form;

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!mobile.startsWith("9")) return console.log("error");

    console.log(form);

    setActiveStep(2);

    // setActiveStep(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <MDBInput
            label="PSA Birth Certificate No. (if available upon registration)"
            value={psa}
            onChange={(e) => handleChange("psa", e.target.value.toUpperCase())}
          />
        </div>
        <div className="col-6">
          <MDBInput
            label="Mobile No. (+63)"
            maxLength={10}
            value={mobile}
            onChange={(e) =>
              handleChange("mobile", e.target.value.replace(/\D/g, ""))
            }
          />
        </div>

        <div className="col-5 border-right border-top border-left">
          <MDBInput
            label="Last Name"
            value={lname}
            onChange={(e) => handleChange("lname", e.target.value)}
          />
        </div>
        <div className="col-2">
          <label className="mb-0">Birthdate</label>
          <MDBDatePicker
            className="mt-1"
            autoOk
            value={dob}
            getValue={(e) => handleChange("dob", e)}
          />
        </div>
        <div className="col-1">
          <MDBInput label="Age" readOnly value={getAge(dob.toDateString())} />
        </div>
        <div className="col-4">
          <MDBInput
            label="Mother Tongue (ex: Tagalog, English)"
            value={motherTongue}
            onChange={(e) =>
              handleChange("motherTongue", e.target.value.toUpperCase())
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="col-5 border-left border-right">
          <MDBInput
            label="First Name"
            value={fname}
            onChange={(e) => handleChange("fname", e.target.value)}
          />
        </div>
        <div className="col-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={isMale}
              onChange={() => handleChange("isMale", !isMale)}
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
              checked={!isMale}
              onChange={() => handleChange("isMale", !isMale)}
              id="Female"
            />
            <label className="form-check-label" htmlFor="Female">
              Female
            </label>
          </div>
        </div>
        <div className="col-5">
          <MDBInput
            label="Place of Birth (Municipality/City)"
            value={PoB}
            onChange={(e) => handleChange("PoB", e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-3 border-left border-bottom">
          <MDBInput
            label="Middle Name"
            value={mname}
            onChange={(e) => handleChange("mname", e.target.value)}
          />
        </div>
        <div className="col-2 border-right border-bottom">
          <MDBInput
            label="Extension Name"
            value={suffix}
            onChange={(e) => handleChange("suffix", e.target.value)}
          />
        </div>
        <div className="col-7">
          <MDBInput
            label="Do you belong to any Indigenous Peoples Community/Cultural Community? If Yes, please specify"
            value={ip}
            className="mt-0"
            onChange={(e) => handleChange("ip", e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <label>Is your family a beneficiary of 4Ps? </label>
          <MDBInput
            label="If Yes, write the 4Ps Household ID Number"
            value={fourPs}
            onChange={(e) => handleChange("4ps", e.target.value.toUpperCase())}
          />
        </div>
        <div className="col-7">
          <label>Do you have a Disability?</label>
          <MDBInput
            label="If Yes, specify the type of disability"
            value={disability}
            onChange={(e) => handleChange("disability", e.target.value)}
          />
        </div>
      </div>
      <MDBBtn
        onClick={() => setActiveStep(0)}
        style={{ float: "left" }}
        color="dark"
        type="button"
        className="z-depth-0"
        outline
      >
        Return
      </MDBBtn>
      <MDBBtn style={{ float: "right" }} color="primary" type="submit">
        Next
      </MDBBtn>
    </form>
  );
}
