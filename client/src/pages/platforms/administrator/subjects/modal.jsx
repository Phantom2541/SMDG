import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBIcon,
  MDBModalHeader,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdbreact";
import Swal from "sweetalert2";

export const SubjectForm = ({
  handleFinalSubmit,
  form,
  setForm,
  submitSize = "",
  handleCancel = null,
}) => {
  const { title, units, description, isMajor, lec, lab, code } = form;

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const _form = { ...form };

    const { isMajor, units } = _form;

    if (!isMajor) {
      _form.lec = 0;
      _form.lab = 0;
    }

    if (units > 5)
      return Swal.fire({
        icon: "error",
        title: "Invalid Units",
        text: "Units must be either 4 or 5.",
        showConfirmButton: false,
      });

    handleFinalSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-8">
          <MDBInput
            type="text"
            label="Title"
            required
            value={title}
            onChange={(e) =>
              handleChange("title", e.target.value.toUpperCase())
            }
          />
        </div>
        <div className="col-4">
          <MDBInput
            label="Code"
            type="number"
            value={String(code)}
            onChange={(e) => handleChange("code", Number(e.target.value))}
          />
        </div>
      </div>
      <MDBInput
        required
        type="textarea"
        label="Write a description..."
        className="pb-0"
        value={description}
        onChange={(e) => handleChange("description", e.target.value)}
      />

      <div className="d-flex mt-1">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={!isMajor}
            id="Minor"
            onChange={() => handleChange("isMajor", false)}
          />
          <label className="form-check-label" htmlFor="Minor">
            MINOR
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={isMajor}
            id="Major"
            onChange={() => handleChange("isMajor", true)}
          />
          <label className="form-check-label" htmlFor="Major">
            MAJOR
          </label>
        </div>
      </div>

      <MDBRow>
        <MDBCol size={isMajor ? "4" : "12"}>
          <MDBInput
            label="Units"
            type="number"
            max={3}
            min={1}
            readOnly={isMajor}
            value={String(units)}
            onChange={(e) => handleChange("units", Number(e.target.value))}
            required
          />
        </MDBCol>
        {isMajor && (
          <>
            <MDBCol size="4">
              <MDBInput
                label="Lecture"
                type="number"
                min={2}
                max={3}
                value={String(lec)}
                required
                onChange={(e) => {
                  const _lec = Number(e.target.value);
                  setForm({ ...form, lec: _lec, units: lab + _lec });
                }}
              />
            </MDBCol>
            <MDBCol size="4">
              <MDBInput
                min={2}
                max={3}
                required
                label="Laboratory"
                type="number"
                value={String(lab)}
                onChange={(e) => {
                  const _lab = Number(e.target.value);
                  setForm({ ...form, lab: _lab, units: lec + _lab });
                }}
              />
            </MDBCol>
          </>
        )}
      </MDBRow>

      <div className="mb-2 d-flex justify-content-between">
        <MDBBtn
          onClick={handleCancel}
          size="sm"
          type="button"
          color="none"
          className={`z-depth-0 ${!handleCancel && "invisible"}`}
        >
          cancel
        </MDBBtn>

        <MDBBtn size={submitSize} type="submit" color="primary">
          Submit
        </MDBBtn>
      </div>
    </form>
  );
};

const _form = {
  title: "",
  units: 1,
  description: "",
  isMajor: false,
  lab: 1,
  lec: 1,
  code: null,
};

export default function Modal({ show, toggle }) {
  const [form, setForm] = useState(_form);

  const handleSubmit = () => {
    console.log("final submit", form);

    setForm(_form);
    toggle();
  };

  return (
    <MDBModal isOpen={show} toggle={() => {}} backdrop>
      <MDBModalHeader
        toggle={toggle}
        className="light-blue darken-3 white-text d-flex"
      >
        <MDBIcon icon="book" className="mr-2" />
        Create a Subject
      </MDBModalHeader>
      <MDBModalBody className="mb-0">
        <SubjectForm
          handleFinalSubmit={handleSubmit}
          form={form}
          setForm={setForm}
        />
      </MDBModalBody>
    </MDBModal>
  );
}
