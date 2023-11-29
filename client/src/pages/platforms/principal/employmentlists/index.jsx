import React, { useState } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTable,
  MDBView,
} from "mdbreact";
import Swal from "sweetalert2";
import Modal from "./modal";

const _form = [
  {
    fullName: "John Doe",
    position: "Principal",
    createdAt: "January 15, 2023",
  },
  {
    fullName: "Alice Johnson",
    position: "Mathematics Teacher",
    createdAt: "March 8, 2023",
  },
  {
    fullName: "Emily Smith",
    position: "Librarian",
    createdAt: "May 20, 2023",
  },
  {
    fullName: "Michael Brown",
    position: "School Counselor",
    createdAt: "February 10, 2023",
  },
  {
    fullName: "Sophia Garcia",
    position: "Science Teacher",
    createdAt: "June 5, 2023",
  },
  {
    fullName: "Daniel Martinez",
    position: "Physical Education Instructor",
    createdAt: "April 3, 2023",
  },
  {
    fullName: "Olivia Wilson",
    position: "Art Teacher",
    createdAt: "July 17, 2023",
  },
  {
    fullName: "William Taylor",
    position: "School Nurse",
    createdAt: "August 28, 2023",
  },
  {
    fullName: "Isabella Lopez",
    position: "Special Education Teacher",
    createdAt: "September 12, 2023",
  },
  {
    fullName: "James Lee",
    position: "History Teacher",
    createdAt: "November 7, 2023",
  },
  {
    fullName: "Sophie Anderson",
    position: "English Teacher",
    createdAt: "December 22, 2023",
  },
  {
    fullName: "Alexander Clark",
    position: "Technology Coordinator",
    createdAt: "October 30, 2023",
  },
  {
    fullName: "Ella Baker",
    position: "School Secretary",
    createdAt: "August 9, 2023",
  },
  {
    fullName: "Noah White",
    position: "Guidance Counselor",
    createdAt: "June 14, 2023",
  },
  {
    fullName: "Ava Adams",
    position: "Assistant Principal",
    createdAt: "March 1, 2023",
  },
];

const handleDelete = async (index) => {
  const { value: reason } = await Swal.fire({
    icon: "question",
    title: "Reject this person?",
    input: "textarea",
    inputLabel: "Please specify your reason.",
    inputPlaceholder: "Write a reason for reject...",
    showCancelButton: true,

    color: "black",
    confirmButtonColor: "#d33",
    confirmButtonText: "Yes, Reject!",
    inputValidator: (value) => {
      if (!value) {
        return "You need to write something!";
      }
    },
  });
  if (reason) {
    console.log(reason);
  }
};

export default function EmploymentLists() {
  const [employments, setEmployments] = useState(_form),
    [selected, setSelected] = useState({}),
    [show, setShow] = useState(false);

  return (
    <>
      <MDBCard narrow className="pb-3">
        <MDBView
          cascade
          className="gradient-card-header blue-gradient py-2 mx-4 d-flex justify-content-between align-items-center"
        >
          <span className="ml-3">Employment List</span>

          <form
            id="requirements-inline-search"
            // onSubmit={handleSearch}
            className="form-inline ml-2"
          >
            <div className="form-group md-form py-0 mt-0">
              <input
                className="form-control w-80 placeholder-white text-white"
                type="text"
                placeholder="Title Search..."
                name="searchKey"
                required
              />
              <MDBBtn
                // onClick={() => {
                //   if (!didSearch) return;

                //   setDidSearch(false);
                //   document.getElementById("requirements-inline-search").reset();
                //   setRooms(collections);
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
                  FullName&nbsp;
                  <MDBIcon
                    icon="sort"
                    title="Sort by Name"
                    className="text-primary"
                  />
                </th>
                <th className="th-lg">Position</th>
                <th className="th-lg">Created At</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {employments?.map((employment, index) => {
                const { fullName, position, createdAt } = employment;
                return (
                  <tr key={index}>
                    <td>{fullName}</td>
                    <td>{position}</td>
                    <td>{createdAt}</td>

                    <td className="py-2 text-center">
                      <MDBBtnGroup>
                        <MDBBtn
                          className="m-0"
                          size="sm"
                          color="info"
                          rounded
                          title="Approved"
                          onClick={() => {
                            setSelected(employment);
                            setShow(true);
                          }}
                        >
                          <MDBIcon icon="check" />
                        </MDBBtn>
                        <MDBBtn
                          className="m-0"
                          size="sm"
                          rounded
                          color="danger"
                          title="Reject"
                          onClick={() => handleDelete(index)}
                        >
                          <MDBIcon icon="times" />
                        </MDBBtn>
                      </MDBBtnGroup>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </MDBTable>
        </MDBCardBody>
      </MDBCard>
      <Modal
        show={show}
        toggle={() => {
          setSelected({});
          setShow(false);
        }}
        selected={selected}
      />
    </>
  );
}
