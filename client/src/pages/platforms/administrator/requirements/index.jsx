import React, { useState, useEffect } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTable,
  MDBView,
} from "mdbreact";
import { useSelector } from "react-redux";
import { Departments } from "../../../../services/fakeDb";
import Modal from "./modal";
import Swal from "sweetalert2";

export default function Requirements() {
  const [show, setShow] = useState(false),
    [requirements, setRequirements] = useState([]),
    [orderIndex, setOrderIndex] = useState(0),
    { collections } = useSelector(({ requirements }) => requirements);

  useEffect(() => {
    setRequirements(() => {
      if (!orderIndex) return collections;

      const rotateArray = (arr, steps) => {
        const normalizedSteps = steps % arr.length;

        if (normalizedSteps === 0) return arr;

        return [
          ...arr.slice(normalizedSteps),
          ...arr.slice(0, normalizedSteps),
        ];
      };

      const rotatedOrder = rotateArray(
        ["grade", "junior", "senior", "college"],
        orderIndex - 1
      );

      const customSort = (a, b) => {
        const prefA = rotatedOrder.indexOf(a.department),
          prefB = rotatedOrder.indexOf(b.department);

        if (prefA === prefB) return a.title.localeCompare(b.title);

        return prefA - prefB;
      };

      return [...collections].sort(customSort);
    });
  }, [orderIndex, collections]);

  const handleDelete = () =>
    Swal.fire({
      focusDeny: true,
      icon: "question",
      title: "Are you sure?",
      text: "This action is irreversible.",
      confirmButtonText: `<span class="text-dark">Cancel</span>`,
      confirmButtonColor: "#fff",

      showDenyButton: true,
      denyButtonText: `Proceed`,
      denyButtonColor: "#3B71CA",
    }).then((res) => {
      if (res.isDenied) {
        console.log("deleted");
      } else {
        Swal.fire({
          title: "Changes are not Saved!",
          icon: "warning",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
        });
      }
    });

  return (
    <>
      <MDBCard narrow className="pb-3">
        <MDBView
          cascade
          className="gradient-card-header blue-gradient py-2 mx-4 d-flex justify-content-between align-items-center"
        >
          <span className="ml-3">Requirement List</span>

          <div className="d-flex form-group md-form py-0 my-0">
            <input
              className="form-control w-80 text-white placeholder-white"
              type="text"
              placeholder="Title Search..."
              name="searchKey"
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
              className="d-inline  px-2"
              size="sm"
              color="primary"
              title="Add"
              onClick={() => {
                setShow(true);
              }}
            >
              <MDBIcon icon="plus" />
            </MDBBtn>
          </div>
        </MDBView>
        <MDBCardBody>
          <MDBTable responsive hover>
            <thead>
              <tr>
                <th className="th-lg">Title</th>
                <th
                  className="th-lg cursor-pointer"
                  onClick={() =>
                    setOrderIndex((prev) => {
                      if (prev > 3) return 0;

                      return prev + 1;
                    })
                  }
                >
                  Department&nbsp;
                  <MDBIcon
                    icon="sort"
                    title="Sort by Departments"
                    className={`${!!orderIndex && "text-primary"}`}
                  />
                </th>
                <th className="th-lg" />
              </tr>
            </thead>
            <tbody>
              {requirements?.map((requirement, index) => {
                const { title, department } = requirement;
                return (
                  <tr key={index}>
                    <td>{title}</td>
                    <td>{Departments.getName(department)}</td>

                    <td className="py-2 text-center">
                      <MDBBtnGroup>
                        <MDBBtn
                          className="m-0"
                          size="sm"
                          color="info"
                          rounded
                          title="Update"
                          //   onClick={() => {
                          //     setSelected(student);
                          //     setShow(true);
                          //   }}
                        >
                          <MDBIcon icon="pen" />
                        </MDBBtn>
                        <MDBBtn
                          className="m-0"
                          size="sm"
                          rounded
                          color="danger"
                          title="Delete"
                          onClick={handleDelete}
                        >
                          <MDBIcon icon="trash-alt" />
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
      <Modal show={show} toggle={() => setShow(false)} />
    </>
  );
}
