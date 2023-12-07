import React from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import AddressSelect from "../../../../components/addressSelect";

export default function Address({ setActiveStep, handleForm }) {
  const { form, setForm } = handleForm;

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { current, permanent, isSame } = form;

  return (
    <>
      <div>
        <AddressSelect
          label="Current address"
          address={current}
          handleChange={(_, value) => handleChange("current", value)}
        />
        <div className="row">
          <div className="col-5">
            <MDBInput
              label="Sitio/Street Name"
              value={current.street}
              onChange={(e) =>
                handleChange("current", {
                  ...current,
                  street: e.target.value.toUpperCase(),
                })
              }
            />
          </div>
          <div className="col-2">
            <MDBInput
              type="number"
              label="Zip Code"
              value={current.zip}
              onChange={(e) =>
                handleChange("current", {
                  ...current,
                  zip: e.target.value.toUpperCase(),
                })
              }
            />
          </div>
        </div>
        <div className="d-flex">
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
      </div>

      {!isSame && (
        <div className="mt-5">
          <AddressSelect
            label="Permanent address"
            address={permanent}
            handleChange={(_, value) => handleChange("permanent", value)}
          />
          <div className="row">
            <div className="col-5">
              <MDBInput
                label="Sitio/Street Name"
                value={permanent.street}
                onChange={(e) =>
                  handleChange("permanent", {
                    ...permanent,
                    street: e.target.value.toUpperCase(),
                  })
                }
              />
            </div>
            <div className="col-2">
              <MDBInput
                type="number"
                label="Zip Code"
                value={permanent.zip}
                onChange={(e) =>
                  handleChange("permanent", {
                    ...permanent,
                    zip: e.target.value.toUpperCase(),
                  })
                }
              />
            </div>
          </div>
        </div>
      )}
      <MDBBtn
        onClick={() => setActiveStep(1)}
        style={{ float: "left" }}
        color="dark"
        className="z-depth-0"
        outline
      >
        Return
      </MDBBtn>
      <MDBBtn
        style={{ float: "right" }}
        color="info"
        onClick={() => setActiveStep(3)}
      >
        Next
      </MDBBtn>
    </>
  );
}
