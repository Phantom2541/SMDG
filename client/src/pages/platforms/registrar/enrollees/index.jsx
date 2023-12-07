import {
  MDBBadge,
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
import CustomSelect from "../../../../components/customSelect";

export default function Registrar() {
  return (
    <MDBRow>
      <MDBCol md="9">
        <MDBCard narrow className="m-0 z-depth-0">
          <MDBView
            cascade
            className="gradient-card-header blue-gradient py-2 mx-4 d-flex justify-content-between align-items-center"
          >
            <span className="ml-3">Enrollment List</span>

            <form
              id="requirements-inline-search"
              // onSubmit={handleSearch}
              className="form-inline ml-2"
            >
              <div className="form-group md-form py-0 mt-0">
                <input
                  className="form-control w-80 placeholder-white text-white"
                  type="text"
                  placeholder="LRN Search..."
                  name="searchKey"
                  required
                />
                <MDBBtn
                  // onClick={() => {
                  //   if (!didSearch) return;

                  //   setDidSearch(false);
                  //   document.getElementById("requirements-inline-search").reset();
                  //   setSections(collections);
                  // }}
                  // type={didSearch ? "button" : "submit"}
                  size="sm"
                  color="info"
                  className="d-inline ml-2 px-2"
                >
                  <MDBIcon icon="search" />
                </MDBBtn>
              </div>
            </form>
          </MDBView>
          <MDBCardBody>
            <MDBTable responsive hover>
              <thead>
                <tr>
                  <th
                    className="th-lg cursor-pointer"
                    // onClick={() =>
                    //   setOrderIndex((prev) => {
                    //     if (prev > 1) return 0;

                    //     return prev + 1;
                    //   })
                    // }
                  >
                    Fullname&nbsp;
                    <MDBIcon
                      icon="sort"
                      title="Sort by Name"
                      className="text-primary"
                    />
                  </th>
                  <th className="th-lg">LRN</th>

                  <th className="th-lg">Grade Level</th>
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
      </MDBCol>
      <MDBCol md="3">
        <MDBCard className="z-depth-0">
          <MDBCardBody>
            <MDBCard className="d-flex">
              <div className="d-flex align-items-center">
                <MDBBadge>
                  <h4 className="pt-2 px-1">34</h4>
                </MDBBadge>
                <h4 className="pt-2 ml-2">Manggoes</h4>
              </div>
            </MDBCard>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
