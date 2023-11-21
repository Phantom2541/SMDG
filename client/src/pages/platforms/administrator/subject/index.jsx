import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Card from "./card";
import { MDBBtn, MDBIcon } from "mdbreact";

const subjects = new Array(10).fill();

export default function Subjects() {
  return (
    <div className="md-accordion">
      <h4 className="text-left font-weight-bold dark-grey-text mb-0 d-flex justify-content-between align-items-center">
        <>Subjects</>
        <form className="form-inline ml-2">
          <div className="form-group md-form py-0 mt-0">
            <input
              className="form-control w-80"
              type="text"
              placeholder="Search"
              required
            />
            <MDBBtn
              type="submit"
              size="sm"
              color="info"
              className="d-inline ml-2 px-2"
            >
              <MDBIcon icon="search" />
            </MDBBtn>
            <MDBBtn
              type="button"
              size="sm"
              color="primary"
              className="d-inline  px-2"
            >
              <MDBIcon icon="plus" />
            </MDBBtn>
          </div>
        </form>
      </h4>
      <ResponsiveMasonry columnsCountBreakPoints={{ 800: 1, 900: 2, 1200: 3 }}>
        <Masonry>
          {subjects.map((subject, index) => (
            <Card key={`subject-${index}`} index={index} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
