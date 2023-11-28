import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBDatePicker,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdbreact";
import { fullAddress, getAge } from "../../../../services/utilities";
import generateSY from "../../../../services/utilities/generateSY";
import { School } from "../../../../services/fakeDb";
import AddressSelect from "../../../../components/addressSelect";
import CustomSelect from "../../../../components/customSelect";
import UploadPDF from "./uploadPDF";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { SAVE } from "../../../../services/redux/slices/admissions/employments";

const _form = {
  position: "",
  mobile: "",
  fullName: {
    fname: "",
    lname: "",
    mname: "",
    suffix: "",
  },
  isMale: false,
  mothertongue: "",
  dob: new Date(),
  civilStatus: "single",
  pob: "",
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
  emergencyContact: {
    primary: {
      name: "",
      relationship: "",
      mobile: 0,
    },
    secondary: {
      name: "",
      relationship: "",
      mobile: 0,
    },
  },
};

export default function EmploymentForm() {
  const [form, setForm] = useState(_form),
    { auth, token } = useSelector(({ auth }) => auth),
    { response, isSuccess } = useSelector(({ employments }) => employments),
    dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess && response) {
      console.log(response);
    }
  }, [response, isSuccess]);

  const {
      position,
      mobile,
      fullName,
      isMale,
      mothertongue,
      dob,
      civilStatus,
      pob,
      address,
      emergencyContact,
    } = form,
    { primary, secondary } = emergencyContact,
    { fname, lname, mname, suffix } = fullName,
    { logo, id, name, address: sAddress } = School;

  const handleSave = (isPublished) => {
    // const { position, emergencyContact, fullName, address } = form;

    const employment = {
        position,
        emergencyContact,
        isPublished,
      },
      user = {
        fullName,
        address,
        civilStatus,
        mobile,
        isMale,
        mothertongue,
        dob,
        pob,
      };

    if (user.address.isSame) user.address.current = user.address.permanent;

    dispatch(
      SAVE({
        data: {
          userId: auth._id,
          user,
          employment,
        },
        token,
      })
    );
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
    setForm(_form);
  };

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

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

        <MDBCardBody>
          <MDBTypography
            className="mb-0"
            noteColor="info"
            note
            noteTitle="DRAFT: "
          >
            text
          </MDBTypography>
        </MDBCardBody>

        <MDBCardBody className="mx-5">
          <h5 className="mb-0">Personal Information</h5>
          <form onSubmit={handleSubmit}>
            <MDBRow>
              <MDBCol md="6">
                <MDBInput
                  label="Applying Position"
                  type="text"
                  value={position}
                  onChange={(e) => handleChange("position", e.target.value)}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  label="Mobile No. +63"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) =>
                    handleChange("mobile", e.target.value.replace(/\D/g, ""))
                  }
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="6" className="border-right border-top border-left">
                <MDBInput
                  label="Last Name"
                  value={lname}
                  onChange={(e) =>
                    handleChange("fullName", {
                      ...fullName,
                      lname: e.target.value.toUpperCase(),
                    })
                  }
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBInput
                  label="Mother Tongue (ex: Tagalog, English)"
                  value={mothertongue}
                  onChange={(e) => handleChange("mothertongue", e.target.value)}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md="6" className="border-left border-right">
                <MDBInput
                  label="First Name"
                  value={fname}
                  onChange={(e) =>
                    handleChange("fullName", {
                      ...fullName,
                      fname: e.target.value.toUpperCase(),
                    })
                  }
                />
              </MDBCol>
              <MDBCol md="3">
                <label className="mb-0">Birthdate</label>
                <MDBDatePicker
                  className="mt-1"
                  autoOk
                  value={dob}
                  getValue={(e) => handleChange("dob", e)}
                />
              </MDBCol>
              <MDBCol md="1">
                <MDBInput
                  label="Age"
                  readOnly
                  value={getAge(dob.toDateString())}
                />
              </MDBCol>
              <MDBCol md="2">
                <CustomSelect
                  label="Civil Status"
                  preValue={civilStatus}
                  choices={[
                    { text: "Single", value: "single" },
                    { text: "Married", value: "married" },
                    { text: "Live in", value: "live-in" },
                    { text: "Divorced", value: "divorced" },
                  ]}
                  texts="text"
                  values="value"
                  onChange={(e) => handleChange("civilStatus", e)}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow className="mb-3">
              <MDBCol md="4" className="border-left border-bottom">
                <MDBInput
                  label="Middle Name"
                  value={mname}
                  onChange={(e) =>
                    handleChange("fullName", {
                      ...fullName,
                      mname: e.target.value.toUpperCase(),
                    })
                  }
                />
              </MDBCol>
              <MDBCol md="2" className="border-right border-bottom">
                <MDBInput
                  label="Extension Name"
                  value={suffix}
                  onChange={(e) =>
                    handleChange("fullName", {
                      ...fullName,
                      suffix: e.target.value.toUpperCase(),
                    })
                  }
                />
              </MDBCol>
              <MDBCol md="2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={isMale}
                    onChange={() => handleChange("isMale", true)}
                    id="Male"
                  />
                  <label className="form-check-label" htmlFor="Male">
                    Male
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={!isMale}
                    onChange={() => handleChange("isMale", false)}
                    id="Female"
                  />
                  <label className="form-check-label" htmlFor="Female">
                    Female
                  </label>
                </div>
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  label="Place of Birth (Municipality/City)"
                  value={pob}
                  onChange={(e) => handleChange("pob", e.target.value)}
                />
              </MDBCol>
            </MDBRow>

            <AddressSelect
              label="Permanent Address"
              address={address.permanent}
              handleChange={(_, permanent) =>
                handleChange("address", { ...address, permanent })
              }
              uniqueId="current"
            />
            <div className="d-flex mt-3">
              <div className="">
                <label>
                  Is your permanent address is same with your current address?
                </label>
              </div>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={address.isSame}
                    onChange={() =>
                      handleChange("address", { ...address, isSame: true })
                    }
                    id="yes"
                  />
                  <label className="form-check-label" htmlFor="yes">
                    Yes
                  </label>
                </div>
              </div>
              <div className="">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={!address.isSame}
                    onChange={() =>
                      handleChange("address", { ...address, isSame: false })
                    }
                    id="no"
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>

            {!address.isSame && (
              <div className="mt-3">
                <AddressSelect
                  label="Current Address"
                  address={address.current}
                  handleChange={(_, current) =>
                    handleChange("address", { ...address, current })
                  }
                  uniqueId="current"
                />
              </div>
            )}
            <hr color="primray" />
            <h6 className="mb-0">In case of Emergency, Notify:</h6>
            <div className="border px-4">
              <MDBRow>
                <MDBCol md="4">
                  <MDBInput
                    label="Primary Name of Contact"
                    value={primary.name}
                    onChange={(e) =>
                      handleChange("emergencyContact", {
                        ...emergencyContact,
                        primary: { ...primary, name: e.target.value },
                      })
                    }
                  />
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput
                    label="Relationship"
                    value={primary.relationship}
                    onChange={(e) =>
                      handleChange("emergencyContact", {
                        ...emergencyContact,
                        primary: { ...primary, relationship: e.target.value },
                      })
                    }
                  />
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput
                    label="Mobile No. (+63)"
                    value={primary.mobile}
                    onChange={(e) =>
                      handleChange("emergencyContact", {
                        ...emergencyContact,
                        primary: { ...primary, mobile: Number(e.target.value) },
                      })
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="4">
                  <MDBInput
                    label="Secondary Name of Contact"
                    value={secondary.name}
                    onChange={(e) =>
                      handleChange("emergencyContact", {
                        ...emergencyContact,
                        secondary: { ...secondary, name: e.target.value },
                      })
                    }
                  />
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput
                    label="Relationship"
                    value={secondary.relationship}
                    onChange={(e) =>
                      handleChange("emergencyContact", {
                        ...emergencyContact,
                        secondary: {
                          ...secondary,
                          relationship: e.target.value,
                        },
                      })
                    }
                  />
                </MDBCol>
                <MDBCol md="4">
                  <MDBInput
                    label="Mobile No. (+63)"
                    value={secondary.mobile}
                    onChange={(e) =>
                      handleChange("emergencyContact", {
                        ...emergencyContact,
                        secondary: {
                          ...secondary,
                          mobile: Number(e.target.value),
                        },
                      })
                    }
                  />
                </MDBCol>
              </MDBRow>
            </div>
            <hr color="primray" />
            <MDBContainer>
              <p>Upload PDFS (Required*)</p>
              <UploadPDF />
            </MDBContainer>

            <MDBBtn style={{ float: "right" }} color="primary" type="submit">
              Submit
            </MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}
