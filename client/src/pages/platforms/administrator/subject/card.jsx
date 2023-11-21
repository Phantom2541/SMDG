import React, { useState, useEffect } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBCollapse,
  MDBCollapseHeader,
  MDBIcon,
} from "mdbreact";

export default function Card({ index }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(Math.random() < 0.5);
  }, []);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <MDBCard className="mb-3 mx-3 shadow-box-example hoverable">
      <MDBCollapseHeader
        className={`${isOpen && "blue text-white"}`}
        onClick={toggle}
      >
        <div className="d-flex justify-content-between align-items-center">
          {/* <MDBBadge color="indigo" className="mb-0 z-depth-0">
            MAJOR
          </MDBBadge> */}
          <div>
            <MDBBadge color="blue-grey" className="mb-0 z-depth-0 mr-1">
              MINOR
            </MDBBadge>
            <MDBBadge color="blue-grey" className="mb-0 z-depth-0">
              5 UNITS
            </MDBBadge>
          </div>

          <MDBIcon
            icon="angle-down"
            rotate={isOpen ? "0" : "90"}
            style={{
              transition: "all 0.5s",
            }}
          />
        </div>
        Collapsible Group Item #1 nc
      </MDBCollapseHeader>
      <MDBCollapse id={String(index)} isOpen={isOpen}>
        <MDBCardBody>
          Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat
          skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
          Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
          single-origin coffee nulla assumenda shoreditch et. Nihil anim
          keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
          sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
          you probably haven&apos;t heard of them accusamus labore sustainable
          VHS.
          <MDBBtnGroup className="w-100">
            <MDBBtn title="Edit" className="p-1" color="info">
              <MDBIcon icon="pen" />
            </MDBBtn>
            <MDBBtn title="Delete" className="p-1" color="danger">
              <MDBIcon icon="trash" />
            </MDBBtn>
          </MDBBtnGroup>
        </MDBCardBody>
      </MDBCollapse>
    </MDBCard>
  );
}
