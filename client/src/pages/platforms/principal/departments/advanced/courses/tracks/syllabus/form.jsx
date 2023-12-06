import React, { useEffect, useState } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBInput } from "mdbreact";
import { useSelector, useDispatch } from "react-redux";
import {
  SAVE,
  UPDATE,
  RERENDER,
} from "../../../../../../../../services/redux/slices/resources/subjects";
import { isEqual } from "lodash";
import Swal from "sweetalert2";
import { useToasts } from "react-toast-notifications";

const _form = {
  title: "",
  hours: 1,
};

export default function Form({
  selectedSubject,
  selectedBoard,
  setSelectedSubject,
  setSelectedBoard,
  course,
  gradeLvl,
}) {
  const [form, setForm] = useState(_form),
    { token } = useSelector(({ auth }) => auth),
    dispatch = useDispatch(),
    { addToast } = useToasts();

  useEffect(() => {
    if (selectedSubject?._id) {
      setForm(selectedSubject);
    }
  }, [selectedSubject]);

  const deconstructBoardId = (text = true) => {
    if (!selectedBoard) return;

    const [curriculum, position] = selectedBoard.split("/"),
      [x, y] = position.split("-").map(Number);

    if (text) {
      const sup = ["st", "nd", "rd"];
      return (
        <h5>
          {curriculum.toUpperCase()} SUBJECT - {x}
          <sup>{sup[x - 1]}</sup> semester
        </h5>
      );
    }

    return {
      curriculum,
      semester: x,
      position: y,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedBoard) return Swal.fire("Please select a board position.");

    const data = {
      ...form,
      ...deconstructBoardId(false),
      course: course._id,
      gradeLvl,
    };

    if (form?._id) {
      if (isEqual(data, selectedSubject)) {
        addToast("No changes found, skipping update.", {
          appearance: "info",
        });
      } else {
        dispatch(
          UPDATE({
            token,
            data,
          })
        );
      }
    } else {
      dispatch(
        SAVE({
          token,
          data,
        })
      );
    }

    setSelectedSubject({});
    setForm(_form);
    setSelectedBoard("");
  };

  const handleSubmitBtn = () => {
    let text = "submit",
      color = "primary";

    if (form?._id) {
      const { semester, position, curriculum } = form;
      const boardId = `${curriculum}/${semester}-${position}`;

      text = "update";
      color = "info";

      if (boardId !== selectedBoard) {
        text = "transfer";
        color = "warning";
      }
    }

    return (
      <div>
        {text === "transfer" && (
          <MDBBtn
            onClick={() => {
              setSelectedSubject({});
              setForm(_form);
              setSelectedBoard("");
              dispatch(RERENDER());
            }}
            type="button"
            color="transparent"
            size="sm"
            className="float-left"
          >
            cancel
          </MDBBtn>
        )}
        <MDBBtn type="submit" color={color} size="sm" className="float-right">
          {text}
        </MDBBtn>
      </div>
    );
  };

  const { title, hours } = form;

  return (
    <MDBCol md="3">
      <MDBCard>
        <MDBCardBody>
          {deconstructBoardId()}
          <form onSubmit={handleSubmit}>
            <MDBInput
              label="Title"
              type="text"
              required
              value={title}
              onChange={(e) =>
                setForm({ ...form, title: e.target.value.toUpperCase() })
              }
            />
            <MDBInput
              label="Hours"
              type="number"
              required
              value={String(hours)}
              onChange={(e) =>
                setForm({ ...form, hours: Number(e.target.value) })
              }
            />
            {handleSubmitBtn()}
          </form>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
