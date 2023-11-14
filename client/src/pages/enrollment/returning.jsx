import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import React from "react";

export default function Returning() {
  return (
    <MDBCard>
      <MDBCardBody>
        <form>
          <div className="row">
            <div className="col-6">
              <MDBInput label="Last Grade Level Completed" />
            </div>
            <div className="col-6">
              <MDBInput label="Last School Year Completed" />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <MDBInput label="Last School Attended" />
            </div>
            <div className="col-2">
              <MDBInput label="School ID" />
            </div>
          </div>
          <MDBBtn type="submit" color="primary">
            Submit
          </MDBBtn>
        </form>
      </MDBCardBody>
    </MDBCard>
  );
}
