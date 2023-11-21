import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBIcon,
  MDBContainer,
  MDBTypography,
} from "mdbreact";
import Learner from "./learner";
import Basic from "./basic";
import Address from "./address";
import Guardian from "./guardian";
// import Returning from "./returning";
import {
  formatGradeLvl,
  fullAddress,
  fullName,
  getAge,
} from "../../../../services/utilities";
import generateSY from "../../../../services/utilities/generateSY";
import School from "../../../../services/fakeDb/school";
import Swal from "sweetalert2";

const steps = [
  "Education",
  "Personal",
  "Address",
  "Guardian",
  //   "Returnee / Transferee",
];

const requirements = 6;

export default function EnrollmentForm() {
  const [learner, setLearner] = useState({
      lrn: "",
      type: "new",
      department: "grade",
      gradeLvl: 1,
      requirements: [],
    }),
    [basic, setBasic] = useState({
      psa: "TEST",
      fullName: { fname: "", mname: "", lname: "", suffix: "" },
      isMale: false,
      dob: new Date(),
      pob: "",
      ip: "",
      disability: "",
      motherTongue: "",
      mobile: "",
      "4ps": "",
    }),
    [address, setAddress] = useState({
      current: {
        region: "REGION III (CENTRAL LUZON)",
        province: "NUEVA ECIJA",
        city: "CABANATUAN CITY",
        barangay: "",
        zip: "",
        street: "",
      },
      permanent: {
        region: "REGION III (CENTRAL LUZON)",
        province: "NUEVA ECIJA",
        city: "CABANATUAN CITY",
        barangay: "",
        zip: "",
        street: "",
      },
      isSame: true,
    }),
    [guardian, setGuardian] = useState({
      father: {
        fname: "",
        mname: "",
        lname: "",
        suffix: "",
        mobile: "",
      },
      mother: {
        fname: "",
        mname: "",
        lname: "",
        suffix: "",
        mobile: "",
      },
      legal: {
        fname: "",
        mname: "",
        lname: "",
        suffix: "",
        mobile: "",
      },
    }),
    // [returning, setReturning] = useState({}),
    [activeStep, setActiveStep] = useState(0);

  const handleSave = (isPublished) => {
    const form = { ...learner, ...basic, address, ...guardian, isPublished };

    if (address.isSame) form.address.permanent = address.current;

    console.log(form);
  };

  const handleError = (title, text, footer) =>
    Swal.fire({
      icon: "error",
      title,
      text,
      footer,
      showConfirmButton: false,
    });

  const handleValidation = () => {
    const formRequirements = learner.requirements,
      fullname = basic.fullName,
      mobile = basic.mobile,
      dob = basic.dob,
      guardian = guardian.legal;

    if (getAge(dob, true) < 6)
      return handleError(
        "Invalid Age",
        "Minimum of 6 years old only.",
        "Double check Personal Information"
      );

    if (!mobile || !mobile.startsWith("9") || mobile.length !== 10)
      return handleError(
        "Invalid Mobile",
        "Please input valid mobile number.",
        "Double check Personal Information"
      );

    if (!formRequirements.length || formRequirements.length !== requirements)
      return handleError(
        "Invalid Requirements",
        "Please upload the photos.",
        "Double check Education Information"
      );

    if (!fullName(fullname))
      return handleError(
        "Invalid Fullname",
        "First name and Last name are required.",
        "Double check Personal Information"
      );

    if (!fullName(guardian))
      return handleError(
        "Invalid Legal Guardian Fullname",
        "First name and Last name are required.",
        "Double check Guardian Information"
      );

    handleSave(true);
  };

  const handleFinalSubmit = () => {
    Swal.fire({
      focusDeny: true,
      icon: "question",
      title: "Are you sure you want to submit?",
      text: "Once submitted you cannot edit your information.",
      confirmButtonText: `<span class="text-dark">Cancel</span>`,
      confirmButtonColor: "#fff",

      showDenyButton: true,
      denyButtonText: `Save`,
      denyButtonColor: "#54B4D3",

      showCancelButton: true,
      cancelButtonText: "Submit",
      cancelButtonColor: "#3B71CA",
    }).then((result) => {
      if (result.isDenied) {
        handleSave(false);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        handleValidation();
      } else {
        Swal.fire({
          title: "Changes are not Saved!",
          icon: "warning",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
      }
    });
  };

  const componentMap = {
    0: Learner,
    1: Basic,
    2: Address,
    3: Guardian,
    // 4: Returning,
  };

  const handleForm = (index) => {
    const stateMap = {
      0: {
        form: learner,
        setForm: setLearner,
      },
      1: {
        form: basic,
        setForm: setBasic,
      },
      2: {
        form: address,
        setForm: setAddress,
      },
      3: {
        form: guardian,
        setForm: setGuardian,
      },
      //   4: {
      //     form: returning,
      //     setForm: setReturning,
      //   },
    };

    return stateMap[index];
  };

  const Step = componentMap[activeStep];

  const { department, gradeLvl } = learner;

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
                  ENHANCED BASIC EDUCATION ENROLLMENT FORM
                </p>
              </div>
            </div>
            <div className="text-right">
              <p style={{ fontSize: "20px" }} className="mb-0">
                SY {generateSY(true)}
              </p>
              <p style={{ fontSize: "17px" }}>
                {formatGradeLvl(department, gradeLvl)}
              </p>
            </div>
          </div>
        </MDBCardTitle>

        <MDBCardBody>
          <ul className="stepper stepper-horizontal my-0 py-0">
            {steps.map((step, index) => {
              const color =
                  activeStep === index
                    ? "primary"
                    : index < activeStep
                    ? "success"
                    : "light",
                icon =
                  color === "success" ? <MDBIcon icon="check" /> : index + 1;

              return (
                <li key={`step-${index}`} style={{ pointerEvents: "none" }}>
                  <a href="#!">
                    <span className={`circle bg-${color}`}>{icon}</span>
                    <span className="label">{step} Information</span>
                  </a>
                </li>
              );
            })}
          </ul>
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
          <Step
            setActiveStep={setActiveStep}
            handleForm={handleForm(activeStep)}
            handleFinalSubmit={handleFinalSubmit}
          />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
