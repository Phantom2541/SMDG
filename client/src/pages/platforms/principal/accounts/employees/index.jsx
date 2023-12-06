import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTable,
  MDBView,
} from "mdbreact";
import { useDispatch, useSelector } from "react-redux";
import { EMPLOYEES } from "../../../../../services/redux/slices/admissions/employments";
import { fullName } from "../../../../../services/utilities";

export default function Employees() {
  const [employees, setEmployees] = useState([]),
    { collections } = useSelector(({ employments }) => employments),
    { token } = useSelector(({ auth }) => auth),
    dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(EMPLOYEES({ token }));
    }
  }, [dispatch, token]);

  useEffect(() => {
    setEmployees(collections);
  }, [collections]);

  return (
    <MDBCard narrow>
      <MDBView
        cascade
        className="gradient-card-header blue-gradient py-2 mx-4 d-flex justify-content-between align-items-center"
      >
        <span className="ml-3">Teacher List</span>

        <form
          //   onSubmit={handleSearch}
          id="faculty-inline-search"
          className="form-inline ml-2"
        >
          <div className="form-group md-form py-0 mt-0">
            <input
              className="form-control w-80 placeholder-white text-white"
              type="text"
              placeholder="Fullname Search..."
              name="searchKey"
              required
            />
            <MDBBtn
              //   onClick={() => {
              //     if (!searchKey) return;
              //     setSearchKey("");
              //     document.getElementById("faculty-inline-search").reset();
              //   }}
              type="submit"
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
              <th className="th-lg cursor-pointer">
                Fullname&nbsp;
                <MDBIcon
                  icon="sort"
                  title="Sort by Name"
                  className="text-primary"
                />
              </th>
              <th className="th-lg">Position</th>
              <th className="th-lg">Access</th>
            </tr>
          </thead>
          <tbody>
            {!employees?.length && (
              <tr>
                <td className="text-center" colSpan="3">
                  No recent records.
                </td>
              </tr>
            )}
            {employees?.map((employee) => {
              const { user, position, access, _id } = employee;
              return (
                <tr key={_id}>
                  <td>{fullName(user?.fullName)}</td>
                  <td>{position}</td>
                  <td>{access}</td>
                </tr>
              );
            })}
          </tbody>
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
}
