import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBBtnGroup,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBTable,
  MDBView,
} from "mdbreact";
import Modal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { BROWSE, DESTROY } from "../../../../services/redux/slices/violations";
import { fullName } from "../../../../services/utilities";
import Swal from "sweetalert2";

export default function Violations() {
  const [show, setShow] = useState(false),
    [violations, setViolations] = useState([]),
    [willCreate, setWillCreate] = useState(false),
    [orderIndex, setOrderIndex] = useState(0),
    [selected, setSelected] = useState({}),
    [didSearch, setDidSearch] = useState(false),
    { token, auth } = useSelector(({ auth }) => auth),
    { collections, isSuccess, message } = useSelector(
      ({ violations }) => violations
    ),
    dispatch = useDispatch(),
    { addToast } = useToasts();

  useEffect(() => {
    if (message) {
      addToast(message, {
        appearance: isSuccess ? "success" : "error",
      });
    }
  }, [isSuccess, message, addToast]);

  useEffect(() => {
    if (token) {
      dispatch(BROWSE({ token }));
    }
  }, [dispatch, token]);

  useEffect(() => {
    setViolations(() => {
      if (!orderIndex) return collections;

      return [...collections].sort((a, b) => {
        if (orderIndex === 1) return a.title.localeCompare(b.title);

        return b.title.localeCompare(a.title);
      });
    });
  }, [orderIndex, collections]);

  const handleDelete = (_id) => {
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
        dispatch(
          DESTROY({
            data: { _id },
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
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const key = e.target.searchKey.value.toUpperCase();

    setViolations(
      collections.filter(({ title }) => title.toUpperCase().includes(key))
    );

    setDidSearch(true);
  };

  return (
    <>
      <MDBCard narrow className="pb-3">
        <MDBView
          cascade
          className="gradient-card-header blue-gradient py-2 mx-4 d-flex justify-content-between align-items-center"
        >
          <span className="ml-3">Violation List</span>

          <form
            id="requirements-inline-search"
            onSubmit={handleSearch}
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
                onClick={() => {
                  if (!didSearch) return;

                  setDidSearch(false);
                  document.getElementById("requirements-inline-search").reset();
                  setViolations(collections);
                }}
                type="submit"
                size="sm"
                color="info"
                className="d-inline ml-2 px-2"
              >
                <MDBIcon icon={didSearch ? "times" : "search"} />
              </MDBBtn>
              <MDBBtn
                type="button"
                size="sm"
                color="primary"
                className="d-inline  px-2"
                onClick={() => {
                  if (!willCreate) setWillCreate(true);
                  setShow(true);
                }}
                title="Create a Subject"
              >
                <MDBIcon icon="plus" />
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
                  onClick={() =>
                    setOrderIndex((prev) => {
                      if (prev > 1) return 0;

                      return prev + 1;
                    })
                  }
                >
                  Title&nbsp;
                  <MDBIcon
                    icon="sort"
                    title="Sort by Name"
                    className={`${!!orderIndex && "text-primary"}`}
                  />
                </th>
                <th className="th-lg">Description</th>
                <th className="th-lg">Created By</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {violations?.map((violation) => {
                const { _id, title, description, createdBy } = violation,
                  { _id: creatorId = "", fullName: fullname = {} } = createdBy;
                return (
                  <tr key={_id}>
                    <td>{title}</td>
                    <td>{description}</td>
                    <td>{fullName(fullname)}</td>

                    <td className="py-2 text-center">
                      {auth?._id === creatorId && (
                        <MDBBtnGroup>
                          <MDBBtn
                            className="m-0"
                            size="sm"
                            color="info"
                            rounded
                            title="Update"
                            onClick={() => {
                              setWillCreate(false);
                              setSelected(violation);
                              setShow(true);
                            }}
                          >
                            <MDBIcon icon="pen" />
                          </MDBBtn>
                          <MDBBtn
                            className="m-0"
                            size="sm"
                            rounded
                            color="danger"
                            title="Delete"
                            onClick={() => handleDelete(_id)}
                          >
                            <MDBIcon icon="trash-alt" />
                          </MDBBtn>
                        </MDBBtnGroup>
                      )}
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
          if (!willCreate) {
            setWillCreate(true);
            setSelected({});
          }
          setShow(false);
        }}
        selected={selected}
        willCreate={willCreate}
      />
    </>
  );
}
