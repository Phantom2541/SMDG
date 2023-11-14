import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBDatePicker,
  MDBInput,
} from "mdbreact";

export default function Basic() {
  return (
    <MDBCard>
      <h3>Basic Info</h3>
      <MDBCardBody>
        <form>
          <div className="row">
            <div class="col-6">
              <MDBInput label="PSA Birth Certificate No. (if available upon registration)" />
            </div>
            <div className="col-6">
              <MDBInput label="Reference No." />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <MDBInput label="Last Name" />
            </div>
            <div className="col-2">
              <label className="mb-0">Birthdate</label>
              <MDBDatePicker className="mt-1" />
            </div>
            <div className="col-2">
              <MDBInput label="Age" />
            </div>
            <div className="col-3">
              <MDBInput label="Mother Tongue" />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <MDBInput label="First Name" />
            </div>
            <div className="col-2">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Male"
                />
                <label class="form-check-label" for="Male">
                  Male
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="Female"
                />
                <label class="form-check-label" for="Female">
                  Female
                </label>
              </div>
            </div>
            <div className="col-5">
              <MDBInput label="Place of Birth (Municipality/City)" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <MDBInput label="Middle Name" />
            </div>
            <div className="col-3">
              <MDBInput label="Extension Name e.g. Jr., III (if applicable)" />
            </div>
            <div className="col-6">
              <label>
                Belonging to any Indigenous Peoples (IP) Community/Indigenous
                Cultural Community?
              </label>
              <MDBInput label="If Yes, please specify" />
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <label>Is your family a beneficiary of 4Ps? </label>
              <MDBInput label="If Yes, write the 4Ps Household ID Number" />
            </div>
            <div className="col-7">
              <label>Is the child a Learner with Disability?</label>
              <MDBInput label="If Yes, specify the type of disability" />
            </div>
          </div>
          <MDBBtn color="primary" type="submit">
            Submit
          </MDBBtn>
        </form>
      </MDBCardBody>
    </MDBCard>
  );
}
