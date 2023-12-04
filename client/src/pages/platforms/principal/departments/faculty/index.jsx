import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRow,
  MDBTable,
  MDBView,
} from "mdbreact";
import React from "react";

export default function Faculty() {
  return (
    <>
      <div className="d-flex text-white">
        <MDBRow className="w-50 ml-3 my-2">
          <MDBCol>
            <h4 className="m-0 font-weight-bold">Kevin magtalas</h4>
            <h6>Head Teacher</h6>
          </MDBCol>
          <MDBCol>
            <h4 className="m-0 font-weight-bold">Carl magtalas</h4>
            <h6>Master Teacher</h6>
          </MDBCol>
        </MDBRow>
      </div>
      <MDBCard narrow>
        <MDBView
          cascade
          className="gradient-card-header blue-gradient py-2 mx-4 d-flex justify-content-between align-items-center"
        >
          <span className="ml-3">Teacher List</span>

          <form id="requirements-inline-search" className="form-inline ml-2">
            <div className="form-group md-form py-0 mt-0">
              <input
                className="form-control w-80 placeholder-white text-white"
                type="text"
                placeholder="Title Search..."
                name="searchKey"
                required
              />
              <MDBBtn size="sm" color="info" className="d-inline ml-2 px-2">
                <MDBIcon icon="search" />
              </MDBBtn>
            </div>
          </form>
        </MDBView>
        <MDBCardBody>
          <MDBTable responsive hover>
            <thead>
              <tr>
                <th className="th-lg cursor-pointer">
                  Fullname&nbsp;
                  <MDBIcon
                    icon="sort"
                    title="Sort by Name"
                    className="text-primary"
                  />
                </th>
                <th className="th-lg">Section</th>
                <th />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}
