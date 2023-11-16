import React from "react";
import { MDBBtn, MDBInput } from "mdbreact";
import AddressSelect from "../../components/addressSelect";

export default function Address() {
  return (
    <form>
      <div>
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
      <MDBBtn style={{ float: "right" }} color="primary" type="submit">
        Submit
      </MDBBtn>
    </form>
  );
}
