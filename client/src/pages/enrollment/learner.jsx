import React, { useEffect, useState } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import CustomSelect from "../../components/customSelect";
import { Departments } from "../../services/fakeDb";
import { formatGradeLvl } from "../../services/utilities";
import RequirementUpload from "./requirementUpload";

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
      <div className="row">
        <div className="col-6">
          <CustomSelect
            choices={collections}
            label="Department"
            preValue={department}
            values="key"
            texts="name"
            onChange={(e) => {
              setForm({
                ...form,
                department: e,
                gradeLvl: getGradeLevels(e)[0],
              });
              setShowGrade(false);
            }}
          />
        </div>
        <div className="col-6">
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
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <RequirementUpload />
        </div>
        <div className="col-6">
          <MDBInput label="Learner Reference No. (LRN)" />
        </div>
      </div>
      lrn, ready an image preview with upload button
      <MDBBtn style={{ float: "right" }} color="primary" type="submit">
        Submit
      </MDBBtn>
    </form>
  );
}
