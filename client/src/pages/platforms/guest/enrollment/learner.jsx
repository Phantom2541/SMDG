import React, { useState, useEffect } from "react";
import { MDBBtn, MDBCol, MDBInput, MDBRow } from "mdbreact";
import RequirementUpload from "./requirementUpload";
import CustomSelect from "../../../../components/customSelect";
import { Courses, Departments } from "../../../../services/fakeDb";
import { formatGradeLvl } from "../../../../services/utilities";
import { useSelector } from "react-redux";

export default function Learner({ setActiveStep, handleForm, setDepartment }) {
  const [showGrade, setShowGrade] = useState(true),
    { collections: requirements } = useSelector(
      ({ requirements }) => requirements
    ),
    { collections: courses } = useSelector(({ courses }) => courses);

  const { form, setForm } = handleForm;

  // used for rerendering MDBSelect
  useEffect(() => {
    if (!showGrade) {
      setTimeout(() => setShowGrade(true), 1);
    }
  }, [showGrade]);

  const handleChange = (key, value) => setForm({ ...form, [key]: value });

  const { department, gradeLvl, lrn, type, course } = form;

  return (
    <>
      <div className="row">
        <div className="col-6">
          <MDBInput
            value={lrn}
            onChange={(e) => handleChange("lrn", e.target.value.toUpperCase())}
            label="Learner Reference No. (LRN)"
          />
        </div>
        <div className="col-6">
          <CustomSelect
            label="Learner Type"
            disabledAllExceptSelected
            preValue={type}
            choices={[
              {
                str: "New",
                value: "new",
              },
              {
                str: "Old",
                value: "old",
              },
              {
                str: "Returning Leaner (Balik-Aral)",
                value: "returning",
              },
              {
                str: "Transferee",
                value: "transferee",
              },
              {
                str: "Repeater",
                value: "repeater",
              },
              {
                str: "Shifter",
                value: "shifter",
              },
            ]}
            texts="str"
            values="value"
            onChange={(type) => handleChange("type", type)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <CustomSelect
            disabledAllExceptSelected
            choices={Departments.collections}
            label="Department"
            preValue={department}
            values="key"
            texts="name"
            onChange={(department) => {
              setDepartment(department);
              setForm({
                ...form,
                department,
              });
              setShowGrade(false);
            }}
          />
        </div>
        <div className="col-4">
          <CustomSelect
            choices={courses.map((course) => {
              const { name, abbreviation } = Courses.find(course.pk);

              return {
                str: `(${abbreviation}) ${name}`,
                ...course,
              };
            })}
            label={department === "college" ? "Courses" : "Strands"}
            preValue={course}
            values="_id"
            texts="str"
            onChange={(e) => handleChange("course", e)}
          />
        </div>
        <div className="col-4">
          {showGrade && (
            <CustomSelect
              choices={Departments.getGradeLevels(department).map((id) => ({
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
      <hr className="bg-dark" />
      <label>Upload Requirements</label>
      <MDBRow>
        {requirements?.map(({ _id, title }) => (
          <MDBCol md="3" className="my-2" key={_id}>
            <RequirementUpload label={title} id={_id} />
          </MDBCol>
        ))}
        <MDBCol md="3" className="my-2">
          <RequirementUpload label="1x1 Photo" id="1*1-Photo" />
        </MDBCol>
        <MDBCol md="3" className="my-2">
          <RequirementUpload label="Signature" id="signature" />
        </MDBCol>
      </MDBRow>
      <MDBBtn
        style={{ float: "right" }}
        color="info"
        onClick={() => setActiveStep(1)}
      >
        Next
      </MDBBtn>
    </>
  );
}
