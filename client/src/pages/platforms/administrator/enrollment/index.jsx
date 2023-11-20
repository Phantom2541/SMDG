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
import { formatGradeLvl, fullAddress } from "../../../../services/utilities";
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

export default function EnrollmentForm() {
  const [learner, setLearner] = useState({
      lrn: "",
      type: "",
      department: "grade",
      gradeLvl: 1,
    }),
    [basic, setBasic] = useState({
      psa: "TEST",
      isMale: false,
      dob: new Date(),
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
      guardian: {
        fname: "",
        mname: "",
        lname: "",
        suffix: "",
        mobile: "",
      },
    }),
    // [returning, setReturning] = useState({}),
    [activeStep, setActiveStep] = useState(3);

  const handleFinalSubmit = () => {
    // console.log(learner);
    // console.log(basic);
    // console.log(address);
    // console.log(guardian);
    Swal.fire({
      focusDeny: true,
      icon: "question",
      title: "Are you sure you want to submit?",
      text: "Once submitted you cannot edit your information.",
      // html:
      //   `<div class="btn-group z-depth-0">` +
      //   `<button id="cancel" class="btn btn-sm btn-none">Cancel</button>` +
      //   `<button id="save" class="btn btn-sm btn-info">Save</button>` +
      //   `<button id="submit" class="btn btn-sm btn-primary">Submit</button>` +
      //   `</div>`,
      confirmButtonText: `<span class="text-dark">Cancel</span>`,
      confirmButtonColor: "#fff",

      showDenyButton: true,
      denyButtonText: `Save`,
      denyButtonColor: "#54B4D3",

      showCancelButton: true,
      cancelButtonText: "Submit",
      cancelButtonColor: "#3B71CA",
    }).then((result) => {
      var title = "Changes are not Saved!",
        icon = "warning";

      /* Read more about isConfirmed, isDenied below */
      if (result.isDenied) {
        title = "Saved to Drafts!";
        icon = "info";
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        title = "Enrollment Submitted!";
        icon = "success";
      }

      Swal.fire({
        title,
        icon,
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
    });

    // console.log(returning);
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

              {/* <div>DRAFT</div> */}
              {/* <div>
                PENDING VALIDATION <MDBIcon icon="info" />
              </div> */}
              {/* <div>
                ENROLLMENT DENIED <MDBIcon icon="info" />
              </div> */}
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
                    <span className="label">{step}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </MDBCardBody>

        <MDBCardBody className="mx-5">
          <Step
            setActiveStep={setActiveStep}
            handleForm={handleForm(activeStep)}
            handleFinalSubmit={handleFinalSubmit}
          />
        </MDBCardBody>
        <div className="card-footer">
          <MDBTypography
            className="mb-0"
            noteColor="info"
            note
            noteTitle="DRAFT: "
          >
            text
          </MDBTypography>
        </div>
      </MDBCard>
    </MDBContainer>
  );
}
