import React, { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBStep,
  MDBStepper,
  MDBView,
} from "mdbreact";
import Learners from "./learners";
import Basic from "./basic";
import Address from "./address";
import Guardians from "./guardians";
import Returning from "./returning";

const Step = ({ label, icon, status }) => {
  const componentMap = {
    Learners,
    Basic,
    Address,
    "Parents/Guardians": Guardians,
    "Returning Learner (Balik-Aral) and Trasnfer/Move In": Returning,
  };

  const Component = componentMap[label];

  return (
    <MDBStep>
      <a href="#!">
        <span className={`circle bg-${status}`}>{icon}</span>
        <span className="label">{label}</span>
      </a>
      {status === "primary" && <Component />}
    </MDBStep>
  );
};

export default function EnrollmentForm() {
  const [stepper, setStepper] = useState([
      {
        label: "Learners",
        status: "success",
        icon: <MDBIcon icon="check" />,
      },
      {
        label: "Basic",
        status: "danger",
        icon: <MDBIcon icon="exclamation-triangle" />,
      },
      {
        label: "Address",
        status: "primary",
      },
      {
        label: "Parents/Guardians",
        status: "",
      },
      {
        label: "Returning Learner (Balik-Aral) and Trasnfer/Move In",
        status: "",
      },
    ]),
    [activeStep, setActiveStep] = useState(2);

  const handleSubmit = () => {
    console.log("submitted");
  };

  const handleStepper = (action = false) => {
    const _stepper = [...stepper],
      step = { ..._stepper[activeStep] };

    if (action) {
      if (activeStep === 4) return handleSubmit();

      step.status = "success";
      step.icon = <MDBIcon icon="check" />;

      _stepper[activeStep] = step;

      const nextStepper = activeStep + 1,
        nextStep = { ..._stepper[nextStepper] };

      nextStep.status = "primary";

      _stepper[nextStepper] = nextStep;

      setActiveStep(activeStep + 1);
    } else {
      step.status = "";
      step.icon = "";

      _stepper[activeStep] = step;

      const prevStepper = activeStep - 1,
        prevStep = { ..._stepper[prevStepper] };

      prevStep.status = "primary";

      _stepper[prevStepper] = prevStep;

      setActiveStep(activeStep - 1);
    }

    setStepper(_stepper);

    console.log(action);
  };

  return (
    <MDBContainer className="mt-5">
      <MDBCard narrow>
        <MDBView cascade className="gradient-card-header peach-gradient">
          <h5 className="mb-0">Vertical stepper</h5>
        </MDBView>

        <MDBCardBody cascade>
          <MDBRow className="mt-1">
            <MDBCol md="12">
              <MDBStepper vertical>
                {stepper.map(({ label, status, icon }, index) => (
                  <Step
                    key={`step-${index}`}
                    status={status}
                    icon={icon || index + 1}
                    label={label}
                  />
                ))}
                <MDBRow className="mt-1">
                  <MDBCol md="12" className="text-right">
                    <MDBBtn
                      disabled={activeStep < 1}
                      onClick={() => handleStepper()}
                      flat
                    >
                      previous
                    </MDBBtn>
                    <MDBBtn onClick={() => handleStepper(true)} color="primary">
                      {activeStep > 3 ? "Submit" : "Next"}
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBStepper>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
