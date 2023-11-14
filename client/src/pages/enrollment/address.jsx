import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import React from "react";
import AddressSelect from "../../components/addressSelect";

export default function Address() {
  return (
    <MDBCard>
      <MDBCardBody>
        <form>
          <div>
            <h5>Current address</h5>
            <AddressSelect
              address={{
                region: "REGION III (CENTRAL LUZON)",
                province: "NUEVA ECIJA",
                city: "CABANATUAN CITY",
                barangay: "",
                zip: "",
                street: "",
              }}
            />
            <div className="row">
              <div className="col-5">
                <MDBInput label="Sitio/Street Name" />
              </div>
              <div className="col-2">
                <MDBInput label="Zip Code" />
              </div>
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
