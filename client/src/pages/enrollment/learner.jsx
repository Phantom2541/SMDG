import React, { useEffect, useState } from "react";
import { MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import CustomSelect from "../../components/customSelect";
import { Departments } from "../../services/fakeDb";
import { formatGradeLvl } from "../../services/utilities";

const { collections, getGradeLevels } = Departments;

export default function Learner({ setActiveStep, handleForm }) {
  const [showGrade, setShowGrade] = useState(true);

  const { form, setForm } = handleForm;

  // used for rerendering MDBSelect
  useEffect(() => {
    if (!showGrade) {
      setTimeout(() => setShowGrade(true), 1);
    }
  }, [showGrade]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    setActiveStep(1);
  };

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { department, gradeLvl } = form;

  return (
    <form onSubmit={handleSubmit}>
      <CustomSelect
        choices={collections}
        label="Department"
        preValue={department}
        values="key"
        texts="name"
        onChange={(e) => {
          setForm({ ...form, department: e, gradeLvl: getGradeLevels(e)[0] });
          setShowGrade(false);
        }}
      />
      {showGrade && (
        <CustomSelect
          choices={getGradeLevels(department).map((id) => ({
            id,
            str: formatGradeLvl(department, id),
          }))}
          label="Grade Level"
          preValue={gradeLvl}
          values="id"
          texts="str"
          onChange={(e) => handleChange("gradeLvl", e)}
        />
      )}
      lrn, ready an image preview with upload button
      <MDBBtn style={{ float: "right" }} color="primary" type="submit">
        Submit
      </MDBBtn>
    </form>
  );
}
