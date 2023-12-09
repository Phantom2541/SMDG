import React from "react";
import { MDBCard, MDBCardBody, MDBCol, MDBIcon } from "mdbreact";

export default function Success() {
  return (
    <div style={{ height: "100vh" }} className="d-flex align-items-center">
      <MDBCol md="6" className="offset-md-3">
        <MDBCard>
          <MDBCardBody className="text-center text-success">
            <MDBIcon icon="check-circle" size="4x" />
            <h1 className="font-weight-bold">REGISTRATION SUCCESS</h1>
            <h5 className="text-dark">
              You have successfully submitted your form.
            </h5>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
}
