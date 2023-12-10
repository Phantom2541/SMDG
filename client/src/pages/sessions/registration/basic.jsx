import React from "react";
import {
  MDBCol,
  MDBInput,
  MDBRow,
  DatePicker,
  MDBContainer,
  MDBIcon,
} from "mdbreact";
import AddressSelect from "../../../components/addressSelect";
import { getAge } from "../../../services/utilities";

export default function Basic({ handleChange, form }) {
  const {
      fullName,
      email,
      password,
      cpassword,
      pob,
      dob,
      isMale,
      mobile,
      disability,
      mothertounge,
      address,
      role,
    } = form,
    { fname, mname, lname, suffix } = fullName,
    { current, permanent, isSame } = address;

  return (
    <>
      <div className="blue darken-3 px-5 py-2 text-white font-weight-bold h5-responsive">
        I. IDENTIFYING INFORMATION
      </div>
      <MDBContainer className="px-5" fluid>
        <label className="mb-0 mt-3">
          1. <b>Name</b> - <i>Enter your name correctly</i>
        </label>
        <MDBRow>
          <MDBCol className="px-1" md="4">
            <MDBInput
              label="First name"
              type="text"
              outline
              required
              value={fname}
              onChange={(e) =>
                handleChange("fullName", {
                  ...fullName,
                  fname: e.target.value.toUpperCase(),
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1" md="3">
            <MDBInput
              label="Middle name"
              type="text"
              outline
              value={mname}
              onChange={(e) =>
                handleChange("fullName", {
                  ...fullName,
                  mname: e.target.value.toUpperCase(),
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1" md="3">
            <MDBInput
              label="Last name"
              type="text"
              outline
              required
              value={lname}
              onChange={(e) =>
                handleChange("fullName", {
                  ...fullName,
                  lname: e.target.value.toUpperCase(),
                })
              }
            />
          </MDBCol>
          <MDBCol className="px-1" md="2">
            <MDBInput
              label="Suffix"
              type="text"
              outline
              value={suffix}
              onChange={(e) =>
                handleChange("fullName", {
                  ...fullName,
                  suffix: e.target.value.toUpperCase(),
                })
              }
            />
          </MDBCol>
        </MDBRow>
        <label className="mb-0 pb-0">
          2. <b>Place of Birth & Date of Birth</b> -
          <i>Indicate your birth of place & birth date correctly</i>
        </label>
        <MDBRow>
          <MDBCol md="5" className="px-1">
            <MDBInput
              label="Place of birth"
              type="text"
              value={pob}
              outline
              onChange={(e) => handleChange("pob", e.target.value)}
            />
          </MDBCol>
          <MDBCol md="2" className="px-1 d-flex align-items-center">
            <DatePicker value={dob} getValue={(e) => handleChange("dob", e)} />
            <MDBIcon
              title={getAge(dob)}
              icon="info-circle"
              className="text-info"
            />
          </MDBCol>
          <MDBCol md="2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={isMale}
                onChange={() => handleChange("isMale", true)}
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
                onChange={() => handleChange("isMale", false)}
                id="Female"
              />
              <label className="form-check-label" htmlFor="Female">
                Female
              </label>
            </div>
          </MDBCol>
          <MDBCol md="3" className="px-1">
            <MDBInput
              label="Mobile No. (+63)"
              maxLength={10}
              required
              outline
              value={mobile}
              onChange={(e) =>
                handleChange("mobile", e.target.value.replace(/\D/g, ""))
              }
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol className="px-1">
            <MDBInput
              label="Do you have any Disabilities? If Yes, specify the type of disability"
              type="text"
              outline
              value={disability}
              onChange={(e) => handleChange("disability", e.target.value)}
            />
          </MDBCol>
          <MDBCol md="4" className="px-1">
            <MDBInput
              label="Mother Tongue (ex: Tagalog, English)"
              type="text"
              outline
              value={mothertounge}
              onChange={(e) => handleChange("motherTounge", e.target.value)}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="blue darken-3 px-5 py-2 text-white font-weight-bold h5-responsive">
        II. ADDRESS INFORMATION
      </div>
      <MDBContainer className="px-5" fluid>
        <label className="mt-3">
          3. <b>Address </b> -
          <i>
            Select region first, and then province, then city, and finally your
            barangay
          </i>
        </label>
        <AddressSelect
          address={current}
          label="Current Address"
          handleChange={(_, current) =>
            handleChange("address", { ...address, current })
          }
        />
        <div className="d-flex mb-3">
          <label>
            Is your permanent address is same with your current address?
          </label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={isSame}
              onChange={() =>
                handleChange("address", { ...address, isSame: true })
              }
              id="Yes"
            />
            <label className="form-check-label" htmlFor="Yes">
              Yes
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={!isSame}
              onChange={() =>
                handleChange("address", { ...address, isSame: false })
              }
              id="No"
            />
            <label className="form-check-label" htmlFor="No">
              No
            </label>
          </div>
        </div>
        {!isSame && (
          <AddressSelect
            address={permanent}
            label="Permanent Address"
            handleChange={(_, permanent) =>
              handleChange("address", { ...address, permanent })
            }
          />
        )}
      </MDBContainer>
      <div className="blue darken-3 px-5 py-2 text-white font-weight-bold h5-responsive">
        III. ACCOUNT INFORMATION
      </div>
      <MDBContainer className="px-5" fluid>
        <label className="mb-0 pb-0 mt-3">
          4. <b>Email & Password</b> -
          <i>Enter your email & password correctly</i>
        </label>
        <MDBRow>
          <MDBCol className="px-1">
            <MDBInput
              label="Enter E-mail Address"
              type="text"
              outline
              required
              value={email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </MDBCol>
          <MDBCol className="px-1">
            <MDBInput
              label="Enter Password"
              type="password"
              required
              minLength={8}
              value={password}
              outline
              onChange={(e) => handleChange("password", e.target.value)}
            />
          </MDBCol>
          <MDBCol className="px-1 ">
            <MDBInput
              label="Re-enter Password"
              type="password"
              required
              minLength={8}
              value={cpassword}
              outline
              onChange={(e) => handleChange("cpassword", e.target.value)}
            />
          </MDBCol>
          <MDBCol md="2">
            <label className="mb-0">Account Type</label>
            <select
              className="form-control"
              value={role}
              onChange={(e) => handleChange("role", e.target.value)}
            >
              <option value="student">Student</option>
              <option value="employee">Employee</option>
              <option value="guardian" disabled>
                Guardian
              </option>
            </select>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
