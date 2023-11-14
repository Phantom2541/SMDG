import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBIcon,
  MDBModalHeader,
  MDBInput,
  MDBModalFooter,
} from "mdbreact";
import { isEqual } from "lodash";
import {
  SAVE,
  TOGGLEMODAL,
  UPDATE,
} from "../../../../services/redux/slices/violations";
import { useToasts } from "react-toast-notifications";

// declare your expected items
const _form = {
  title: "",
};

export default function Modal({ selected, willCreate }) {
  const { token, auth } = useSelector(({ auth }) => auth),
    { showModal } = useSelector(({ violations }) => violations),
    [form, setForm] = useState(_form),
    { addToast } = useToasts(),
    dispatch = useDispatch();

  useEffect(() => {
    if (showModal && selected._id && !willCreate) setForm(selected);

    return () => setForm(_form);
  }, [selected, willCreate, showModal]);

  const handleCreate = (form) =>
    dispatch(
      SAVE({
        data: { ...form, createdBy: auth._id },
        token,
      })
    );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (willCreate) return handleCreate(form);

    if (isEqual(form, selected)) {
      dispatch(TOGGLEMODAL());

      return addToast("No changes found, skipping update.", {
        appearance: "info",
      });
    }

    dispatch(
      UPDATE({
        data: form,
        token,
      })
    );

    setForm(_form);
  };

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { title } = form;

  return (
    <MDBModal
      isOpen={showModal}
      toggle={() => {}}
      backdrop
      disableFocusTrap={false}
    >
      <MDBModalHeader
        toggle={() => dispatch(TOGGLEMODAL())}
        className="light-blue darken-3 white-text"
      >
        <MDBIcon icon="skull-crossbones" className="mr-2" />
        {willCreate ? "Add a Criteria" : `Update ${selected?.title}`}
      </MDBModalHeader>
      <form onSubmit={handleSubmit}>
        <MDBModalBody className="mb-0">
          <MDBInput
            type="text"
            label="Title"
            value={title}
            onChange={(e) =>
              handleChange("title", e.target.value.toUpperCase())
            }
            required
            outline
          />
        </MDBModalBody>
        <MDBModalFooter className="py-0">
          <MDBBtn type="submit" color="primary">
            {willCreate ? "submit" : "update"}
          </MDBBtn>
        </MDBModalFooter>
      </form>
    </MDBModal>
  );
}
