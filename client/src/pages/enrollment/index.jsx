import React from "react";
import {
  MDBCard,
  MDBView,
  MDBCardHeader,
  MDBMedia,
  MDBCardBody,
  MDBCardTitle,
} from "mdbreact";
import OrgCharts from "./orgchart";

export default function EnrollmentForm() {
  return (
    <MDBCard className="mt-4 ml-5 mr-5">
      <MDBCardTitle>
        <MDBMedia className="d-flex justify-content-center">
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
      </MDBCardTitle>

      <MDBCardHeader>
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-column " style={{ height: "116px" }}>
              <ul className="stepper stepper-horizontal">
                <li className="completed" style={{ pointerEvents: "none" }}>
                  <a href="#!">
                    <span className="circle">1</span>
                    <span className="label">Learners</span>
                  </a>
                </li>

                <li className="active" style={{ pointerEvents: "none" }}>
                  <a href="#!">
                    <span class="circle">2</span>
                    <span class="label">Basic</span>
                  </a>
                </li>

                <li className="" style={{ pointerEvents: "none" }}>
                  <a href="#!">
                    <span className="circle">4</span>
                    <span className="label">Address</span>
                  </a>
                </li>

                <li className="" style={{ pointerEvents: "none" }}>
                  <a href="#!">
                    <span className="circle">4</span>
                    <span className="label">Guardian's Information</span>
                  </a>
                </li>

                <li className="" style={{ pointerEvents: "none" }}>
                  <a href="#!">
                    <span className="circle">5</span>
                    <span className="label">Returnee/Tranfer/Move In</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </MDBCardHeader>

      <MDBCardBody>
        <MDBView className="ml-5 mr-5">
          <OrgCharts />
        </MDBView>
      </MDBCardBody>
    </MDBCard>
  );
}
