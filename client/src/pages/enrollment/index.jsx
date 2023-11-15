import React, { useState } from "react";
import {
  MDBCard,
  MDBView,
  MDBCardHeader,
  MDBMedia,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
} from "mdbreact";
import Learner from "./learner";
import Basic from "./basic";
import Address from "./address";
import Guardian from "./guardian";
import Returning from "./returning";
import { formatGradeLvl } from "../../services/utilities";
import generateSY from "../../services/utilities/generateSY";
import Account from "./account";

const steps = [
  "Education",
  "Personal",
  "Address",
  "Guardian",
  "Returnee / Transferee",
  "Account",
];

export default function EnrollmentForm() {
  const [learner, setLearner] = useState({
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
    [address, setAddress] = useState({}),
    [guardian, setGuardian] = useState({}),
    [returning, setReturning] = useState({}),
    [account, setAccount] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    }),
    [activeStep, setActiveStep] = useState(0);

  const handleFinalSubmit = () => {
    console.log(learner);
    console.log(basic);
    console.log(address);
    console.log(guardian);
    console.log(returning);
  };

  const componentMap = {
    0: Learner,
    1: Basic,
    2: Address,
    3: Guardian,
    4: Returning,
    5: Account,
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
      4: {
        form: returning,
        setForm: setReturning,
      },
      5: {
        form: account,
        setForm: setAccount,
      },
    };

    return stateMap[index];
  };

  const Step = componentMap[activeStep];

  const { department, gradeLvl } = learner;

  return (
    <MDBCard className="mt-4 ml-5 mr-5">
      <MDBCardTitle className="mb-0">
        <MDBRow>
          <MDBCol>
            <MDBMedia className="d-flex">
              <MDBView waves>
                <img
                  style={{ height: "100px" }}
                  className="rounded-circle"
                  src="https://png.pngtree.com/png-clipart/20230313/original/pngtree-education-logo-and-school-badge-design-template-png-image_8986693.png"
                  alt="Generic placeholder"
                />
              </MDBView>
              <MDBMedia className="mt-4 ml-5">
                <MDBView>
                  <p style={{ fontWeight: "bolder", fontSize: "20px" }}>
                    BASIC EDUCATION ENROLLMENT FORM
                  </p>
                </MDBView>
              </MDBMedia>
            </MDBMedia>
          </MDBCol>
          <MDBCol>
            SY {generateSY(true)} {formatGradeLvl(department, gradeLvl)}
          </MDBCol>
        </MDBRow>
      </MDBCardTitle>

      <MDBCardHeader className="py-0">
        <ul className="stepper stepper-horizontal my-0 py-0">
          {steps.map((step, index) => {
            const color =
              activeStep === index
                ? "primary"
                : index < activeStep
                ? "success"
                : "light";

            return (
              <li key={`step-${index}`} style={{ pointerEvents: "none" }}>
                <a href="#!">
                  <span className={`circle bg-${color}`}>{index + 1}</span>
                  <span className="label">{step}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </MDBCardHeader>

      <MDBCardBody className="mx-5">
        {
          <Step
            setActiveStep={setActiveStep}
            handleForm={handleForm(activeStep)}
            handleFinalSubmit={handleFinalSubmit}
          />
        }
      </MDBCardBody>
    </MDBCard>
  );
}
