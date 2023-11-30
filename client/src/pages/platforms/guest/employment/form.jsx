import React from "react";
import {
  MDBBtn,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBDatePicker,
  MDBInput,
  MDBRow,
} from "mdbreact";
import UploadPDF from "./uploadPDF";
import AddressSelect from "../../../../components/addressSelect";
import CustomSelect from "../../../../components/customSelect";
import { getAge } from "../../../../services/utilities";

export default function Form({
  user,
  setUser,
  employment,
  setEmployment,
  handleSubmit,
}) {
  const {
      mobile,
      fullName,
      motherTongue,
      dob,
      pob,
      civilStatus,
      isMale,
      address,
    } = user,
    { position, emergencyContact } = employment,
    { primary, secondary } = emergencyContact,
    { fname, lname, mname, suffix } = fullName;

  return (
    <MDBCardBody className="mx-5">
      <h5 className="mb-0">Personal Information</h5>
      <form onSubmit={handleSubmit}>
        <MDBRow>
          <MDBCol md="6">
            <MDBInput
              label="Applying Position"
              type="text"
              value={position}
              onChange={(e) =>
                setEmployment({
                  ...employment,
                  position: e.target.value,
                })
              }
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              label="Mobile No. +63"
              maxLength={10}
              value={mobile}
              onChange={(e) =>
                setUser({
                  ...user,
                  mobile: e.target.value.replace(/\D/g, ""),
                })
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
                setUser({
                  ...user,
                  fullName: {
                    ...fullName,
                    lname: e.target.value.toUpperCase(),
                  },
                })
              }
            />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput
              label="Mother Tongue (ex: Tagalog, English)"
              value={motherTongue}
              onChange={(e) =>
                setUser({
                  ...user,
                  motherTongue: e.target.value,
                })
              }
            />
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol md="6" className="border-left border-right">
            <MDBInput
              label="First Name"
              value={fname}
              onChange={(e) =>
                setUser({
                  ...user,
                  fullName: {
                    ...fullName,
                    fname: e.target.value.toUpperCase(),
                  },
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
              getValue={(dob) =>
                setUser({
                  ...user,
                  dob,
                })
              }
            />
          </MDBCol>
          <MDBCol md="1">
            <MDBInput label="Age" readOnly value={getAge(dob.toDateString())} />
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
              onChange={(civilStatus) =>
                setUser({
                  ...user,
                  civilStatus,
                })
              }
            />
          </MDBCol>
        </MDBRow>

        <MDBRow className="mb-3">
          <MDBCol md="4" className="border-left border-bottom">
            <MDBInput
              label="Middle Name"
              value={mname}
              onChange={(e) =>
                setUser({
                  ...user,
                  fullName: {
                    ...fullName,
                    mname: e.target.value.toUpperCase(),
                  },
                })
              }
            />
          </MDBCol>
          <MDBCol md="2" className="border-right border-bottom">
            <MDBInput
              label="Extension Name"
              value={suffix}
              onChange={(e) =>
                setUser({
                  ...user,
                  fullName: {
                    ...fullName,
                    suffix: e.target.value.toUpperCase(),
                  },
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
                onChange={() => setUser({ ...user, isMale: true })}
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
                onChange={() => setUser({ ...user, isMale: false })}
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
              onChange={(e) => setUser({ ...user, pob: e.target.value })}
            />
          </MDBCol>
        </MDBRow>

        <AddressSelect
          label="Permanent Address"
          address={address.permanent}
          handleChange={(_, permanent) =>
            setUser({
              ...user,
              address: {
                ...address,
                permanent,
              },
            })
          }
          uniqueId="current"
        />

        <MDBRow>
          <MDBCol md="8">
            <MDBInput
              type="text"
              label="Street/Purok"
              value={address.permanent?.street}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: {
                    ...address,
                    permanent: {
                      ...address.permanent,
                      street: e.target.value,
                    },
                  },
                })
              }
            />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput
              type="text"
              label="Zip Code"
              value={address.permanent?.zip}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: {
                    ...address,
                    permanent: {
                      ...address.permanent,
                      zip: e.target.value.replace(/\D/g, ""),
                    },
                  },
                })
              }
            />
          </MDBCol>
        </MDBRow>
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
                  setUser({
                    ...user,
                    address: {
                      ...address,
                      isSame: true,
                    },
                  })
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
                  setUser({
                    ...user,
                    address: {
                      ...address,
                      isSame: false,
                    },
                  })
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
          <>
            <div className="mt-3">
              <AddressSelect
                label="Current Address"
                address={address.current}
                handleChange={(_, current) =>
                  setUser({
                    ...user,
                    address: {
                      ...address,
                      current,
                    },
                  })
                }
                uniqueId="current"
              />
            </div>
            <MDBRow>
              <MDBCol md="8">
                <MDBInput
                  type="text"
                  label="Street/Purok"
                  value={address.current?.street}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      address: {
                        ...address,
                        current: {
                          ...address.current,
                          street: e.target.value,
                        },
                      },
                    })
                  }
                />
              </MDBCol>
              <MDBCol md="4">
                <MDBInput
                  type="text"
                  label="Zip Code"
                  value={address.current?.zip}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      address: {
                        ...address,
                        current: {
                          ...address.current,
                          zip: e.target.value.replace(/\D/g, ""),
                        },
                      },
                    })
                  }
                />
              </MDBCol>
            </MDBRow>
          </>
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
                  setEmployment({
                    ...employment,
                    emergencyContact: {
                      ...emergencyContact,
                      primary: {
                        ...primary,
                        name: e.target.value,
                      },
                    },
                  })
                }
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                label="Relationship"
                value={primary.relationship}
                onChange={(e) =>
                  setEmployment({
                    ...employment,
                    emergencyContact: {
                      ...emergencyContact,
                      primary: {
                        ...primary,
                        relationship: e.target.value,
                      },
                    },
                  })
                }
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                label="Mobile No. (+63)"
                value={primary.mobile}
                maxLength={10}
                onChange={(e) =>
                  setEmployment({
                    ...employment,
                    emergencyContact: {
                      ...emergencyContact,
                      primary: {
                        ...primary,
                        mobile: e.target.value.replace(/\D/g, ""),
                      },
                    },
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
                  setEmployment({
                    ...employment,
                    emergencyContact: {
                      ...emergencyContact,
                      secondary: {
                        ...secondary,
                        name: e.target.value,
                      },
                    },
                  })
                }
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                label="Relationship"
                value={secondary.relationship}
                onChange={(e) =>
                  setEmployment({
                    ...employment,
                    emergencyContact: {
                      ...emergencyContact,
                      secondary: {
                        ...secondary,
                        relationship: e.target.value,
                      },
                    },
                  })
                }
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                label="Mobile No. (+63)"
                value={secondary.mobile}
                maxLength={10}
                onChange={(e) =>
                  setEmployment({
                    ...employment,
                    emergencyContact: {
                      ...emergencyContact,
                      secondary: {
                        ...secondary,
                        mobile: e.target.value.replace(/\D/g, ""),
                      },
                    },
                  })
                }
              />
            </MDBCol>
          </MDBRow>
        </div>
        <hr color="primray" />

        <p>Upload PDFS (Required*)</p>
        <UploadPDF />

        <MDBBtn style={{ float: "right" }} color="primary" type="submit">
          Submit
        </MDBBtn>
      </form>
    </MDBCardBody>
  );
}
