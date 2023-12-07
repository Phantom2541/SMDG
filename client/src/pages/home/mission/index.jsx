import React from "react";
import "./style/mission.css";
import { MDBCard, MDBCardBody, MDBCol, MDBIcon, MDBRow } from "mdbreact";

export default function Mission() {
  return (
    <section id="mission">
      <div className="mission-wrapper">
        <MDBRow>
          <MDBCol md="4">
            <MDBCard style={{ borderRadius: "60px" }}>
              <MDBCardBody>
                <div className="text-center">
                  <MDBIcon
                    className="p-4"
                    icon="bullseye"
                    style={{ fontSize: "80px" }}
                  ></MDBIcon>
                  <h1>MISSION</h1>
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus, exercitationem? Atque corrupti maxime
                    accusantium nihil, commodi labore numquam repudiandae
                    provident consequatur mollitia perferendis deserunt, tenetur
                    reprehenderit assumenda ut, dolorem sequi?
                  </h6>
                </div>
              </MDBCardBody>
            </MDBCard>
            <hr className="line" />
          </MDBCol>
        </MDBRow>
      </div>
    </section>
  );
}
