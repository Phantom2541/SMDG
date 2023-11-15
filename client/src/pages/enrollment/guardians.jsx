import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import React from "react";

export default function Guardians() {
  return (
    <form>
      <div>
        <label>Father's Name</label>
        <div className="row">
          <div className="col-3">
            <MDBInput label="Last Name" />
          </div>
          <div className="col-3">
            <MDBInput label="First Name" />
          </div>
          <div className="col-3">
            <MDBInput label="Middle Name" />
          </div>
          <div className="col-3">
            <MDBInput label="Contact Number" />
          </div>
        </div>
      </div>

      <div>
        <label>Mother's Maiden Name</label>
        <div className="row">
          <div className="col-3">
            <MDBInput label="Last Name" />
          </div>
          <div className="col-3">
            <MDBInput label="First Name" />
          </div>
          <div className="col-3">
            <MDBInput label="Middle Name" />
          </div>
          <div className="col-3">
            <MDBInput label="Contact Number" />
          </div>
        </div>
      </div>

      <div>
        <label>Legal Guardian's Name</label>
        <div className="row">
          <div className="col-3">
            <MDBInput label="Last Name" />
          </div>
          <div className="col-3">
            <MDBInput label="First Name" />
          </div>
          <div className="col-3">
            <MDBInput label="Middle Name" />
          </div>
          <div className="col-3">
            <MDBInput label="Contact Number" />
          </div>
        </div>
      </div>
      <MDBBtn style={{ float: "right" }} color="primary" type="submit">
        Submit
      </MDBBtn>
    </form>
  );
}
