import {
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdbreact";
import React from "react";
import {
  formatMobile,
  fullAddress,
  fullName,
  getAge,
} from "../../../services/utilities";

export default function View({
  goBack,
  user = {
    fullName: {
      fname: "BENEDICT EARLE GABRIEL",
      lname: "PAJARILLAGA",
      mname: "ROMERO",
      suffix: "",
    },
    email: "benedictearle@gmail.com",
    password: "password",
    cpassword: "password",
    pob: "Cabanatuan City",
    dob: "2000-09-07T17:24:00.000Z",
    isMale: true,
    mobile: "9511231231",
    address: {
      isSame: true,
      current: {
        region: "REGION III (CENTRAL LUZON)",
        province: "NUEVA ECIJA",
        city: "CABANATUAN CITY",
        barangay: "Mabini Extension",
        street: "Purok 4",
        zip: 3100,
      },
      permanent: {
        region: "REGION III (CENTRAL LUZON)",
        province: "NUEVA ECIJA",
        city: "CABANATUAN CITY",
        street: "",
        zip: "",
      },
    },
    disability: "ADHD",
    role: "student",
    lrn: "123123",
    psa: "123123",
    motherTounge: "Tagalog, English",
    guardians: {
      mother: {
        fname: "DEBRALENE GAY",
        lname: "PAJARILLAGA",
        mname: "ROMERO",
        mobile: "95123123123123123123",
      },
      father: {
        fname: "TOMAS",
        lname: "PAJARILLAGA",
        mname: "BAUTISTA",
        suffix: "JR",
        mobile: "9123123123123",
      },
    },
  },
}) {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  const {
      fullName: fullname,
      address,
      role,
      pob,
      dob,
      isMale,
      mobile,
      disability,
      motherTounge,
      email,
      lrn,
      psa,
      indigenousPeople,
      "4ps": fourPs,
      guardians,
    } = user,
    { mother = {}, father = {} } = guardians;

  return (
    <MDBCol md="8" className="offset-md-2 py-5">
      <MDBCard className="pb-3">
        <MDBCardHeader className="bg-primary text-white text-center">
          <h1 className="font-weight-bold mb-0">CHECK YOUR ENTRIES</h1>
          <h3>Scroll down below and check your entries before you submit.</h3>
        </MDBCardHeader>
        <MDBContainer className="px-5 mt-4" fluid>
          <MDBRow>
            <MDBCol md="2">
              <img
                src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
                height="100"
                width="100"
                alt="User"
              />
            </MDBCol>
            <MDBCol>
              <h4 className="font-weight-bold">{fullName(fullname)}</h4>
              <h5>{role.toUpperCase()}</h5>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="blue darken-3 px-5 py-2 mt-4 text-white font-weight-bold h5-responsive">
          I. IDENTIFYING INFORMATION
        </div>
        <MDBContainer className="px-5 mt-4" fluid>
          <h5>
            Place of Birth: <b>{pob}</b>
          </h5>
          <h5>
            Date of Birth:{" "}
            <b>
              {new Date(dob).toDateString()}, {getAge(dob)}
            </b>
          </h5>
          <h5>
            Gender: <b>{isMale ? "MALE" : "FEMALE"}</b>
          </h5>
          {disability && (
            <h5>
              Disability: <b>{disability}</b>
            </h5>
          )}
          {motherTounge && (
            <h5>
              Mother Tounge: <b>{motherTounge}</b>
            </h5>
          )}
          <h5 className="mb-0">
            Mobile Number: <b>{formatMobile(mobile)}</b>
          </h5>
        </MDBContainer>
        <div className="blue darken-3 px-5 py-2 mt-4 text-white font-weight-bold h5-responsive">
          II. ADDRESS INFORMATION
        </div>
        <MDBContainer className="px-5 mt-4" fluid>
          <h5>
            Current Address: <b>{fullAddress(address.current)}</b>
          </h5>
          <h5 className={`${address.isSame && "mb-0"}`}>
            Same as Permanent Address: <b>{address.isSame ? "YES" : "NO"}</b>
          </h5>
          {!address.isSame && (
            <h5 className="mb-0">
              Permanent Address: <b>{fullAddress(address.permanent)}</b>
            </h5>
          )}
        </MDBContainer>
        <div className="blue darken-3 px-5 py-2 mt-4 text-white font-weight-bold h5-responsive">
          III. ACCOUNT INFORMATION
        </div>
        <MDBContainer className="px-5 mt-4" fluid>
          <h5 className="mb-0">
            Email Address: <b>{email}</b>
          </h5>
        </MDBContainer>
        <div className="blue darken-3 px-5 py-2 mt-4 text-white font-weight-bold h5-responsive">
          IV. STUDENT ADDITIONAL INFORMATION
        </div>
        <MDBContainer className="px-5 mt-4" fluid>
          <h5>
            LRN: <b>{lrn}</b>
          </h5>
          {psa && (
            <h5>
              PSA: <b>{psa}</b>
            </h5>
          )}
          {indigenousPeople && (
            <h5>
              Indigenous or Cultural Community: <b>{indigenousPeople}</b>
            </h5>
          )}
          {fourPs && (
            <h5>
              4ps: <b>{fourPs}</b>
            </h5>
          )}
          {mother.fname && (
            <>
              <h5 className="font-weight-bold">Mother's Maiden Information</h5>
              <h5>
                Fullname: <b>{fullName(mother)}</b>
              </h5>
              {mother?.mobile && (
                <h5>
                  Mobile Number: <b>{formatMobile(mother?.mobile)}</b>
                </h5>
              )}
            </>
          )}
          {father.fname && (
            <>
              <h5 className="font-weight-bold">Father's Information</h5>
              <h5>
                Fullname: <b>{fullName(father)}</b>
              </h5>
              {father?.mobile && (
                <h5>
                  Mobile Number: <b>{formatMobile(father?.mobile)}</b>
                </h5>
              )}
            </>
          )}
        </MDBContainer>
        <div className="blue lighten-3 px-5 py-5 mt-4 font-weight-bold">
          <h5 className="text-danger mb-0 font-weight-bold">WARNING:</h5>
          <p>
            CHECK ALL YOUR ENTRIES BEFORE YOU SUBMIT THEM. EDITING THE DATA IS
            COMPLICATED AS IT DEMANDS RIGOROUS TIME TO CORRECT.
          </p>
          <p>
            I-check muna lahat ng pangalan, address, birthday at iba pang
            inpormasyon kung tama bago isumite.
          </p>
        </div>
        <MDBContainer className="px-4 mt-4" fluid>
          <form onSubmit={handleSubmit}>
            <div className="form-check">
              <h5 className="font-weight-bold text-danger">
                Are you sure that the record is correct and ready for
                submission?
              </h5>
              <input
                required
                className="form-check-input"
                type="checkbox"
                id="5"
              />
              <label className="form-check-label" htmlFor="5">
                Yes and I certify that the above information is correct, final
                and ready for submission.
              </label>
            </div>
            <div className="w-50 mt-2">
              <MDBBtn type="submit" color="primary" size="lg">
                Submit Now!
              </MDBBtn>
              <MDBBtn
                onClick={goBack}
                type="button"
                color="primary"
                size="lg"
                outline
              >
                Review & Edit
              </MDBBtn>
            </div>
          </form>
        </MDBContainer>
      </MDBCard>
    </MDBCol>
  );
}
