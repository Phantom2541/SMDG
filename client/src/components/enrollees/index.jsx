import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTable,
  MDBView,
} from "mdbreact";
import { formatGradeLvl, fullName, generateSY } from "../../services/utilities";
import { useDispatch, useSelector } from "react-redux";
import {
  BROWSE,
  RESET,
  UPDATE,
} from "../../services/redux/slices/admissions/enrollments";
import { Courses } from "../../services/fakeDb";
import View from "./view";
import { useToasts } from "react-toast-notifications";
import Swal from "sweetalert2";

export default function Enrollees({ status = "pending" }) {
  const [students, setStudents] = useState([]),
    [selected, setSelected] = useState({}),
    { token } = useSelector(({ auth }) => auth),
    { collections, isSuccess, message } = useSelector(
      ({ enrollments }) => enrollments
    ),
    dispatch = useDispatch(),
    { addToast } = useToasts();

  useEffect(() => {
    if (isSuccess) {
      addToast(message, {
        appearance: isSuccess ? "success" : "error",
      });
    }
  }, [addToast, isSuccess, message]);

  useEffect(() => {
    if (token && status) {
      dispatch(
        BROWSE({
          token,
          key: {
            status,
            isPublished: true,
            batch: JSON.stringify(generateSY()),
          },
        })
      );
    }

    return () => {
      dispatch(RESET());
    };
  }, [dispatch, token, status]);

  useEffect(() => {
    setStudents(collections);
  }, [collections]);

  const handleDirectApproval = (_id, status, text) =>
    Swal.fire({
      focusDeny: true,
      icon: "question",
      title: "Are you sure?",
      text,
      footer: "This action is irreversible.",
      confirmButtonText: `<span class="text-dark">Cancel</span>`,
      confirmButtonColor: "#fff",

      showDenyButton: true,
      denyButtonText: `Proceed`,
      denyButtonColor: "#3B71CA",
    }).then((res) => {
      if (res.isDenied) {
        dispatch(
          UPDATE({
            token,
            data: {
              enrollment: { _id, status },
              isViewing: true,
            },
          })
        );
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

  if (selected?._id)
    return <View enrollment={selected} setSelected={setSelected} />;

  return (
    <MDBCard narrow>
      <MDBView
        cascade
        className="gradient-card-header blue-gradient py-2 mx-4 d-flex justify-content-between align-items-center"
      >
        <span className="ml-3">Employee List</span>

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
              <th>LRN</th>
              <th className="th-lg">Fullname</th>
              <th className="th-lg">Grade Level</th>
              <th className="th-lg">Course</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {!students?.length && (
              <tr>
                <td className="text-center" colSpan="5">
                  No recent records.
                </td>
              </tr>
            )}
            {students?.map((student) => {
              const { user, department, gradeLvl, course, _id } = student;

              const handleActionBtn = () => {
                if (status === "validated")
                  return (
                    <MDBBtn
                      title="Tag as Paid"
                      color="primary"
                      size="sm"
                      rounded
                      onClick={() =>
                        handleDirectApproval(
                          _id,
                          "paid",
                          "You are about to mark this enrollee as paid."
                        )
                      }
                    >
                      <MDBIcon icon="receipt" />
                    </MDBBtn>
                  );

                return (
                  <MDBBtn
                    title="View Informations"
                    color="info"
                    size="sm"
                    rounded
                    onClick={() => setSelected(student)}
                  >
                    <MDBIcon icon="eye" />
                  </MDBBtn>
                );
              };

              return (
                <tr key={_id}>
                  <td>{user?.lrn}</td>
                  <td>{fullName(user?.fullName)}</td>
                  <td>{formatGradeLvl(department, gradeLvl, true)}</td>
                  <td>{Courses.displayName(course?.pk)}</td>
                  <td className="py-2 text-center">{handleActionBtn()}</td>
                </tr>
              );
            })}
          </tbody>
        </MDBTable>
      </MDBCardBody>
    </MDBCard>
  );
}
