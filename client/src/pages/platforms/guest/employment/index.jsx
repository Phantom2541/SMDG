import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBContainer,
  MDBTypography,
} from "mdbreact";
import { fullAddress } from "../../../../services/utilities";
import generateSY from "../../../../services/utilities/generateSY";
import { School } from "../../../../services/fakeDb";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import {
  RESET,
  SAVE,
  UPDATE,
} from "../../../../services/redux/slices/admissions/employments";
import Form from "./form";
import { INJECTCREDENTIALS } from "../../../../services/redux/slices/auth";
import { useToasts } from "react-toast-notifications";

const { logo, id, name, address: sAddress } = School;

export default function EmploymentForm() {
  const [employment, setEmployment] = useState({
      position: "",
      emergencyContact: {
        primary: {
          name: "",
          relationship: "",
          mobile: "",
        },
        secondary: {
          name: "",
          relationship: "",
          mobile: "",
        },
      },
    }),
    [user, setUser] = useState({
      fullName: {
        fname: "",
        lname: "",
        mname: "",
        suffix: "",
      },
      address: {
        current: {
          region: "REGION III (CENTRAL LUZON)",
          province: "NUEVA ECIJA",
          city: "CABANATUAN CITY",
          barangay: "",
          zip: "",
          street: "",
        },
        permanent: {
          region: "REGION III (CENTRAL LUZON)",
          province: "NUEVA ECIJA",
          city: "CABANATUAN CITY",
          barangay: "",
          zip: "",
          street: "",
        },
        isSame: true,
      },
      civilStatus: "single",
      mobile: "",
      isMale: false,
      mothertongue: "",
      dob: new Date(),
      pob: "",
    }),
    { auth, token, credentials } = useSelector(({ auth }) => auth),
    { response, isSuccess, message } = useSelector(
      ({ employments }) => employments
    ),
    [delayRender, setDelayRender] = useState(false),
    dispatch = useDispatch(),
    { addToast } = useToasts();

  useEffect(() => {
    let isMounted = true;
    if (!delayRender) {
      setTimeout(() => {
        if (isMounted) {
          setDelayRender(true);
        }
      }, 1);
    }

    return () => {
      isMounted = false;
    };
  }, [delayRender]);

  useEffect(() => {
    if (isSuccess && response) {
      const { employment, user } = response;
      localStorage.setItem("credentials", JSON.stringify(employment));
      localStorage.setItem("auth", JSON.stringify(user));
      dispatch(INJECTCREDENTIALS(response));
      setDelayRender(true);
    }
  }, [response, isSuccess, dispatch]);

  useEffect(() => {
    if (message) {
      addToast(message, {
        appearance: isSuccess ? "success" : "error",
      });
    }

    return () => dispatch(RESET());
  }, [message, addToast, dispatch, isSuccess]);

  useEffect(() => {
    if (credentials?._id) {
      setEmployment(credentials);
      setUser({ ...auth, dob: new Date(auth.dob) });
    }
  }, [auth, credentials]);

  const handleSave = (isPublished) => {
    const _user = { ...user };
    if (user.address.isSame) _user.address.current = user.address.permanent;

    if (credentials?._id) {
      dispatch(
        UPDATE({
          data: {
            user: _user,
            employment: { ...employment, isPublished },
          },
          token,
        })
      );
    } else {
      dispatch(
        SAVE({
          data: {
            user: _user,
            employment: { ...employment, user: auth._id, isPublished },
          },
          token,
        })
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      focusDeny: true,
      icon: "question",
      title: "Are you sure you want to submit?",
      text: "Once submitted you cannot edit your information.",
      confirmButtonText: `<span class="text-dark">Cancel</span>`,
      confirmButtonColor: "#fff",

      showDenyButton: true,
      denyButtonText: `Save`,
      denyButtonColor: "#54B4D3",

      showCancelButton: true,
      cancelButtonText: "Submit",
      cancelButtonColor: "#3B71CA",
    }).then((result) => {
      if (result.isDenied) {
        handleSave(false);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // handleValidation();
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

  return (
    <MDBContainer fluid>
      <MDBCard>
        <MDBCardTitle className="mb-0 pt-4 pl-5 pr-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <img
                style={{ height: "100px" }}
                className="rounded-circle"
                src={logo}
                alt={id}
              />

              <div className="ml-2">
                <p
                  className="mb-0"
                  style={{ fontWeight: "bolder", fontSize: "23px" }}
                >
                  {name}
                </p>
                <p style={{ fontSize: "15px" }}>
                  {fullAddress(sAddress, false)}
                </p>

                <p className="font-weight-bold" style={{ fontSize: "20px" }}>
                  EMPLOYMENT FORM
                </p>
              </div>
            </div>
            <div className="text-right">
              <p style={{ fontSize: "20px" }} className="mb-0">
                SY {generateSY(true)}
              </p>
            </div>
          </div>
        </MDBCardTitle>

        {credentials?.status && (
          <MDBCardBody>
            <MDBTypography
              className="mb-0"
              noteColor="info"
              note
              noteTitle={
                credentials.status === "pending" ? "DRAFT: " : "REJECTED: "
              }
            >
              {credentials.status === "pending"
                ? "Form is saved but not yet submitted."
                : credentials.remarks}
            </MDBTypography>
          </MDBCardBody>
        )}

        {delayRender && (
          <Form
            employment={employment}
            setEmployment={setEmployment}
            user={user}
            setUser={setUser}
            handleSubmit={handleSubmit}
          />
        )}
      </MDBCard>
    </MDBContainer>
  );
}
